
export const CollapseBlock = (bm, label) => {
	bm.add('collapse', {
		label: `Collapse`,
		//language=SVG
		media: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 15">
                <defs>
                    <style>.a{opacity:0.5;}</style>
                </defs>
                <title>container</title>
                <path d="M22,5a1,1,0,0,1,1,1V8H1V6A1,1,0,0,1,2,5H22m0-1H2A2,2,0,0,0,0,6V9H24V6a2,2,0,0,0-2-2Z"
                      transform="translate(0 -4)"/>
                <g class="a">
                    <path d="M23,10v7a1,1,0,0,1-1,1H2a1,1,0,0,1-1-1V10H23m1-1H0v8a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V9Z"
                          transform="translate(0 -4)"/>
                </g>
                <g class="a">
                    <polygon points="19.65 2.01 19.38 2.29 20.2 3.09 20.46 2.81 19.65 2.01 19.65 2.01"/>
                    <polygon points="20.73 2 19.93 2.82 20.2 3.09 21 2.27 20.73 2 20.73 2"/>
                </g>
            </svg>`,
		category: 'Components',
		content: {
			type: 'collapse'
		}
	});
};

export default (editor) => {
	const comps = editor.DomComponents;

	comps.addType('collapse', {
		extend: "bs-default",
		model: {
			defaults:
				{
					'custom-name': 'Dropdown',
					classes: ['collapse'],
					droppable: true,
					traits: [
						{
							type: 'class_select',
							options: [
								{value: '', name: 'Closed'},
								{value: 'show', name: 'Open'}
							],
							label: 'Initial state'
						}
					]
				},
			/*init2() {
			  window.asdf = this;
			  const toggle = {
				type: 'button',
				content: 'Click to toggle',
				classes: ['btn', 'dropdown-toggle']
			  }
			  const toggle_comp = this.append(toggle)[0];
			  const menu = {
				type: 'dropdown_menu'
			  }
			  const menu_comp = this.append(menu)[0];
			  this.setupToggle(null, null, {force: true});
			  const comps = this.components();
			  comps.bind('add', this.setupToggle.bind(this));
			  comps.bind('change', this.setupToggle.bind(this));
			  comps.bind('remove', this.setupToggle.bind(this));
			  const classes = this.get('classes');
			  classes.bind('add', this.setupToggle.bind(this));
			  classes.bind('change', this.setupToggle.bind(this));
			  classes.bind('remove', this.setupToggle.bind(this));
			},
			setupToggle(a, b, options = {}) {
			  const toggle = this.components().addQueryFilter(c => c.getAttributes().class.split(' ').includes('dropdown-toggle'))[0];
			  // raise error if toggle not found
			  const menu = this.components().addQueryFilter(c => c.getAttributes().class.split(' ').includes('dropdown-menu'))[0];
			  // raise error if menu not found

			  if(options.force !== true && options.ignore === true) {
				return;
			  }

			  if(toggle && menu) {

				function hasEvent(comp) {
				  let eca = comp._events['change:attributes'];
				  if(!eca) return false;
				  return eca.addQueryFilter(e => e.callback.type == 'setupToggle').length != 0;
				}

				// setup event listeners if they aren't set
				if(!hasEvent(toggle)) {
				  this.listenTo(toggle, 'change:attributes', this.setupToggle);
				}
				if(!hasEvent(menu)) {
				  this.listenTo(menu, 'change:attributes', this.setupToggle);
				}

				// setup toggle
				var toggle_attrs = toggle.getAttributes();
				toggle_attrs['role'] = 'button'; // if A
				var menu_attrs = menu.getAttributes();
				if(!toggle_attrs.hasOwnProperty('data-toggle')) {
				  toggle_attrs['data-toggle'] = 'dropdown';
				}
				if(!toggle_attrs.hasOwnProperty('aria-haspopup')) {
				  toggle_attrs['aria-haspopup'] = true;
				}
				const dropdown_classes = this.getAttributes().class.split(' ');
				toggle_attrs['aria-expanded'] = dropdown_classes.includes('show');
				toggle.set('attributes', toggle_attrs, {ignore: true});
				// setup menu
				// toggle needs ID for aria-labelled on the menu, could alert here
				if(toggle_attrs.hasOwnProperty('recordId')) {
				  menu_attrs['aria-labelledby'] = toggle_attrs.recordId;
				} else {
				  delete menu_attrs['aria-labelledby'];
				}
				menu.set('attributes', menu_attrs, {ignore: true});
			  }
			}*/
		},
		isComponent: (el) => {
			if (el && el.classList && el.classList.contains('dropdown')) {
				return {type: 'dropdown'};
			}
		}
	});
}
