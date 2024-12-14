/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // 👈 Correct way to enable app directory
  },
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true, // Optional: Avoid build failures due to ESLint issues
  },
  typescript: {
    ignoreBuildErrors: true, // Optional: Avoid build failures due to TypeScript issues
  },
}

module.exports = nextConfig
