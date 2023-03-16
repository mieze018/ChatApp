/** @type {import('next').NextConfig} */
// next.config.js
const withTwin = require('./withTwin.js')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
}
const imageConfig = {
  /**
   * @type {import('next').NextConfig['images']]}
   */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**firebasestorage.googleapis.com',
        pathname: '**',
      },
    ],
  },
}
const svgrWebpackConfig = {
  test: /\.svg$/,
  use: [
    {
      loader: '@svgr/webpack',
      //svgoという最適化ツールで線が一部表示されないなどSVGが想定通りに表示されないことがあるので、無効にする
      options: {
        svgo: false, // 圧縮無効
      },
    },
  ],
}

module.exports = withTwin({
  ...nextConfig,
  ...imageConfig,
  webpack: (config) => {
    config.module.rules.push(svgrWebpackConfig)
    return config
  },
  // images: {
  //   disableStaticImages: true, // importした画像の型定義設定を無効にする
  // },
})
