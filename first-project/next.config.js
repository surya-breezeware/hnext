/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    MONGO_URI:
      'mongodb+srv://breezeware:breeze123@cluster0.nhgptce.mongodb.net/?retryWrites=true&w=majority',
  },
}

module.exports = nextConfig
