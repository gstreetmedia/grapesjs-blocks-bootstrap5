import constants from './constants';
import {elHasClass} from '../../utils';


export const TabsBlock = (bm, c) => {
	bm.add('tabs', {
		label: 'Tabs',
		//language=SVG
		media: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14">
                <defs>
                    <style>.a{opacity:0.5;}</style>
                </defs>
                <title>container</title>
                <path d="M6.25,5A.76.76,0,0,1,7,5.75V8H1V5.75A.76.76,0,0,1,1.75,5h4.5m0-1H1.75A1.76,1.76,0,0,0,0,5.75V9H8V5.75A1.76,1.76,0,0,0,6.25,4Z"
                      transform="translate(0 -4)"/>
                <g class="a">
                    <path d="M14.25,5a.76.76,0,0,1,.75.75V8H9V5.75A.76.76,0,0,1,9.75,5h4.5m0-1H9.75A1.76,1.76,0,0,0,8,5.75V9h8V5.75A1.76,1.76,0,0,0,14.25,4Z"
                          transform="translate(0 -4)"/>
                </g>
                <g class="a">
                    <path d="M22.25,5a.76.76,0,0,1,.75.75V8H17V5.75A.76.76,0,0,1,17.75,5h4.5m0-1h-4.5A1.76,1.76,0,0,0,16,5.75V9h8V5.75A1.76,1.76,0,0,0,22.25,4Z"
                          transform="translate(0 -4)"/>
                </g>
                <path d="M23,11v5.25a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,16.25V11H23m1-1H0v6.25A1.76,1.76,0,0,0,1.75,18h20.5A1.76,1.76,0,0,0,24,16.25V10Z"
                      transform="translate(0 -4)"/>
            </svg>`,
		category: 'Components',
		content: `
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Tab 1</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Tab 2</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Tab 3</a>
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
              <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
              <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
            </div>
        `
	});
	/*
	bm.add('tabs-tab', {
		label: 'Tab',
		//language=SVG
		media `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14">
                <defs>
                    <style>.a{opacity:0.5;}</style>
                </defs>
                <title>container</title>
                <path d="M6.25,5A.76.76,0,0,1,7,5.75V8H1V5.75A.76.76,0,0,1,1.75,5h4.5m0-1H1.75A1.76,1.76,0,0,0,0,5.75V9H8V5.75A1.76,1.76,0,0,0,6.25,4Z"
                      transform="translate(0 -4)"/>
                <g class="a">
                    <path d="M14.25,5a.76.76,0,0,1,.75.75V8H9V5.75A.76.76,0,0,1,9.75,5h4.5m0-1H9.75A1.76,1.76,0,0,0,8,5.75V9h8V5.75A1.76,1.76,0,0,0,14.25,4Z"
                          transform="translate(0 -4)"/>
                </g>
                <g class="a">
                    <path d="M22.25,5a.76.76,0,0,1,.75.75V8H17V5.75A.76.76,0,0,1,17.75,5h4.5m0-1h-4.5A1.76,1.76,0,0,0,16,5.75V9h8V5.75A1.76,1.76,0,0,0,22.25,4Z"
                          transform="translate(0 -4)"/>
                </g>
                <g class="a">
                    <path d="M23,11v5.25a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,16.25V11H23m1-1H0v6.25A1.76,1.76,0,0,0,1.75,18h20.5A1.76,1.76,0,0,0,24,16.25V10Z"
                          transform="translate(0 -4)"/>
                </g>
            </svg>`,
		category: 'Components',
		content: {
			type: 'tabs-tab',
		}
	});
	bm.add('tabs-tab-pane', {
		label: 'Tab Pane',
		//language=SVG
		media: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14">
                <defs>
                    <style>.a{opacity:0.5;}</style>
                </defs>
                <title>container</title>
                <g class="a">
                    <path d="M6.25,5A.76.76,0,0,1,7,5.75V8H1V5.75A.76.76,0,0,1,1.75,5h4.5m0-1H1.75A1.76,1.76,0,0,0,0,5.75V9H8V5.75A1.76,1.76,0,0,0,6.25,4Z"
                          transform="translate(0 -4)"/>
                </g>
                <g class="a">
                    <path d="M14.25,5a.76.76,0,0,1,.75.75V8H9V5.75A.76.76,0,0,1,9.75,5h4.5m0-1H9.75A1.76,1.76,0,0,0,8,5.75V9h8V5.75A1.76,1.76,0,0,0,14.25,4Z"
                          transform="translate(0 -4)"/>
                </g>
                <g class="a">
                    <path d="M22.25,5a.76.76,0,0,1,.75.75V8H17V5.75A.76.76,0,0,1,17.75,5h4.5m0-1h-4.5A1.76,1.76,0,0,0,16,5.75V9h8V5.75A1.76,1.76,0,0,0,22.25,4Z"
                          transform="translate(0 -4)"/>
                </g>
                <path d="M23,11v5.25a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,16.25V11H23m1-1H0v6.25A1.76,1.76,0,0,0,1.75,18h20.5A1.76,1.76,0,0,0,24,16.25V10Z"
                      transform="translate(0 -4)"/>
            </svg>`,
		category: 'Components',
		content: {
			type: 'tabs-tab-pane',
		}
	});

	 */
};

export default (dc, config = {}) => {
	const {navigationName, tabSelector} = constants;
	const classId = config.classNavigation;
	const type = navigationName;

	dc.addType(type, {
		extend: "default",
		model: {
			defaults: {

				name: 'Tabs Navigation',
				copyable: 0,
				draggable: true,
				droppable: tabSelector,

				traits: [
					{
						type: 'class_select',
						options: [
							{value: 'nav-tabs', name: 'Tabs'},
							{value: 'nav-pills', name: 'Pills'},
						],
						label: 'Type',
					},
					{
						type: 'class_select',
						options: [
							{value: '', name: 'Left'},
							{value: 'nav-fill', name: 'Fill'},
							{value: 'nav-justified', name: 'Justify'},
						],
						label: 'Layout',
					},
				],
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
				const props = [
					'type',
					'layout',
				];
				const reactTo = props.map(prop => `change:${prop}`).join(' ');
				this.listenTo(this.model, reactTo, this.render);
				const comps = this.model.components();

				// Add a basic template if it's not yet initialized
				if (!comps.length) {
					comps.add(`
                        <ul class="nav nav-tabs" role="tablist">
                          <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Tab 1</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Tab 2</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Tab 3</a>
                          </li>
                        </ul>
                    `);
				}
			},
		}
	});
}
