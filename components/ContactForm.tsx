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

import {
  contactSchema,
  contactSchemaDev,
  INDUSTRY_OPTIONS,
  type Industry,
} from "@/lib/forms/contactSchema";
import { pushEvent } from "@/lib/analytics/gtm";
import { CONTACT_EMAIL } from "@/lib/site";
import type { Locale } from "@/lib/i18n";
import { typo } from "@/lib/typo";

const STR = {
  en: {
    fullName: "Full name",
    email: "Work email",
    message: "About the project",
    messagePh: "What is slow, manual, or missing today?",
    showDetails: "Add company, phone, industry (optional)",
    hideDetails: "Hide company details",
    company: "Company",
    phone: "Phone or WhatsApp",
    industry: "Industry",
    selectIndustry: "Select industry",
    industries: {} as Record<string, string>,
    showNda: "Request an NDA or attach a brief",
    hideNda: "Hide NDA and attachment",
    attach: "Attach a brief",
    nda: "Send me your NDA first",
    acceptA: "I agree to ECITech processing the details in this form to reply to my request, as described in the",
    consentErr: "Tick the box to agree, or write to us by email instead.",
    privacy: "Privacy Policy",
    sending: "Sending\u2026",
    send: "Send message",
    sent: "Message sent. We reply within 15 minutes.",
    oneInvalid: "One field needs attention.",
    manyInvalid: (n: number) => `${n} fields need attention.`,
    failed: `Your message didn't go through. Try again, or write to ${CONTACT_EMAIL} directly.`,
    // English messages come from the Zod schema itself.
    fieldErrors: {} as Partial<Record<string, string>>,
  },
  ru: {
    fullName: "Имя и фамилия",
    email: "Рабочая почта",
    message: "О проекте",
    messagePh: "Что сейчас работает медленно, вручную или не работает вовсе?",
    showDetails: "Добавить компанию, телефон, отрасль (необязательно)",
    hideDetails: "Скрыть данные компании",
    company: "Компания",
    phone: "Телефон, WhatsApp или Telegram",
    industry: "Отрасль",
    selectIndustry: "Выберите отрасль",
    industries: {
      fintech: "Финтех",
      medtech: "Медицина",
      edtech: "Образование",
      hospitality: "Гостеприимство",
      enterprise: "Корпоративный сектор",
      other: "Другое",
    } as Record<string, string>,
    showNda: "Запросить NDA или приложить бриф",
    hideNda: "Скрыть NDA и вложение",
    attach: "Приложить бриф",
    nda: "Сначала пришлите ваш NDA",
    acceptA: "Я согласен на обработку данных из этой формы для ответа на мой запрос в соответствии с",
    consentErr: "Отметьте согласие или напишите нам на почту.",
    privacy: "Политику конфиденциальности",
    sending: "Отправляем\u2026",
    send: "Отправить",
    sent: "Сообщение отправлено. Ответим в течение 15 минут.",
    oneInvalid: "Одно поле нужно исправить.",
    manyInvalid: (n: number) => `Нужно исправить полей: ${n}.`,
    failed: `Сообщение не отправилось. Попробуйте ещё раз или напишите напрямую на ${CONTACT_EMAIL}.`,
    fieldErrors: {
      fullName: "Укажите имя (от 2 до 120 символов).",
      email: "Укажите почту в формате name@company.com.",
      company: "Название компании — не длиннее 120 символов.",
      phone: "Телефон — не длиннее 40 символов.",
      message: "Добавьте пару предложений о проекте (от 10 до 5000 символов).",
      industry: "Выберите отрасль из списка.",
      turnstileToken: "Пройдите проверку безопасности над кнопкой.",
    } as Partial<Record<string, string>>,
  },
};

const FORM_ID = "contact";

STR.ru = typo(STR.ru);

type FieldKey =
  | "fullName"
  | "email"
  | "company"
  | "phone"
  | "message"
  | "industry"
  | "turnstileToken";

type FieldErrors = Partial<Record<FieldKey, string>>;

// Order used to pick which invalid field receives focus.
const FIELD_ORDER: FieldKey[] = [
  "fullName",
  "email",
  "message",
  "company",
  "phone",
  "industry",
  "turnstileToken",
];

type Status =
  | { kind: "idle" }
  | { kind: "invalid"; count: number }
  | { kind: "sent" }
  | { kind: "error"; message: string };

declare global {
  interface Window {
    onTurnstileSuccess?: (token: string) => void;
  }
}

const labelClass = "block text-[14px] font-medium text-ink-700 mb-2";
const inputClass =
  "block w-full bg-transparent px-0 py-2.5 text-[16px] text-ink-900 border-0 border-b border-[var(--rule-strong)] rounded-none appearance-none " +
  "placeholder:text-ink-400 focus:outline-none focus:border-ink-900 focus:shadow-[0_1px_0_0_var(--ink)] " +
  "aria-[invalid=true]:border-[#B42318] aria-[invalid=true]:shadow-[0_1px_0_0_#B42318] transition-[border-color,box-shadow] duration-150";
const errorClass = "mt-2 text-[13.5px] leading-[1.45] text-[#B42318]";
const toggleClass =
  "inline-flex items-center min-h-11 text-left text-[14.5px] text-ink-700 underline decoration-dotted underline-offset-4 hover:text-ink-900 transition-colors";

const ContactForm: FC<{ locale?: Locale }> = ({ locale = "en" }) => {
  const S = STR[locale];
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [industry, setIndustry] = useState<Industry | "">("");
  const [nda, setNda] = useState(false);
  const [consent, setConsent] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [fileName, setFileName] = useState<string | null>(null);

  const [showDetails, setShowDetails] = useState(false);
  const [showNdaSection, setShowNdaSection] = useState(false);

  const [turnstileToken, setTurnstileToken] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<Status>({ kind: "idle" });

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
      const lineHeight = parseInt(computedStyle.lineHeight, 10) || 24;
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
    setConsent(false);
    setConsentError(false);
    setFileName(null);
    setErrors({});
    if (fileInputRef.current) fileInputRef.current.value = "";
    if (messageRef.current) messageRef.current.style.height = "auto";
    // Token is single-use server-side — clear so the widget re-challenges.
    setTurnstileToken("");
  };

  const focusFirstInvalid = (next: FieldErrors) => {
    const first = FIELD_ORDER.find((k) => next[k]);
    if (!first) return;
    if (first === "company" || first === "phone" || first === "industry") {
      setShowDetails(true);
    }
    // Wait a frame so a just-opened panel is in the DOM.
    requestAnimationFrame(() => {
      formRef.current
        ?.querySelector<HTMLElement>(`[name="${first}"]`)
        ?.focus();
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Honeypot: people never see this field, form-filling bots usually fill it.
    const honeypot = new FormData(e.currentTarget).get("website");
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
        const key = issue.path[0] as FieldKey | undefined;
        if (key && !next[key]) next[key] = S.fieldErrors[key] ?? issue.message;
      }
      setErrors(next);
      setStatus({ kind: "invalid", count: Object.keys(next).length });
      focusFirstInvalid(next);
      pushEvent({
        event: "form_error",
        form_id: FORM_ID,
        error_code: "client-validation",
      });
      return;
    }

    if (!consent) {
      setErrors({});
      setConsentError(true);
      setStatus({ kind: "invalid", count: 1 });
      formRef.current?.querySelector<HTMLElement>('[name="consent"]')?.focus();
      return;
    }

    setErrors({});
    setStatus({ kind: "idle" });
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
    if (typeof honeypot === "string" && honeypot) formData.append("website", honeypot);

    const file = fileInputRef.current?.files?.[0];
    if (file) formData.append("projectFile", file);

    const sendFailed = (errorCode: string) => {
      setStatus({
        kind: "error",
        message: S.failed,
      });
      pushEvent({
        event: "form_error",
        form_id: FORM_ID,
        error_code: errorCode,
      });
    };

    try {
      const res = await fetch("/api/sendEmails", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        setStatus({ kind: "sent" });
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
        sendFailed(errorCode);
      }
    } catch {
      sendFailed("network");
    } finally {
      setSubmitting(false);
    }
  };

  const errId = (key: FieldKey) => `${errorIds}-${key}`;
  const describedBy = (key: FieldKey) => (errors[key] ? errId(key) : undefined);

  const fieldError = (name: FieldKey) =>
    errors[name] ? (
      <p id={errId(name)} className={errorClass}>
        {errors[name]}
      </p>
    ) : null;

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
        ref={formRef}
        onSubmit={handleSubmit}
        encType="multipart/form-data"
        noValidate
        className="max-w-[760px]"
      >
        <div className="grid gap-x-8 gap-y-8 md:grid-cols-2">
          <div>
            <label htmlFor="fullName" className={labelClass}>
              {S.fullName}
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              autoComplete="name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              aria-invalid={Boolean(errors.fullName)}
              aria-describedby={describedBy("fullName")}
              className={inputClass}
              required
            />
            {fieldError("fullName")}
          </div>

          <div>
            <label htmlFor="email" className={labelClass}>
              {S.email}
            </label>
            <input
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              inputMode="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={describedBy("email")}
              className={inputClass}
              required
            />
            {fieldError("email")}
          </div>
        </div>

        <div className="mt-8">
          <label htmlFor="message" className={labelClass}>
            {S.message}
          </label>
          <textarea
            name="message"
            id="message"
            rows={2}
            ref={messageRef}
            value={message}
            onChange={handleMessageChange}
            placeholder={S.messagePh}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={describedBy("message")}
            className={`${inputClass} resize-none leading-[1.5]`}
            required
          />
          {fieldError("message")}
        </div>

        {/* Progressive disclosure: optional details */}
        <div className="mt-6">
          <button
            type="button"
            onClick={() => setShowDetails((s) => !s)}
            className={toggleClass}
            aria-expanded={showDetails}
            aria-controls="contact-details-panel"
          >
            {showDetails ? S.hideDetails : S.showDetails}
          </button>

          {showDetails && (
            <div
              id="contact-details-panel"
              className="mt-6 grid gap-x-8 gap-y-8 md:grid-cols-2"
            >
              <div>
                <label htmlFor="company" className={labelClass}>
                  {S.company}
                </label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  aria-invalid={Boolean(errors.company)}
                  aria-describedby={describedBy("company")}
                  className={inputClass}
                />
                {fieldError("company")}
              </div>

              <div>
                <label htmlFor="phone" className={labelClass}>
                  {S.phone}
                </label>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  inputMode="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={describedBy("phone")}
                  className={inputClass}
                />
                {fieldError("phone")}
              </div>

              <div className="md:col-span-2">
                <label htmlFor="industry" className={labelClass}>
                  {S.industry}
                </label>
                <select
                  name="industry"
                  id="industry"
                  value={industry}
                  onChange={(e) =>
                    setIndustry(e.target.value as Industry | "")
                  }
                  aria-invalid={Boolean(errors.industry)}
                  aria-describedby={describedBy("industry")}
                  className={`${inputClass} cursor-pointer`}
                >
                  <option value="">{S.selectIndustry}</option>
                  {INDUSTRY_OPTIONS.map((option) => (
                    <option key={option} value={option}>
                      {S.industries[option] ?? option.charAt(0).toUpperCase() + option.slice(1)}
                    </option>
                  ))}
                </select>
                {fieldError("industry")}
              </div>
            </div>
          )}
        </div>

        {/* Progressive disclosure: NDA + attachment */}
        <div>
          <button
            type="button"
            onClick={() => setShowNdaSection((s) => !s)}
            className={toggleClass}
            aria-expanded={showNdaSection}
            aria-controls="contact-nda-panel"
          >
            {showNdaSection ? S.hideNda : S.showNda}
          </button>

          {showNdaSection && (
            <div
              id="contact-nda-panel"
              className="mt-4 flex flex-col gap-4 md:flex-row md:items-center md:gap-10"
            >
              <div>
                <input
                  type="file"
                  name="projectFile"
                  id="projectFile"
                  ref={fileInputRef}
                  className="peer sr-only"
                  onChange={(e) =>
                    setFileName(e.target.files?.[0]?.name ?? null)
                  }
                />
                <label
                  htmlFor="projectFile"
                  className="inline-flex items-center gap-2 min-h-11 cursor-pointer text-[14.5px] text-ink-700 hover:text-ink-900 transition-colors peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-4 peer-focus-visible:outline-copper-ink"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    viewBox="0 0 28.3 28.3"
                    aria-hidden="true"
                  >
                    <path d="M13.5381849,8.3455903 L8.07733533,13.7020126 C7.8263481,13.9397466 7.72568926,14.2917947 7.81404712,14.622847 C7.90240498,14.9538993 8.166029,15.2124364 8.50359507,15.2990893 C8.84116115,15.3857421 9.20013615,15.2870256 9.44254773,15.0408815 L14.9043628,9.68540604 C16.0356084,8.57598928 16.0356084,6.77726932 14.9043628,5.66785256 C13.7731172,4.5584358 11.9390057,4.5584358 10.8077601,5.66785256 L5.34594504,11.0242749 C4.10069262,12.2151002 3.60488822,13.9707932 4.0480634,15.6202036 C4.49123859,17.269614 5.80487132,18.5577163 7.4867981,18.9921066 C9.16872488,19.4264969 10.9588927,18.9400113 12.1729725,17.7186193 L17.6347876,12.3631438 L19,13.7020126 L13.5381849,19.058435 C11.830738,20.7329345 9.34207998,21.3869011 7.00966413,20.7739917 C4.67724829,20.1610824 2.85542414,18.3744126 2.23045521,16.0870038 C1.60548628,13.7995949 2.27232023,11.3589587 3.97976715,9.68445917 L9.44254773,4.32898369 C11.3367504,2.53480372 14.3476804,2.56046302 16.2098041,4.38665458 C18.0719277,6.21284615 18.0980919,9.16567642 16.2686097,11.023328 L10.8077601,16.3816441 C10.0758001,17.099311 9.00903705,17.3795015 8.00931036,17.1166708 C7.00958368,16.85384 6.2287756,16.0879182 5.96100899,15.1074206 C5.69324238,14.126923 5.97919736,13.0808106 6.71115744,12.3631438 L12.1729725,7.00672143 L13.5381849,8.3455903 Z" />
                  </svg>
                  <span>{fileName ? fileName : S.attach}</span>
                </label>
              </div>

              <label
                htmlFor="nda"
                className="inline-flex items-center gap-3 min-h-11 cursor-pointer text-[14.5px] text-ink-700"
              >
                <input
                  type="checkbox"
                  id="nda"
                  name="nda"
                  checked={nda}
                  onChange={(e) => setNda(e.target.checked)}
                  className="h-[18px] w-[18px] accent-[#07070A] cursor-pointer"
                />
                {S.nda}
              </label>
            </div>
          )}
        </div>

        {/* Honeypot for bots: hidden from people and screen readers. */}
        <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
          <label>
            Website
            <input type="text" name="website" tabIndex={-1} autoComplete="off" defaultValue="" />
          </label>
        </div>

        {/* Turnstile widget */}
        <div className="mt-8">
          {turnstileEnabled ? (
            <div
              className="cf-turnstile"
              data-sitekey={turnstileSiteKey}
              data-callback="onTurnstileSuccess"
              data-theme="light"
            />
          ) : (
            process.env.NODE_ENV !== "production" && (
              <p className="text-[13px] text-ink-500">
                Dev mode: Turnstile site key not configured, bot protection
                is skipped. Set NEXT_PUBLIC_TURNSTILE_SITE_KEY to enable.
              </p>
            )
          )}
          {fieldError("turnstileToken")}
        </div>

        <div className="mt-10 flex flex-col-reverse gap-6 md:flex-row md:items-center md:justify-between">
          <div className="max-w-[26rem]">
            <label
              htmlFor="consent"
              className="flex items-start gap-3 cursor-pointer text-[13.5px] leading-[1.55] text-ink-700"
            >
              <input
                type="checkbox"
                id="consent"
                name="consent"
                required
                checked={consent}
                aria-invalid={consentError || undefined}
                aria-describedby={consentError ? "contact-consent-error" : undefined}
                onChange={(e) => {
                  setConsent(e.target.checked);
                  if (e.target.checked) setConsentError(false);
                }}
                className="mt-[3px] h-[18px] w-[18px] shrink-0 accent-[#07070A] cursor-pointer"
              />
              <span>
                {S.acceptA}{" "}
                <a
                  href={locale === "ru" ? "/ru/privacy-policy" : "/privacy-policy"}
                  className="text-ink-900 underline underline-offset-4 hover:text-copper-ink"
                >
                  {S.privacy}
                </a>
                .
              </span>
            </label>
            {consentError && (
              <p id="contact-consent-error" className={errorClass}>
                {S.consentErr}
              </p>
            )}
          </div>
          <button
            type="submit"
            disabled={submitting}
            aria-describedby="contact-status"
            className="btn-primary self-start md:self-auto"
          >
            <span>{submitting ? S.sending : S.send}</span>
            <span className="arrow" aria-hidden="true"></span>
          </button>
        </div>

        <p
          id="contact-status"
          aria-live="polite"
          className={`mt-6 text-[15px] leading-[1.55] ${
            status.kind === "sent"
              ? "text-ink-900"
              : status.kind === "idle"
                ? "sr-only"
                : "text-[#B42318]"
          }`}
        >
          {status.kind === "sent" &&
            S.sent}
          {status.kind === "invalid" &&
            (status.count === 1
              ? S.oneInvalid
              : S.manyInvalid(status.count))}
          {status.kind === "error" && status.message}
        </p>
      </form>
    </>
  );
};

export default ContactForm;
