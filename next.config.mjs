/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["images.unsplash.com", "cdn.pixabay.com"],
    remotePatterns: [new URL("https://unsplash.com/")],
  },
};

export default nextConfig;
