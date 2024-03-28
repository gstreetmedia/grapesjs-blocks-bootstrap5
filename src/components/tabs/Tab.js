import constants from './constants';
import {elHasClass} from '../../utils';

export default (dc, config = {}) => {
	const {tabName, navigationSelector} = constants;
	const classId = config.classTab;
	const type = tabName;

	dc.addType(type, {
		extend: "default",
		model: {
			defaults: {
				name: 'Tab',
				//language=SVG
				media: `
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 5">
						<defs>
							<style>.a {
								opacity: 0.5;
							}</style>
						</defs>
						<title>container</title>
						<path d="M6.25,11a.76.76,0,0,1,.75.75V14H1V11.75A.76.76,0,0,1,1.75,11h4.5m0-1H1.75A1.76,1.76,0,0,0,0,11.75V15H8V11.75A1.76,1.76,0,0,0,6.25,10Z"
						      transform="translate(0 -10)"/>
						<g class="a">
							<path d="M14.25,11a.76.76,0,0,1,.75.75V14H9V11.75A.76.76,0,0,1,9.75,11h4.5m0-1H9.75A1.76,1.76,0,0,0,8,11.75V15h8V11.75A1.76,1.76,0,0,0,14.25,10Z"
							      transform="translate(0 -10)"/>
						</g>
						<g class="a">
							<path d="M22.25,11a.76.76,0,0,1,.75.75V14H17V11.75a.76.76,0,0,1,.75-.75h4.5m0-1h-4.5A1.76,1.76,0,0,0,16,11.75V15h8V11.75A1.76,1.76,0,0,0,22.25,10Z"
							      transform="translate(0 -10)"/>
						</g>
					</svg>`,
				tagName: 'li',
				copyable: true,
				draggable: navigationSelector,
			},

			init() {
				this.get('classes').pluck('name').indexOf(classId) < 0 && this.addClass(classId);
			}
		},
		isComponent(el) {
			if (elHasClass(el, classId)) return {type};
		},
		view: {
			init() {
				const comps = this.model.components();

				// Add a basic template if it's not yet initialized
				if (!comps.length) {
					comps.add(`
              <a class="nav-link active" id="tab-1" data-toggle="tab" href="#tab-pane-1" role="tab" aria-controls="tab" aria-selected="true">Tab</a>
          `);
				}
			},
		}
	});
}
