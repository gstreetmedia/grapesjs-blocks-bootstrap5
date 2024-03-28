export const CardHeaderBlock = (bm) => {
	bm.add('bs_card_header', {
		label: `
            <i class="bi bi-border-top fs-3 mb-3"></i>
            <div>Header</div>
        `,
		category: 'Card',
		//language=HTML
		content: `
			<div data-gjs-type="bs_card_header">
				<div data-gjs-type="text"></div>
			</div>`
	});
};

export default (comps) => {
	comps.addType('bs_card_header', {
		extend: "text",
		model: {
			defaults: {
				'custom-name': 'Card Header',
				classes: ['card-header', 'd-flex', 'justify-content-between', 'align-items-center'],
				droppable: true,
				copyable : false,
			}
		},
		isComponent: (el) => {
			if (el && el.classList && el.classList.contains('card-header')) {
				return {type: 'bs_card_header'};
			}
		}
	});
}