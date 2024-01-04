/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      { hostname: "cdn.x-kom.pl" },
      { hostname: "assets.x-kom.pl" },
      { hostname: "ornlntxawpvzqcyhardf.supabase.co" },
    ],
  },
};

module.exports = nextConfig;
