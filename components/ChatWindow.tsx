import React, { FC } from "react";
import isBusinessHours from "../app/functions/WorkingHours";

interface ChatWindowProps {
  onClose: () => void;
}

const ChatWindow: FC<ChatWindowProps> = ({ onClose }) => {
  const workingTime = isBusinessHours();

  return (
    <div className="fixed bottom-24 right-5 w-[340px] sm:w-[360px] bg-white shadow-lg rounded-xl overflow-hidden z-50">
      {/* Заголовок */}
      <div className="bg-blue-600 text-white px-4 py-3 flex items-center justify-between">
        <div>
          <h2 className="font-bold text-base sm:text-lg">ECITech</h2>
          {workingTime ? (
            <p className="text-xs sm:text-sm opacity-90">
              We&apos;re online! How can we help?
            </p>
          ) : (
            <p className="text-xs sm:text-sm opacity-90">
              We&apos;re not online right now, but we want to help!
            </p>
          )}
        </div>
        <button
          onClick={onClose}
          className="text-white text-xl font-bold hover:opacity-80 transition-opacity "
          aria-label="Close chat window"
        >
          &times;
        </button>
      </div>

      {/* Основной контент: либо «чат», либо «форма» */}
      <div className="">{workingTime ? <OnlineChat /> : <OfflineForm />}</div>
    </div>
  );
};

// «Онлайн»-чат (имитация). Вместо этого вы можете интегрировать чат-бота.
const OnlineChat: FC = () => {
  return (
    <>
      <div className="text-sm text-gray-800 px-4 py-4">
        <p className="mb-4 bg-gray-200 px-4 py-2 rounded-xl">
          Hello! Thank you for contacting ECITech. Our consultants are here to
          help you.
        </p>
        {/* Здесь — реализация реального чата или бот */}
        <p className="mb-2">[Chat interface / messages go here]</p>
      </div>
      <div className="flex space-x-2 bg-gray-100 p-2">
        <input
          type="text"
          className="flex-1 rounded-md border-gray-300 ring-gray-300 focus:ring-blue-600 focus:border-blue-600 text-sm px-2 py-1"
          placeholder="Type a message..."
        />
        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-md py-1 px-3 text-sm transition-colors">
          Send
        </button>
      </div>
    </>
  );
};

// «Офлайн»-форма
const OfflineForm: FC = () => {
  return (
    <>
      <p className="text-sm sm:text-base text-gray-700 mb-4">
        Welcome! We apologize, but all our consultants are currently engaged or
        out of office hours. Please leave your contact information, and
        we&apos;ll get in touch with you shortly.
      </p>

      <form className="flex flex-col space-y-3">
        <div>
          <label
            htmlFor="chatName"
            className="block text-sm font-medium text-gray-700"
          >
            Name *
          </label>
          <input
            type="text"
            id="chatName"
            required
            className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-600 focus:border-blue-600 text-sm"
            placeholder=""
          />
        </div>

        <div>
          <label
            htmlFor="chatEmail"
            className="block text-sm font-medium text-gray-700"
          >
            Email *
          </label>
          <input
            type="email"
            id="chatEmail"
            required
            className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-600 focus:border-blue-600 text-sm"
            placeholder=""
          />
        </div>

        <div>
          <label
            htmlFor="chatMessage"
            className="block text-sm font-medium text-gray-700"
          >
            Message *
          </label>
          <textarea
            id="chatMessage"
            required
            className="mt-1 w-full rounded-md border-gray-300 focus:ring-blue-600 focus:border-blue-600 text-sm"
            rows={3}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-md py-2 font-medium text-sm transition-colors"
        >
          Send
        </button>
      </form>

      <p className="text-[11px] sm:text-xs text-gray-500 mt-3">
        By clicking the &ldquo;Submit&rdquo; button, I consent to the processing
        of Personal data.
      </p>
    </>
  );
};

export default ChatWindow;
