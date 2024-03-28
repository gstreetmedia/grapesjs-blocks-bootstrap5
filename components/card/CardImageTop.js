export const CardImageTopBlock = (bm) => {
	bm.add('bs_card_image_top', {
		label: `
            <i class="bi bi-card-image fs-3 mb-3"></i>
            <div>Image Top</div>
        `,
		category: 'Card',
		content: `<img src="https://dummyimage.com/16:9x360" alt="..." data-gjs-type="bs_card_image_top">`
	});
};

export default (comps) => {
	let baseType = comps.getType('image');
	comps.addType('bs_card_image_top', {
		extend: "image",
		model: {
			defaults: {
				name: 'Card Image Top',
				classes: ['card-img-top'],
				droppable : false,
				traits : baseType.model.getDefaults().traits
			}
		},
		isComponent: (el) => {
			if (el && el.classList && el.classList.contains('card-img-top')) {
				return {type: 'bs_card_image_top'};
			}
		},
		viewExtend: "image"
	});
}