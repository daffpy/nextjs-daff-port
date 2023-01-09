/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['cdn.discordapp.com','i.scdn.co'],
  },
  /*
  async redirects() {
    return [
      {
        source: '/api/auth/signin',
        destination: '/guestbook',
        permanent: false,
        has:[{
          type: 'query',
          key: 'error',
          value: 'Callback'
        }]
      },
    ]
  },
  */
}

module.exports = nextConfig