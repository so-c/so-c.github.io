/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
};

const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  output: 'export',
});

module.exports = withNextra(nextConfig);
