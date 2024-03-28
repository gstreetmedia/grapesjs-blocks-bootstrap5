import ComponentBase from "./ComponentBase";

export default class Ratio extends ComponentBase {

	get name() {
		return "Ratio"
	}
	addBlocks() {
		this.blockManager.add(this.type, {
			label: this.createLabel("bi bi-aspect-ratio", this.name),
			category: 'Media',
			//language=HTML
			content: `
				<div class='ratio ratio-16x9 overflow-hidden' data-gj="${this.type}">
					
				</div>`
		});
	}

	addTypes() {

		this.components.addType(this.type, {
			extend: this.namespace + "default",
			model: {
				defaults: {
					name: this.name,
					tagName: 'div',
					resizable: false,
					draggable: true,
					droppable: true,
					stylable: false,
					classes: ['ratio', 'ratio-21x9', 'overflow-hidden'],
					traits: [
						{
							type: 'class_select',
							options: [
								{value: '', name: 'None'},
								{value: 'ratio-21x9', name: '21:9'},
								{value: 'ratio-16x9', name: '16:9'},
								{value: 'ratio-4x3', name: '4:3'},
								{value: 'ratio-1x1', name: '1:1'},
							],
							name : "aspect-ratio",
							label: 'Aspect Ratio',
						},
						...this.traits
					]
				}
			},
			isComponent: (el) => {
				if (el && el.classList && el.classList.contains('ratio')) {
					return {type: this.type};
				}
			},
			view: {
				init() {
					const props = [
						'Aspect Ratio',
					];
					const reactTo = props.map(prop => `change:${prop}`).join(' ');
					this.listenTo(this.model, reactTo, this.render);
					const comps = this.model.components();
					// Add a basic template if it's not yet initialized
				},
			}
		});
	}
}

