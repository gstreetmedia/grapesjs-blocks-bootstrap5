import ComponentBase from "./ComponentBase";

export default class Card extends ComponentBase {


	get types() {
		return {
			"card": this.type,
			"card-header": this.type + "-header",
			"card-footer": this.type + "-footer",
			"card-image-top": this.type + 'card-image-top',
			'card-image-bottom': this.type + 'card-image-bottom',
			'card-text': this.type + 'card-text',
			'card-title': this.type + 'card-title',
			'card-group': this.type + 'card-group'
		}
	}

	get category() {
		return "Card"
	}

	get card() {
		//language=HTML
		return `
			<div class="card shadow-sm h-100" data-gjs-type="${this.type}">

			</div>`
	}

	get cardHeader() {
		//language=HTML
		return `
			<div class='card-header d-flex justify-content-between align-items-center'
			     data-gjs-type="${this.type}-header">
				<div>Card Header</div>
				<div></div>
			</div>`
	}

	get cardFooter() {
		//language=HTML
		return `
			<div class='card-footer d-flex justify-content-between align-items-center'
			     data-gjs-type="${this.type}-footer">
				<div></div>
				<div></div>
			</div>`
	}

	get cardBody() {
		//language=HTML
		return `
			<div class="card-body" data-gjs-type="${this.type}-body">
				<h5 class="card-title" data-gjs-type="${this.type}-title">Title</h5>
				<div class="card-text" data-gjs-type="${this.type}-text">Text</div>
			</div>`
	}

	get cardIconHeader() {
		//language=HTML
		return `
			<div
					class="card-icon-header card-header d-flex justify-content-center text-bg-primary align-items-center border-0"
					data-gjs-type="${this.type}-icon-header">
				<i class="fa-solid fa-icons my-3 fs-50" data-gjs-type="${this.namespace}icon"></i>
			</div>`
	}

	addBlocks() {
		this.blockManager.add(this.type, {
			attributes : {
				title : "Card"
			},
			label: this.name,
			//language=SVG
			media: `
                <svg id="card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
                    <defs>
                        <style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;}</style>
                    </defs>
                    <path class="cls-1" d="M7,7.8" transform="translate(0 -4)"/>
                    <path d="M22.25,5a.76.76,0,0,1,.75.75v12.5a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,18.25V5.75A.76.76,0,0,1,1.75,5h20.5m0-1H1.75A1.76,1.76,0,0,0,0,5.75v12.5A1.76,1.76,0,0,0,1.75,20h20.5A1.76,1.76,0,0,0,24,18.25V5.75A1.76,1.76,0,0,0,22.25,4Z"
                          transform="translate(0 -4)"/>
                    <g id="card_text">
                        <rect x="2" y="3" width="20" height="3"/>
                        <rect x="2" y="7" width="20" height="1"/>
                        <rect x="2" y="9" width="16" height="1"/>
                    </g>
                </svg>`,
			category: this.category,
			//language=HTML
			content: this.card,
			activate: true
		});

		this.blockManager.add(this.type + '-body', {
			attributes : {
				title : " Body"
			},
			label: this.name + " Body",
			//language=HTML
			media: `
				<svg id="card-body" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
					<defs>
						<style>.cls-1 {
							fill: none;
							stroke: #000;
							stroke-miterlimit: 10;
						}

						.cls-2 {
							opacity: 0.5;
						}</style>
					</defs>
					<path class="cls-1" d="M7,7.8" transform="translate(0 -4)"/>
					<path class="cls-2"
					      d="M22.25,5a.76.76,0,0,1,.75.75v12.5a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,18.25V5.75A.76.76,0,0,1,1.75,5h20.5m0-1H1.75A1.76,1.76,0,0,0,0,5.75v12.5A1.76,1.76,0,0,0,1.75,20h20.5A1.76,1.76,0,0,0,24,18.25V5.75A1.76,1.76,0,0,0,22.25,4Z"
					      transform="translate(0 -4)"/>
					<path d="M21,7V17H3V7H21m.38-1H2.62A.62.62,0,0,0,2,6.62V17.38a.62.62,0,0,0,.62.62H21.38a.62.62,0,0,0,.62-.62V6.62A.62.62,0,0,0,21.38,6Z"
					      transform="translate(0 -4)"/>
				</svg>`,
			category: this.category,
			content: this.cardBody
		});

		this.blockManager.add(this.type + '-header', {
			attributes : {
				title : this.name + " Header"
			},
			label: this.name + " Header",
			//language=SVG
			media: `
                <svg id="card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
                    <defs>
                        <style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;}.cls-2{opacity:0.5;}</style>
                    </defs>
                    <title>container</title>
                    <path class="cls-1" d="M7,7.8" transform="translate(0 -4)"/>
                    <g id="card_opacity" data-name="card opacity" class="cls-2">
                        <path d="M22.25,5a.76.76,0,0,1,.75.75v12.5a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,18.25V5.75A.76.76,0,0,1,1.75,5h20.5m0-1H1.75A1.76,1.76,0,0,0,0,5.75v12.5A1.76,1.76,0,0,0,1.75,20h20.5A1.76,1.76,0,0,0,24,18.25V5.75A1.76,1.76,0,0,0,22.25,4Z"
                              transform="translate(0 -4)"/>
                    </g>
                    <g id="header">
                        <polygon points="23 4 1 4 1 5 23 5 23 4 23 4"/>
                    </g>
                </svg>`,
			category: this.category,
			content: this.cardHeader
		});

		this.blockManager.add(this.type + '-footer', {
			attributes : {
				title : this.name + " Footer"
			},
			label: this.name + " Footer",
			//language=SVG
			media: `
                <svg id="card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
                    <defs>
                        <style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;}.cls-2{opacity:0.5;}</style>
                    </defs>
                    <title>container</title>
                    <path class="cls-1" d="M7,7.8" transform="translate(0 -4)"/>
                    <g id="card_opacity" data-name="card opacity" class="cls-2">
                        <path d="M22.25,5a.76.76,0,0,1,.75.75v12.5a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,18.25V5.75A.76.76,0,0,1,1.75,5h20.5m0-1H1.75A1.76,1.76,0,0,0,0,5.75v12.5A1.76,1.76,0,0,0,1.75,20h20.5A1.76,1.76,0,0,0,24,18.25V5.75A1.76,1.76,0,0,0,22.25,4Z"
                              transform="translate(0 -4)"/>
                    </g>
                    <g id="footer">
                        <polygon points="23 11 1 11 1 12 23 12 23 11 23 11"/>
                    </g>
                </svg>`,
			category: this.category,
			content: this.cardFooter
		});

		this.blockManager.add(this.type + '-image-overlay', {
			attributes : {
				title : this.name + " Image Overlay"
			},
			label: this.name + " Image Overlay",
			//language=SVG
			media: `
                <svg id="card-image-overlay" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
                    <path d="M7,7.8" transform="translate(0 -4)" style="fill:none;stroke:#000;stroke-miterlimit:10"/>
                    <path d="M22.25,5a.76.76,0,0,1,.75.75v12.5a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,18.25V5.75A.76.76,0,0,1,1.75,5h20.5m0-1H1.75A1.76,1.76,0,0,0,0,5.75v12.5A1.76,1.76,0,0,0,1.75,20h20.5A1.76,1.76,0,0,0,24,18.25V5.75A1.76,1.76,0,0,0,22.25,4Z"
                          transform="translate(0 -4)"/>
                    <g id="overlay" style="opacity:0.5">
                        <polygon points="3 15 6 12 10 15 16 9 23 15 3 15"/>
                        <circle cx="4" cy="4" r="1"/>
                    </g>
                </svg>`,
			category: this.category,
			//language=HTML
			content: `
				<div class="card text-bg-dark shadow-sm h-100">
					<div class="card-image-top" data-gjs-type="${this.type}-image-top">
						<div class="ratio ratio-16x9" data-gjs-type="${this.namespace}ratio">
							<img src="https://dummyimage.com/16:9x360" class="object-fit-cover" alt="...">
						</div>
					</div>
					<div class="card-img-overlay" data-gjs-type="${this.type}-image-overlay">
						<h5 class="card-title" data-gjs-type="${this.type}-title">Card title</h5>
						<div class="card-text" data-gjs-type="${this.type}-text">This is a wider card with supporting
							text
							below as a natural lead-in to
							additional content. This content is a little bit longer.
						</div>
						<div class="card-text" data-gjs-type="${this.type}-text"><small>Last updated 3 mins ago</small>
						</div>
					</div>
				</div>`
		});

		this.blockManager.add(this.type + '-image-top', {
			attributes : {
				title : this.name + " Image Top"
			},
			label: this.name + " Image Top",
			//language=SVG
			media: `
                <svg id="card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
                    <defs>
                        <style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;}.cls-2{opacity:0.5;}</style>
                    </defs>
                    <path class="cls-1" d="M7,7.8" transform="translate(0 -4)"/>
                    <g id="card_opacity" class="cls-2">
                        <path d="M22.25,5a.76.76,0,0,1,.75.75v12.5a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,18.25V5.75A.76.76,0,0,1,1.75,5h20.5m0-1H1.75A1.76,1.76,0,0,0,0,5.75v12.5A1.76,1.76,0,0,0,1.75,20h20.5A1.76,1.76,0,0,0,24,18.25V5.75A1.76,1.76,0,0,0,22.25,4Z"
                              transform="translate(0 -4)"/>
                    </g>
                    <g id="img_head">
                        <g id="header">
                            <polygon points="23 8 1 8 1 9 23 9 23 8 23 8"/>
                        </g>
                        <polygon points="3 8 6 5 10 8 16 2 23 8 3 8"/>
                        <circle cx="4" cy="3" r="1"/>
                    </g>
                </svg>`,
			category: this.category,
			//language=HTML
			content: `
				<div class="card-image-top" data-gjs-type="${this.type}-image-top">
					<div class="ratio ratio-16x9" data-gjs-type="${this.namespace}ratio">
						<img src="https://dummyimage.com/16:9x360" class="object-fit-cover" alt="...">
					</div>
				</div>
			`
		});

		this.blockManager.add(this.type + '-image-bottom', {
			attributes : {
				title : this.name + " Image Bottom"
			},
			label: this.name + " Image Bottom",
			//language=SVG
			media: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
                    <path d="M7,7.8" transform="translate(0 -4)" style="fill:none;stroke:#000;stroke-miterlimit:10"/>
                    <g style="opacity:0.5">
                        <path d="M22.25,5a.76.76,0,0,1,.75.75v12.5a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,18.25V5.75A.76.76,0,0,1,1.75,5h20.5m0-1H1.75A1.76,1.76,0,0,0,0,5.75v12.5A1.76,1.76,0,0,0,1.75,20h20.5A1.76,1.76,0,0,0,24,18.25V5.75A1.76,1.76,0,0,0,22.25,4Z"
                              transform="translate(0 -4)"/>
                    </g>
                    <polygon points="23 7 1 7 1 8 23 8 23 7 23 7"/>
                    <polygon points="3 15 6 12 10 15 16 9 23 15 3 15"/>
                    <circle cx="4" cy="10" r="1"/>
                </svg>`,
			category: this.category,
			//language=HTML
			content: `
				<div class="card-image-top" data-gjs-type="${this.type}-image-bottom">
					<div class="ratio ratio-16x9" data-gjs-type="${this.namespace}ratio">
						<img src="https://dummyimage.com/16:9x360" class="object-fit-cover" alt="..."
						>
					</div>
				</div>
			`
		});

		this.blockManager.add(this.type + '-group', {
			attributes : {
				title : this.name + " Group"
			},
			label: this.name + " Group",
			//language=SVG
			media: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 16">
                    <title>container</title>
                    <path d="M7,7.8" transform="translate(-1 -4)" style="fill:none;stroke:#000;stroke-miterlimit:10"/>
                    <path d="M9.25,5a.76.76,0,0,1,.75.75v3.5a.76.76,0,0,1-.75.75H2.75A.76.76,0,0,1,2,9.25V5.75A.76.76,0,0,1,2.75,5h6.5m0-1H2.75A1.76,1.76,0,0,0,1,5.75v3.5A1.76,1.76,0,0,0,2.75,11h6.5A1.76,1.76,0,0,0,11,9.25V5.75A1.76,1.76,0,0,0,9.25,4Z"
                          transform="translate(-1 -4)"/>
                    <path d="M21.25,5a.76.76,0,0,1,.75.75v3.5a.76.76,0,0,1-.75.75h-6.5A.76.76,0,0,1,14,9.25V5.75A.76.76,0,0,1,14.75,5h6.5m0-1h-6.5A1.76,1.76,0,0,0,13,5.75v3.5A1.76,1.76,0,0,0,14.75,11h6.5A1.76,1.76,0,0,0,23,9.25V5.75A1.76,1.76,0,0,0,21.25,4Z"
                          transform="translate(-1 -4)"/>
                    <path d="M9.25,14a.76.76,0,0,1,.75.75v3.5a.76.76,0,0,1-.75.75H2.75A.76.76,0,0,1,2,18.25v-3.5A.76.76,0,0,1,2.75,14h6.5m0-1H2.75A1.76,1.76,0,0,0,1,14.75v3.5A1.76,1.76,0,0,0,2.75,20h6.5A1.76,1.76,0,0,0,11,18.25v-3.5A1.76,1.76,0,0,0,9.25,13Z"
                          transform="translate(-1 -4)"/>
                    <path d="M21.25,14a.76.76,0,0,1,.75.75v3.5a.76.76,0,0,1-.75.75h-6.5a.76.76,0,0,1-.75-.75v-3.5a.76.76,0,0,1,.75-.75h6.5m0-1h-6.5A1.76,1.76,0,0,0,13,14.75v3.5A1.76,1.76,0,0,0,14.75,20h6.5A1.76,1.76,0,0,0,23,18.25v-3.5A1.76,1.76,0,0,0,21.25,13Z"
                          transform="translate(-1 -4)"/>
                </svg>`,
			category: this.category,
			//language=HTML
			content: `
				<div class="card-group" data-gjs-type="${this.type}-group">
					<div class="card" data-gjs-type="${this.type}">
						${this.cardBody}
					</div>
					<div class="card" data-gjs-type="${this.type}">
						${this.cardBody}
					</div>
					<div class="card" data-gjs-type="${this.type}">
						${this.cardBody}
					</div>
					<div class="card" data-gjs-type="${this.type}">
						${this.cardBody}
					</div>
				</div>`
		});

		this.blockManager.add(this.type + '-icon-header', {
			attributes : {
				title : this.name + " Icon Header"
			},
			label: this.name + " Icon Header",
			//language=SVG
			media: `
                <svg id="card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
                    <defs>
                        <style>
                            .cls-1{fill:none;stroke:#000;stroke-miterlimit:10;}
                            .cls-2{opacity:0.5;}
                        </style>
                    </defs>
                    <path class="cls-1" d="M7,7.8" transform="translate(0 -4)"/>
	                <path class="cls-2" d="M22.25,5a.76.76,0,0,1,.75.75v12.5a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,18.25V5.75A.76.76,0,0,1,1.75,5h20.5m0-1H1.75A1.76,1.76,0,0,0,0,5.75v12.5A1.76,1.76,0,0,0,1.75,20h20.5A1.76,1.76,0,0,0,24,18.25V5.75A1.76,1.76,0,0,0,22.25,4Z"
                              transform="translate(0 -4)"/>
                    <polygon points="23 8.17 1 8.17 1 9.17 23 9.17 23 8.17 23 8.17"/>
                    <path d="M12,8.26l.12.25.27,0-.19.2,0,.27L12,8.88,11.76,9l0-.27-.19-.2.27,0L12,8.26M12,6l-.79,1.59-1.75.26,1.27,1.24-.3,1.74L12,10l1.57.82-.3-1.74,1.27-1.24-1.75-.26L12,6Z"
                          transform="translate(0 -4)"/>
                </svg>`,
			category: this.category,
			content: this.cardIconHeader
		});


		this.blockManager.add(this.type + '-title', {
			attributes : {
				title : this.name + " Title"
			},
			label: this.name + " Title",
			//language=SVG
			media: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
                    <defs>
                        <style>.a{opacity:0.5;}</style>
                    </defs>
                    <g class="a">
                        <path d="M22.25,5a.76.76,0,0,1,.75.75v12.5a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,18.25V5.75A.76.76,0,0,1,1.75,5h20.5m0-1H1.75A1.76,1.76,0,0,0,0,5.75v12.5A1.76,1.76,0,0,0,1.75,20h20.5A1.76,1.76,0,0,0,24,18.25V5.75A1.76,1.76,0,0,0,22.25,4Z"
                              transform="translate(0 -4)"/>
                    </g>
                    <rect x="2" y="3" width="20" height="3"/>
                    <rect class="a" x="2" y="7" width="20" height="1"/>
                    <rect class="a" x="2" y="9" width="16" height="1"/>
                </svg>`,
			category: this.category,
			content: `<h4 class="card-title" data-gjs-type="${this.type}-title">Title</h4>">`
		});

		this.blockManager.add(this.type + '-text', {
			attributes : {
				title : this.name + " Text"
			},
			label: this.name + " Text",
			//language=SVG
			media: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
                    <defs>
                        <style>.a{opacity:0.5;}</style>
                    </defs>

                    <path class="a"
                          d="M22.25,5a.76.76,0,0,1,.75.75v12.5a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,18.25V5.75A.76.76,0,0,1,1.75,5h20.5m0-1H1.75A1.76,1.76,0,0,0,0,5.75v12.5A1.76,1.76,0,0,0,1.75,20h20.5A1.76,1.76,0,0,0,24,18.25V5.75A1.76,1.76,0,0,0,22.25,4Z"
                          transform="translate(0 -4)"/>
                    <rect class="a" x="2" y="3" width="20" height="3"/>
                    <rect x="2" y="7" width="20" height="1"/>
                    <rect class="a" x="2" y="9" width="16" height="1"/>
                </svg>`,
			category: this.category,
			content: `<p class="card-text" data-gjs-type="${this.type}-text">Card Text</p>">`
		});

		this.blockManager.add(this.type + '-link', {
			attributes : {
				title : this.name + " Link"
			},
			label: this.name + " Link",
			//language=SVG
			media: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
                    <defs>
                        <style>.a{opacity:0.5;}</style>
                    </defs>
                    <g class="a">
                        <path d="M22.25,5a.76.76,0,0,1,.75.75v12.5a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,18.25V5.75A.76.76,0,0,1,1.75,5h20.5m0-1H1.75A1.76,1.76,0,0,0,0,5.75v12.5A1.76,1.76,0,0,0,1.75,20h20.5A1.76,1.76,0,0,0,24,18.25V5.75A1.76,1.76,0,0,0,22.25,4Z"
                              transform="translate(0 -4)"/>
                    </g>
                    <rect class="a" x="2" y="3" width="20" height="3"/>
                    <rect class="a" x="2" y="7" width="20" height="1"/>
                    <rect x="2" y="9" width="16" height="1"/>
                </svg>`,
			category: this.category,
			content: `<a href="#" class="card-link" data-gjs-type="${this.type}-link">Card link</a>">`
		});

	}

	addTypes() {
		this.components.addType(this.type, {
			extend: this.namespace + "default",
			model: {
				defaults: {
					name: this.name,
					classes: ['card'],
					draggable: true,
					//droppable: [this.type + '-icon-header', this.namespace + "-ratio", this.type + "-body", this.type + "-header", this.type + "-footer", this.type + "-image-top", this.type + "-image-bottom"].join(", "),
					stylable: false,
					traits: [
						{
							type: 'class_select',
							options: [
								{value: '', name: 'Default'},
								{value: 'shadow-sm', name: 'shadow small'},
								{value: 'shadow-lg', name: 'shadow large'},
								{value: 'shadow ', name: 'shadow'},
								{value: 'shadow-none', name: 'None'}
							],
							name: 'shadow',
							label: 'Shadow'
						}
					].concat(this.traits)
				},
				init() {

				}
			},
			isComponent: (el) => {
				if (el && el.classList && el.classList.contains('card')) {
					return {type: this.type};
				}
			}
		});
		/** Body **/
		this.components.addType(this.type + '-body', {
			extend: this.namespace + "text",
			model: {
				defaults: {
					name: 'Card Body',
					classes: ['card-body'],
					/**
					 * @param {Component} component
					 */
					droppable(component) {

						let name = component.getName();
						switch (name) {
							case "card-image-bottom" :
							case "card-image-top" :
								return false;
						}
						return true;
					},
					copyable: false,
				}
			},
			viewExtend: "text",
			isComponent: (el) => {
				if (el && el.classList && el.classList.contains('card-body')) {
					return {type: this.type + '-body'};
				}
			}
		});

		/** Header **/
		this.components.addType(this.type + '-header', {
			extend: this.namespace + "default",
			model: {
				defaults: {
					name: 'Card Header',
					classes: ['card-header', 'd-flex', 'justify-content-between', 'align-items-center'],
					////droppable : [this.type].join(", "),
					draggable: ".card",
					copyable: false,
					stylable: false,
					traits: [
						this.traitPadding,
						this.traitTextBackgroundColor,
						this.traitJustify
					]
				}
			},
			isComponent: (el) => {
				if (el && el.classList && el.classList.contains('card-header')) {
					return {type: this.type + '-header'};
				}
			}
		});

		this.components.addType(this.type + '-icon-header', {
			extend: this.type + '-header',
			model: {
				defaults: {
					name: 'Icon Header',
					classes: ['card-header', 'd-flex', 'justify-content-center', 'align-items-center', 'card-icon-header'],
					copyable: false,
					stylable: false,
					draggable: ".card",
					traits: [
						this.traitPadding,
						this.traitTextBackgroundColor,
						this.traitJustify
					]
				}
			},
			isComponent: (el) => {
				if (el && el.classList && el.classList.contains('card-icon-header')) {
					return {type: this.type + '-icon-header'};
				}
			}
		});

		/** Footer **/
		this.components.addType(this.type + '-footer', {
			extend: this.namespace + "default",
			model: {
				defaults: {
					name: 'Card Footer',
					classes: ['card-footer', 'd-flex', 'justify-content-between', 'align-items-center'],
					//droppable : [this.type].join(", "),
					draggable: ".card",
					copyable: false,
					stylable: false,
					traits: [
						this.traitPadding,
						this.traitTextBackgroundColor,
						this.traitJustify
					]
				}
			},
			isComponent: (el) => {
				if (el && el.classList && el.classList.contains('card-footer')) {
					return {type: this.type + '-footer'};
				}
			}
		});

		/** Group **/
		this.components.addType(this.type + '-group', {
			extend: this.namespace + "default",
			model: {
				defaults: {
					name: 'Card Group',
					classes: ['card-group'],
					droppable: true,
					draggable: true,//'.body, .container, .container-fluid'
				}
			},
			isComponent: (el) => {
				if (el && el.classList && el.classList.contains('card-group')) {
					return {type: this.type + '-group'};
				}
			}
		});

		/** Image Bottom **/
		this.components.addType(this.type + '-image-bottom', {
			extend: this.namespace + "image",
			model: {
				defaults: {
					name: 'Card Image Bottom',
					classes: ['card-img-bottom'],
					droppable: false,
					draggable: ".card",
				}
			},
			isComponent: (el) => {
				if (el && el.classList && el.classList.contains('card-img-bottom')) {
					return {type: this.type + '-image-bottom'};
				}
			}
		});
		/** Image Top **/
		this.components.addType(this.type + '-image-top', {
			extend: this.namespace + "image",
			model: {
				defaults: {
					name: 'Card Image Top',
					classes: ['card-img-top'],
					droppable: false,
					draggable: ".card",
				}
			},
			isComponent: (el) => {
				if (el && el.classList && el.classList.contains('card-img-top')) {
					return {type: this.type + '-image-top'};
				}
			}
		});
		/** Image Overlay **/
		this.components.addType(this.type + '-image-overlay', {
			extend: this.namespace + "default",
			model: {
				defaults: {
					name: 'Card Image Overlay',
					classes: ['card-img-overlay'],
					droppable: true,
					draggable: ".card",
				}
			},
			isComponent: (el) => {
				if (el && el.classList && el.classList.contains('card-img-overlay')) {
					return {type: this.type + '-image-overlay'};
				}
			}
		});
		/** Link **/
		this.components.addType(this.type + '-link', {
			extend: this.namespace + "link",
			model: {
				defaults: {
					name: 'Card Link',
					classes: ['card-link'],
					droppable: false,
					draggable: ".card-body",
				}
			},
			isComponent: (el) => {
				if (el && el.classList && el.classList.contains('card-link')) {
					return {type: this.type + '-link'};
				}
			}
		});
		/** Title **/
		this.components.addType(this.type + '-title', {
			extend: this.namespace + "text",
			model: {
				defaults: {
					'custom-name': 'Card Title',
					classes: ['card-title'],
					droppable: false,
					draggable: ".card-body",
					copyable: true,
					stylable: false,
					traits: this.traits
				}
			},
			isComponent: (el) => {
				if (el && el.classList && el.classList.contains('card-title')) {
					return {type: this.type + '-title'};
				}
			}
		});
		/** Text **/
		this.components.addType(this.type + '-text', {
			extend: this.namespace + "text",
			model: {
				defaults: {
					name: 'Card Text',
					classes: ['card-text'],
					droppable: false,
					draggable: ".card-body",
					copyable: true,
					stylable: false,

					traits: this.traits
				}
			},
			isComponent: (el) => {
				if (el && el.classList && el.classList.contains('card-text')) {
					return {type: this.type + '-text'};
				}
			}
		});

	}
}
