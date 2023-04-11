/**@type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["rb.gy", "upload.wikimedia.org", "www.gravatar.com","cdn.sanity.io", "lh3.googleusercontent.com"]
  },
  transpilePackages: ['react-redux']
  
}