const v = require('voca');


// const sanity = require("./sanity");

const toMarkdown = require('@sanity/block-content-to-markdown')

// const imageUrlBuilder = require('@sanity/image-url')
// const builder = imageUrlBuilder(myConfiguredSanityClient)

const sanityClient = require('@sanity/client')
const imageUrlBuilder = require('@sanity/image-url')

const client = sanityClient({
	projectId: 'kvqmg9w0',
	dataset: 'production',
	useCdn: true // `false` if you want to ensure fresh data
})

const builder = imageUrlBuilder(client)

function urlFor(source) {
	return builder.image(source)
}

const serializers = {
	types: {
		code: props => '```' + props.node.language + '\n' + props.node.code + '\n```'
	}
}

async function getContent() {
	var content = {}
	content.home = {}
	content.resume = {}
	content.resume.sections = {}
	content.home.intro = {}
	content.home.sections = {}

	await client.fetch('*[_type == "post"] | order(_createdAt desc)').then(posts => {

		posts.forEach(post => {
			post.image = {}
			post.body = toMarkdown(post.body, {
				serializers,
				projectId: 'kvqmg9w0',
				dataset: 'production'
			})
			post.url = '/work/' + post.slug.current
			if (post.mainImage) {
				post.image.url = urlFor(post.mainImage).width(543).url()
			}

		})

		return content.posts = posts
	})

	await client.fetch(`*[_type == "page" && title == "Site"][0].sections`).then(sections => {
		sections.forEach(section => {
			var name = v.lowerCase(section.value)
			content.home.sections[name] = section.content
		})

	})

	await client.fetch(`*[_type == "page" && title == "Resume"][0].sections`).then(sections => {
		sections.forEach(section => {
			var name = v.kebabCase(section.value)
			content.resume.sections[name] = section.content
		})

	})

	await client.fetch(`*[_type == "page" && title == "Site"][0].intro`).then(intro => {
		content.home.intro = intro
	})



	return content
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
myModule.getContent = function () {
	return getContent()
}
