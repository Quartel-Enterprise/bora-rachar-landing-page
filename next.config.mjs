import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

/** @type {import('next').NextConfig} */
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  redirects: async () => {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.borarachar.com',
          },
        ],
        destination: 'https://borarachar.com/:path*',
        permanent: true,
      },
    ]
  },
}

export default withNextIntl(nextConfig)
