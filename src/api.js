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

		content.posts.map(function(post) {
			post.url = '/posts/' + post.slug
		})

		console.log(process.env.NODE_ENV)
		if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {

			content.posts = content.posts.filter(post => post.status === 'publish')

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
