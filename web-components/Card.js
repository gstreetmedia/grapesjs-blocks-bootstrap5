export class Card extends HTMLElement {
	constructor() {
		super();
		this.classList.add("card");
	}
}

customElements.define("bs-card", Card, { extends: "div" });


export class CardHeader extends HTMLElement {
	constructor() {
		super();
		this.classList.add("card-header");
	}
}

customElements.define("bs-card-header", CardHeader, { extends: "div" });

export class CardImageTop extends HTMLElement {
	constructor() {
		super();
		this.classList.add("card-image-top");
	}
}

customElements.define("bs-card-image-top", CardImageTop, { extends: "img" });

export class CardBody extends HTMLElement {
	constructor() {
		super();
		this.classList.add("card-body");
	}
}

customElements.define("bs-card-body", CardImageTop, { extends: "div" });

export class CardTitle extends HTMLElement {
	constructor() {
		super();
		this.classList.add("card-title");
	}
}

customElements.define("bs-card-title", CardTitle, { extends: "p" })


export class CardText extends HTMLElement {
	constructor() {
		super();
		this.classList.add("card-text");
	}
}

customElements.define("bs-card-text", CardText, { extends: "p" })

export class CardImageBottom extends HTMLElement {
	constructor() {
		super();
		this.classList.add("card-image-bottom");
	}
}

customElements.define("bs-card-image-bottom", CardImageBottom, { extends: "img" });

export class CardFooter extends HTMLElement {
	constructor() {
		super();
		this.classList.add("card-footer");
	}
}

customElements.define("bs-card-image-bottom", CardImageBottom, { extends: "div" });