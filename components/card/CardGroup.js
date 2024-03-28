export const CardGroupBlock = (bm) => {
	bm.add('bs_card_group', {
		label: `
            <i class="bi bi-grid fs-3 mb-3"></i>
            <div>Card Group</div>
        `,
		category: 'Card',
		content: {
			type: 'bs_card_group',
			content : `<div class="card-group"></div>`
		}
	});
};

export default (comps) => {
	comps.addType('bs_card_group', {
		extend: "default",
		model: {
			defaults: {
				'custom-name': 'Card Footer',
				classes: ['card-group'],
				droppable : true,
				draggable : 'card'
			}
		},
		isComponent: (el) => {
			if (el && el.classList && el.classList.contains('card-group')) {
				return {type: 'bs_card_footer'};
			}
		}
	});
}