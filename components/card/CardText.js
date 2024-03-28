export const CardTextBlock = (bm) => {
	bm.add('bs_card_text', {
		label: `
            <i class="bi bi-body-text fs-3 mb-3"></i>
            <div>Text</div>
        `,
		category: 'Card',
		content: `<p data-gs-type="bs_card_text">Card Text</p>`
	});
};

export default (comps) => {
	comps.addType('bs_card_text', {
		extend: "text",
		model: {
			defaults: {
				'custom-name': 'Card Text',
				classes: ['card-text'],
				droppable : true
			}
		},
		isComponent: (el) => {
			if (el && el.classList && el.classList.contains('card-text')) {
				return {type: 'bs_card_text'};
			}
		}
	});
}