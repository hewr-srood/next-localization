/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // ↓↓ add this block
  i18n: {
    defaultLocale: "en",

    // add the locales
    locales: ["en", "ar"],

    /* 
      disable locale detection for
      preventing redirecting to the default locale
     */
    localeDetection: false,
  },
  // ↑↑
};

module.exports = nextConfig;
