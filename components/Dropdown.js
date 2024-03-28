/*
known issues:
- BS dropdown JS isn't attached if you remove the existing toggle and add a new one
*/



import ComponentBase from "./ComponentBase";

export default class Dropdown extends ComponentBase {
    addBlocks() {
        this.blockManager.add('dropdown', {
            label: this.name,
            //language=SVG
            media: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 15">
                    <defs>
                        <style>.a{opacity:0.5;}</style>
                    </defs>
                    <title>container</title>
                    <path d="M22,5a1,1,0,0,1,1,1V7a1,1,0,0,1-1,1H19a1,1,0,0,1-1-1V6a1,1,0,0,1,1-1h3m0-1H19a2,2,0,0,0-2,2V7a2,2,0,0,0,2,2h3a2,2,0,0,0,2-2V6a2,2,0,0,0-2-2Z"
                          transform="translate(0 -4)"/>
                    <g class="a">
                        <polygon points="19.96 2.01 19.69 2.29 20.51 3.09 20.78 2.81 19.96 2.01 19.96 2.01"/>
                        <polygon points="21.04 2 20.24 2.82 20.51 3.09 21.31 2.27 21.04 2 21.04 2"/>
                    </g>
                    <g class="a">
                        <path d="M22.25,11a.76.76,0,0,1,.75.75v5.5a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,17.25v-5.5A.76.76,0,0,1,1.75,11h20.5m0-1H1.75A1.76,1.76,0,0,0,0,11.75v5.5A1.76,1.76,0,0,0,1.75,19h20.5A1.76,1.76,0,0,0,24,17.25v-5.5A1.76,1.76,0,0,0,22.25,10Z"
                              transform="translate(0 -4)"/>
                    </g>
                    <polygon points="22 8 2 8 2 9 22 9 22 8 22 8"/>
                    <g class="a">
                        <polygon points="23 10 1 10 1 11 23 11 23 10 23 10"/>
                    </g>
                    <polygon points="22 12 2 12 2 13 22 13 22 12 22 12"/>
                </svg>`,
            category: 'Components',
            //language=HTML
            content: `
                <div class="dropdown d-inline-block" data-gjs-type="${this.type}">
                    <a class="btn btn-secondary dropdown-toggle"
                       role="button"
                       data-bs-toggle="dropdown"
                       aria-expanded="false"
                       data-gjs-type="${this.namespace}button">
                        Dropdown button
                    </a>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#" data-gjs-type="${this.type}-item">Action</a></li>
                        <li><a class="dropdown-item" href="#" data-gjs-type="${this.type}-item">Another action</a></li>
                        <li><a class="dropdown-item" href="#" data-gjs-type="${this.type}-item">Something else here</a>
                        </li>
                    </ul>
                </div>`
        });
    }

    addTypes() {
        this.components.addType(this.type, {
            extend: this.namespace + "default",
            model: {
                defaults: {

                    name: 'Dropdown',
                    classes: ['dropdown'],
                    droppable: 'a, button, .dropdown-menu',
                    show: false,
                    traits: [
                        ...this.traits
                    ]
                },

                init() {
                    console.log(arguments);
                },

                updated(property, value, prevValue) {
                    console.log("update", property, value, prevValue);

                    let prop = Object.keys(value)[0];
                    let val = value[prop];

                    switch (property) {
                        case "status" :
                            if (value === "selected") {
                                this.addClass("disabled");
                            }

                            break;


                    }

                },

                removed() {

                }

            },
            isComponent: (el) => {
                if (el && el.classList && el.classList.contains('dropdown')) {
                    return {type: 'dropdown'};
                }
            },
            viewExtend: "default",
            view: {
                events: {
                    "click": "onClick"
                },
                init() {
                    console.log(this);
                    //this.dropdown = bootstrap.Dropdown.getOrCreateInstance(this.el);
                },
                /**
                 * @param {Event} e
                 */
                onClick: (e) => {
                    let dropdownMenu = e.currentTarget.parentNode.querySelector(".dropdown-menu");
                    if (dropdownMenu) {
                        dropdownMenu.classList.toggle("show");
                        dropdownMenu.style = null;
                    }
                }
            }
        });

        // need aria-labelledby to equal dropdown-toggle recordId
        // need to insert dropdown-item class on links when added
        this.components.addType(this.type + '-dropdown-menu', {
            model: {
                defaults: {
                    name: 'Dropdown Menu',
                    classes: ['dropdown-menu'],
                    draggable: '.dropdown',
                    droppable: true,
                    traits: this.traits
                }
            },
            isComponent: (el) => {
                if (el && el.classList && el.classList.contains('dropdown-menu')) {
                    return {type: this.type + '-dropdown-menu'};
                }
            }
        });

        this.components.addType(this.type + '-item', {
            extend: this.namespace + "text",
            model: {
                defaults: {
                    name: 'Dropdown Item',
                    classes: ['dropdown-menu'],
                    draggable: '.dropdown',
                    droppable: true,
                    traits: [
                        {
                            type: 'innerHTML',
                            label: 'Text',
                        },
                        {
                            type: "text",
                            name: "href",
                        },
                        ...this.traits
                    ]
                }
            },
            init() {
                this.on("change:content", this.updated);
            },
            updated(property, value, prevValue) {
                console.log("update", property, value, prevValue);
                let prop = Object.keys(value)[0];
                let val = value[prop];

            },
            isComponent: (el) => {
                if (el && el.classList && el.classList.contains('dropdown-item')) {
                    return {type: this.type + '-dropdown-item'};
                }
            },
            view: {
                events: {
                    click: "onClick"
                },
                onClick: (e) => {
                   // console.log(e);
                    //e.preventDefault();
                    //e.stopPropagation();
                },
                onRender() {
                    console.log(this);
                }
            }
        });
    }
}
