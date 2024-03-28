import ComponentBase from "./ComponentBase";
import traits from "../traits/traits";
export default class Carousel extends ComponentBase {

	/*
	get type() {
		return 'carousel';
	}

	get name() {
		return "Carousel"
	}

	 */

	item(index) {
		//language=HTML
		return `
			<div class="carousel-item position-relative ${index === 0 ? 'active' : ''}"
			     data-gjs-type="${this.type}-item">
				<div class="ratio ratio-21x9" data-gjs-type="ratio">
					<img src="https://dummyimage.com/800x500/999/222" class="d-block w-100 object-fit-cover" alt=""
					     data-gjs-type="${this.namespace}image">
				</div>
				<div class="carousel-item-content position-absolute bottom-0 end-0 start-0 m-md-5 m-3 p-3 text-bg-primary rounded"
				     data-gjs-type="${this.type}-item-content">
					<h2 class="fs-1">Title ${index + 1}</h2>
					<h4>Subheading</h4>
				</div>
			</div>`
	}

	addBlocks() {
		this.blockManager.add(
			this.type,
			{
				attributes : {
					title : this.name
				},
				label: this.name,
				//language=SVG
				media: `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
                        <defs>
                            <style>.a{opacity:0.5;}</style>
                        </defs>
                        <title>container</title>
                        <path d="M22.25,5a.76.76,0,0,1,.75.75v12.5a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,18.25V5.75A.76.76,0,0,1,1.75,5h20.5m0-1H1.75A1.76,1.76,0,0,0,0,5.75v12.5A1.76,1.76,0,0,0,1.75,20h20.5A1.76,1.76,0,0,0,24,18.25V5.75A1.76,1.76,0,0,0,22.25,4Z"
                              transform="translate(0 -4)"/>
                        <g class="a">
                            <polygon points="3 15 6 12 10 15 16 9 23 15 3 15"/>
                            <circle cx="4" cy="4" r="1"/>
                        </g>
                        <g class="a">
                            <polygon points="21.81 7.27 21.01 8.09 21.29 8.35 22.09 7.54 21.81 7.27 21.81 7.27"/>
                            <polygon points="21.27 6.73 21 7.01 21.82 7.81 22.09 7.54 21.27 6.73 21.27 6.73"/>
                        </g>
                        <g class="a">
                            <polygon points="2.8 6.73 2 7.55 2.27 7.82 3.08 7 2.8 6.73 2.8 6.73"/>
                            <polygon points="2.27 7.28 2 7.55 2.82 8.35 3.09 8.08 2.27 7.28 2.27 7.28"/>
                        </g>
                    </svg>`,
				category: "Components",
				//language=HTML
				content: `
					<div id="carousel" class="carousel slide" data-gjs-type="${this.type}">
						<div class="carousel-inner" data-gjs-type="${this.type}-inner">
							${this.item(0)}
							${this.item(1)}
							${this.item(2)}
						</div>
						<button class="carousel-control-prev" type="button" data-bs-target="#carousel"
						        data-bs-slide="prev" data-gjs-type="${this.type}-prev">
							<i class="bi bi-chevron-right carousel-control-prev-icon"></i>
							<span class="visually-hidden">Previous</span>
						</button>
						<button class="carousel-control-next" type="button" data-bs-target="#carousel"
						        data-bs-slide="next" data-gjs-type="${this.type}-next">
							<i class="bi bi-chevron-left carousel-control-next-icon" aria-hidden="true"></i>
							<span class="visually-hidden">Next</span>
						</button>
					</div>`
			}
		);

		/*
		this.blockManager.add(
			this.type + "_item",
			{
				label: this.createLabel("bi bi-image", this.name + " Slide"),
				category: "Components",
				//language=HTML
				content: this.item
			}
		);

		 */
	}

	addTypes() {
		const context = this;
		this.components.addType(
			this.type,
			{
				extend: this.namespace + "default",
				model: {
					defaults: {
						name: "Carousel",
						traits: this.traits
					},
					init() {
						this.on('component:create', this.setItemAttributes);
						this.on('component:update', this.setItemAttributes);
						this.on('change:attributes:recordId', this.setItemAttributes);
					},
					/**
					 * Make sure all the ids match up
					 */
					setItemAttributes() {
						let items = this.findType(this.type + "-item");
						items.forEach(
							(item, index) => {
								if (index === 0) {
									item.addClass('active');
								}
							}
						)
						let id = this.getAttributes().id;
						let prev = this.findType(context.type + "-prev");
						if (prev.length > 0) {
							prev[0].addAttributes({
								"data-bs-target": "#" + id,
								type: "button",
								"data-bs-slide": "prev"
							});
						}

						let next = this.findType(context.type + "-next");
						if (next.length > 0) {
							next[0].addAttributes({
								"data-bs-target": "#" + id,
								type: "button",
								"data-bs-slide": "next"
							});
						}
					}
				},
				isComponent: (el) => {
					if (el && el.classList && el.classList.contains("carousel")) {
						return {type: context.type};
					}
				},

			}
		);

		this.components.addType(
			this.type + "-inner",
			{
				extend: this.namespace + "default",
				model: {
					defaults: {
						name: "Carousel Inner",
						droppable: ".carousel-item",
						removable: false,
						copyable: false,
						draggable: false
					}
				},
				isComponent: (el) => {
					if (el && el.classList && el.classList.contains("carousel-inner")) {
						return {type: context.type + "-inner"};
					}
				}
			}
		);
		this.components.addType(
			this.type + "-item",
			{
				extend: this.namespace + "default",
				model: {
					defaults: {
						name: "Carousel Item",
						classes: ['carousel-item'],
						draggable: ".carousel-inner", //can drag into other things
						droppable: true, //can drop other things inside
						stylable: false,
						traits: [
							{
								name: "interval",
								type: "number",
								min: 5000,
								max: 10000,
								step: 10000
							},
							this.traits
						]
					}
				},
				isComponent: (el) => {
					if (el && el.classList && el.classList.contains("carousel-item")) {
						return {type: context.type + '-item'};
					}
				}
			}
		);

		this.components.addType(
			this.type + "-item-content",
			{
				extend: this.namespace + "default",
				model: {
					defaults: {
						name: "Carousel Item Content",
						draggable: true,
						classes: ['carousel-item-content'],
						stylable: false,
						traits: this.traits,
						copyable: false
					}
				},
				isComponent: (el) => {
					if (el && el.classList && el.classList.contains("carousel-item-content")) {
						return {type: context.type + '-item-content'};
					}
				}
			}
		);


		this.components.addType(
			this.type + "-prev",
			{
				extend: this.namespace + "default",
				model: {
					defaults: {
						"name": this.name + " Previous",
						classes: ['carousel-control-prev'],
						droppable: false,
						removable: false,
						copyable: false,
						draggable: false,
						editable: false,
						stylable: false,
						badgable: false,
						propagate: ["droppable", "removable", "copyable", "editable", "stylable", "draggable", "badgable"],
						traits: [
							{
								type: 'text',
								label: 'Target',
								name: 'data-bs-target',
								placeholder: 'Carousel ID'
							}
						]
					}
				},
				isComponent: (el) => {
					if (el && el.getAttribute && el.getAttribute("data-bs-slide") === "prev") {
						console.log(el, context.type + "-prev");
						return {type: context.type + "-prev"};
					}
				}
			}
		);

		this.components.addType(
			this.type + "-prev-icon",
			{
				extend: this.namespace+"text",
				model: {
					defaults: {
						"name": this.name + " Previous Icon",
						classes: ['carousel-control-prev-icon'],
						droppable: false,
						removable: true,
						copyable: false,
						draggable: false,
						editable: false,
						stylable: false,
						badgable: false,
						propagate: ["droppable", "removable", "copyable", "editable", "stylable", "draggable", "badgable"],
						traits: [
							traits.textSize,
							traits.textColor
						]
					}
				},
				isComponent: (el) => {
					if (el && el.classList && el.classList.contains("carousel-control-prev-icon")) {
						return {type: this.type + "-prev-icon"};
					}
				}
			}
		);

		this.components.addType(
			this.type + "-next",
			{
				extend: this.namespace + "default",
				model: {
					defaults: {
						"name": this.name + " Next",
						classes: ['carousel-control-next'],
						droppable: false,
						removable: false,
						copyable: false,
						draggable: false,
						editable: false,
						stylable: false,
						badgable: false,
						propagate: ["droppable", "removable", "copyable", "editable", "stylable", "draggable", "badgable"],
						traits: [
							{
								type: 'text',
								label: 'Target',
								name: 'data-bs-target',
								placeholder: 'Carousel ID'
							}
						]
					}
				},
				isComponent: (el) => {
					if (el && el.getAttribute && el.getAttribute("data-bs-slide") === "next") {
						console.log(el, context.type + "-next");
						return {type: context.type + "-next"};
					}
				}
			}
		);

		this.components.addType(
			this.type + "-next-icon",
			{
				extend: this.namespace+"text",
				model: {
					defaults: {
						"name": this.name + " Next Icon",
						classes: ['carousel-control-next-icon'],
						droppable: false,
						removable: true,
						copyable: false,
						draggable: false,
						editable: false,
						stylable: false,
						badgable: false,
						propagate: ["droppable", "removable", "copyable", "editable", "stylable", "draggable", "badgable"],
						traits: [
							traits.textSize,
							traits.textColor
						]
					}
				},
				isComponent: (el) => {
					if (el && el.classList && el.classList.contains("carousel-control-next-icon")) {
						return {type: this.type + "-next-icon"};
					}
				}
			}
		);
	}
}
