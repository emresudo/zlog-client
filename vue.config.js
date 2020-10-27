module.exports = {
  devServer: {
    proxy: {
      "^/api/*": {
        changeOrigin: true,
        target: "http://localhost:4433",
        pathRewrite: { "^/api": "/" }
      }
    }
  }
};
