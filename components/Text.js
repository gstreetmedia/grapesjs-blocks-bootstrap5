import ComponentBase from "./ComponentBase";


export default class Text extends ComponentBase {

    get name() {
        return "Text";
    }

    addBlocks() {

        this.blockManager.add(
            this.type + "-heading",
            {
                label: this.createLabel(
                    "bi bi-type-h1",
                    "Heading"
                ),
                category: "Basic",
                content: `<h1 data-gjs-type="${this.type}-heading">Heading</h1>`
            }
        )

        this.blockManager.add(this.type + "-paragraph", {
            label: this.createLabel(
                "bi bi-paragraph",
                "Paragraph"
            ),
            category: 'Basic',
            content: `<p data-gjs-type="${this.type}-paragraph">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</p>`
        });

        this.blockManager.add(this.type, {
            label: this.createLabel("bi bi-body-text", this.name + " / Block"),
            category: 'Basic',
            content: {
                type: 'text',
                content: `<div class="${this.type}" data-gjs-type="${this.type}">
								<p data-gjs-type="${this.type}-paragraph">Inner Content</p>
							</div>`
            }
        });

        this.blockManager.add(this.type + "-list", {
            label: this.createLabel(
                "bi bi-list-ul",
                "List"
            ),
            category: 'Basic',
            //language=HTML
            content: `
                <ul data-gjs-type="${this.type}-list">
                    <li data-gjs-type="${this.type}-list-item">This is a list.</li>
                </ul>`,

        });

        this.blockManager.add(this.type + "-hr", {
            label: this.createLabel(
                "bi bi-hr",
                "HR"
            ),
            category: 'Basic',
            //language=HTML
            content: `
                <hr data-gjs-type="${this.type}-hr"/>`,

        });

        this.blockManager.add(this.type + "-blockquote", {
            label: this.createLabel(
                "bi bi-hr",
                "Blockquote"
            ),
            category: 'Basic',
            //language=HTML
            content: `
                <figure class="text-center">
                    <blockquote class="blockquote" data-gjs-type="${this.type}-blockquote">
                        <p>A well-known quote, contained in a blockquote element.</p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </figcaption>
                </figure>`,

        });
    }

    addTypes() {

        this.components.addType(this.type, {
            extend: "text",
            model: {
                defaults: {
                    //classes: ['body'],
                    name: 'Div',
                    tagName: 'div',
                    droppable: true,
                    draggable: true,
                    editable: true,
                    stylable: false,
                    highlightable: true,
                    traits: this.traits
                }
            },
            isComponent: (el) => {
                if (el.tagName === "DIV") {
                    return {type: this.type};
                }
            }
        });

        this.components.addType(this.type + "-heading", {
            extend: this.namespace + "text",
            model: {
                defaults: {
                    'custom-name': 'Heading',
                    tagName: 'h1',
                    stylable: false,
                    traits: [
                        {
                            type: 'select',
                            options: [
                                {value: 'h1', name: 'H1'},
                                {value: 'h2', name: 'H2'},
                                {value: 'h3', name: 'H3'},
                                {value: 'h4', name: 'H4'},
                                {value: 'h5', name: 'H5'},
                                {value: 'h6', name: 'H6'},
                            ],
                            label: 'Size (e.g H1, H2, H3)',
                            name: 'tagName',
                            changeProp: 1
                        },
                        ...this.traits
                    ]
                },

            }, isComponent: (el) => {
                if (el && ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(el.tagName)) {
                    if (el.classList && el.classList.contains("card-title")) {
                        return false;
                    }
                    return {type: this.type + "-heading"};
                }
            }
        });

        this.components.addType(this.type + "-paragraph", {
            extend: this.namespace + "text",
            model: {
                defaults: {
                    name: 'Paragraph',
                    tagName: 'p',
                    stylable: false,
                    traits: [
                        {
                            type: 'class_select',
                            options: [
                                {value: '', name: 'No'},
                                {value: 'lead', name: 'Yes'}
                            ],
                            label: 'Lead?'
                        },
                        ...this.traits
                    ]
                }
            },
            isComponent: (el) => {
                if (el && el.tagName && el.tagName === 'P') {
                    return {type: this.type + "-paragraph"};
                }
            }
        });

        this.components.addType(this.type + "-list", {
            model: {
                defaults: {
                    name: 'List',
                    tagName: 'ul',
                    resizable: 1,
                    droppable: "li",
                    stylable: false,
                    traits: [
                        {
                            type: 'select',
                            options: [
                                {value: 'ul', name: 'No'},
                                {value: 'ol', name: 'Yes'}
                            ],
                            label: 'Ordered?',
                            name: 'tagName',
                            changeProp: 1
                        },
                        this.traits
                    ]

                }
            },
            isComponent: (el) => {
                if (el && ['UL', 'OL'].includes(el.tagName)) {
                    return {type: this.type + "-list"};
                }
            }
        });

        this.components.addType(this.type + "-list-item", {
            model: {
                defaults: {
                    name: 'List Item',
                    tagName: 'li',
                    droppable: false,
                    stylable: false,
                    traits: this.traits
                }
            },
            isComponent: (el) => {
                if (el && ['UL', 'OL'].includes(el.tagName)) {
                    return {type: this.type + "-list-item"};
                }
            }
        });

        this.components.addType(this.type + "-hr", {
            extend: this.namespace + "default",
            model: {
                defaults: {
                    name: 'Horizontal Rule',
                    tagName: 'hr',
                    droppable: true,
                    draggable: true,
                    stylable: false,
                    traits: this.traits
                }
            },
            isComponent: (el) => {
                if (el && ['HR',].includes(el.tagName)) {
                    return {type: this.type + "-hr"};
                }
            }
        });

        this.components.addType(this.type + "-blockquote", {
            extend: this.namespace + "default",
            model: {
                defaults: {
                    name: 'Blockquote',
                    tagName: 'blockquote',
                    droppable: true,
                    draggable: true,
                    stylable: false,
                    traits: this.traits
                }
            },
            isComponent: (el) => {
                if (el && ['BLOCKQUOTE',].includes(el.tagName)) {
                    el.classList.add("blockquote");
                    return {type: this.type + "-blockquote"};
                }
            }
        });
    }
}
