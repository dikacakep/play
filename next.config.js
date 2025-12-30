// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/ios',
        destination: '/ios.txt',
      },
      {
        source: '/android',
        destination: '/android.txt',
      },
      {
        source: '/windows',
        destination: '/windows.txt',
      },
    ]
  },
}
