import ComponentBase from "../ComponentBase";

export default class CarouselOlld extends ComponentBase {

	get type() {
		return 'carousel';
	}

	get item() {
		//language=HTML
		return `
			<div class="carousel-item" data-gjs-type="${this.type}_item">
				<div class="ratio ratio-21x9" data-gjs-type="ratio">
					<img src="https://dummyimage.com/800x500/999/222" class="d-block w-100 object-fit-cover" alt="" data-gjs-type="bs_image">
				</div>
			</div>`
	}

	addBlocks() {
		this.blockManager.add(
			this.type,
			{
				label: `
				<i class="bi bi-images fs-3 mb-3d-blobk"></i>
				<div>Carousel</div>
				`,
				category : "Components",
				//language=HTML
				content: `
					<div id="carousel" class="carousel slide" data-gjs-type="${this.type}">
						<div class="carousel-inner" data-gjs-type="${this.type}_inner">
							${this.item}
							${this.item}
							${this.item}
						</div>
						<button class="carousel-control-prev" type="button" data-bs-target="#carousel"
						        data-bs-slide="prev" data-gjs-type="${this.type}_prev">
							<span class="carousel-control-prev-icon" aria-hidden="true"></span>
							<span class="visually-hidden">Previous</span>
						</button>
						<button class="carousel-control-next" type="button" data-bs-target="#carousel"
						        data-bs-slide="next" data-gjs-type="${this.type}_next">
							<span class="carousel-control-next-icon" aria-hidden="true"></span>
							<span class="visually-hidden">Next</span>
						</button>
					</div>`
			}
		);
		this.blockManager.add(
			this.type + "_item",
			{
				label: "Carousel Item",
				category : "Components",
				//language=HTML
				content: this.item
			}
		);
	}

	addTypes() {
		this.components.addType(
			this.type,
			{
				extend: "bs-default",
				model: {
					"name" : "Carousel",
					defaults : {

					},
					init() {
						setTimeout(
							() => {
								this.setCarouselAttributes();
							},
							0
						)

					},
					setCarouselAttributes() {
						console.log(this.el);
						let items = this.findType("carousel_item");
						console.log(items);
						items.forEach(
							(item, index) => {
								console.log(item);
								if (index === 0) {
									item.setAttributes({"class": ['carousel-item', 'active']});
								}
							}
						)
					}
				},
				isComponent: (el) => {
					if (el && el.classList && el.classList.contains("carousel")) {
						return {type: this.type};
					}
				},

			}
		);
		this.components.addType(
			this.type + "_inner",
			{
				extend: "bs-default",
				model: {
					"name" : "Carousel Inner",
					droppable: [this.type + "_item"],
					removable : false,
					copyable : false,
					draggable : false
				},
				isComponent: (el) => {
					if (el && el.classList && el.classList.contains("carousel-inner")) {
						return {type: this.type + "_inner"};
					}
				}
			}
		);
		this.components.addType(
			this.type + "_item",
			{
				extend: "bs-default",
				model: {
					name : "Carousel Item",
					draggable : ['bs_carousel_inner']
				},
				isComponent: (el) => {
					if (el && el.classList && el.classList.contains("carousel-item")) {
						return {type: this.type + '_item'};
					}
				}
			}
		);

		this.components.addType(
			this.type + "_prev",
			{
				extend: "bs-default",
				model: {
					"name" : "Previous",
					droppable: false,
					removable : false,
					copyable : false,
					draggable : false
				},
				isComponent: (el) => {
					if (el && el.classList && el.classList.contains("carousel-inner")) {
						return {type: this.type + "_inner"};
					}
				}
			}
		);
		this.components.addType(
			this.type + "_next",
			{
				extend: "bs-default",
				model: {
					"name" : "Next",
					droppable: false,
					removable : false,
					copyable : false,
					draggable : false
				},
				isComponent: (el) => {
					if (el && el.classList && el.classList.contains("carousel-inner")) {
						return {type: this.type + "_inner"};
					}
				}
			}
		);
	}
}