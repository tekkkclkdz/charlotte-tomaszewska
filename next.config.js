/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config, options) {
      config.module.rules.push({
        test: /\.(mp3)$/,
        use: {
          loader: 'file-loader',
          options: {
            publicPath: '/_next/static/sounds/',
            outputPath: 'static/sounds/',
            name: '[name].[ext]',
            esModule: false,
          },
        },
      });
      return config;
    },
    output: "export",
    images: {
      unoptimized: true,
    },
  };
  
  module.exports = {
    async redirects() {
      return [
        {
          source: '/undefined', // Przykład przekierowania
          destination: '/',
          permanent: false,
        },
      ];
    },
  };