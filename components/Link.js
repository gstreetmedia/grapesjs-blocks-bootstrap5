/*
known issues:
- BS dropdown JS isn't attached if you remove the existing toggle and add a new one
*/


import ComponentBase from "./ComponentBase";

export default class Link extends ComponentBase {

	get name() {
		return "Link";
	}
	addBlocks() {
		this.blockManager.add(this.type, {
			label: this.createLabel("bi bi-link", "Link"),
			category: 'Basic',
			content: {
				type: 'link',
				content: 'Link text'
			}
		});
	}

	addTypes() {

		const comps = editor.DomComponents;
		const textType = comps.getType('text');
		const textModel = textType.model;

		const linkType = comps.getType('link');
		const linkView = linkType.view;

		this.components.addType(this.type, {
				extend: this.namespace + "text",
				model: {
					defaults: {
						name: "link",
						tagName: 'a',
						droppable: true,
						editable: true,
						traits: [
							{
								type: 'text',
								label: 'Href',
								name: 'href',
								placeholder: 'https://www.grapesjs.com'
							},
							{
								type: 'select',
								options: [
									{value: '', name: 'This window'},
									{value: '_blank', name: 'New window'}
								],
								label: 'Target',
								name: 'target',
							},
							{
								type: 'select',
								options: [
									{value: '', name: 'None'},
									{value: 'button', name: 'Self'},
									{value: 'collapse', name: 'Collapse'},
									{value: 'dropdown', name: 'Dropdown'}
								],
								label: 'Toggles',
								name: 'data-toggle',
								changeProp: 1
							},
							...this.traits
						]
					},
					init() {
						//textModel.prototype.init.call(this);
						this.listenTo(this, 'change:data-toggle', this.setupToggle);
						this.listenTo(this, 'change:attributes', this.setupToggle); // for when href changes
					},
					setupToggle(a, b, options = {}) { // TODO this should be in the dropdown comp and not the link comp
						if (options.ignore === true && options.force !== true) {
							return;
						}
						console.log('setup toggle');
						const attrs = this.getAttributes();
						const href = attrs.href;
						// old attributes are not removed from DOM even if deleted...
						delete attrs['data-toggle'];
						delete attrs['aria-expanded'];
						delete attrs['aria-controls'];
						delete attrs['aria-haspopup'];
						if (href && href.length > 0 && href.match(/^#/)) {
							console.log('link has href');
							// find the el where recordId == link href
							const els = this.em.get('Editor').DomComponents.getWrapper().find(href);
							if (els.length > 0) {
								console.log('referenced el found');
								const el = els[0]; // should only be one el with this ID
								const el_attrs = el.getAttributes();
								//delete el_attrs['aria-labelledby'];
								const el_classes = el_attrs.class;
								if (el_classes) {
									console.log('el has classes');
									const el_classes_list = el_classes.split(' ');
									const includes = ['collapse', 'dropdown-menu'];
									const intersection = el_classes_list.filter(x => includes.includes(x));

									if (intersection.length) {
										console.log('link data-toggle matches el class');
										switch (intersection[0]) {
											case 'collapse':
												attrs['data-toggle'] = 'collapse';
												break;
										}
										attrs['aria-expanded'] = el_classes_list.includes('show');
										if (intersection[0] === 'collapse') {
											attrs['aria-controls'] = href.substring(1);
										}
									}
								}
							}
						}
						this.set('attributes', attrs, {ignore: true});
					},
					classesChanged(e) {
						console.log('classes changed');
						if (this.attributes.type === 'link') {
							if (this.attributes.classes.filter(function (klass) {
								return klass.id === 'btn'
							}).length > 0) {
								this.changeType('button');
							}
						}
					}
				},
				isComponent: (el) => {
					if (el && el.tagName && el.tagName === 'A') {
						return {type: this.type};
					}
				},
				viewExtend: "link"
			}
		);
	}
}


