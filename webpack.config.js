const path = require('path');
const fs = require('fs'); // To read your key and certificate files

module.exports = {
  // Entry point for your application
  entry: './src/index.js',

  // Output configuration
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },

  // Dev server configuration
  devServer: {
    static: path.join(__dirname, 'public'), // Serve static files from 'public' directory
    server: {
      type: 'https',
      options: {
        key: fs.readFileSync('key.pem'), // Path to your private key
        cert: fs.readFileSync('cert.pem'), // Path to your certificate
      },
    },
    port: 8080, // Specify the port
    host: 'localhost', // Specify the host
    open: true, // Automatically open browser when the server starts
    hot: true, // Enable Hot Module Replacement (HMR)
  },
};
