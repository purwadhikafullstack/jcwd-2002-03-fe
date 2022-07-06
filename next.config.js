/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = {
  nextConfig,
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
}
