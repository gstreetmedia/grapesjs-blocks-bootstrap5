import labelIcon from "../icons/label.svg";

export const LabelBlock = (bm, label) => {
	bm.add('bs_label', {
		label: `
      ${labelIcon}
      <div>${label}</div>`,
		category: 'Forms',
		content: '<label for="" data-gjs-type="bs_label">Label</label>',
	});
};

export default (dc, traits, config = {}) => {

	dc.addType('bs_label', {
		extend: "text",
		model: {
			defaults: {
				tagName: 'label',
				traits: [traits.for],
			},
		},
		isComponent: (el) => {
			if (el && el.classList && el.classList.contains("form-label")) {
				return {type: 'bs_label'};
			}
		}
	});
}
