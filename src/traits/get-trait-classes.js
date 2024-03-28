import flattenDeep from "lodash.flattendeep";

export default (trait) => {
	let options = trait.options;
	let required = trait.required;
	let optional = trait.optional;
	let prefix = trait.prefix || null;

	let classes = [];

	if (required) {

		let optionalClasses = [];
		let requiredClasses = [];

		if (optional) {
			let optionalKeys = Object.keys(optional);
			optionalClasses = [];
			optionalKeys.forEach(
				(optionalKey, index) => {
					if (optionalClasses.length > 0) {
						//copy the previous values;
						optionalClasses[optionalClasses.length - 1].forEach(
							(previousValue) => {
								let values = [...optional[optionalKey].map(item => {
									return previousValue + "-" + item.value
								})];
								optionalClasses.push(values);
							}
						)
					} else {
						optionalClasses.push(optional[optionalKey].map(item => {
							return item.value
						}));
					}
				}
			)
			optionalClasses = flattenDeep(optionalClasses);
		}

		let requiredKeys = Object.keys(required);

		requiredKeys.forEach(
			(requiredKey, index) => {
				if (requiredClasses.length > 0) {
					let result = [];
					requiredClasses.forEach(
						(previousValue) => {
							result = result.concat(required[requiredKey].map(item => {
								return previousValue + item.value
							}));
						}
					)
					requiredClasses = result;
				} else {
					requiredClasses = required[requiredKey].map(item => {
						return item.value
					})
				}
			}
		);

		if (optionalClasses.length > 0) {

			requiredClasses.forEach(
				(rValue) => {
					optionalClasses.forEach(
						(oValue) => {
							if (trait.optionalLast === true) {
								classes.push(prefix + rValue + "-" + oValue)
							} else {
								classes.push(prefix + oValue + "-" + rValue)
							}

						}
					)
				}
			)

		}

		requiredClasses = requiredClasses.map(value => {
			if (prefix) {
				return prefix + (prefix.indexOf("-") === -1 ? "-" : "") + value
			} else {
				return value
			}

		});

		classes = classes.concat(requiredClasses);
	}

	if (options) {
		options.forEach(
			(item) => {
				if (item.prefix !== false) {
					classes.push((prefix ? prefix : '') + item.value);
				} else {
					classes.push(item.value);
				}

			}
		);
	}

	return classes.sort();

}