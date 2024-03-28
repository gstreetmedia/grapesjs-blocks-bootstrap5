import {capitalize} from "../utils";
import {camelize} from "inflected";
import {borders} from "../traits/lists";

export default class ComponentBase {
	constructor(editor) {
		this.editor = editor;
		this.addTypes();
		this.addTraits();
		this.addBlocks();
	}

	get namespace() {
		return "bs-";
	}

	get type() {
		return this.namespace + this.name.toLowerCase()
	}

	/**
	 * Override this on all subclasses as code mangling with be weird
	 * @returns {*}
	 */
	get name() {
		return this.constructor.name;
	}

	set editor(value) {
		this._editor = value;
	}

	get editor() {
		return this._editor;
	}

	get components() {
		return this.editor.DomComponents;
	}

	get blockManager() {
		return this.editor.BlockManager
	}

	get traitManager() {
		return this.editor.TraitManager;
	}

	createLabel(icon, label) {
		if (icon.indexOf("http") === 0) {
			return `
			<div class="gjs-block__media ratio ratio-1x1">
				<img src="${icon}" class="currentColor"></img>
			</div>
			<div class="gjs-block-label">label</div>`
		}
		return `
            <div class="gjs-block__media">
				${this.createIcon(icon)}
			</div>
			<div class="gjs-block-label">${label}</div>
        `
	}

	createIcon(icon) {
		//language=HTML
		return `
			<div class="d-flex justify-content-center align-items-center">
				<i class="${icon} fs-40"></i>
			</div>`
	}

	addTypes() {

	}

	addBlocks() {

	}

	addTraits() {

	}

	get traitId() {
		return {
			type: 'text',
			label: 'ID',
			name: 'id',
			placeholder: 'my_element',
			changeProp : true
		}
	}

	get traitTitle() {
		return {
			type: 'text',
			label: 'Title',
			name: 'title',
			placeholder: 'My Element',
			changeProp: true
		}
	}

	getTraits(list) {
		let traits = [];
		list.forEach(
			(item) => {
				let key = camelize('trait' + camelize(item, true), false);
				if (this[key]) {
					traits.push(this[key])
				}
			}
		);
		return traits;
	}

	getAllTraits() {
		let keys = Object.keys(this);
		keys.sort();
		let traits = [];
		keys.forEach(
			(key) => {
				if (key.indexOf("trait") === 0) {
					traits.push(this[key]);
				}
			}
		);
		console.log(traits);
		return traits;
	}


	get traits() {
		//return this.getAllTraits();
		return [
			this.traitId,
			this.traitTitle,
			{
				type: 'classSelect',
				name: 'class-select',
				label: 'Styles'
			}
		]
	}

	getRootNode(selector, element) {
		if (element.parentNode === document.body) {
			return null;
		}
		if (element.parentNode.classList.has(selector)) {
			return element.parentNode;
		}
		return this.getRootNode(selector, element.parentNode);
	}

}
