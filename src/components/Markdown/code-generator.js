var markdown = require('../../scripts/markdown')
module.exports = function(el, codegen) {
	var builder = codegen.builder;
	var html = markdown(el.bodyText);
	return builder.html(builder.literal(html));
};
