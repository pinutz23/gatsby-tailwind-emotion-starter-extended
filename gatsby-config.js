const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Gatsby Tailwind CSS + Emotion Starter`,
    description: `A bare-bones Tailwind CSS + Emotion starter to kickoff your project. `,
    author: `@pauloelias`,
    siteUrl: `https://www.example.com`,
  },
  plugins: [
    // styling
    `gatsby-plugin-emotion`,
    `gatsby-plugin-postcss`,
    // images
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    // SEO
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    "gatsby-plugin-robots-txt",
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://www.example.com`,
      },
    },
    // various
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./src/images/favicon.png",
      },
    },
  ],
};
