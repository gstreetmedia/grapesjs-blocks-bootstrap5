const elHasClass = (el, toFind) => {
	let cls = el.className;
	cls = cls && cls.toString();
	if (cls && cls.split(' ').indexOf(toFind) >= 0) return 1;
};

const capitalize = (phrase) => {
	return phrase
		.toLowerCase()
		.split(' ')
		.map(word => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};

/**
 * @param {String} html representing a single element
 * @return {HTMLElement}
 */
const htmlToElement = (html) => {
	let element = htmlToTemplate(html).content;
	return element.firstChild;
}

/**
 * @param {string} html
 * @returns {HTMLTemplateElement}
 */
const htmlToTemplate = (html) => {
	let template = document.createElement('template');
	html = html.trim(); // Never return a text node of whitespace as the result
	template.innerHTML = html;
	return template;
}

/**
 * @param {String} html representing any number of sibling elements
 * @return {NodeList}
 */
const htmlToElements = (html) => {
	return htmlToTemplate(html).content.childNodes;
}


export {
	elHasClass,
	capitalize,
	htmlToElement,
	htmlToTemplate,
	htmlToElements
}
