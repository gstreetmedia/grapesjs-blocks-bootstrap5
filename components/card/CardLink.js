export const CardLinkBlock = (bm) => {
	bm.add('bs_card_link', {
		label: `
            <i class="bi bi-link-45deg fs-3 mb-3"></i>
            <div>Link</div>
        `,
		category: 'Card',
		content: {
			type: 'bs_card_image_top',
			content : `<a href="#" class="card-link">Card link</a>`
		}
	});
};

export default (comps) => {
	comps.addType('bs_card_link', {
		extend: "link",
		model: {
			defaults: {
				'custom-name': 'Card Link',
				classes: ['card-link'],
				droppable : false
			}
		},
		isComponent: (el) => {
			if (el && el.classList && el.classList.contains('card-link')) {
				return {type: 'bs_card_link'};
			}
		}
	});
}