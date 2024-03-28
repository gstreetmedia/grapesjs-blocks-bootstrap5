
import ComponentBase from "./ComponentBase";

export default class Container extends ComponentBase {

	addBlocks() {
		this.blockManager.add(this.type,
			{
				attributes : {
					title : "Container"
				},
				label: "Container",
				//language=SVG
				media: `
                    <svg id="container" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14">
                        <title>container</title>
                        <path d="M7,7.8" transform="translate(0 -5)"
                              style="fill:none;stroke:#000;stroke-miterlimit:10"/>
                        <path d="M23,6V18H1V6H23m1-1H0V19H24V5Z" transform="translate(0 -5)"/>
                    </svg>`,
				category: 'Layout',
				//language=HTML
				content: `
                    <div class='container mb-3' data-gjs-type="${this.type}">
                            <!--<div class="row" data-gjs-type="${this.namespace}row">
							
							<div class="col mb-3" data-gjs-type="${this.namespace}column">
						
							</div>
							<div class="col mb-3" data-gjs-type="${this.namespace}column">
							
							</div>
							<div class="col mb-3" data-gjs-type="${this.namespace}column">
					
							</div>
							<div class="col mb-3" data-gjs-type="${this.namespace}column">
						
							</div>
							
						</div>-->
                    </div>`
			});
	}

	addTypes() {

		this.components.addType(this.type, {
			extend: this.namespace + "default",
			model: {
				defaults: {
					name: 'Container',
					tagName: 'div',
					droppable: true,
					draggable: true,
					stylable: false,
					traits: this.traits
				}
			},
			isComponent: (el) => {
				if (el && el.classList && (el.classList.contains('container') || el.classList.contains('container-fluid'))) {
					return {type: this.type};
				}
			}

		});
	}
}


