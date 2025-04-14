/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // Разрешаем загрузку изображений с localhost
  },
};

export default nextConfig;
