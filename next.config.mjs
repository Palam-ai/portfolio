/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export so the site can be served as plain files on Cloudflare Pages.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
