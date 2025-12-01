import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // output: 'export',
  // basePath: '/testovoe-react-app',
  // assetPrefix: '/testovoe-react-app/',
  images: {
    unoptimized: true,
    remotePatterns: [new URL('https://cdn.dummyjson.com/product-images/**')],
  },
};

export default nextConfig;
