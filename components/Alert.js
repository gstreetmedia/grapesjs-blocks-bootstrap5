import ComponentBase from "./ComponentBase";
import {colors} from "../traits/lists";

export default class Alert extends ComponentBase {
    addBlocks() {
        this.blockManager.add(
            'alert', {
                label: `Alert`,
                //language=SVG
                media: `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 10">
                        <title>container</title>
                        <path d="M22,7a1,1,0,0,1,1,1v6a1,1,0,0,1-1,1H2a1,1,0,0,1-1-1V8A1,1,0,0,1,2,7H22m0-1H2A2,2,0,0,0,0,8v6a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V8a2,2,0,0,0-2-2Z"
                              transform="translate(0 -6)"/>
                        <rect x="18.91" y="10.41" width="3" height="1" transform="translate(13.7 -17.24) rotate(45)"/>
                        <rect x="19.21" y="11.12" width="1" height="1" transform="translate(13.99 -16.53) rotate(45)"/>
                        <rect x="20.62" y="9.71" width="1" height="1" transform="translate(13.4 -17.95) rotate(45)"/>
                        <rect x="3" y="4" width="13" height="2"/>
                    </svg>`,
                category: 'Components',
                //language=HTML
                content: `
                    <div class="alert alert-primary alert-dismissible fade show" role="alert" data-gjs-type="${this.type}">
                        <strong>Holy guacamole!</strong> You should check in on some of those fields below.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>`
            }
        );
    }

    addTypes() {
        this.components.addType(this.type, {
            extend: this.namespace + "text",
            model: {
                defaults: {
                    name: 'Alert',
                    tagName: 'div',
                    classes: ['alert'],
                    traits: [
                        {
                            name : "Alert Context",
                            type: 'singleClassSelect',
                            requiredClass : "alert",
                            options: colors.map(
                                (item) => {
                                    return {value: "alert-" + item.value, name: item.name};
                                }
                            ),
                            label: ''
                        },
                        ...this.traits
                    ]
                }
            },
            isComponent: (el) => {
                if (el && el.classList && el.classList.contains('alert')) {
                    return {type: this.type};
                }
            }
        })
    }
}
