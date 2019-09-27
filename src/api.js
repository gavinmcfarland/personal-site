const jdown = require('jdown');
const fs = require('fs-extra');
const v = require('voca');

async function getContent() {
	return await jdown(process.cwd() + '/content/', { parseMd: false }).then(content => {
		for (let index in content.posts) {
			content.posts[index]
			// If the slug isn't specified in the file then create it using the title
			if (!content.posts[index].slug) {
				content.posts[index].slug = v.kebabCase(content.posts[index].title)
			}

		}
		return content
	});

}

const api = getContent()

api.then(content => {
	console.log(content)
	fs.outputFile('api/db.json', JSON.stringify(content), function(err) {
		if (err) console.log(err) // => null
	})
})

module.exports = api
