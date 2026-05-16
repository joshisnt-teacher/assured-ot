/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist',
  images: {
    formats: ['image/webp'],
  },
}

module.exports = nextConfig
