// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://ecitech.online',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 7000,
  alternateRefs: [
    { href: 'https://ecitech.online/en-US', hreflang: 'en-US' },
    { href: 'https://ecitech.online/en-GB', hreflang: 'en-GB' },
    { href: 'https://ecitech.online/en-AE', hreflang: 'en-AE' },
    { href: 'https://ecitech.online/en-SA', hreflang: 'en-SA' },
  ],
  // если нужно включить все страницы автоматически, можно настроить exclude/include
};
