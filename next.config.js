/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["assets.x-kom.pl"],
    remotePatterns: [{ hostname: "cdn.x-kom.pl" }],
  },
};

module.exports = nextConfig;
