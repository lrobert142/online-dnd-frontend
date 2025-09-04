import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    output: 'export',
    basePath: process.env.PAGES_BASE_PATH || process.env.NEXT_PUBLIC_BASE_PATH,
    allowedDevOrigins: ['192.168.0.112'],
    images: {
        unoptimized: true,
    },
    trailingSlash: true,
};

export default nextConfig;