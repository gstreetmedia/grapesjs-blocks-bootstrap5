import ComponentBase from "./ComponentBase";

export default class ListGroup extends ComponentBase {

    addBlocks() {
        this.blockManager.add(this.type, {
            label: "List Group",
            //language=SVG
            media: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 13">
                    <defs>
                        <style>.a{opacity:0.5;}</style>
                    </defs>
                    <title>container</title>
                    <g class="a">
                        <path d="M22.25,6a.76.76,0,0,1,.75.75v9.5a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,16.25V6.75A.76.76,0,0,1,1.75,6h20.5m0-1H1.75A1.76,1.76,0,0,0,0,6.75v9.5A1.76,1.76,0,0,0,1.75,18h20.5A1.76,1.76,0,0,0,24,16.25V6.75A1.76,1.76,0,0,0,22.25,5Z"
                              transform="translate(0 -5)"/>
                    </g>
                    <polygon points="22 2 2 2 2 3 22 3 22 2 22 2"/>
                    <g class="a">
                        <polygon points="23 4 1 4 1 5 23 5 23 4 23 4"/>
                    </g>
                    <polygon points="22 6 2 6 2 7 22 7 22 6 22 6"/>
                    <g class="a">
                        <polygon points="23 8 1 8 1 9 23 9 23 8 23 8"/>
                    </g>
                    <polygon points="22 10 2 10 2 11 22 11 22 10 22 10"/>
                </svg>`,
            category: 'Components',
            //language=HTML
            content: `
                <ul class="list-group" data-gjs-type="${this.type}">
                    <li class="list-group-item" data-gjs-type="${this.type}-item">An item</li>
                    <li class="list-group-item" data-gjs-type="${this.type}-item">A second item</li>
                    <li class="list-group-item" data-gjs-type="${this.type}-item">A third item</li>
                    <li class="list-group-item" data-gjs-type="${this.type}-item">A fourth item</li>
                    <li class="list-group-item" data-gjs-type="${this.type}-item">And a fifth one</li>
                </ul>
            `
        });

        /*
        this.blockManager.add(this.type + "-item", {
            label: this.createLabel("bi bi-list", "List Group Item"),
            category: 'Components',
            content: `<li class="list-group-item" data-gjs-type="${this.type}-item">An item</li>`
        });

         */
    }

    addTypes() {
        this.components.addType(this.type, {
            extend: this.namespace + "default",
            model: {
                defaults: {
                    name: 'List Group',
                    tagName: 'ul',
                    droppable: "list-group-item",
                    traits: this.traits

                }
            },
            isComponent: (el) => {
                if (el && el.classList && el.classList.contains("list-group")) {
                    return {type: 'bs-list-group'};
                }
            }
        });
        this.components.addType(this.type + "-item", {
            extend: this.namespace + "text",
            model: {
                defaults: {
                    'custom-name': 'ListGroupItem',
                    tagName: 'li',
                    resizable: false,
                    draggable: ["ul"],
                    droppable: true,
                    editable: true,
                    traits: this.traits
                }
            },
            isComponent: (el) => {
                if (el && el.classList && el.classList.contains("list-group-item")) {
                    return {type: this.type + "-item"};
                }
            }
        });
    }
}
