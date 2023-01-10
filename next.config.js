/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // images: {
  //   domains: ["images-americanas.b2w.io"],
  // },

  // basePath: "/seap-adv",
};

module.exports = nextConfig;

// module.exports = withLess({
//   reactStrictMode: true,
//   swcMinify: true,
//   lessLoaderOptions: {},
//   // basePath: "/seap-adv",
// });

// const withImages = require('next-images')
// const withLess = require('@zeit/next-less')

// module.exports = withImages({
//   cssModules: true,
//   cssLoaderOptions: {
//     importLoaders: 1,
//     localIdentName: '[local]___[hash:base64:5]'
//   },
//   ...withLess({
//     lessLoaderOptions: {
//       javascriptEnabled: true
//     }
//   }),
//   basePath: "/seap-adv",
// })
