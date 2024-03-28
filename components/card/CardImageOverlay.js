export const CardImageOverlayBlock = (bm) => {
	bm.add('bs_card_image_overlay', {
		label: `
            <i class="bi bi-card-heading fs-3 mb-3"></i>
            <div>Image Overlay</div>
        `,
		category: 'Card',
		content: {
			type: 'bs_card_image_overlay',
			content : `<div class="card-img-overlay"></div>`
		}
	});
};

export default (comps) => {
	comps.addType('bs_card_image_overlay', {
		extend: "default",
		model: {
			defaults: {
				'custom-name': 'Card Image Overlay',
				classes: ['card-img-overlay'],
				droppable : true
			}
		},
		isComponent: (el) => {
			if (el && el.classList && el.classList.contains('card-img-overlay')) {
				return {type: 'bs_card_image_overlay'};
			}
		}
	});
}