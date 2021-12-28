/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"], //? This could cause problems when deployed?
  },
};
