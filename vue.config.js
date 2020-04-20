module.exports = {
  publicPath: '/catalog/',
	devServer: {
		host: '0.0.0.0',
		port: 8080,
		disableHostCheck: true,
    proxy: {
      "/wapi": {
        target: process.env.VUE_APP_URL,
        pathRewrite: { '^/wapi/': ''},
        ws: true,
        changeOrigin: true,
        secure: false
      },
      "/spec_csv": {
        target: process.env.VUE_APP_SPEC_URL,
        pathRewrite: { '^/myweb/': ''},
        ws: true,
        changeOrigin: true,
        secure: false
      }
    }
	}
}

