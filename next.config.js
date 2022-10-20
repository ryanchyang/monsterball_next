/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: '/',
  //       destination: 'https://test.monsterball.me/',
  //     },
  //   ];
  // },
};

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// module.exports = withBundleAnalyzer({
//   reactStrictMode: true,
//   swcMinify: true,
// });
module.exports = nextConfig;
