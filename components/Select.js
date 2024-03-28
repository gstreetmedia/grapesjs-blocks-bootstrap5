import FormInput from "./FormInput";

export default class Select extends FormInput {

	get name() {
		return "Select"
	}
	addBlocks() {
		this.blockManager.add(
			this.name,
			{
				label: this.createLabel('bi bi-check-all', 'Select'),
				category: "Forms",
				//language=HTML
				content: `
					<div class="mb-3">
						<label class="form-label" for="" data-gjs-type="${this.type}-label">Label</label>
						<select type="text" class="form-select" data-gjs-type="${this.type}">
							<option value="">Choose</option>
						</select>
					</div>
				`
			}
		)
	}

	addTypes() {
		this.components.addType(this.type, {
			extend: this.namespace + "input",
			model: {
				defaults: {
					tagName: 'select',
					draggable: true,
					droppable: false,
					traits: [
						{
							label: "Options",
							type: 'select-options'
						}
					].concat(this.inputTraits)
				},
			},
			isComponent: (el) => {
				if (el.tagName === 'SELECT') {
					return {type: this.type};
				}
			},
			view: {
				events: {
					'mousedown': 'handleClick',
				},

				handleClick(e) {
					e.preventDefault();
				},
			}
		});
	}

	addTraits() {

		this.traitManager.addType('select-options', {
			events: {
				'keyup': 'onChange',
			},

			onValueChange: function () {
				const optionsStr = this.model.get('value').trim();
				const options = optionsStr.split('\n');
				const optComps = [];

				for (let i = 0; i < options.length; i++) {
					const optionStr = options[i];
					const option = optionStr.split(config.optionsStringSeparator);
					const opt = {
						tagName: 'option',
						attributes: {}
					};
					if (option[1]) {
						opt.content = option[1];
						opt.attributes.value = option[0];
					} else {
						opt.content = option[0];
						opt.attributes.value = option[0];
					}
					optComps.push(opt);
				}

				const comps = this.target.get('components');
				comps.reset(optComps);
				this.targetView.render();
			},

			getInputEl: function () {
				if (!this.$input) {
					const target = this.target;
					let optionsStr = '';
					const options = target.get('components');

					for (let i = 0; i < options.length; i++) {
						const option = options.models[i];
						const optAttr = option.get('attributes');
						const optValue = optAttr.value || '';
						optionsStr += `${optValue}${config.optionsStringSeparator}${option.get('content')}\n`;
					}

					this.$input = document.createElement('textarea');
					this.$input.value = optionsStr;
				}
				return this.$input;
			},
		});
	}
}