import FormInput from "./FormInput";

export default class Textarea extends FormInput {

	get name() {
		return "TextArea"
	}
	addBlocks() {
		this.blockManager.add(
			this.name,
			{
				label: this.createLabel('bi bi-input-cursor-text', 'Text Area'),
				category: "Forms",
				//language=HTML
				content: `
					<div class="mb-3">
						<label class="form-check-label" for="" data-gjs-type="${this.type}-label">Label</label>
						<textarea type="text" class="form-control" data-gjs-type="${this.type}"></textarea>
					</div>
				`
			}
		)
	}

	addTypes() {
		this.components.addType(this.type, {
			extend: this.namespace + "input",
			model: {
				defaults: {
					tagName: 'textarea',
					draggable: true,
					droppable: false,
					traits: this.inputTraits,
				},
			},
			isComponent: (el) => {
				if (el.tagName === 'TEXTAREA') {
					return {type: this.type};
				}
			}
		});
	}
}