module.exports = {
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
      }
    }
	}
}

