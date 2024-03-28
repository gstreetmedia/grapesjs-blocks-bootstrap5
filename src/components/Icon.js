import ComponentBase from "./ComponentBase";

export default class Icon extends ComponentBase {

	addBlocks() {
		this.blockManager.add(
			this.type,
			{
				label : this.createLabel("fa-solid fa-icons", "Icon"),
				category : "Basic",
				content : `<i class="fa-solid fa-icons" data-gjs-type="${this.type}"></i>`
			},
		)
	}

	addTypes() {
		this.components.addType(
			this.type,
			{
				extends : this.namespace + "default",
				model : {
					defaults : {
						name : "Icon",
						stylable : false,
						droppable: false,
						draggable : true,
						traits: [
							{
								type: 'text',
								label: 'Icon',
								name: 'class',
								placeholder: 'fa fa-...'
							},
							this.traitFontSize,
							this.traitTextColor,
							this.traits,
						]
					}
				},
				isComponent: (el) => {
					if (el.tagName === "I") {
						return {
							type: this.type,
						};
					}
				}
			},

		)
	}
}
