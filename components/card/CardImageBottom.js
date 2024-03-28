export const CardImageBottomBlock = (bm) => {
	bm.add('bs_card_image_bottom', {
		label: `
            <i class="bi bi-card-image fs-3 mb-3 border-top"></i>
            <div>Image Bottom</div>
        `,
		category: 'Card',
		content: {
			type: 'bs_card_image_top',
			content : `<img src="https://dummyimage.com/16:9x360" class="card-img-bottom" alt="...">`
		}
	});
};

export default (comps) => {
	comps.addType('bs_card_image_bottom', {
		extend: "image",
		model: {
			defaults: {
				name: 'Card Image Bottom',
				classes: ['card-img-bottom'],
				droppable : false
			}
		},
		isComponent: (el) => {
			if (el && el.classList && el.classList.contains('card-img-bottom')) {
				return {type: 'bs_card_image_bottom'};
			}
		}
	});
}