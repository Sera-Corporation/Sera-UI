/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.unsplash.com'],
  },
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig

