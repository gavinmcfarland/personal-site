const jdown = require('jdown');
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

		// createDb('api/db.json', content)

		return content
	});

}

const api = getContent()

// module.exports = {
// 	api: function() {
// 		return api
// 	},
// 	getContent: function() {
// 		return getContent()
// 	}
// }

const myModule = module.exports = api;
myModule.getContent = function() {
	return getContent()
}
