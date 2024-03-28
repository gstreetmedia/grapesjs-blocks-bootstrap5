import ComponentBase from "./ComponentBase";

export default class FormInput extends ComponentBase {


	addBlocks() {
		this.blockManager.add(
			this.name,
			{
				label: this.createLabel('bi bi-input-cursor-text', 'FormInput'),
				category: "Forms",
				//language=HTML
				content: `
					<div class="mb-3">
						<label class="form-label" for="" data-gjs-type="${this.type}-label">Label</label>
						<input type="text" class="form-control" data-gjs-type="${this.type}" placeholder="Input"/>
					</div>`

			}
		);


		this.blockManager.add(
			this.namespace + "label",
			{
				label: this.createLabel('bi bi-tag', 'Label'),
				category: "Forms",
				//language=HTML
				content: `
					<label class="form-check-label" for="" data-gjs-type="${this.type}-label">Label</label>`
			}
		);


		this.blockManager.add(
			this.namespace + "check",
			{
				attributes: {
					title: "Checkbox"
				},
				label: 'Checkbox',
				//language=SVG
				media: `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 6">
                        <title>container</title>
                        <path d="M7,10v4H3V10H7M8,9H2v6H8V9Z" transform="translate(-2 -9)"/>
                        <rect x="7" y="2" width="13" height="2"/>
                    </svg>`,
				category: "Forms",
				//language=HTML
				content: `
					<div class="form-check mb-3" data-gjs-type="${this.type}-form-check">
						<input class="form-check-input" type="checkbox" value="" id="defaultCheck1"
						       data-gjs-type="${this.type}-check">
						<label class="form-check-label" for="defaultCheck1" data-gjs-type="${this.type}-label">Default
							checkbox</label>
					</div>`
			}
		);


		this.blockManager.add(
			this.namespace + "radio",
			{
				attributes: {
					title: "Radio"
				},
				label: 'Radio',
				//language=SVG
				media: `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 7">
                        <title>container</title>
                        <rect x="8" y="2.5" width="13" height="2"/>
                        <path d="M4.5,9.5A2.5,2.5,0,1,1,2,12,2.5,2.5,0,0,1,4.5,9.5m0-1A3.5,3.5,0,1,0,8,12,3.5,3.5,0,0,0,4.5,8.5Z"
                              transform="translate(-1 -8.5)"/>
                    </svg>`,
				category: "Forms",
				//language=HTML
				content: `
					<div class="form-check mb-3" data-gjs-type="${this.type}-form-check">
						<input class="form-check-input" type="radio" id="defaultCheck1"
						       data-gjs-type="${this.type}-radio">
						<label class="form-check-label" for="defaultCheck1" data-gjs-type="${this.type}-label">Default
							checkbox</label>
					</div>`
			}
		);


	}

	addTypes() {
		this.components.addType(this.type, {
			extend: this.namespace + "default",
			model: {
				defaults: {
					name: "FormInput",
					tagName: 'input',
					draggable: true,
					droppable: false,
					stylable: false,
					traits: [
						{
							label: "Type",
							type: 'select',
							name: 'type',
							options: [
								{value: "button", name: "button"},
								{value: "color", name: "color"},
								{value: "date", name: "date"},
								{value: "datetime-local", name: "date time"},
								{value: "email", name: "email"},
								{value: "file", name: "file"},
								{value: "hidden", name: "hidden"},
								{value: "image", name: "image"},
								{value: "month", name: "month"},
								{value: "number", name: "number"},
								{value: "password", name: "password"},
								{value: "range", name: "range"},
								{value: "reset", name: "reset"},
								{value: "search", name: "search"},
								{value: "submit", name: "submit"},
								{value: "tel", name: "tel"},
								{value: "text", name: "text"},
								{value: "time", name: "time"},
								{value: "url", name: "url"},
								{value: "week", name: "week"}
							]
						}
					].concat(this.inputTraits).concat([this.traitInputSize,
						this.traitBackgroundColor,
						this.traitBorderColor])
				}
			},
			isComponent: (el) => {
				if (el.tagName === 'INPUT' && !["checkbox", "radio"].includes(el.type)) {
					return {type: this.type};
				}
			},
			view: {
				events: {
					"click": "handleClick"
				},
				handleClick: (e) => {
					e.preventDefault();
				}
			}
		});

		this.components.addType(this.type + '-label', {
			extend: "text",
			model: {
				defaults: {
					tagName: 'label',
					stylable: false,
					traits: [
						{
							label: "For",
							type: 'input',
							name: "for"
						}
					],
				},
			},
			isComponent: (el) => {
				if (el && el.tagName === "LABEL" && el.classList.contains('form-check-label')) {
					return {type: this.type + '-label'};
				}
			}
		});

		this.components.addType(this.type + '-checkbox', {
			extend: this.namespace + "input",
			model: {
				defaults: {
					name: "Checkbox",
					tagName: 'input',
					draggable: true,
					droppable: false,
					stylable: false,
					classes: ['form-check-input'],
					traits: [
						{
							label: "Checked",
							type: 'checkbox',
							name: 'checked',
						}
					].concat(this.inputTraits),
				},
				init() {
					this.listenTo(this, 'change:checked', this.handleChecked);
				},
				handleChecked() {
					let checked = this.get('checked');
					let attrs = this.get('attributes');
					const view = this.view;

					if (checked) {
						attrs.checked = true;
					} else {
						delete attrs.checked;
					}

					if (view) {
						view.el.checked = checked
					}

					this.set('attributes', {...attrs});
				}
			},
			isComponent: (el) => {
				if (el.tagName === 'INPUT' && el.type === "checkbox") {
					return {type: this.type + '-checkbox'};
				}
			}
		});


		// RADIO
		this.components.addType(this.type + "-radio", {
			model: {
				defaults: {
					name: "Radio",
					tagName: 'input',
					classes: ['form-check-input'],
					draggable: true,
					droppable: false,
					stylable: false,
					traits: [
						{
							label: "Checked",
							type: 'checkbox',
							name: 'checked',
						}
					].concat(this.inputTraits),
				}
			},
			isComponent: (el) => {
				//console.log(el);
				if (el.tagName === 'INPUT' && el.type === 'radio') {
					return {type: this.type + '-radio'};
				}
			}
		});

		this.components.addType(this.type + "-form-check", {
			model: {
				defaults: {
					name: "Form Check",
					tagName: 'div',
					draggable: true,
					droppable: false,
					stylable: false,
					traits: [
						this.traitCheckType,
						this.traitMarginBottom,
						this.traitId,
						this.traitTitle
					]
				}
			},
			isComponent: (el) => {
				if (el.tagName === 'DIV' && el.classList.contains('form-check')) {
					return {type: this.type + '-form-check'};
				}
			}
		});
	}

	get traitName() {
		return {
			label: "Name",
			type: 'input',
			name: "name"
		}
	}

	get traitValue() {
		return {
			label: "Value",
			type: 'input',
			name: "value"
		}
	}

	get traitPlaceHolder() {
		return {
			label: "Placeholder",
			type: 'input',
			name: "placeholder"
		}
	}

	get traitRequired() {
		return {
			label: "Required",
			type: 'checkbox',
			name: "required",
			changeProp: 1
		}
	}

	get inputTraits() {
		return [
			this.traitId,
			this.traitName,
			this.traitValue,
			this.traitPlaceHolder,
			this.traitRequired,
		]
	}

	get traitCheckType() {
		return {
			type: 'class_select',
			options: [
				{value: '', name: 'Default'},
				{value: 'form-switch', name: 'Switch'},
				{value: 'form-check-inline', name: 'Inline'},
				{value: 'form-check-reverse', name: 'Reverse'}
			],
			name: 'check-style',
			label: 'Checkbox Style'
		}
	}

	get traitInputSize() {
		return {
			type: 'class_select',
			options: [
				{value: '', name: 'Default'},
				{value: 'form-control-lg', name: 'Large'},
				{value: 'form-control-sm', name: 'Small'},
			],
			name: 'input-size',
			label: 'FormInput Size'
		}
	}
}
