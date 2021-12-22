/** @type {import('next').NextConfig} */

module.exports = {
  basePath: '',
  reactStrictMode: true,
  //trailingSlash: true, // used for fixing the refresh bug on published

  images: {
    loader: 'akamai',
    path: '',
  },
  
};
