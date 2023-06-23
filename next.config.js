/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.pexels.com",
      "res.cloudinary.com",
      "lh3.googleusercontent.com",
      "images.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
