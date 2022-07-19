/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  images: {
    domains: ["www.google.com"],
  },
};

module.exports = nextConfig;
