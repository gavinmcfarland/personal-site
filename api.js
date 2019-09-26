const jdown = require('jdown');
const API = require('static-api-generator')

const api = new API({
	blueprint: 'content/:posts/:year/:month/:post',
	outputPath: 'api'
})

api.generate({
	endpoints: ['post'],
	levels: ['post']
})

// jdown('content/posts/2019/09/', { parseMd: false }).then(content => console.log(content));
