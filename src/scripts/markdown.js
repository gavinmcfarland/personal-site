var MarkdownIt = require("markdown-it")

var md = new MarkdownIt({ html: true })
md.use(require('markdown-it-attrs'))

function removeIndentation(str) {
	// remove the shortest leading indentation from each line (credit: https://github.com/declandewet/common-tags/blob/master/src/stripIndentTransformer/stripIndentTransformer.js)
	const match = str.match(/^[^\S\n]*(?=\S)/gm);
	const indent = match && Math.min(...match.map(el => el.length));
	if (indent) {
		const regexp = new RegExp(`^.{${indent}}`, 'gm');
		return str.replace(regexp, '');
	}

	return str;
}

module.exports = function(string) {
	var bodyText = removeIndentation(string);
	var html = md.render(bodyText);
	return html;
};
