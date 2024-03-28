import ComponentBase from "./ComponentBase";
import traits from "../traits/traits";
export default class Image extends ComponentBase {

	get src() {
		return 'https://dummyimage.com/800x500/999/222';
	}

	addBlocks() {
		this.blockManager.add(this.type, {
			label: this.createLabel("bi bi-image", this.name),
			category: 'Basic',
			content: `<img src='${this.src}' data-gjs-type='${this.type}' alt="..." loading="eager" class="object-fit-cover">`
		});
	}

	addTypes() {

		this.components.addType(this.type, {
			extend: this.namespace + "default",
			model: {
				defaults: {
					'name': 'Image',
					tagName: 'img',
					resizable: 1,
					attributes: {
						src: this.src,
					},
					classes: ['img-fluid'],
					stylable: false,
					traits: [
						{
							type: 'file_select',
							label: 'File',
							name: 'src'
						},
						{
							type: 'text',
							label: 'Alternate text',
							name: 'alt'
						},
						traits.objectFit,
						traits.spacingPadding,
						traits.spacingMargin,
						traits.float
					]
				}
			},
			isComponent: (el) => {
				if (el && el.tagName === 'IMG') {
					return {type: this.type};
				}
			}
		});
	}
}

