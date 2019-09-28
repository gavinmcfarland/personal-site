const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const chokidar = require('chokidar');
const api = require('./api');
const fs = require('fs-extra');

function createDb(output, content) {
	fs.outputFile(output, JSON.stringify(content), function(err) {
		if (err) console.log(err) // => null
	})
}

api.getContent().then(content => {
	var router = jsonServer.router(content)
	// console.log("api created")

	server.use(middlewares)
	server.use(router)
	server.listen(3000, () => {
		console.log('JSON Server is running http://localhost:3000')
	})

	chokidar.watch('content').on('change', (event, path) => {
		api.getContent().then(content => {
			router.db.setState(content)
			console.log("change to api made")
		})
	});
})
