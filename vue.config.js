module.exports = {
  publicPath: './',
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
      "/myweb": {
        target: 'https://yamada-masahiro-2.paiza-user-basic.cloud:8080/',
        pathRewrite: { '^/myweb/': ''},
        ws: true,
        changeOrigin: true,
        secure: false
      }
    }
	}
}

