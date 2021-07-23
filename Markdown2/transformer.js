function removeIndentation(str) {
	var indentMatches = /\s*\n(\s+)/.exec(str);
	if (indentMatches) {
		var indent = indentMatches[1];
		str = str.replace(new RegExp("^" + indent, "mg"), "");
	}
	return str;
}

module.exports = function(el, codegen) {
	var bodyText = removeIndentation(el.bodyText);
	el.setAttributeValue("content", codegen.builder.expression(`\`${bodyText.replace(/`/g, "\\`")}\``));
};
