const path    = require('path');
const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/,
});

const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  distDir: 'dist',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  basePath: isProd ? '/blog' : '',
  assetPrefix: isProd ? '/blog/' : '',
  pageExtensions: ['js', 'jsx', 'mdx'], 
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@app': path.resolve(__dirname, 'src/app'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@config': path.resolve(__dirname, 'config'),
    };
    return config;
  },
};

module.exports = withMDX(nextConfig);