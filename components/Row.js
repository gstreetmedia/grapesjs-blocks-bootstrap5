
import ComponentBase from "./ComponentBase";


export default class Row extends ComponentBase {

	get name() {
		return "Row"
	}
	addBlocks() {
		this.blockManager.add(this.type).set({
			attributes : {
				title : "Row"
			},
			label: "Row",
			//language=SVG
			media: `
                <svg id="container" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14">
                    <defs>
                        <style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;}.cls-2{opacity:0.5;}</style>
                    </defs>
                    <title>container</title>
                    <path class="cls-1" d="M7,7.8" transform="translate(0 -5)"/>
                    <g id="container_opac" class="cls-2">
                        <path d="M23,6V18H1V6H23m1-1H0V19H24V5Z" transform="translate(0 -5)"/>
                    </g>
                    <g id="container-2">
                        <path d="M21,8v8H3V8H21m1-1H2V17H22V7Z" transform="translate(0 -5)"/>
                    </g>
                </svg>
			`,
			id: this.type,
			category: 'Layout',
			//language=HTML
			content: `
				<div class="row" data-gjs-type="${this.type}">
					<div class="col" data-gjs-type="${this.namespace}column"></div>
					<div class="col" data-gjs-type="${this.namespace}column"></div>
					<div class="col" data-gjs-type="${this.namespace}column"></div>
					<div class="col" data-gjs-type="${this.namespace}column"></div>
				</div>
			`
		});

	}

	addTypes() {

		this.components.addType(this.type, {
			extend: this.namespace + "default",
			model: {
				defaults: {
					name: 'Row',
					tagName: 'div',
					draggable: true,
					droppable: true,
					stylable : false,
					traits: [
						/*
						{
							type: 'class_select',
							options: [
								{value: '', name: 'Default'},
								{value: 'gx-0', name: 'gx-0'},
								{value: 'gx-1', name: 'gx-1'},
								{value: 'gx-2', name: 'gx-2'},
								{value: 'gx-3', name: 'gx-3'},
								{value: 'gx-4', name: 'gx-4'},
								{value: 'gx-5', name: 'gx-5'},
							],
							name: 'gutters',
							label: 'Gutters'
						},
						{
							type: 'row_columns_select',
							options: [
							],
							name: 'rows-columns',
							label: 'Columns'
						},

						 */
						...this.traits,
					]
				}
			},
			isComponent: (el) => {
				if (el && el.classList && el.classList.contains('row')) {
					return {type: this.type};
				}
			}

		});
	}
}