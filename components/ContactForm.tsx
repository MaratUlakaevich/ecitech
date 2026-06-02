"use client";

import React, {
  FC,
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  FormEvent,
  ChangeEvent,
} from "react";
import Script from "next/script";
import { toast } from "sonner";

import {
  contactSchema,
  contactSchemaDev,
  INDUSTRY_OPTIONS,
  type Industry,
} from "@/lib/forms/contactSchema";
import { pushEvent } from "@/lib/analytics/gtm";

const FORM_ID = "contact";

type FieldErrors = Partial<
  Record<
    | "fullName"
    | "email"
    | "company"
    | "phone"
    | "message"
    | "industry"
    | "turnstileToken",
    string
  >
>;

declare global {
  interface Window {
    onTurnstileSuccess?: (token: string) => void;
  }
}

const ContactForm: FC = () => {
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [industry, setIndustry] = useState<Industry | "">("");
  const [nda, setNda] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const [showDetails, setShowDetails] = useState(false);
  const [showNdaSection, setShowNdaSection] = useState(false);

  const [turnstileToken, setTurnstileToken] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});

  const errorIds = useId();

  // Turnstile env presence is decided on the client. Server uses same
  // switch via TURNSTILE_SECRET_KEY presence.
  const turnstileSiteKey =
    process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || undefined;
  const turnstileEnabled = Boolean(turnstileSiteKey);

  const schema = useMemo(
    () => (turnstileEnabled ? contactSchema : contactSchemaDev),
    [turnstileEnabled],
  );

  // Expose callback for Turnstile widget (data-callback="onTurnstileSuccess").
  useEffect(() => {
    if (typeof window === "undefined") return;
    window.onTurnstileSuccess = (token: string) => setTurnstileToken(token);
    return () => {
      if (typeof window !== "undefined") {
        delete window.onTurnstileSuccess;
      }
    };
  }, []);

  const handleMessageChange = useCallback(
    (e: ChangeEvent<HTMLTextAreaElement>) => {
      setMessage(e.target.value);
      const textarea = e.target;
      textarea.style.height = "auto";
      const computedStyle = window.getComputedStyle(textarea);
      const lineHeight = parseInt(computedStyle.lineHeight, 10) || 20;
      const maxHeight = lineHeight * 11;
      textarea.style.height =
        Math.min(textarea.scrollHeight, maxHeight) + "px";
    },
    [],
  );

  const resetForm = () => {
    setFullName("");
    setEmail("");
    setCompany("");
    setPhone("");
    setMessage("");
    setIndustry("");
    setNda(false);
    setFileName(null);
    setErrors({});
    if (fileInputRef.current) fileInputRef.current.value = "";
    if (messageRef.current) messageRef.current.style.height = "auto";
    // Token is single-use server-side — clear so the widget re-challenges.
    setTurnstileToken("");
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitting) return;

    const candidate = {
      fullName,
      email,
      company: company || "",
      phone: phone || "",
      message,
      industry: (industry || undefined) as Industry | undefined,
      nda,
      turnstileToken: turnstileToken || "",
    };

    const result = schema.safeParse(candidate);
    if (!result.success) {
      const next: FieldErrors = {};
      for (const issue of result.error.issues) {
        const key = issue.path[0] as keyof FieldErrors | undefined;
        if (key && !next[key]) next[key] = issue.message;
      }
      setErrors(next);
      pushEvent({
        event: "form_error",
        form_id: FORM_ID,
        error_code: "client-validation",
      });
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setErrors({});
    setSubmitting(true);
    pushEvent({ event: "form_submit", form_id: FORM_ID });

    const formData = new FormData();
    formData.append("fullName", result.data.fullName);
    formData.append("email", result.data.email);
    if (result.data.company) formData.append("company", result.data.company);
    if (result.data.phone) formData.append("phone", result.data.phone);
    formData.append("message", result.data.message);
    if (result.data.industry) formData.append("industry", result.data.industry);
    formData.append("nda", result.data.nda ? "true" : "false");
    if (turnstileToken) formData.append("turnstileToken", turnstileToken);

    const file = fileInputRef.current?.files?.[0];
    if (file) formData.append("projectFile", file);

    try {
      const res = await fetch("/api/sendEmails", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        toast.success("Message sent successfully!");
        pushEvent({ event: "form_success", form_id: FORM_ID });
        resetForm();
        // Reset Turnstile widget so the next submission gets a fresh token.
        if (typeof window !== "undefined") {
          const ts = (window as unknown as {
            turnstile?: { reset: () => void };
          }).turnstile;
          ts?.reset();
        }
      } else {
        let errorCode = `http-${res.status}`;
        try {
          const body = await res.json();
          if (body?.error && typeof body.error === "string") {
            errorCode = body.error;
          }
        } catch {
          // non-JSON body; fall through
        }
        toast.error(`Could not send: ${errorCode}`);
        pushEvent({
          event: "form_error",
          form_id: FORM_ID,
          error_code: errorCode,
        });
      }
    } catch (err) {
      const msg = err instanceof Error ? err.message : "network-error";
      toast.error("Could not send: " + msg);
      pushEvent({
        event: "form_error",
        form_id: FORM_ID,
        error_code: "network",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const errId = (key: keyof FieldErrors) => `${errorIds}-${key}`;

  return (
    <>
      {turnstileEnabled && (
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          async
          defer
          strategy="afterInteractive"
        />
      )}
      <form
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        noValidate
        className="max-w-[1000px] mx-auto px-6 py-8 md:p-8 bg-gray-800 rounded-3xl shadow-lg"
      >
        <div className="max-w-[40rem] mb-10">
          <h2 className="text-3xl md:text-6xl font-bold">
            Start growing your business with us
          </h2>
        </div>

        <div className="flex flex-col md:flex-row md:space-x-4">
          <div className="relative z-0 w-full md:w-1/2 mb-6 group">
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder=" "
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={errors.fullName ? errId("fullName") : undefined}
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-400 appearance-none
                        focus:outline-none focus:ring-0 focus:border-blue-500 peer"
              required
            />
            <label
              htmlFor="fullName"
              className="absolute text-sm text-gray-400 duration-300 transform origin-[0]
                        top-2 left-0
                        peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                        peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500 peer-valid:-translate-y-6 peer-valid:scale-75"
            >
              Full name
            </label>
            {errors.fullName && (
              <p
                id={errId("fullName")}
                className="mt-1 text-xs text-red-400"
                role="alert"
              >
                {errors.fullName}
              </p>
            )}
          </div>

          <div className="relative z-0 w-full md:w-1/2 mb-6 group">
            <input
              type="email"
              name="email"
              id="email"
              placeholder=" "
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? errId("email") : undefined}
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-400 appearance-none
                        focus:outline-none focus:ring-0 focus:border-blue-500 peer"
              required
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-gray-400 duration-300 transform origin-[0]
                        top-2 left-0
                        peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                        peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500 peer-valid:-translate-y-6 peer-valid:scale-75"
            >
              Email
            </label>
            {errors.email && (
              <p
                id={errId("email")}
                className="mt-1 text-xs text-red-400"
                role="alert"
              >
                {errors.email}
              </p>
            )}
          </div>
        </div>

        <div className="relative z-0 w-full mb-4 group mt-4">
          <textarea
            name="message"
            id="message"
            rows={1}
            ref={messageRef}
            value={message}
            onChange={handleMessageChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? errId("message") : undefined}
            className="block py-2.5 pr-12 pl-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-400 resize-none appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
            placeholder=" "
            required
          />
          <label
            htmlFor="message"
            className="absolute text-sm text-gray-400 duration-300 transform origin-[0]
                       top-2 left-0
                       peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                       peer-focus:-translate-y-6 peer-focus:text-blue-500 peer-focus:scale-75 peer-valid:-translate-y-6 peer-valid:scale-75"
          >
            About the project
          </label>
          {errors.message && (
            <p
              id={errId("message")}
              className="mt-1 text-xs text-red-400"
              role="alert"
            >
              {errors.message}
            </p>
          )}
        </div>

        {/* Progressive disclosure: optional details */}
        <div className="mt-4">
          <button
            type="button"
            onClick={() => setShowDetails((s) => !s)}
            className="text-sm text-gray-400 hover:text-white underline decoration-dotted transition-colors"
            aria-expanded={showDetails}
            aria-controls="contact-details-panel"
          >
            {showDetails ? "Hide details" : "Add details (company, phone, industry)"}
          </button>

          {showDetails && (
            <div
              id="contact-details-panel"
              className="mt-4 grid grid-cols-1 md:grid-cols-2 md:gap-x-4"
            >
              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder=" "
                  aria-invalid={Boolean(errors.company)}
                  aria-describedby={
                    errors.company ? errId("company") : undefined
                  }
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-400 appearance-none
                            focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                />
                <label
                  htmlFor="company"
                  className="absolute text-sm text-gray-400 duration-300 transform origin-[0]
                            top-2 left-0
                            peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                            peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75"
                >
                  Company
                </label>
                {errors.company && (
                  <p
                    id={errId("company")}
                    className="mt-1 text-xs text-red-400"
                    role="alert"
                  >
                    {errors.company}
                  </p>
                )}
              </div>

              <div className="relative z-0 w-full mb-6 group">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder=" "
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? errId("phone") : undefined}
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-400 appearance-none
                            focus:outline-none focus:ring-0 focus:border-blue-500 peer"
                />
                <label
                  htmlFor="phone"
                  className="absolute text-sm text-gray-400 duration-300 transform origin-[0]
                            top-2 left-0
                            peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                            peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500 peer-[:not(:placeholder-shown)]:-translate-y-6 peer-[:not(:placeholder-shown)]:scale-75"
                >
                  Phone
                </label>
                {errors.phone && (
                  <p
                    id={errId("phone")}
                    className="mt-1 text-xs text-red-400"
                    role="alert"
                  >
                    {errors.phone}
                  </p>
                )}
              </div>

              <div className="relative z-0 w-full mb-6 group md:col-span-2">
                <label
                  htmlFor="industry"
                  className="block text-xs text-gray-400 mb-1"
                >
                  Industry
                </label>
                <select
                  name="industry"
                  id="industry"
                  value={industry}
                  onChange={(e) =>
                    setIndustry(e.target.value as Industry | "")
                  }
                  aria-invalid={Boolean(errors.industry)}
                  aria-describedby={
                    errors.industry ? errId("industry") : undefined
                  }
                  className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-400 focus:outline-none focus:ring-0 focus:border-blue-500"
                >
                  <option value="" className="bg-gray-800">
                    Select industry (optional)
                  </option>
                  {INDUSTRY_OPTIONS.map((option) => (
                    <option
                      key={option}
                      value={option}
                      className="bg-gray-800"
                    >
                      {option.charAt(0).toUpperCase() + option.slice(1)}
                    </option>
                  ))}
                </select>
                {errors.industry && (
                  <p
                    id={errId("industry")}
                    className="mt-1 text-xs text-red-400"
                    role="alert"
                  >
                    {errors.industry}
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Progressive disclosure: NDA + attachment */}
        <div className="mt-2">
          <button
            type="button"
            onClick={() => setShowNdaSection((s) => !s)}
            className="text-sm text-gray-400 hover:text-white underline decoration-dotted transition-colors"
            aria-expanded={showNdaSection}
            aria-controls="contact-nda-panel"
          >
            {showNdaSection ? "Hide NDA / attachment" : "Send NDA / attach brief"}
          </button>

          {showNdaSection && (
            <div
              id="contact-nda-panel"
              className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:gap-8"
            >
              <input
                type="file"
                name="projectFile"
                id="projectFile"
                ref={fileInputRef}
                className="hidden"
                onChange={(e) =>
                  setFileName(e.target.files?.[0]?.name ?? null)
                }
              />
              <label
                htmlFor="projectFile"
                className="inline-flex items-center gap-2 cursor-pointer text-sm text-gray-300 hover:text-white transition-colors"
              >
                <svg
                  className="w-5 h-5 fill-current"
                  viewBox="0 0 28.3 28.3"
                  id="attach"
                  aria-hidden="true"
                >
                  <path d="M13.5381849,8.3455903 L8.07733533,13.7020126 C7.8263481,13.9397466 7.72568926,14.2917947 7.81404712,14.622847 C7.90240498,14.9538993 8.166029,15.2124364 8.50359507,15.2990893 C8.84116115,15.3857421 9.20013615,15.2870256 9.44254773,15.0408815 L14.9043628,9.68540604 C16.0356084,8.57598928 16.0356084,6.77726932 14.9043628,5.66785256 C13.7731172,4.5584358 11.9390057,4.5584358 10.8077601,5.66785256 L5.34594504,11.0242749 C4.10069262,12.2151002 3.60488822,13.9707932 4.0480634,15.6202036 C4.49123859,17.269614 5.80487132,18.5577163 7.4867981,18.9921066 C9.16872488,19.4264969 10.9588927,18.9400113 12.1729725,17.7186193 L17.6347876,12.3631438 L19,13.7020126 L13.5381849,19.058435 C11.830738,20.7329345 9.34207998,21.3869011 7.00966413,20.7739917 C4.67724829,20.1610824 2.85542414,18.3744126 2.23045521,16.0870038 C1.60548628,13.7995949 2.27232023,11.3589587 3.97976715,9.68445917 L9.44254773,4.32898369 C11.3367504,2.53480372 14.3476804,2.56046302 16.2098041,4.38665458 C18.0719277,6.21284615 18.0980919,9.16567642 16.2686097,11.023328 L10.8077601,16.3816441 C10.0758001,17.099311 9.00903705,17.3795015 8.00931036,17.1166708 C7.00958368,16.85384 6.2287756,16.0879182 5.96100899,15.1074206 C5.69324238,14.126923 5.97919736,13.0808106 6.71115744,12.3631438 L12.1729725,7.00672143 L13.5381849,8.3455903 Z" />
                </svg>
                <span>{fileName ? fileName : "Attach a brief"}</span>
              </label>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="nda"
                  name="nda"
                  checked={nda}
                  onChange={(e) => setNda(e.target.checked)}
                  className="peer hidden"
                />
                <label
                  htmlFor="nda"
                  className="relative cursor-pointer pl-8 text-gray-400 before:content-[''] before:absolute before:left-0 before:top-0
                    before:h-5 before:w-5 before:rounded before:bg-gray-400 peer-checked:before:bg-gray-400 before:bg-no-repeat before:bg-center
                    peer-checked:before:bg-[url('/img/checkmark-white.svg')]"
                >
                  Send me NDA
                </label>
              </div>
            </div>
          )}
        </div>

        {/* Turnstile widget */}
        <div className="mt-8">
          {turnstileEnabled ? (
            <div
              className="cf-turnstile"
              data-sitekey={turnstileSiteKey}
              data-callback="onTurnstileSuccess"
              data-theme="dark"
            />
          ) : (
            <p className="text-xs text-yellow-400/80">
              Dev mode: Turnstile site key not configured — bot protection is
              skipped. Set NEXT_PUBLIC_TURNSTILE_SITE_KEY to enable.
            </p>
          )}
          {errors.turnstileToken && (
            <p
              className="mt-1 text-xs text-red-400"
              role="alert"
            >
              {errors.turnstileToken}
            </p>
          )}
        </div>

        <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-10 w-full">
          <p className="text-gray-400 text-sm md:mb-0 mb-4">
            By sending this form I confirm that I have read and accept the{" "}
            <a
              href="/privacy-policy"
              className="underline decoration-2 hover:text-white cursor-pointer duration-300"
            >
              Privacy Policy
            </a>
          </p>
          <button
            type="submit"
            disabled={submitting}
            className="min-w-52 md:min-w-72 md:text-lg bg-blue-700 md:ml-20 hover:bg-blue-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-medium py-3 px-10 rounded-full transition-colors"
          >
            {submitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
