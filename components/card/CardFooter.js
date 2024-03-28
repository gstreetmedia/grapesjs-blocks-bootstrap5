export const CardFooterBlock = (bm) => {
	bm.add('bs_card_footer', {
		label: `
            <i class="bi bi-border-bottom fs-3 mb-3"></i>
            <div>Footer</div>
        `,
		category: 'Card',
		content: `<div data-gjs-type="bs_card_footer"></div>`
	});
};

export default (comps) => {
	comps.addType('bs_card_footer', {
		extend: "default",
		model: {
			defaults: {
				'custom-name': 'Card Footer',
				classes: ['card-footer', 'd-flex','justify-content-between','align-items-center'],
				droppable : true,
				copyable : false,
			}
		},
		isComponent: (el) => {
			if (el && el.classList && el.classList.contains('card-footer')) {
				return {type: 'bs_card_footer'};
			}
		}
	});
}