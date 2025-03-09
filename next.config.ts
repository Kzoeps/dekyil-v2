import type { NextConfig } from "next";

module.exports = {
  async redirects() {
    return [
      {
        source: '/index.html',
        destination: '/',
        permanent: true
      },
      {
        source: '/conference.html',
        destination: '/conference-hall',
        permanent: true
      },
      {
        source: '/suite.html',
        destination: '/rooms/suite',
        permanent: true
      },

      {
        source: '/deluxe.html',
        destination: '/rooms/deluxe',
        permanent: true
      },

      {
        source: '/contact.html',
        destination: '/contact',
        permanent: true
      },

      {
        source: '/rooms.html',
        destination: '/rooms',
        permanent: true
      },

      {
        source: '/about.html',
        destination: '/about-us',
        permanent: true
      },
      {
        source: '/gallery.html',
        destination: '/gallery',
        permanent: true
      }
    ]
  }
}

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    optimizePackageImports: ['lucide-react'],
  }
};

export default nextConfig;
