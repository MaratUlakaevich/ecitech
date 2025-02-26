'use client';

import React, {
  FC,
  useEffect,
  useRef,
  useState,
  FormEvent,
  ChangeEvent,
} from "react";

const ContactForm: FC = () => {
  const aboutRef = useRef<HTMLTextAreaElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const [bgColor, setBgColor] = useState("");
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [about, setAbout] = useState("");
  const [nda, setNda] = useState(false);
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setBgColor("bg-gray-500");
    setStatus("Sending...");

    // Собираем FormData вручную из текущих полей
    const formData = new FormData();
    formData.append("fullName", fullName);
    formData.append("company", company);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("about", about);
    formData.append("nda", nda ? "true" : "false");

    // Ищем <input type="file" id="projectFile">, забираем файл
    const fileInput = e.currentTarget.querySelector(
      "#projectFile"
    ) as HTMLInputElement;

    if (fileInput?.files && fileInput.files.length > 0) {
      formData.append("projectFile", fileInput.files[0]);
    }

    try {
      // Отправляем запрос на /api/sendEmails
      const res = await fetch("/api/sendEmails", {
        method: "POST",
        body: formData,
        // Не указываем headers: "Content-Type" — fetch сам выставит boundary
      });

      if (res.ok) {
        setStatus("Message sent successfully!");
        setBgColor("bg-green-500");
        setFullName("");
        setCompany("");
        setEmail("");
        setPhone("");
        setAbout("");
        setNda(false);
      } else {
        const text = await res.text();
        setStatus("Error sending message: " + text);
        setBgColor("bg-red-500");
      }
    } catch (error) {
      console.error(error);
      setBgColor("bg-red-500");
      setStatus("Error sending message.");
    }
  };

  useEffect(() => {
    if (status) {
      const timer = setTimeout(() => {
        setStatus("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [status]);

  const handleAboutChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAbout(e.target.value);
    const textarea = e.target;
    // Сбрасываем высоту для корректного перерасчёта scrollHeight
    textarea.style.height = "auto";
    // Получаем line-height из вычисленных стилей (если не удалось – используем 20px)
    const computedStyle = window.getComputedStyle(textarea);
    const lineHeightStr = computedStyle.lineHeight;
    const lineHeight = parseInt(lineHeightStr) || 20;
    const maxHeight = lineHeight * 11; // максимум – 11 строк
    textarea.style.height = Math.min(textarea.scrollHeight, maxHeight) + "px";
  };

  return (
    <form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="max-w-[1000px] mx-auto p-8 bg-gray-800 rounded-3xl shadow-lg"
    >
      <div className="max-w-[40rem] mb-10">
        <h2 className="text-3xl md:text-6xl font-bold">
          Start growing your business with us
        </h2>
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4">
        {/* Поле Full name */}
        <div className="relative z-0 w-full md:w-1/2 mb-6 group">
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder=" "
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
        </div>

        <div className="relative z-0 w-full md:w-1/2 mb-6 group">
          <input
            type="text"
            name="company"
            id="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-400 appearance-none 
                      focus:outline-none focus:ring-0 focus:border-blue-500 peer"
            required
          />
          <label
            htmlFor="company"
            className="absolute text-sm text-gray-400 duration-300 transform origin-[0]
                      top-2 left-0 
                      peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                      peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500 peer-valid:-translate-y-6 peer-valid:scale-75"
          >
            Company
          </label>
        </div>        
      </div>

      <div className="flex flex-col md:flex-row md:space-x-4">
        {/* Поле Email */}
        <div className="relative z-0 w-full md:w-1/2 mb-6 group">
          <input
            type="email"
            name="email"
            id="email"
            placeholder=" "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
        </div>

        <div className="relative z-0 w-full md:w-1/2 mb-6 group">
          <input
            type="phone"
            name="phone"
            id="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder=" "
            className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-400 appearance-none 
                      focus:outline-none focus:ring-0 focus:border-blue-500 peer"
            required
          />
          <label
            htmlFor="phone"
            className="absolute text-sm text-gray-400 duration-300 transform origin-[0]
                      top-2 left-0 
                      peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100
                      peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-500 peer-valid:-translate-y-6 peer-valid:scale-75"
          >
            Phone
          </label>
        </div>
      </div>

      {/* About the Project Field with Integrated File Upload Icon */}
      <div className="relative z-0 w-full mb-10 group">
        <textarea
          name="about"
          id="about"
          rows={1}
          ref={aboutRef}
          value={about}
          onChange={handleAboutChange}
          className="block py-2.5 pr-12 pl-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-400 resize-none appearance-none focus:outline-none focus:ring-0 focus:border-blue-500 peer"
          placeholder=" "
          required
        ></textarea>
        <label
          htmlFor="about"
          className="absolute text-sm text-gray-400 duration-300 transform origin-[0] 
                     top-2 left-0
                     peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 
                     peer-focus:-translate-y-6 peer-focus:text-blue-500 peer-focus:scale-75 peer-valid:-translate-y-6 peer-valid:scale-75"
        >
          About the project
        </label>
        {/* Скрытый input для загрузки файла */}
        <input
          type="file"
          name="projectFile"
          id="projectFile"
          className="hidden"
        />
        {/* Иконка-скрепка, размещённая в правой части поля */}
        <label
          htmlFor="projectFile"
          className="absolute right-0 bottom-0 transform -translate-y-1/2 cursor-pointer p-2"
        >
          <svg className="dS_G5" viewBox="0 0 28.3 28.3" id="attach">
            <path
              d="M13.5381849,8.3455903 L8.07733533,13.7020126 C7.8263481,13.9397466 7.72568926,14.2917947 7.81404712,14.622847 C7.90240498,14.9538993 8.166029,15.2124364 8.50359507,15.2990893 C8.84116115,15.3857421 9.20013615,15.2870256 9.44254773,15.0408815 L14.9043628,9.68540604 C16.0356084,8.57598928 16.0356084,6.77726932 14.9043628,5.66785256 C13.7731172,4.5584358 11.9390057,4.5584358 10.8077601,5.66785256 L5.34594504,11.0242749 C4.10069262,12.2151002 3.60488822,13.9707932 4.0480634,15.6202036 C4.49123859,17.269614 5.80487132,18.5577163 7.4867981,18.9921066 C9.16872488,19.4264969 10.9588927,18.9400113 12.1729725,17.7186193 L17.6347876,12.3631438 L19,13.7020126 L13.5381849,19.058435 C11.830738,20.7329345 9.34207998,21.3869011 7.00966413,20.7739917 C4.67724829,20.1610824 2.85542414,18.3744126 2.23045521,16.0870038 C1.60548628,13.7995949 2.27232023,11.3589587 3.97976715,9.68445917 L9.44254773,4.32898369 C11.3367504,2.53480372 14.3476804,2.56046302 16.2098041,4.38665458 C18.0719277,6.21284615 18.0980919,9.16567642 16.2686097,11.023328 L10.8077601,16.3816441 C10.0758001,17.099311 9.00903705,17.3795015 8.00931036,17.1166708 C7.00958368,16.85384 6.2287756,16.0879182 5.96100899,15.1074206 C5.69324238,14.126923 5.97919736,13.0808106 6.71115744,12.3631438 L12.1729725,7.00672143 L13.5381849,8.3455903 Z"
              id="Path"
            ></path>
          </svg>
        </label>

        <input
          type="checkbox"
          id="nda"
          name="nda"
          onChange={(e) => setNda(e.target.checked)}
          className="peer hidden"
        />

        <label
          htmlFor="nda"
          className="
            relative cursor-pointer pl-8 text-gray-400 before:content-[''] before:absolute before:left-0 before:top-0
            before:h-5 before:w-5 before:rounded before:bg-gray-400 peer-checked:before:bg-gray-400 before:bg-no-repeat before:bg-center
            peer-checked:before:bg-[url('/img/checkmark-white.svg')] top-4
          "
        >
          Send me NDA
        </label>
      </div>

      {/* Кнопка отправки и текст подтверждения */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center mt-14 w-full">
        <p className="text-gray-400 text-sm md:mb-0 mb-4">
          By sending this form I confirm that I have read and accept the{" "}
          <a
            href="/privacy-policy"
            className="underline decoration-2 hover:text-white cursor-pointer duration-300"
          >
            {" "}
            Privacy Policy
          </a>
        </p>
        <button
          type="submit"
          className="min-w-52 md:min-w-72 md:text-lg bg-blue-700 md:ml-20 hover:bg-blue-800 text-white font-medium py-3 px-10 rounded-full transition-colors"
        >
          Send Message
        </button>
      </div>
      {status && (
        <div
          ref={statusRef}
          className={`fixed bottom-10 left-1/2 transform -translate-x-1/2 
                      px-6 py-4 text-white ${bgColor} rounded-xl z-50`}
        >
          {status}
        </div>
      )}
    </form>
  );
};

export default ContactForm;
