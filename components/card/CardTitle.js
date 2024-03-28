export const CardTitleBlock = (bm) => {
	bm.add('bs_card_title', {
		label: `
            <i class="bi bi-type-h3 fs-3 mb-3"></i>
            <div>Title</div>
        `,
		category: 'Card',
		content: {
			type: 'bs_card_title',
			content : `Card Title`
		}
	});
};

export default (comps) => {
	comps.addType('bs_card_title', {
		extend: "text",
		model: {
			defaults: {
				'custom-name': 'Card Time',
				classes: ['card-title'],
				droppable : true,
				copyable : false,
			}
		},
		isComponent: (el) => {
			if (el && el.classList && el.classList.contains('card-title')) {
				return {type: 'bs_card_image_overlay'};
			}
		}
	});
}