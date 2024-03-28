import TraitBase from "./TraitBase.js";
import flattenDeep from "lodash.flattendeep";
import {htmlToElement} from "../utils.js";
import traits from "./traits.js";

export default class TraitClassSelect  {

	set classes(value) {
		this._classes = value;
	}

	get options() {
		return this._options;
	}

	set options(value) {
		this._options = value;
	}

	get optional() {
		return this._optional;
	}

	set optional(value) {
		this._optional = value;
	}

	get prefix() {
		return this._prefix;
	}

	set prefix(value) {
		this._prefix = value;
	}

	get required() {
		return this._required;
	}

	set required(value) {
		this._required = value;
	}

	getBadge(value) {
		//language=HTML
		let html = `
			<span class="badge bg-primary me-1 my-1 border-bottom" data-value="${value}">
			${value}
			<i class="bi bi-x-circle ms-2"></i>
		</span>`

		return htmlToElement(html)
	}

	getLabel(label, icon) {
		return `<div><i class="${icon || ''}"></i>${label}</div>`
	}

	createSelect(name, list) {
		return `
		<select name="${name}" class="form-select form-select-sm">
			<option value="">${name}</option>
			${list.map(item => {
				return `
				<option value="${item.value}">${titleize(item.name || item.value)}</option>`
				
		}).join("\n")}			
		</select>
	`
	}

	_options;
	_optional;
	_prefix;
	_required;
	_classes;




	getClasses(trait ) {
		if (this._classes) {
			//return this._classes;
		}

		let options = trait.options;
		let required = trait.required;
		let optional = trait.optional;
		let prefix = trait.prefix || null;

		let classes = [];

		if (required) {

			let optionalClasses = [];
			let requiredClasses = [];

			if (optional) {
				let optionalKeys = Object.keys(optional);
				optionalClasses = [];
				optionalKeys.forEach(
					(optionalKey, index) => {
						if (optionalClasses.length > 0) {
							//copy the previous values;
							optionalClasses[optionalClasses.length - 1].forEach(
								(previousValue) => {
									let values = [...optional[optionalKey].map(item => {
										return previousValue + "-" + item.value
									})];
									optionalClasses.push(values);
								}
							)
						} else {
							optionalClasses.push(optional[optionalKey].map(item => {
								return item.value
							}));
						}
					}
				)
				optionalClasses = flattenDeep(optionalClasses);
			}

			let requiredKeys = Object.keys(required);

			requiredKeys.forEach(
				(requiredKey, index) => {
					if (requiredClasses.length > 0) {
						let result = [];
						requiredClasses.forEach(
							(previousValue) => {
								result = result.concat(required[requiredKey].map(item => {
									return previousValue + item.value
								}));
							}
						)
						requiredClasses = result;
					} else {
						requiredClasses = required[requiredKey].map(item => {
							return item.value
						})
					}
				}
			);

			if (optionalClasses.length > 0) {

				requiredClasses.forEach(
					(rValue) => {
						optionalClasses.forEach(
							(oValue) => {
								if (this.optionalFirst) {
									classes.push(prefix + rValue + "-" + oValue)
								} else {
									classes.push(prefix + oValue + "-" + rValue)
								}

							}
						)
					}
				)

			}

			requiredClasses = requiredClasses.map(value => {
				if (prefix) {
					return prefix + (prefix.indexOf("-") === -1 ? "-" : "") + value
				} else {
					return value
				}

			});

			classes = classes.concat(requiredClasses);
		}

		if (options) {
			options.forEach(
				(item) => {
					if (item.prefix !== false) {
						classes.push((prefix ? prefix : '') + item.value);
					} else {
						classes.push(item.value);
					}

				}
			);
		}

		this._classes = classes.sort();

		return this._classes;
	}

	onTraitCategoryChange(e) {
		let select = e.target;
		let category = select.value;
		let trait = traits[category];
		let selects = [];
		let optionsEl = this.formElement.querySelector(".options");
		this.traitMap = {

		}
		optionsEl.innerHTML = "";
		if (trait.optional || trait.required) {
			if (this.optional) {
				let keys = Object.keys(trait.optional);
				this.traitMap.optional = {};
				keys.forEach(
					(key) => {
						let options = [];
						if (this.options) {
							options = options.concat(this.options);
						}
						options.concat(trait.optional[key]);
						let select = htmlToElement(this.createSelect(key, options))
						optionsEl.append(select);
						select.on("change", (e) => {
							this.onPropertyChange(e)
						});
						this.traitMap.options[key] = select;
					}
				)
			}
			let keys = Object.keys(trait.required);
			keys.forEach(
				(key) => {
					let options = [];
					let select = htmlToElement(this.createSelect(key, trait.required[key]))
					optionsEl.append(select);
					select.on("change", (e)=>{
						this.onPropertyChange(e)
					});
					this.traitMap.required[key] = select;
				}
			)
		} else {
			let select = htmlToElement(this.createSelect(key, trait.options));
			select.on("change", (e)=>{
				this.onPropertyChange(e)
			});
			this.traitMap.options = select;
		}
	}

	onPropertyChange(e) {

	}

	addButtonEvent(button) {
		button.querySelector("i").addEventListener("click",
			(e) => {
				let button = e.target.parentNode;
				console.log(button);
				this.removeClass(button.getAttribute("data-value"));
				button.remove();
			}
		)
	}

	removeClass(value) {
		this.target.removeClass(value);
	}

	createInput({trait}) {
		console.log(trait);
		this.icon = trait.get("icon");
		this.prefix = trait.get("prefix");
		this.optional = trait.get("optional");
		this.required = trait.get("required");
		this.options = trait.get("options");

		let select = this.createSelect("styles", Object.keys(traits).map(
			(value) => {
				return {value : value, name: titleize(value)}
			}
		));

		//language=HTML
		let html = `
					<div>
						<div>
							${select}
						</div>
						<div class="d-flex options p-2">
							
						</div>
						<div class="badges border-top fs-6"></div>
					</div>

				`;
		let element = htmlToElement(html);

		let classList = this.target.view.el.getAttribute("class").replaceAll("  ", " ").split(" ");
		let classes = this.classes;
		let buttons = [];

		classList.forEach(
			(value) => {
				let button = this.getBadge(value);
				buttons.push(button);
				element.querySelector(".badges").append(button)
			}
		);

		setTimeout(
			() => {
				buttons.forEach(
					(button) => {
						this.addButtonEvent(button);
						this.formElement.querySelector("[name='styles']").on(
							"change",
							(e) => {
								this.onTraitCategoryChange(e);
							}
						)
					}
				)
			},
			1000
		)
		this.formElement = element;
		return element;
	}

}