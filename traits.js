import {htmlToElement} from "./utils";

import TraitClassSelect from "./traits/TraitClassSelect";
import traits from "./traits/traits";
import {titleize} from "inflected";
import classSelect from "./traits/class-select";

const getBreakpoints = () => {
	//language=HTML
	return `
		<select name="breakpoint">
			<option value="">Break</option>
			<option value="sm">SM</option>
			<option value="md">MD</option>
			<option value="lg">LG</option>
			<option value="xl">XL</option>
			<option value="xxl">XXL</option>
		</select>
	`
}

const getColumns = () => {
	//language=HTML
	return `
		<select name="size" type="number">
			<option value="">Columns</option>
			<option value="0">0</option>
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
			<option value="6">6</option>
			<option value="7">7</option>
			<option value="8">8</option>
			<option value="9">9</option>
			<option value="10">10</option>
			<option value="11">11</option>
			<option value="12">12</option>
		</select>`
}

const getSize = () => {
	//language=HTML
	return `
		<select name="size" type="number">
			<option value="">Size</option>
			<option value="0">0</option>
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
			<option value="4">4</option>
			<option value="5">5</option>
		</select>`
}

const getDirection = () => {
	//language=HTML
	return `
		<select name="direction">
			<option value="">Direction</option>
			<option value="s">Start</option>
			<option value="e">End</option>
			<option value="t">Top</option>
			<option value="b">Bottom</option>
			<option value="x">X</option>
			<option value="y">Y</option>
		</select>
	`
}

const getLabel = (label, icon) => {
	return `<div><i class="${icon || ''}"></i>${label}</div>`
}

const getBadge = (value) => {
	//language=HTML
	let html = `
		<span class="badge bg-primary me-1 my-1 border-bottom" data-value="${value}">
			${value}
			<i class="bi bi-x-circle ms-2"></i>
		</span>`

	return htmlToElement(html)
}

export default (editor, config = {}) => {

	const tm = editor.TraitManager;

	tm.addType(
		"classSelect",
		classSelect
	);

	tm.addType(
		"singleClassSelect",
		classSelect
	);

	tm.addType(
		"multiClassSelect",
		classSelect
	);



	// Select trait that maps a class list to the select options.
	// The default select option is set if the input has a class, and class list is modified when select value changes.
	tm.addType('class_select', {
		events: {
			'change': 'onChange'  // trigger parent onChange method on input change
		},
		createLabel({label}) {
			return `<div><i class="${this.icon}"></i>${label}</div>`
		},
		getOptions(options) {
			const target_view_el = this.target.view.el;
			let list = [];

			for (let i = 0; i < options.length; i++) {

				let value = options[i].value;
				if (value === '') {
					value = 'GJS_NO_CLASS';
				} // 'GJS_NO_CLASS' represents no class--empty string does not trigger value change
				let text = options[i].name;

				// Convert the Token List to an Array
				const css = Array.from(target_view_el.classList);
				const value_a = value.split(' ');
				const intersection = css.filter(x => value_a.includes(x));
				let selected = false;
				if (intersection.length === value_a.length) {
					selected = true;
				}

				//language=HTML
				let html = `
					<option value="${value}" ${selected ? 'selected' : ''}>
						${options[i].name}
					</option>`

				list.push(html);
			}

			return list;
		},
		createInput({trait}) {
			//const md = this.model;
			const options = trait.get('options') || [];
			return htmlToElement(
				//language=HTML
				`
					<select class='gsm-sm-select' data-name="${trait.getName()}">
						${this.getOptions(options)}
					</select>`);
		},
		onUpdate({elInput, component}) {
			const classes = component.getClasses();
			const opts = this.model.get('options') || [];
			for (let i = 0; i < opts.length; i++) {
				let value = opts[i].value;
				if (value && classes.includes(value)) {
					elInput.value = value;
					return;
				}
			}
			elInput.value = "GJS_NO_CLASS";
		},

		onEvent({elInput, component, event}) {

			const options = this.model.get('options');

			const classes = options.map(opt => opt.value);
			for (let i = 0; i < classes.length; i++) {
				if (classes[i].length > 0) {
					const classes_i_a = classes[i].split(' ');
					for (let j = 0; j < classes_i_a.length; j++) {
						if (classes_i_a[j].length > 0) {
							component.removeClass(classes_i_a[j]);
						}
					}
				}
			}
			const value = this.model.get('value');

			// This piece of code removes the empty attribute type from attributes list
			const elAttributes = component.attributes.attributes;
			delete elAttributes[""];

			//For whatever reason, grapes adds an attribute that is the same name of this trait, this produces
			//invalid markup in editor.getHtml();
			let name = elInput.getAttribute("data-name");
			component.removeAttributes([name]);

			if (value.length > 0 && value !== 'GJS_NO_CLASS') {
				const value_a = value.split(' ');
				for (let i = 0; i < value_a.length; i++) {
					component.addClass(value_a[i]);
				}
			}
			component.em.trigger('component:toggled');
		},
	});

	const textTrait = tm.getType('text');

	tm.addType('content', {
		events: {
			'keyup': 'onChange',
		},
		onValueChange: function () {
			const md = this.model;
			const target = md.target;
			target.set('content', md.get('value'));
		},

		getInputEl: function () {
			if (!this.inputEl) {
				this.inputEl = textTrait.prototype.getInputEl.bind(this)();
				this.inputEl.value = this.target.get('content');
			}
			return this.inputEl;
		}
	});

	tm.addType('innerHTML', {
		events: {
			'keyup': 'onChange',
		},
		onValueChange: function () {
			this.target.view.el.innerHTML = this.inputEl.value;
		},
		getInputEl: function () {
			if (!this.inputEl) {
				this.inputEl = textTrait.prototype.getInputEl.bind(this)();
				this.inputEl.value = this.target.view.el.innerHTML;
			}
			return this.inputEl;
		}
	});


}
