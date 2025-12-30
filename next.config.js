// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/ios',
        destination: '/public/ios.txt',
      },
      {
        source: '/android',
        destination: '/public/android.txt',
      },
      {
        source: '/windows',
        destination: '/public/windows.txt',
      },
    ]
  },
}
