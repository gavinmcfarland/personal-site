const sanityClient = require('@sanity/client')
const client = sanityClient({
	projectId: 's9f6bn1k',
	dataset: 'production',
	useCdn: true
})

export default client
