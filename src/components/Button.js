import ComponentBase from "./ComponentBase";
import traits from "../traits/traits";

export default class Button extends ComponentBase {

	get name() {
		return "Button";
	}

	addBlocks() {
		this.blockManager.add(
			this.type, {
				attributes: {
					title: "Button"
				},
				label: "Button",
				//language=HTML
				media: `
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 8"><title>container</title>
						<path d="M19.5,9a.5.5,0,0,1,.5.5v5a.5.5,0,0,1-.5.5H4.5a.5.5,0,0,1-.5-.5v-5A.5.5,0,0,1,4.5,9h15m0-1H4.5A1.5,1.5,0,0,0,3,9.5v5A1.5,1.5,0,0,0,4.5,16h15A1.5,1.5,0,0,0,21,14.5v-5A1.5,1.5,0,0,0,19.5,8Z"
						      transform="translate(-3 -8)"/>
						<polygon points="11 3 3 3 3 5 11 5 11 3 11 3"/>
						<polygon points="15 3 13 3 13 5 15 5 15 3 15 3"/>
					</svg>
				`,
				category: 'Basic',
				content: `<div class="btn btn-primary" role="button" data-gjs-type="${this.type}">Button!</div>`,
			}
		)

		this.blockManager.add(
			this.type + "-group", {
				attributes: {
					title: "Button Group"
				},
				label: "Button Group",
				//language=HTML
				media: `
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 8"><title>container</title>
						<path d="M8,9v6H2.5a.5.5,0,0,1-.5-.5v-5A.5.5,0,0,1,2.5,9H8M9,8H2.5A1.5,1.5,0,0,0,1,9.5v5A1.5,1.5,0,0,0,2.5,16H9V8Z"
						      transform="translate(-1 -8)"/>
						<polygon points="6 3 2 3 2 5 6 5 6 3 6 3"/>
						<path d="M21.5,9a.5.5,0,0,1,.5.5v5a.5.5,0,0,1-.5.5H16V9h5.5m0-1H15v8h6.5A1.5,1.5,0,0,0,23,14.5v-5A1.5,1.5,0,0,0,21.5,8Z"
						      transform="translate(-1 -8)"/>
						<path d="M15,9v6H9V9h6m1-1H8v8h8V8Z" transform="translate(-1 -8)"/>
						<polygon points="13 3 9 3 9 5 13 5 13 3 13 3"/>
						<polygon points="20 3 16 3 16 5 20 5 20 3 20 3"/>
					</svg>
				`,
				category: 'Basic',
				//language=HTML
				content: `
					<div class="btn-group" role="group" aria-label="Basic example" data-gjs-type="${this.type}-group">
						<div class="btn btn-primary" role="button" data-gjs-type="${this.type}">Button 1</div>
						<div class="btn btn-primary" role="button" data-gjs-type="${this.type}">Button 2</div>
					</div>`
			}
		)
	}

	addTypes() {
		this.components.addType(
			this.type, {
				extend: this.namespace + "text",
				model: {
					defaults: {
						name: this.name,
						droppable: true,
						attributes: {
							//role: 'button'
						},
						classes: ['btn'],
						stylable: false,
						traits: [
							traits.buttonType,
							...this.traits
						]
					},
					afterChange(e) {
						console.log(this.attributes.type);
						if (this.attributes.type === 'button') {
							if (this.attributes.classes.filter((klass) => {
								return klass.id === 'btn'
							}).length === 0) {
								this.changeType(this.namespace + 'link');
							}
						}
					}
				},
				isComponent: (el) => {
					if (el && el.classList && el.classList.contains('btn')) {
						return {type: this.type};
					}
					if (el && el.classList && el.classList.contains('accordion-button')) {
						return false
					}
					if (el && el.tagName === "BUTTON") {
						console.log("casting as BUTTON");
						return {type: this.type};
					}
				},
				/*
				viewExtend : this.namespace + "text",
				view: {
					events: {
						'click': 'handleClick',
						'keydown': 'handleClick',
						'keyup': 'handleClick'
					},
					init() {
						//this.listenTo(this.model, 'change:content', this.updateContent);
					},
					updateContent() {
						//this.el.innerHTML = this.model.get('content')
					},
					handleClick(e) {
						console.log(e);
						e.preventDefault();
						e.target.setAttribute("contenteditable", true)
					}
				}
				*/
			}
		)

		this.components.addType(this.type + "-group",
			{

				model: {
					defaults: {
						classes: ['btn-group'],
						name: "Button Group",
					}
				},
				isComponent: (el) => {
					if (el && el.classList && el.classList.contains('btn-group')) {
						return {type: this.type + "-group"};
					}
				},
			}
		);
	}
}
