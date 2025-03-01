import { useState, useEffect } from "react";

/**
 * Определяет, является ли окно браузера "мобильным" (меньше заданной ширины).
 * @param breakpoint Число пикселей, ниже которых считаем, что это мобильное разрешение. (По умолчанию 768)
 * @returns Булево значение, указывающее, мобилен ли экран.
 */
export function useIsMobile(breakpoint: number = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Функция проверки ширины
    function checkWidth() {
      setIsMobile(window.innerWidth < breakpoint);
    }
    // Начальная проверка
    checkWidth();

    // Отслеживаем изменение размеров окна
    window.addEventListener("resize", checkWidth);
    return () => {
      window.removeEventListener("resize", checkWidth);
    };
  }, [breakpoint]);

  return isMobile;
}
