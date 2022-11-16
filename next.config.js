/** @type {import('next').NextConfig} */
const withLess = require("next-with-less");

module.exports = withLess({
  reactStrictMode: true,
  swcMinify: true,
  lessLoaderOptions: {},
  // basePath: "/seap-adv",
});

// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// };

// module.exports = nextConfig;
