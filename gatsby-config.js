module.exports = {
  siteMetadata: {
    title: 'Gatsby + Node.js (TypeScript) API',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Gatsby + Node.js (TypeScript) API',
        short_name: 'Gatsby + Node.js (TypeScript)',
        start_url: '/',
        icon: 'src/images/gatsby-icon.png',
      },
    },
    {
 // The name of the plugin
 resolve: `gatsby-source-mongodb`,
 options: {
 // Name of the database and collection where are records reside
 dbName: 'covidn19',
 collection: 'covid19',
 server: {
 address: 'cluster0-shard-00-02.7c1ks.mongodb.net',
 port: 27017
 },
 auth: {
 user: 'admin',
 password: 'Mongodb1!'
 },
 extraParams: {
 replicaSet: 'Main-shard-0',
 ssl: true,
 authSource: 'admin',
 retryWrites: true
 },
refetchInterval: 60,
 }
 },
  ],
};
