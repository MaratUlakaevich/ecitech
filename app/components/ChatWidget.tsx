import React, { FC, useEffect, useState } from "react";
import ChatWindow from "./ChatWindow";

const ChatWidget: FC = () => {
  // Состояния для управления видимостью элементов
  const [showHelpSuggestion, setShowHelpSuggestion] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  // Состояние для переключения содержимого кнопки (текст ↔ иконка)
  const [showTextOnButton, setShowTextOnButton] = useState(true);

  // Через 3 секунды показываем всплывающее сообщение, если чат не открыт
  useEffect(() => {
    if (!isChatOpen) {
      const timer = setTimeout(() => {
        setShowHelpSuggestion(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isChatOpen]);

  // Плавное переключение между текстом и иконкой каждые 2 секунды
  useEffect(() => {
    const interval = setInterval(() => {
      setShowTextOnButton((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Обработчик нажатия на кнопку "Start chat"
  const handleChatButtonClick = () => {
    setIsChatOpen(true);
    setShowHelpSuggestion(false);
  };

  // Обработчик закрытия всплывающего сообщения (нажатие на крестик)
  const dismissHelpSuggestion = () => {
    setShowHelpSuggestion(false);
  };

  // Обработчик закрытия окна чата (нажатие на крестик в заголовке окна)
  const handleCloseChat = () => {
    setIsChatOpen(false);
  };

  return (
    <>
      {/* Фиксированный контейнер для кнопки и всплывающего сообщения */}
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end space-y-2">
        {/* Всплывающее сообщение с предложением помощи */}
        {showHelpSuggestion && !isChatOpen && (
          <div className="bg-blue-600 text-white mr-4 px-4 py-2 rounded-3xl flex items-center shadow-lg animate-fadeIn">
            <span className="mr-2">Need help? Chat with us!</span>
            <button onClick={dismissHelpSuggestion} className="text-white">
              &#10005;
            </button>
          </div>
        )}

        {/* Кнопка для открытия чата с фиксированными размерами и центровкой содержимого */}
        <button
          onClick={handleChatButtonClick}
          className="w-16 h-16 p-2 bg-blue-700 hover:bg-blue-800 text-white font-bold 
                     rounded-3xl shadow-lg transition-colors relative overflow-hidden duration-300 ease-in-out"
        >
          <div className="w-full h-full flex items-center justify-center relative">
            <span
              className={`absolute transition-opacity duration-300 text-xs w-[60%] ${
                showTextOnButton ? "opacity-100" : "opacity-0"
              }`}
            >
              Start chat
            </span>
            <svg className={`absolute transition-opacity duration-300 ${
              showTextOnButton ? "opacity-0" : "opacity-100"
            } w-6 h-6`} viewBox="0 0 30 28">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.813 5.375c0-.897.727-1.625 1.624-1.625h21.125c.898 0 1.625.728 1.625 1.625v15.593c0 .897-.727 1.625-1.625 1.625H9.745l-5.612 4.479a.813.813 0 01-1.32-.635V5.375zm2.759 1.067v16.003L8.759 19.9h15.67V6.441H5.571z" fill="#fff"></path>
              <path fill="#fff" d="M7.965 12.979h9.141v2.344H7.965zM7.965 8.828h13.203v2.344H7.965z"></path>
            </svg>
            
          </div>
        </button>
      </div>

      {/* Окно чата */}
      {isChatOpen && <ChatWindow onClose={handleCloseChat} />}
    </>
  );
};

export default ChatWidget;
