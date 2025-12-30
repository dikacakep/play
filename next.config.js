/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      { source: '/ios', destination: '/api/file/ios' },
      { source: '/android', destination: '/api/file/android' },
      { source: '/windows', destination: '/api/file/windows' },
    ];
  },
};

module.exports = nextConfig;
