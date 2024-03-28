export const CardBodyBlock = (bm) => {
	bm.add('card-body', {
		label: this.createLabel("bi bi-square fs-3 mb-3"),
		category: 'Card',
		//language=HTML
		content: `
			<div data-get-type="card-body">
				<h5 class="card-title" data-gjs-type="bs_card_title">Title</h5>
				<p class="card-text" data-gjs-type="bs_card_text">Text</p>
			</div>
		`
	});
};

export default (comps) => {
	comps.addType('card-body', {
		extend: "bs-default",
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
				},
				copyable : false,
			}
		},
		isComponent: (el) => {
			if (el && el.classList && el.classList.contains('card-body')) {
				console.log("card-body");
				return {type: 'card-body'};
			}
		}
	});
}