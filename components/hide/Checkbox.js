import ComponentBase from "../ComponentBase";

export default class Checkbox extends ComponentBase {

	addBlocks() {
		this.blockManager.add(
			this.name,
			{
				label: 'Checkbox',
				//language=SVG
				media: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 6"><defs><style>.a{fill:none;stroke:#000;stroke-miterlimit:10;}</style></defs><title>container</title><rect class="a" x="0.5" y="0.5" width="5" height="5"/><rect x="8" y="2" width="13" height="2"/><rect x="2.56" y="11.97" width="1" height="2" transform="translate(-9.28 -3.04) rotate(-45)"/><rect x="3.33" y="11.41" width="3" height="1" transform="translate(-8.01 -2.1) rotate(-45)"/></svg>`,
				category: "Forms",
				//language=HTML
				content: `
					<div class="form-check">
						<input class="form-check-input" type="checkbox" value="" id="defaultCheck1"
						       data-gjs-type="${this.namespace}input">
						<label class="form-check-label" for="defaultCheck1" data-gjs-type="${this.namespace}label">Default
							checkbox</label>
					</div>`
			}
		)
	}

	addTypes() {
		this.components.addType(this.type, {
			extend: this.namespace + "default",
			model: {
				defaults: {
					tagName: 'input',
					draggable: true,
					droppable: false,
					traits: [
						...this.inputTraits,
						{
							label: "Type",
							type: 'select',
							name: 'type',
						}
					],
				},
			}, isComponent: (el) => {
				if (el.tagName === 'INPUT') {
					return {type: this.type};
				}
			}
		});
	}
}
export const CheckboxBlock = (bm, label) => {
	bm.add('checkbox', {
		label: `
            ${checkIcon}
            <div>${label}</div>
        `,
		category: 'Forms',
		content: `
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="defaultCheck1">
          <label class="form-check-label" for="defaultCheck1">
            Default checkbox
          </label>
        </div>
      `,
	});
};

export default (dc, traits, config = {}) => {
	const inputType = dc.getType('bs_input');
	const inputModel = inputType.model;

	dc.addType('checkbox', {
		extend: "input",
		model: {
			defaults: {
				...inputModel.prototype.defaults,
				'custom-name': config.labels.checkbox_name,
				copyable: false,
				droppable: false,
				attributes: {type: 'checkbox'},
				traits: [
					traits.id,
					traits.name,
					traits.value,
					traits.required,
					traits.checked
				]
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
			if (el.tagName === 'INPUT' && el.type === 'checkbox') {
				return {type: 'checkbox'};
			}
		},
		view: {
			events: {
				'click': 'handleClick',
			},

			handleClick(e) {
				e.preventDefault();
			},
		}
	});
}
