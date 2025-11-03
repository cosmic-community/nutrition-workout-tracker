/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.cosmicjs.com', 'imgix.cosmicjs.com'],
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '2mb',
    },
  },
}

module.exports = nextConfig