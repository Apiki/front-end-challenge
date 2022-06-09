module.exports = {
  reactStrictMode: true,
  distDir: 'build',
  env: {
    URL_SITE: 'http://localhost:3000',
    WORDPRESS_API_URL: 'https://blog.apiki.com/wp-json/wp/v2',
  },
  images: {
    domains: [
      'blog.apiki.com'
    ]
  }
}

