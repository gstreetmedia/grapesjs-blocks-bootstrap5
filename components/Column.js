import ComponentBase from "./ComponentBase";

export default class Column extends ComponentBase {
	addBlocks() {
		this.blockManager.add(this.type,
			{
				attributes: {
					title: this.name,
				},
				label: this.name,
				//language=SVG
				media: `
                    <svg id="container" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14">
                        <defs>
                            <style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;}.cls-2{opacity:0.5;}</style>
                        </defs>
                        <title>container</title>
                        <path class="cls-1" d="M7,7.8" transform="translate(0 -5)"/>
                        <g id="container_opac" data-name="container opac" class="cls-2">
                            <path d="M23,6V18H1V6H23m1-1H0V19H24V5Z" transform="translate(0 -5)"/>
                        </g>
                        <g id="row_50" data-name="row 50" class="cls-2">
                            <path d="M21,8v8H3V8H21m1-1H2V17H22V7Z" transform="translate(0 -5)"/>
                        </g>
                        <g id="columns">
                            <g id="row">
                                <path d="M7,10v4H5V10H7M8,9H4v6H8V9Z" transform="translate(0 -5)"/>
                            </g>
                            <g id="column" class="cls-2">
                                <path d="M13,10v4H11V10h2m1-1H10v6h4V9Z" transform="translate(0 -5)"/>
                            </g>
                            <g id="column-2" data-name="column" class="cls-2">
                                <path d="M19,10v4H17V10h2m1-1H16v6h4V9Z" transform="translate(0 -5)"/>
                            </g>
                        </g>
                    </svg>`,
				category: 'Layout',
				content: `<div class="col" data-gjs-type="${this.type}"></div>`
			}
		);
	}

	addTypes() {
		const spans = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

		this.components.addType(this.type, {
			extend: this.namespace + "text",
			model: {
				defaults: {
					name: 'Column',
					tagName: "div",
					draggable: true,
					droppable: true,
					/*
					resizable: {
						updateTarget: (el, rect, opt) => {
							const selected = editor.getSelected();
							if (!selected) {
								return;
							}

							//compute the current screen size (bootstrap semantic)
							const docWidth = el.getRootNode().body.offsetWidth;
							let currentSize = "";
							if (docWidth >= 1200) {
								currentSize = "xl";
							} else if (docWidth >= 992) {
								currentSize = "lg";
							} else if (docWidth >= 768) {
								currentSize = "md";
							} else if (docWidth >= 576) {
								currentSize = "sm";
							}

							//compute the threshold when add on remove 1 col span to the element
							const row = el.parentElement;
							const oneColWidth = row.offsetWidth / 12;
							//the threshold is half one column width
							const threshold = oneColWidth * 0.5;

							//check if we are growing or shrinking the column
							const grow = rect.w > el.offsetWidth + threshold;
							const shrink = rect.w < el.offsetWidth - threshold;
							if (grow || shrink) {
								let testRegexp = new RegExp("^col-" + currentSize + "-\\d{1,2}$");
								if (!currentSize) {
									testRegexp = new RegExp("^col-\\d{1,2}$");
								}
								let found = false;
								let sizesSpans = {};
								let oldSpan = 0;
								let oldClass = null;
								for (let cl of el.classList) {
									if (cl.indexOf("col-") === 0) {
										let [c, size, span] = cl.split("-");
										if (!span) {
											span = size;
											size = "";
										}
										sizesSpans[size] = span;
										if (size === currentSize) {
											//found the col-XX-99 class
											oldClass = cl;
											oldSpan = span;
											found = true;
										}
									}
								}

								if (!found) {
									const sizeOrder = ["", "xs", "sm", "md", "lg", "xl"];
									for (let s of sizeOrder) {
										if (sizesSpans[s]) {
											oldSpan = sizesSpans[s];
											found = true;
										}
										if (s === currentSize) {
											break;
										}
									}
								}

								let newSpan = Number(oldSpan);
								if (grow) {
									newSpan++;
								} else {
									newSpan--;
								}
								if (newSpan > 12) {
									newSpan = 12;
								}
								if (newSpan < 1) {
									newSpan = 1;
								}

								let newClass = "col-" + currentSize + "-" + newSpan;
								if (!currentSize) {
									newClass = "col-" + newSpan;
								}
								//update the class
								selected.addClass(newClass);
								if (oldClass && oldClass !== newClass) {
									selected.removeClass(oldClass);
								}
								//notify the corresponding trait to update its value accordingly
								//selected.getTrait((currentSize || "xs") + "_width").view.updateTrait()  //.postUpdate();
							}
						},
						tl: 0,
						tc: 0,
						tr: 0,
						cl: 0,
						cr: 1,
						bl: 0,
						bc: 0,
						br: 0
					},

					 */
					stylable: false,
					traits: [
						...this.traits
					]
				}
			},

			isComponent: (el) => {
				let match = false;
				if (el && el.classList) {
					el.classList.forEach(function (selector) {
						if (selector === "col" || selector.match(/^col-/)) {
							match = true;
						}
					});
				}
				if (match) return {type: this.type};
			}

		});
	}
}