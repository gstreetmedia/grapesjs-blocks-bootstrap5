import ComponentBase from "./ComponentBase";

export default class Form extends ComponentBase {
	addBlocks() {
		this.blockManager.add(this.type, {
			attributes: {
				title: "Form"
			},
			label: "Form",
			//language=SVG
			media: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 13.5">
                    <title>container</title>
                    <path d="M21,5.5a.51.51,0,0,1,.5.5V7.5A.51.51,0,0,1,21,8H3a.51.51,0,0,1-.5-.5V6A.5.5,0,0,1,3,5.5H21m0-1H3A1.5,1.5,0,0,0,1.5,6V7.5A1.5,1.5,0,0,0,3,9H21a1.5,1.5,0,0,0,1.5-1.5V6A1.5,1.5,0,0,0,21,4.5Z"
                          transform="translate(-1.5 -4.5)"/>
                    <path d="M21,10.5a.51.51,0,0,1,.5.5v1.5a.51.51,0,0,1-.5.5H3a.51.51,0,0,1-.5-.5V11a.5.5,0,0,1,.5-.5H21m0-1H3A1.5,1.5,0,0,0,1.5,11v1.5A1.5,1.5,0,0,0,3,14H21a1.5,1.5,0,0,0,1.5-1.5V11A1.5,1.5,0,0,0,21,9.5Z"
                          transform="translate(-1.5 -4.5)"/>
                    <path d="M6,15.5a.51.51,0,0,1,.5.5v.5A.51.51,0,0,1,6,17H3a.51.51,0,0,1-.5-.5V16a.51.51,0,0,1,.5-.5H6m0-1H3A1.5,1.5,0,0,0,1.5,16v.5A1.5,1.5,0,0,0,3,18H6a1.5,1.5,0,0,0,1.5-1.5V16A1.5,1.5,0,0,0,6,14.5Z"
                          transform="translate(-1.5 -4.5)"/>
                </svg>
			`,
			category: 'Forms',
			//language=HTML
			content: `
				<form data-gjs-type="${this.type}">
					<div class="form-floating mb-3" data-gjs-type="${this.namespace}form-input-floating">
						<input type="text" class="form-control" value="" data-gjs-type="${this.namespace}input"
						       name="name"
						       placeholder="Name">
						<label data-gjs="${this.namespace}label" for="">Name</label>
					</div>
					<div class="form-floating mb-3" data-gjs-type="${this.namespace}form-input-floating">
						<input type="text" class="form-control" value="" data-gjs-type="${this.namespace}input"
						       name="email"
						       placeholder="Email">
						<label data-gjs="${this.namespace}label" for="">Email</label>
					</div>
					<div>
						<button type="submit" class="btn btn-primary" data-gjs-type="${this.namespace}button">Submit
						</button>
					</div>
				</form>
			`,
		});

		this.blockManager.add(
			this.type + "-fieldset",
			{
				label: "Field Set",
				attributes: {
					title: "Fieldset"
				},
				//language=SVG
				media: `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14">
                        <title>container</title>
                        <path d="M20.5,8a.51.51,0,0,1,.5.5V10a.51.51,0,0,1-.5.5H3.5A.51.51,0,0,1,3,10V8.5A.5.5,0,0,1,3.5,8h17m0-1H3.5A1.5,1.5,0,0,0,2,8.5V10a1.5,1.5,0,0,0,1.5,1.5h17A1.5,1.5,0,0,0,22,10V8.5A1.5,1.5,0,0,0,20.5,7Z"
                              transform="translate(0 -5)"/>
                        <path d="M20.5,13.5a.51.51,0,0,1,.5.5v1.5a.51.51,0,0,1-.5.5H3.5a.51.51,0,0,1-.5-.5V14a.5.5,0,0,1,.5-.5h17m0-1H3.5A1.5,1.5,0,0,0,2,14v1.5A1.5,1.5,0,0,0,3.5,17h17A1.5,1.5,0,0,0,22,15.5V14a1.5,1.5,0,0,0-1.5-1.5Z"
                              transform="translate(0 -5)"/>
                        <path d="M23,6V18H1V6H23m1-1H0V19H24V5Z" transform="translate(0 -5)"/>
                    </svg>`,
				category: 'Forms',
				//language=HTML
				content: `
					<fieldset data-gjs-type="${this.type}-fieldset">Heading</fieldset>`
			},
		);

		this.blockManager.add(
			this.type + "-legend",
			{
				label: "Legend",
				attributes: {
					title: "Legend"
				},
				//language=SVG
				media: `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 4">
                        <polygon points="24 3 0 3 0 4 24 4 24 3 24 3"/>
                        <polygon points="14 0 1 0 1 2 14 2 14 0 14 0"/>
                    </svg>`,
				category: 'Forms',
				//language=HTML
				content: `
					<legend data-gjs-type="${this.type}-legend">Heading</legend>`
			},
		);
	}

	addTypes() {

		this.components.addType(this.type, {
			model: {
				defaults: {
					name: "Form",
					droppable: ':not(form)',
					draggable: function (obj, destination) {

						if (!destination?.cid) {
							return false;
						}

						const pf = destination.closest('form')

						if (pf?.cid) {
							return false
						}

						return true;

					},
					traits: [
						{
							type: 'select',
							label: "Encoding Type",
							name: 'enctype',
							options: [
								{
									value: 'application/x-www-form-urlencoded',
									name: 'application/x-www-form-urlencoded (default)'
								},
								{value: 'multipart/form-data', name: 'multipart/form-data'},
								{value: 'text/plain', name: 'text/plain'},
							]
						},
						{
							type: 'select',
							label: "Method",
							name: 'method',
							options: [
								{value: 'post', name: 'POST'},
								{value: 'get', name: 'GET'},
							]
						},
						{
							type: "input",
							label: "Action",
							name: "action"
						}
					],
				},

				init() {
					this.listenTo(this, 'change:formState', this.updateFormState);
				},

				updateFormState() {
					var state = this.get('formState');
					switch (state) {
						case 'success':
							this.showState('success');
							break;
						case 'error':
							this.showState('error');
							break;
						default:
							this.showState('normal');
					}
				},

				showState(state) {
					let st = state || 'normal';
					let failVis, successVis;
					if (st === 'success') {
						failVis = 'none';
						successVis = 'block';
					} else if (st === 'error') {
						failVis = 'block';
						successVis = 'none';
					} else {
						failVis = 'none';
						successVis = 'none';
					}
					let successModel = this.getStateModel('success');
					let failModel = this.getStateModel('error');
					let successStyle = successModel.getStyle();
					let failStyle = failModel.getStyle();
					successStyle.display = successVis;
					failStyle.display = failVis;
					successModel.setStyle(successStyle);
					failModel.setStyle(failStyle);
				},

				getStateModel(state) {
					let st = state || 'success';
					let stateName = 'form-state-' + st;
					let stateModel;
					let comps = this.get('components');
					for (let i = 0; i < comps.length; i++) {
						let model = comps.models[i];
						if (model.get('form-state-type') === st) {
							stateModel = model;
							break;
						}
					}
					if (!stateModel) {
						let contentStr = formMsgSuccess;
						if (st === 'error') {
							contentStr = formMsgError;
						}
						stateModel = comps.add({
							'form-state-type': st,
							type: 'text',
							removable: false,
							copyable: false,
							draggable: false,
							attributes: {'data-form-state': st},
							content: contentStr,
						});
					}
					return stateModel;
				},
			},
			isComponent: (el) => {
				if (el && el.tagName === 'FORM') {
					return {type: this.type};
				}
			},
			view: {
				events: {
					submit(e) {
						e.preventDefault();
					}
				}
			}
		});
		this.components.addType(this.type + "-fieldset",
			{
				extends: this.namespace + "default",
				model: {
					defaults: {
						tagName: "FIELDSET",
						name: "Fieldset",
					}
				},
				isComponent: (el) => {
					if (el && el.tagName === 'FIELDSET') {
						return {type: this.type + "-fieldset"};
					}
				},
			}
		);

		this.components.addType(this.type + "-legend",
			{
				extends: this.namespace + "default",
				model: {
					defaults: {
						tagName: "LEGEND",
						name: "Fieldset",
					}
				},
				isComponent: (el) => {
					if (el && el.tagName === 'LEGEND') {
						return {type: this.type + "-legend"};
					}
				},
			}
		);

	}
}