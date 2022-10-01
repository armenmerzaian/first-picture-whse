module.exports = {
  siteMetadata: {
    title: `firstpictureframewhse`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-offline",
    "gatsby-plugin-postcss",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: [
          "material icons",
          "material icons round",
          "material icons outlined",
          "material icons sharp",
          "nunito:300,400,600,700",
        ],
      },
    },
  ],
};
