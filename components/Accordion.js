import ComponentBase from "./ComponentBase";

export default class Accordion extends ComponentBase {

	constructor(editor) {
		super(editor);
	}

	get type() {
		return "accordion"
	}

	get name() {
		return "Accordion"
	}

	get item() {
		//language=HTML
		return `
            <div class="accordion-item" data-gjs-type="${this.type}-item">
                <h2 class="accordion-header" data-gjs-type="${this.type}-header">
                    <div class="accordion-button" 
						 type="button" 
						 data-bs-toggle="collapse"
                         data-bs-target="#collapseOne"
                         aria-expanded="false"
                         aria-controls="collapseOne"
                         data-gjs-type="accordion_button"
                         role="button"
                    >
                        Accordion Item #1
                    </div>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordion"
                     data-gjs-type="${this.type}-collapse">
                    <div class="accordion-body" data-gjs-type="${this.type}-body">
                        <div>

                        </div>
                    </div>
                </div>
            </div>`
	}


	addBlocks() {
		this.blockManager.add(this.type, {
			attributes : {
				title : this.name
			},
			label: this.name,
			//language=SVG
			media: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14">
                    <defs>
                        <style>.a{opacity:0.5;}</style>
                    </defs>
                    <title>container</title>
                    <g class="a">
                        <path d="M22.25,6a.76.76,0,0,1,.75.75v10.5a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,17.25V6.75A.76.76,0,0,1,1.75,6h20.5m0-1H1.75A1.76,1.76,0,0,0,0,6.75v10.5A1.76,1.76,0,0,0,1.75,19h20.5A1.76,1.76,0,0,0,24,17.25V6.75A1.76,1.76,0,0,0,22.25,5Z"
                              transform="translate(0 -5)"/>
                    </g>
                    <g class="a">
                        <polygon points="19.65 2.01 19.38 2.29 20.2 3.09 20.46 2.81 19.65 2.01 19.65 2.01"/>
                        <polygon points="20.73 2 19.93 2.82 20.2 3.09 21 2.27 20.73 2 20.73 2"/>
                    </g>
                    <polygon points="7 2 2 2 2 3 7 3 7 2 7 2"/>
                    <g class="a">
                        <polygon points="23 4 1 4 1 5 23 5 23 4 23 4"/>
                    </g>
                    <g class="a">
                        <polygon points="19.65 6.01 19.38 6.29 20.2 7.09 20.46 6.81 19.65 6.01 19.65 6.01"/>
                        <polygon points="20.73 6 19.93 6.82 20.2 7.09 21 6.27 20.73 6 20.73 6"/>
                    </g>
                    <polygon points="7 6 2 6 2 7 7 7 7 6 7 6"/>
                    <g class="a">
                        <polygon points="23 8 1 8 1 9 23 9 23 8 23 8"/>
                    </g>
                </svg>`,
			category: 'Components',
			id: this.type,
			//language=HTML
			content: `
				<div class="accordion open" id="accordion" data-gjs-type="${this.type}">
					${this.item}
				</div>
			`,
			activate: true
		});

		/*

		this.blockManager.add(this.type + '_item', {
			//language=HTML
			label: this.createLabel("bi bi-card-heading", this.name + " Item"),
			recordId: this.type + "_item",
			category: 'Components',
			content: this.item,
			activate: true
		});

		 */
	}

	addTypes() {
		let context = this;
		this.components.addType(this.type, {
			extend: this.namespace + "default",
			model: {
				defaults: {
					name: this.name,
					classes: ['accordion'],
					draggable : true,
					droppable: '.accordion-item',//this.type + "-item",
					traits: this.traits
				},
				update() {

				},
				init() {
					this.on('component:create', this.setItemAttributes);
					this.on('component:update', this.setItemAttributes);
					this.on('change:attributes:recordId', this.setItemAttributes);
				},
				setItemAttributes() {
					console.warn("setAccordionItemAttributes");
					let attributes = this.getAttributes();
					let id = attributes.id;
					let accordions = this.findType("accordion_item");

					accordions.forEach(
						(item, index) => {
							let button = item.findType("accordion_button")[0];
							let collapse = item.findType("accordion_collapse")[0];
							let itemId = id + "-" + index;
							button.addAttributes({
								"data-bs-target": "#" + itemId,
								"aria-controls": itemId,
								"aria-expanded": "false",
								"data-bs-toggle": "collapse"
							})
							collapse.addAttributes({"data-bs-parent": "#" + id, id: itemId});
						}
					)
				}
			},

			isComponent: (el) => {
				if (el && el.classList && el.classList.contains('accordion')) {
					return {type: this.type};
				}
			}
		});

		this.components.addType(this.type + '-item', {
			extend: this.namespace + "default",
			model: {
				defaults: {
					name: this.name + " Item",
					classes: ['accordion-item'],
					droppable: false,
					draggable: '.accordion',//this.type,
					stylable : false,
					traits : this.traits
				},
				init() {

				},
				updated() {

				}
			},
			isComponent: (el) => {
				if (el && el.classList && el.classList.contains('accordion-item')) {
					return {type: this.type + '-item'};
				}
			}
		});

		this.components.addType(this.type + '-header', {
			extend: this.namespace + "default",
			model: {
				defaults: {
					name: this.name + " Header",
					classes: ['accordion-header'],
					droppable: false,
					removable: false,
					copyable: false,
					draggable: false,
					selectable: true,
					stylable : false,
					traits : this.traits
				},
				init() {

				}
			},
			isComponent: (el) => {
				if (el && el.classList && el.classList.contains('accordion-header')) {
					return {type: this.type + '-header'};
				}
			}
		});

		this.components.addType(this.type + '-button', {
			extend: this.namespace + "text",
			model: {
				defaults: {
					name: this.name + " Button",
					classes: ['accordion-button'],
					droppable: true,
					removable: false,
					copyable: false,
					draggable: false,
					stylable : false,
					traits : this.traits
				},
				updated(property, value, previous) {
					console.log(this.getAttributes());
					if (this.getAttributes().title) {
						//this.getView().el.innerHTML = this.getAttributes().title;
					}
				}
			},
			isComponent: (el) => {
				if (el && el.classList && el.classList.contains('accordion-button')) {
					return {type: this.type + '-button'};
				}
			},

			view: {
				init() {
					let el = null;
					console.log(this);

					if (this.el) {
						this.el.addEventListener(
							"keydown",
							(e) => {
								console.log(e);
								//e.stopPropagation();

							}
						)
						this.el.addEventListener(
							"click",
							(e) => {
								console.log(e);
								//e.stopPropagation();
							}
						)
					}
				}
			}
		});

		this.components.addType(this.type + '-collapse', {
			extend: this.namespace + "default",
			model: {
				defaults: {
					name: this.name + " Collapse",
					classes: ['accordion-collapse'],
					droppable: false,
					removable: false,
					copyable: false,
					draggable: false,
					stylable : false,
					highlightable : false,
				},
				init() {

				}
			},
			isComponent: (el) => {
				if (el && el.classList && el.classList.contains('accordion-collapse')) {
					return {type: this.type + '-collapse'};
				}
			}
		});

		this.components.addType(this.type + '-body', {
			extend: this.namespace + "text",
			model: {
				defaults: {
					name: this.name + " Body",
					classes: ['accordion-body'],
					/*
					droppable: true,
					removable: false,
					copyable: false,
					draggable: false,

					 */
					stylable : false,
					traits : this.traits,
					editable : true
				},
				init() {

				}
			},
			isComponent: (el) => {
				if (el && el.classList && el.classList.contains('accordion-body')) {
					return {type: this.type + '-body'};
					console.log("casting accordion body as text");
					return {type: 'bs-text'};
				}
			}
		});


	}
}