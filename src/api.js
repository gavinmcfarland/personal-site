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
	useCdn: true
})

const builder = imageUrlBuilder(client)

function urlFor(source) {
	return builder.image(source)
}

const serializers = {
	types: {
		code: props => '```' + props.node.language + '\n' + props.node.code + '\n```',
		figma: props => `<div class="Frame wide"><div class="aspect-ratio"><iframe
	height="450"
	style="width: 100%"
	src="https://www.figma.com/embed?embed_host=gavinmcfarland.co.uk&url=${props.node.url}"
	allowfullscreen
	frameBorder="no"
	allowTransparency
	></iframe></div></div>`,
		codesandbox: props => `<div class="Frame wide"><iframe
	src="https://codesandbox.io/embed/${props.node.container}?autoresize=0&hidedevtools=1&fontsize=14&hidenavigation=1&module=%2Fstyles.css&theme=${props.node.theme}&view=${props.node.view}"
	style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
	title="zealous-fast-c2dng"
	allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
	sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
  ></iframe></div>`
	}
}

async function getContent() {
	var content = {}
	content.home = {}
	content.resume = {}
	content.resume.sections = {}
	content.home.intro = {}
	content.home.sections = {}

	await client.fetch('*[_type == "project"] | order(publishedAt desc)').then(projects => {

		projects.forEach(project => {
			project.image = {}
			project.body = toMarkdown(project.body, {
				serializers,
				projectId: 'kvqmg9w0',
				dataset: 'production'
			})
			project.url = '/work/' + project.slug.current
			if (project.mainImage) {
				project.image.url = urlFor(project.mainImage).width(543).url()
			}

		})

		return content.projects = projects
	})

	await client.fetch('*[_type == "post"] | order(publishedAt desc)').then(posts => {

		posts.forEach(post => {
			post.image = {}
			post.body = toMarkdown(post.body, {
				serializers,
				projectId: 'kvqmg9w0',
				dataset: 'production'
			})
			post.url = '/thoughts/' + post.slug.current
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
