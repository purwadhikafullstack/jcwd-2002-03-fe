/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  pageExtensions: ["mdx", "md", "jsx", "js", "tsx", "ts"],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
