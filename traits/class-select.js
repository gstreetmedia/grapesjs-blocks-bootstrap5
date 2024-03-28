import {htmlToElement} from "../utils";
import traits from "./traits";
import {titleize} from "inflected";
import getTraitClasses from "./get-trait-classes";

export default {
    createBadge(value) {
        //language=HTML
        let html = `
            <span class="badge bg-primary me-1 my-1 border-bottom" data-value="${value}">
				${value}
				<i class="bi bi-x-circle ms-2"></i>
			</span>`

        return htmlToElement(html)
    },
    createBadgesTemplate() {
        return `<div class="badges border-top fs-6 p-1 border-bottom"></div>`
    },
    createInput({component, trait, elInput}) {

        let attributes = this.model.attributes;


        this.type = attributes.type;
        let select;
        let html;

        switch (this.type) {
            case "multiClassSelect":

                //language=HTML
                html = `
                    <div>
                        ${this.createBadgesTemplate()}
                        <div>${titleize(attributes.name)}</div>
                        <div class="options border-top"></div>
                    </div>
                `;
                this.validClasses = getTraitClasses(attributes);
                break;
            case "singleClassSelect" :
                select = this.createSelect(attributes.name, attributes.options);
                html = `
					<div>
						${this.createBadgesTemplate()}
						${select}
					</div>
				`;
                this.validClasses = getTraitClasses(attributes);
                break;
            default :
                let keys = Object.keys(traits);
                select = this.createSelect("styles", keys.map(
                    (value) => {
                        return {value: value, name: titleize(value)}
                    }
                ));
                this.validClasses = [];
                keys.forEach(
                    (key) => {
                        this.validClasses = this.validClasses.concat(getTraitClasses(traits[key]));
                    }
                )
                //language=HTML
                html = `
                    <div>
                        ${this.createBadgesTemplate()}
                        <div>${select}</div>
                        <div class="options border-top"></div>
                    </div>

                `;
        }

        let element = htmlToElement(html);
        this.element = element;
        let badgesElement = element.querySelector(".badges");

        let classList = this.target.view.el.getAttribute("class").replaceAll("  ", " ").split(" ");
        let buttons = [];
        classList.sort();

        if (this.type === "multiClassSelect") {
            classList.forEach(
                (value) => {
                    if (this.validClasses.includes(value)) {
                        let button = this.createBadge(value);
                        buttons.push(button);
                        badgesElement.append(button)
                    }
                }
            );
            this.addBadgeButtonEvents(buttons);
            setTimeout(
                () => {
                    this.setSelectedTrait(attributes);
                },
                100
            )

        } else if (this.type === "singleClassSelect") {

            let button;
            classList.forEach(
                (value) => {
                    if (this.validClasses.includes(value)) {
                        this.currentClass = value;
                        button = this.createBadge(value);
                        badgesElement.append(button)
                    }
                }
            );
            setTimeout(
                () => {
                    this.element.querySelector("select").addEventListener("change",
                        (e) => {
                            if (this.currentClass) {
                                badgesElement.innerHTML = "";
                                this.target.removeClass(this.currentClass);
                            }
                            this.target.addClass(e.target.value);
                            this.currentClass = e.target.value;
                            let button = this.createBadge(e.target.value);
                            badgesElement.append(button);
                            this.addButtonEvent(button);
                            e.target.value = '';
                        }
                    );
                    if (button) {
                        this.addButtonEvent(button);
                    }

                },
                100
            )

        } else {
            classList.forEach(
                (value) => {
                    //if (this.validClasses.includes(value)) {
                        if (value.indexOf("gjs") !== -1) {
                            return;
                        }
                        let button = this.createBadge(value);
                        buttons.push(button);
                        element.querySelector(".badges").append(button);
                    //}
                }
            );
            this.addBadgeButtonEvents(buttons);
        }

        return element;
    },

    createLabel({label}) {
        //language=HTML
        return '<div></div>';
        return `
            <div>
                <b>${titleize(label)}</b>
            </div>`;
    },

    createSelect(name, list) {
        //language=HTML
        return `
            <select name="${name}" class="form-select form-select-sm">
                <option value="">${titleize(name)}</option>
                ${list.map(item => {
                    return `
							<option value="${item.value}">${titleize(item.name || item.value)}</option>`

                }).join("\n")}
            </select>
        `
    },

    addBadgeButtonEvents(buttons) {
        setTimeout(
            () => {
                buttons.forEach(
                    (button) => {
                        this.addButtonEvent(button);
                    }
                );
                this.element.querySelector("[name='styles']").addEventListener(
                    "change",
                    (e) => {
                        this.onTraitCategoryChange(e);
                    }
                )
            },
            1000
        )
    },

    onTraitCategoryChange(e) {
        let select = e.target;
        let name = select.value;
        this.setSelectedTrait(traits[name]);
    },

    setSelectedTrait(trait) {
        this.selectedTrait = trait;
        let optionsEl = this.element.querySelector(".options");
        this.traitMap = {}

        optionsEl.innerHTML = "";

        if (trait.optional || trait.required) {
            if (trait.optional) {
                let keys = Object.keys(trait.optional);
                this.traitMap.optional = [];
                keys.forEach(
                    (key) => {
                        let select = htmlToElement(this.createSelect(key, trait.optional[key]))
                        optionsEl.append(select);
                        select.addEventListener("change", (e) => {
                            this.onPropertyChange(e)
                        });
                        console.log(select);
                        this.traitMap.optional.push(select);
                    }
                )
            }

            let keys = Object.keys(trait.required);
            this.traitMap.required = [];
            keys.forEach(
                (key) => {
                    let options = [];
                    if (trait.options) {
                        options = options.concat(trait.options);
                    }
                    options = options.concat(trait.required[key]);
                    let select = htmlToElement(this.createSelect(key, options))
                    optionsEl.append(select);
                    select.addEventListener("change", (e) => {
                        this.onPropertyChange(e)
                    });
                    console.log(select);
                    this.traitMap.required.push(select);
                }
            )
        } else {
            let select = htmlToElement(this.createSelect("options", trait.options));
            optionsEl.append(select);
            select.addEventListener("change", (e) => {
                this.onPropertyChange(e)
            });

            this.traitMap.options = select;
        }
    },

    onPropertyChange(e) {
        let prefix = this.selectedTrait.prefix || null;
        prefix = prefix || '';

        let badges = this.element.querySelector(".badges");
        let value = prefix;
        let hasRequired = true;
        let capturedSelects = [];
        let doNotPrefix = this.selectedTrait.doNotPrefix || [];

        if (this.selectedTrait.optional || this.selectedTrait.required) {
            if (this.selectedTrait.optional) {
                this.traitMap.optional.forEach(
                    (el) => {
                        if (el.value !== '') {
                            if (doNotPrefix.includes(el.name)) {
                                value += el.value;
                            } else {
                                value += "-" + el.value;
                            }
                            capturedSelects.push(el);
                        }
                    }
                )
            }

            this.traitMap.required.forEach(
                (el) => {
                    if (el.value !== '') {
                        if (doNotPrefix.includes(el.name)) {
                            value += el.value;
                        } else {
                            value += "-" + el.value;
                        }
                        capturedSelects.push(el);
                    } else {
                        hasRequired = false;
                    }
                }
            )
        } else {
            value += this.traitMap.options.value;
            capturedSelects.push(this.traitMap.options);
        }

        if (hasRequired === false) {
            return;
        } else {
            capturedSelects.forEach(
                (el) => {
                    el.value = '';
                }
            )
        }

        value = value.replaceAll("--", "-");

        if (value.indexOf("-") === 0) {
            value = value.substring(1, value.length);
        }

        let node = this.target.view.el;
        let parentNode = node.parentNode;

        if (!node.classList.contains(value)) {
            this.target.addClass(value);
            let button = this.createBadge(value);
            badges.append(button);
            this.addButtonEvent(button);
        }

        if (this.selectedTrait.requiredClass && !node.classList.contains(this.selectedTrait.requiredClass)) {
            this.target.addClass(this.selectedTrait.requiredClass);
            let button = this.createBadge(this.selectedTrait.requiredClass);
            badges.append(button);
            this.addButtonEvent(button);
        }

        if (this.selectedTrait.requiredParentNodeClass && !parentNode.classList.contains(this.selectedTrait.requiredParentNodeClass)) {
            parentNode.classList.add(this.selectedTrait.requiredParentNodeClass);
        }

    },

    addButtonEvent(button) {
        button.querySelector("i").addEventListener("click",
            (e) => {
                let button = e.target.parentNode;
                console.log(button);
                this.removeClass(button.getAttribute("data-value"));
                button.remove();
            }
        )
    },

    removeClass(value) {
        this.target.removeClass(value);
    },

    onEvent({elInput, component, event}) {

    },

    onUpdate({elInput, component}) {

    },
}