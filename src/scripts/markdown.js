var MarkdownIt = require("markdown-it")

var md = new MarkdownIt({ html: true })
md.use(require('markdown-it-attrs')).use(require('markdown-it-prism'))

function removeIndentation(str) {
	var indentMatches = /\s*\n(\s+)/.exec(str);
	if (indentMatches) {
		var indent = indentMatches[1];
		str = str.replace(new RegExp("^" + indent, "mg"), "");
	}
	return str;
}

module.exports = function(string) {
	var bodyText = removeIndentation(string);
	var html = md.render(bodyText);
	return html;
};
