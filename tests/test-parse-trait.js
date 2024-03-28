import TraitClass from "../traits/TraitClassSelect.js";
import traits from "../traits/traits.js";

let list = Object.keys(traits).forEach(
	(trait) => {
		console.log(trait);
		trait = traits[trait];
		if (trait.required) {
			let traitClass = new TraitClass();
			let classes = traitClass.getClasses(trait);
			console.log(classes);
		}

	}
);
