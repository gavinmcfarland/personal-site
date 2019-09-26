const jdown = require('jdown');

jdown('pubic/content/posts/2019/09/', { parseMd: false }).then(content => console.log(content));

module.exports = (req, res) => {
	const { name = 'World' } = req.query
	console.log(req)
	res.status(200).send(`Hello ${name}!`)
}
