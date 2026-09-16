/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for GitHub Pages (username.github.io)
  output: "export",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
