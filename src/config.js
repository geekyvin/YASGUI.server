var path = require('path')
module.exports = {
	"server": {
		"yasguiAssets": path.resolve(__dirname, '..', 'node_modules/yasgui/dist'),
		"port": 8080,
		"shortUrlBasename": "http://yasgui.org/short/",
		"db" : {
			"engine": "tingodb",
			"mongodb":{
					"host":"127.0.0.1",
					"port":27017,
					"db":"data",
					"opts":{
							"auto_reconnect": true,
							"safe": true
					}
			},
			"tingodb":{
					"path":"./tingodb"
			}
		}
	},
	//this code is automatically included in the YASGUI client configuration
	"client": {
		"api": {
			"corsProxy": "/proxy/",
			"urlShortener": "/shorten"
		}
	}
}
