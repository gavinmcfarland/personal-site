const API = require('static-api-generator')

const api = new API({
	blueprint: 'content/:posts/:year/:month/:post',
	outputPath: 'api'
})

api.generate({
	endpoints: ['post'],
	levels: ['post']
})
