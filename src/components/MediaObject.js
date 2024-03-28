import ComponentBase from "./ComponentBase";
export default class MediaObject extends ComponentBase {

	get name() {
		return "MediaObject"
	}
	addBlocks() {
		this.blockManager.add(this.type,{
			label: "Media Object",
			//language=SVG
			media : `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 8">
                    <title>container</title>
                    <path d="M8,9v6H2V9H8M9,8H1v8H9V8Z" transform="translate(-1 -8)"/>
                    <polygon points="22 2 9 2 9 4 22 4 22 2 22 2"/>
                    <polygon points="20 5 9 5 9 6 20 6 20 5 20 5"/>
                    <polygon points="7.29 6.71 1 6.71 1 7 7.29 7 7.29 6.71 7.29 6.71"/>
                    <polygon points="1.57 6.71 2.43 5.86 3.57 6.71 5.29 5 7.29 6.71 1.57 6.71"/>
                    <circle cx="3" cy="3" r="1"/>
                </svg>`,
			category: 'Components',
			//language=HTML
			content: `
			<div class="media-object d-flex align-items-center w-100" data-gjs-type="${this.type}">
				<div class="flex-shrink-0" data-gjs-type="${this.namespace}shrink">
					<div class="avatar">
						<img src="" data-gjs-type="${this.namespace}image">
					</div>
				</div>
				<div class="flex-grow-1 ms-3" data-gjs-type="${this.namespace}grow">
					Cras sit amet nibh libero, in gravida nulla.
				</div>
			</div>`
		});
	}
	addTypes() {
		this.components.addType(this.type, {
			extend: this.namespace + "default",
			model: {
				defaults: {
					name: 'Media Object',
					tagName: 'div',
					classes: ["d-flex", "media-object"]
				}
			},
			isComponent: (el) => {
				if (el && el.classList && el.classList.contains('media-object')) {
					return {type: this.type};
				}
			}
		});

		this.components.addType(this.namespace + "shrink", {
			extend: this.namespace + "default",
			model: {
				defaults: {
					name: 'Flex Shrink',
					tagName: 'div',
					classes: ['flex-shrink-0','ms-3']
				}
			},
			isComponent: (el) => {
				if (el && el.classList && el.classList.contains('flex-shrink-0')) {
					return {type: this.namespace + "shrink"};
				}
			}
		});

		this.components.addType(this.namespace + "grow", {
			extend: this.namespace + "default",
			model: {
				defaults: {
					name: 'Flex Grow',
					tagName: 'div',
					classes: ['flex-grow-1','ms-3']
				}
			},
			isComponent: (el) => {
				if (el && el.classList && el.classList.contains('flex-grow-1')) {
					return {type: this.namespace + "grow"};
				}
			}
		});
	}
}
