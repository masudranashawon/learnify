/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.pexels.com",
      "res.cloudinary.com",
      "plus.unsplash.com",
      "images.unsplash.com",
      "lh3.googleusercontent.com",
      "dreamslms-wp.dreamguystech.com",
    ],
  },
};

module.exports = nextConfig;
