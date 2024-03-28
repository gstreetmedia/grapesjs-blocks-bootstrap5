import ComponentBase from "./ComponentBase";
import traits from "../traits/traits";

export default class Badge extends ComponentBase {

    get name() {
        return "Badge";
    }
    addBlocks() {
        this.blockManager.add(this.type, {
            label: this.name,
            //language=SVG
            media: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 10">
                    <title>container</title>
                    <path d="M20,7a3,3,0,0,1,3,3v2a3,3,0,0,1-3,3H4a3,3,0,0,1-3-3V10A3,3,0,0,1,4,7H20m0-1H4a4,4,0,0,0-4,4v2a4,4,0,0,0,4,4H20a4,4,0,0,0,4-4V10a4,4,0,0,0-4-4Z"
                          transform="translate(0 -6)"/>
                    <rect x="4" y="4" width="16" height="2"/>
                </svg>`,
            category: 'Components',
            content: `<span class='badge text-bg-primary' data-gjs-type="${this.type}">Label</span>`
        });
    }

    addTypes() {
        this.components.addType(
            this.type, {
                extend: this.namespace + "text",
                model: {
                    defaults: {
                        name: "Badge",
                        tagName: 'span',
                        classes: ['badge text-bg-primary'],
                        traits: [
                            traits.radius,
                            traits.spacingMargin,
                            traits.spacingPadding,
                            traits.textBackgroundColor,
                            traits.position,
                            traits.positionArrangement,
                            traits.positionTranslate
                        ],
                    }
                },
                isComponent(el) {
                    if (el && el.classList && el.classList.contains('badge')) {
                        return {type: this.type};
                    }
                }
            }
        )
    }

};

