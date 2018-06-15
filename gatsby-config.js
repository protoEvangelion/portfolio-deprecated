const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: "Ryan's Personal Portfolio",
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    'gatsby-plugin-resolve-src',
    {
      resolve: 'custom-sass-loader',
      options: {
        postCssPlugins: [
          autoprefixer({
            browsers: ['last 2 versions'],
          }),
        ],
      },
    },
  ],
}
