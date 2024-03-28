import headingIcon from "../icons/heading-solid.svg";
import ComponentBase from "./ComponentBase";

export default class Header extends ComponentBase {
	addBlocks() {
		this.blockManager.add(
			this.type,
			{
				label: this.createLabel(
					"bi bi-type-h1",
					"Heading"
				),
				category : "Basic",
				content : `<h1 data-gjs-type="${this.type}">Heading</h1>`
			}
		)
	}

	addTypes() {
		this.components.addType(this.type, {
			extend: "text",
			model: {
				defaults: {
					'custom-name': 'Heading',
					tagName: 'h1',
					stylable: false,
					traits: [
						{
							type: 'select',
							options: [
								{value: 'h1', name: 'H1'},
								{value: 'h2', name: 'H2'},
								{value: 'h3', name: 'H3'},
								{value: 'h4', name: 'H4'},
								{value: 'h5', name: 'H5'},
								{value: 'h6', name: 'H6'},
							],
							label: 'Size (e.g H1, H2, H3)',
							name: 'tagName',
							changeProp: 1
						},
						this.traitFontSize,
						this.traitTextColor,
						this.traitBackgroundColor,
						this.traitMargin,
						this.traitPadding,
						this.traitBorder,
						this.traitBorder
					]
				},

			}, isComponent: (el) => {
				if (el && ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(el.tagName)) {
					if (el.classList && el.classList.contains("card-title")) {
						return false;
					}
					return {type: this.type};
				}
			}
		});
	}
}