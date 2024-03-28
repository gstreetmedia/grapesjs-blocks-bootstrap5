import checkIcon from "../icons/check-square-solid.svg";

export const CheckboxBlock = (bm, label) => {
	bm.add('checkbox', {
		label: `
            ${checkIcon}
            <div>${label}</div>
        `,
		category: 'Forms',
		content: `
        <div class="form-check" data-gjs-type="bs_form_check">
          <input class="form-check-input" type="checkbox" data-gjs-type="bs_input" value="" id="defaultCheck1">
          <label class="form-check-label" for="defaultCheck1" data-gjs-type="bs_label">
            Default checkbox
          </label>
        </div>
      `,
	});
};

export default (dc, traits, config = {}) => {
	const inputType = dc.getType('input');
	const inputModel = inputType.model;

	dc.addType('bs_form_check', {
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
