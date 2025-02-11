"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

/**
 * Пример компонента, где три кнопки ведут на соответствующие страницы.
 * Активная страница подсвечивается синим цветом, остальные — светлые.
 */
export default function PoliciesButtons() {
  // Получаем текущий pathname (например, "/cookies-policy")
  const pathname = usePathname();

  // Функция для проверки, активен ли данный роут
  const isActive = (path: string) => pathname === path;

  return (
    <div className="flex gap-4 items-center mx-auto mb-10 w-[40rem] justify-between">
      {/* Terms and Conditions */}
      <Link
        href="/terms"
        className={`
          px-6 py-3 rounded-full font-medium transition-colors
          ${
            isActive("/terms")
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-100 text-gray-900 hover:bg-blue-700 hover:text-white"
          }
        `}
      >
        Terms and Conditions
      </Link>

      {/* Cookies policy */}
      <Link
        href="/cookies-policy"
        className={`
          px-6 py-3 rounded-full font-medium transition-colors
          ${
            isActive("/cookies-policy")
              ? "bg-blue-600 text-white hover:bg-blue-800"
              : "bg-gray-100 text-gray-900 hover:bg-blue-800 hover:text-white"
          }
        `}
      >
        Cookies policy
      </Link>

      {/* Privacy policy */}
      <Link
        href="/privacy-policy"
        className={`
          px-6 py-3 rounded-full font-medium transition-colors
          ${
            isActive("/privacy-policy")
              ? "bg-blue-600 text-white hover:bg-blue-800"
              : "bg-gray-100 text-gray-900 hover:bg-blue-800 hover:text-white"
          }
        `}
      >
        Privacy policy
      </Link>
    </div>
  );
}
