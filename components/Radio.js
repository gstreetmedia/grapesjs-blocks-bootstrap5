import radioIcon from "../icons/dot-circle-regular.svg";
import ComponentBase from "./ComponentBase";


export default class Radio extends ComponentBase {

	get name() {
		return "Radio"
	}
	addBlocks() {
		this.blockManager.add(this.type, {
			label: 'Radio',
			//language=SVG
			media: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21.5 7">
                    <defs>
                        <style>.a{fill:none;stroke:#000;stroke-miterlimit:10;}</style>
                    </defs>
                    <title>container</title>
                    <rect x="8.5" y="2.5" width="13" height="2"/>
                    <circle class="a" cx="3.5" cy="3.5" r="3"/>
                </svg>`,
			category: 'Forms',
			//language=HTML
			content: `
				<div class="form-check">
					<input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1"
					       value="option1" checked>
					<label class="form-check-label" for="exampleRadios1">
						Default radio
					</label>
				</div>`
		});
	}

	addTypes() {
		const checkType = this.components.getType('checkbox');

		this.components.addType(
			this.type,
			{
				model: {
					defaults: {
						...checkType.model.prototype.defaults,
						name: "Radio",
						attributes: {type: 'radio'},
					}
				},
				isComponent: (el) => {
					if (el.tagName === 'INPUT' && el.type === 'radio') {
						return {type: 'radio'};
					}
				},
				viewExtend: "checkbox"
			}
		)
	}
}


