import {elHasClass} from "../utils";


export const FileInputBlock = (bm, label) => {
	bm.add('file-input', {
		label: label,
		media : `<svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path class="gjs-block-svg-path" d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z"></path>
    <polygon class="gjs-block-svg-path" points="4 10 5 10 5 14 4 14"></polygon>
</svg>
`,
		category: 'Forms',
		content: `<input type="file" name="file" class="form-control-file" id="exampleFormControlFile1">`
	});
};

export default (dc, traits, config = {}) => {
	const type = 'file-input';

	dc.addType(type, {
		extend : "default",
		model: {
			defaults: {
				'custom-name': config.labels.input,
				tagName: 'input',
				draggable: 'form .form-group',
				droppable: false,
				traits: [
					traits.name,
					traits.required,
					{
						type: 'checkbox',
						label: config.labels.trait_multiple,
						name: 'multiple',
					},
				],
			},
		},
		isComponent: (el) => {
			if (el.tagName === 'INPUT' && elHasClass(el, 'form-control-file')) {
				return {type};
			}
		}
	});
}
