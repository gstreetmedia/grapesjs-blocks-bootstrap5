import ComponentBase from "./ComponentBase";

export default class Default extends ComponentBase {
	addTypes() {
		console.log(this.type);
		this.components.addType(this.type, {
			extend: "default",
			model: {
				defaults : {
					name : "BS Div",
					tagName: 'div',
					styleable : false,
					traits: this.traits,
				},
				init() {
					const classes = this.get('classes');
					classes.bind('add', this.classesChanged.bind(this));
					classes.bind('change', this.classesChanged.bind(this));
					classes.bind('remove', this.classesChanged.bind(this));

					const attributes = this.get("attributes");
					if (attributes && typeof attributes.bind === "function") {
						attributes.bind('change', this.attributesChanged.bind(this));
						attributes.bind('remove', this.attributesChanged.bind(this));
					}

					this.bsInit();
				},
				/* BS comps use init2, not init */
				bsInit() {

				},
				attributesChanged() {
					console.log("attributesChanged");
				},
				/* method where we can check if we should changeType */
				classesChanged() {
				},
				/* replace the comp with a copy of a different type */
				changeType(new_type) {
					const collection = this.collection;
					const at = collection.indexOf(this);
					const button_opts = {
						type: new_type,
						style: this.getStyle(),
						attributes: this.getAttributes(),
						content: this.view.el.innerHTML
					}
					collection.remove(this);
					collection.add(button_opts, {at});
					this.destroy();
				},
				isComponent: (el) => {

					if (el && el.tagName === "DIV") {
						//return {type: this.type}
					}
				}
			}
		});
	}
}