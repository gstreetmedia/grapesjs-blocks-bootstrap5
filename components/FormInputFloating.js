import ComponentBase from "./ComponentBase";

export default class FormInputFloating extends ComponentBase {

	addBlocks() {
		this.blockManager.add(
			this.type, {
				label: "Floating Input",
				//language=SVG
				media: `
                    <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path class="gjs-block-svg-path"
                              d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z"></path>
                        <polygon class="gjs-block-svg-path" points="4 10 5 10 5 14 4 14"></polygon>
                    </svg>
				`,
				category: 'Forms',
				//language=HTML
				content: `
					<div class="form-floating" data-gjs-type="${this.type}">
						<input type="text" class="form-control" value="Some Value" data-gjs="${this.namespace}input">
						<label data-gjs="${this.namespace}label" for="">Label</label>
					</div>`,
			}
		)
	}

	addTypes() {
		this.components.addType(
			this.type, {
				extend: this.namespace+"default",
				model: {
					defaults: {
						name : "Floating Input",
						classes: ['form-floating'],
						draggable: false,
						droppable: true,
					},
				}, isComponent: (el) => {
					if (el && el.classList && el.classList.contains("form-floating")) {
						return {type: this.type};
					}
				}
			}
		)
	}
}