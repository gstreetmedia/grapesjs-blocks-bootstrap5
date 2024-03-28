import ComponentBase from "./ComponentBase";

export default class Comment extends ComponentBase {
	addTypes() {
		this.components.addType(
			this.type,
			{
				extends : "textnode",
				model : {
					toHTML() {
						return `<!--${this.content}-->`;
					}
				},
				isComponent: (el) => {
					if (el.nodeType === 8) {
						return {
							tagName: 'span',
							type: this.name,
							content: el.textContent ? "<!-- " +el.textContent  + " -->" :'',
						};
					}
				}
			},

		)
	}
}
