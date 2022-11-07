/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  publicRuntimeConfig: {
    i18n,
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;