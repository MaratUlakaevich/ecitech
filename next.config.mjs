/**
 * Parse NEXT_PUBLIC_STRAPI_API_URL at build time to build a remotePatterns entry.
 * Falls back to localhost:1337 if the env is missing or unparseable.
 */
function parseStrapiPattern() {
  const raw = process.env.NEXT_PUBLIC_STRAPI_API_URL;
  if (!raw) {
    return {
      protocol: 'http',
      hostname: 'localhost',
      port: '1337',
      pathname: '/**',
    };
  }
  try {
    const u = new URL(raw);
    return {
      protocol: u.protocol.replace(':', ''),
      hostname: u.hostname,
      port: u.port || '',
      pathname: '/**',
    };
  } catch {
    return {
      protocol: 'http',
      hostname: 'localhost',
      port: '1337',
      pathname: '/**',
    };
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      parseStrapiPattern(),
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1337',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'strapi.ecitech.online',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'cms.ecitech.online',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
