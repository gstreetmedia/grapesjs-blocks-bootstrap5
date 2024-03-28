export class Container extends HTMLElement {
	constructor() {
		super();
		this.classList.add("row");
	}
}

customElements.define("bs-container", Container, {extends:"div"})

export class Column extends HTMLElement {
	constructor() {
		super();
		this.init();
	}

	init() {
		let match = false;
		this.classList.forEach(function (selector) {
			if (selector === "col" || selector.match(/^col-/)) {
				match = true;
			}
		});
		if (!match) {
			this.classList.add("col");
		}
	}
}

customElements.define("bs-column", Column, {extends:"div"})

export class Row extends HTMLElement {
	constructor() {
		super();
		this.classList.add("row");
	}
}

customElements.define("bs-row", Row, {extends:"div"});


