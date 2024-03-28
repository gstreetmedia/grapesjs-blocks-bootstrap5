import {
	colors,
	borders,
	breakpoints,
	directions,
	sizes,
	display,
	justifyContent,
	flexAlign,
	opacity,
	position, directionsWithXY, columns, extraColors, directionNames
} from "./lists.js";

export default {
	/**
	 * Colors
	 */

	backgroundColor: {
		name: "backgroundColor",
		type: 'singleClassSelect',
		options: [].concat(
			colors.map(
				(item) => {
					return {value: "bg-" + item.value, name: item.name}
				}
			)
		).concat(
			colors.map(
				(item) => {
					return {value: "bg-" + item.value + "-subtle", name: item.name + " subtle"}
				}
			)
		).concat(extraColors)
	},
	textBackgroundColor: {
		name: "textBackgroundColor",
		type: 'singleClassSelect',
		options: [].concat(
			colors.map(
				(item) => {
					return {value: "text-bg-" + item.value, name: item.name}
				}
			)
		)
	},
	/**
	 * Borders
	 */
	border: {
		name: "border",
		type: 'multiClassSelect',
		requiredClass: "border",
		options: [].concat(
			borders.map(
				(item) => {
					return {value: "border-" + item.value, name: item.name}
				}
			)
		).concat(
			borders.map(
				(item) => {
					return {value: "border-" + item.value + "-0", name: item.name + " none"}
				}
			)
		)
	},
	borderColor: {
		name: "borderColor",
		type: 'multiClassSelect',
		requiredClass: "border",
		options: colors.map(
			(item) => {
				return {value: "border-" + item.value, name: item.name}
			}
		).concat(
			colors.map(
				(item) => {
					return {value: "border-" + item.value + "-subtle", name: item.name + " subtle"}
				}
			)
		)
	},
	borderWidth: {
		name: "borderWidth",
		type: 'multiClassSelect',
		requiredClass: "border",
		options: [].concat(
			sizes.map(
				(item) => {
					return {value: "border-" + item.value, name: item.name}
				}
			)
		)
	},
	borderRadius: {
		name: "borderRadius",
		type: 'multiClassSelect',
		prefix : "rounded-",
		//optionalLast : true,
		required : {
			sizes : sizes.map(
				(item) => {
					return {value: item.value, name: item.name}
				}
			)
		},
		optional : {
			direction : directionNames,
		}
	},
	radius: {
		name: "rounded",
		type: 'singleClassSelect',
		options : [
			{value: 'rounded-pill', name: 'Pill'},
			{value: 'rounded-circle', name: 'Circle'},

		]
	},
	buttonType: {
		name: "type",
		type: 'select',
		requiredClass: "btn",
		options : [
			{value: 'submit', name: 'Submit'},
			{value: 'reset', name: 'Reset'},
			{value: 'button', name: 'Button'},
			{value: 'link', name: 'Link'}
		]
	},
	buttonStyle: {
		name: "buttonStyle",
		type: 'multiClassSelect',
		requiredClass: "btn",
		options : [
			{value: "btn-sm", name: "Button Small"},
			{value: "btn-lg", name: "Button Large"},
		]
	},
	buttonColor: {
		name: "buttonColor",
		type: 'singleClassSelect',
		requiredClass: "btn",
		options : colors.map(
			(item) => {
				return {value: "btn-" + item.value, name: item.name}
			}
		).concat(
			colors.map(
				(item) => {
					return {value: "btn-outline-" + item.value, name: item.name + " Outline"}
				}
			)
		)
	},
	display: {
		name: "display",
		type: 'multiClassSelect',
		prefix: "d-",
		required: {
			display: display
		},
		optional: {
			breakpoint: breakpoints,

		}
	},
	displayPrint: {
		name: "displayPrint",
		type: 'multiClassSelect',
		prefix: "d-print-",
		required: {
			display: display
		},
		optional: {
			breakpoint: breakpoints,

		}
	},
	flexDirection: {
		name: "flexDirection",
		type: 'multiClassSelect',
		prefix: "flex-",
		requiredClass: "d-flex",
		required: {
			direction: [
				{value: "row", name: "row"},
				{value: "row-reverse", name: "Row Reverse"},
				{value: "row-column", name: "Column"},
				{value: "row-column-reverse", name: "Column Reverse"},
			],
		},
		optional: {
			breakpoint: breakpoints,
		}
	},
	flexJustify: {
		name: "flexJustify",
		type: 'multiClassSelect',
		prefix: "justify-content-",
		requiredClass: "d-flex",
		required: {
			direction: justifyContent,
		},
		optional: {
			breakpoint: breakpoints,
		}
	},
	flexAlignContent: {
		name: "flexAlignContent",
		type: 'multiClassSelect',
		prefix: "align-content-",
		requiredClass: "d-flex",
		required: {
			align: flexAlign,
		},
		optional: {
			breakpoint: breakpoints,
		}
	},
	flexAlignItems: {
		name: "flexAlignItems",
		type: 'multiClassSelect',
		prefix: "align-items-",
		requiredClass: "d-flex",
		required: {
			direction: flexAlign,
		},
		optional: {
			breakpoint: breakpoints,
		}
	},
	flexAlignSelf: {
		name: "flexAlignSelf",
		type: 'multiClassSelect',
		prefix: "align-self-",
		requiredClass: "d-flex",
		required: {
			align: flexAlign,
		},
		optional: {
			breakpoint: breakpoints,
		}
	},
	flexGrow: {
		name: "flexGrow",
		type: 'multiClassSelect',
		prefix: "flex-",
		required: {

			direction: [
				{value: "grow-", name: "grow"},
				{value: "shrink-", name: "shrink"},
			],
			amount: [
				{value: "0", name: "0"},
				{value: "1", name: "1"},
			],
		},
		optional: {
			breakpoint: breakpoints,
		}
	},
	flexWrap: {
		name: "flexWrap",
		type: 'multiClassSelect',
		prefix: "flex-",
		requiredClass: "d-flex",
		required: {
			direction: [
				{value: "nowrap", name: "nowrap"},
				{value: "wrap", name: "wrap"},
				{value: "wrap-reverse", name: "wrap-reverse"},
			]
		},
		optional: {
			breakpoint: breakpoints,
		}
	},
	flexOrder: {
		name: "flexOrder",
		type: 'multiClassSelect',
		prefix: "order-",
		requiredClass: "d-flex",
		required: {
			sizes: [
				...sizes,
				{value: "first", name: "first"},
				{value: "last", name: "last"},
			]
		},
		optional: {
			breakpoint: breakpoints,
		}
	},
	float: {
		name: "float",
		type: 'multiClassSelect',
		prefix : "float-",
		required: {
			direction: [
				{value: "start", name: "Left"},
				{value: "end", name: "Right"},
				{value: "clearfix", name: "Clearfix", prefix:false},
			]
		},
		optional: {
			breakpoint: breakpoints,
		}
	},
	layoutContainer: {
		name: "layoutContainer",
		type: 'multiClassSelect',
		options: [
			{value: "container", name: "container", prefix: false},
			{value: "container-fluid", name: "container fluid", prefix: false}
		]
	},
	layoutRowColumns: {
		name: "layoutRowColumns",
		requiredClass: "row",
		prefix: "row-cols-",
		optional: {
			breakpoint: breakpoints
		},
		required: {
			size: columns
		},
		options: [
			{value: "row", name: "Row", prefix: false}
		]
	},
	layoutRowGutters: {
		name: "layoutRowGutters",
		type: 'singleClassSelect',
		requiredClass: "row",
		prefix: "gx-",
		options: sizes
	},
	layoutColumn: {
		name: "layoutColumn",
		type: 'multiClassSelect',
		requiredClass: "col",
		prefix: "col-",
		requiredParentNodeClass: "row",
		optional: {
			breakpoint: breakpoints
		},
		required: {
			size: columns
		},
		options: [
			{value: "col", name: "Auto Column", prefix: false}
		]
	},
	layoutColumnOffset: {
		name: "layoutColumnOffset",
		type: 'multiClassSelect',
		requiredClass: "col",
		prefix: "offset-",
		optional: {
			breakpoint: breakpoints
		},
		required: {
			size: columns
		}
	},
	layoutGrid: {
		name: "layoutGrid",
		type: 'multiClassSelect',
		requiredParentNodeClass: "grid",
		prefix: "g-col-",
		optional: {
			breakpoint: breakpoints
		},
		required: {
			size: columns
		},
	},
	layoutRowGap: {
		name: "layoutRowGap",
		type: 'multiClassSelect',
		requiredClass: "grid",
		prefix: "row-gap-",
		options: sizes
	},
	layoutColumnGap: {
		name: "layoutColumnGap",
		type: 'multiClassSelect',
		requiredClass: "grid",
		prefix: "gap-",
		options: sizes
	},
	objectFit: {
		name: "objectFit",
		type: 'singleClassSelect',
		prefix: "object-fit-",
		description: "To help an image fit into a parent container",
		required: {
			direction: [
				{value: "contain", name: "contain"},
				{value: "cover", name: "cover"},
				{value: "fill", name: "fill"},
				{value: "scale", name: "scale"},
				{value: "start", name: "start"},
				{value: "none", name: "none"},
			]
		},
		optional: {
			breakpoint: breakpoints,
		}
	},
	opacity: {
		name: "opacity",
		type: 'singleClassSelect',
		prefix: "opacity-",
		options: opacity
	},
	overflow: {
		name: "overflow",
		type: 'singleClassSelect',
		prefix: "overflow-",
		required: {
			options: [
				{value: "auto", name: "auto"},
				{value: "hidden", name: "hidden"},
				{value: "hidden", name: "hidden"},
				{value: "visible", name: "visible"},
				{value: "scroll", name: "scroll"}
			]
		},
		optional: {
			direction: [
				{value: "x", name: "x"},
				{value: "y", name: "y"}
			],
		}
	},
	position: {
		name: "position",
		type: 'singleClassSelect',
		prefix: "position-",
		options: [
			{value: 'absolute', name: 'Absolute'},
			{value: 'relative', name: 'Relative'},
			{value: 'static', name: 'Static'},
			{value: 'fixed', name: 'Fixed'},
			{value: 'sticky', name: 'Sticky'},
		]
	},
	positionArrangement: {
		name: "positionArrangement",
		type: 'multiClassSelect',
		prefix: "",
		required: {
			direction: [
				{value: "start-", name: "Start"},
				{value: "end-", name: "End"},
				{value: "top-", name: "Top"},
				{value: "bottom-", name: "Bottom"},
			],
			amount: [
				{value: '0', name: '0'},
				{value: '50', name: '50%'},
				{value: '100', name: '100%'},
			]
		}
	},
	positionTranslate: {
		name: "positionTranslate",
		type: 'singleClassSelect',
		prefix: "translate-",
		options: [
			{value: 'middle', name: 'Middle'},
			{value: 'middle-y', name: 'Middle Y'},
			{value: 'middle-x', name: 'Middle X'},
		]
	},
	shadow: {
		name: "shadow",
		type: 'singleClassSelect',
		options: [
			{value: 'shadow-sm', name: 'shadow small'},
			{value: 'shadow-lg', name: 'shadow large'},
			{value: 'shadow ', name: 'shadow'},
			{value: 'shadow-none', name: 'None'}
		]
	},
	size: {
		name: "size",
		type: 'multiClassSelect',
		options: [
			{value: 'w-100', name: 'Width 100%'},
			{value: 'mw-100', name: 'Min Width 100%'},
			{value: 'h-100', name: 'Height 100%'},
			{value: 'mh-100', name: 'Min Height 100%'},
			{value: 'vw-100', name: '100% Window Width'},
			{value: 'min-vw-100', name: 'Min 100% Window Width'},
			{value: 'vh-100', name: '100% Window Height'},
			{value: 'min-vh-100', name: 'Min 100% Window Height'},
		]
	},
	spacingPadding: {
		name: "spacingPadding",
		type: 'multiClassSelect',
		prefix: "p",
		doNotPrefix: ['direction'],
		required: {
			size: sizes
		},
		optional: {
			direction: directionsWithXY,
			breakpoint: breakpoints
		}
	},
	spacingMargin: {
		name: "spacingMargin",
		type: 'multiClassSelect',
		prefix: "m",
		doNotPrefix: ['direction'],
		required: {
			size: sizes
		},
		optional: {
			direction: [
				...directionsWithXY,
			],
			breakpoint: breakpoints
		},
		options: [
			{value: "auto", name: "Center", prefix: false}
		]
	},
	textAlign: {
		name: "textAlign",
		type: 'multiClassSelect',
		prefix: "text-",
		required: {
			"direction": [
				{value: "start", name: "Start"},
				{value: "center", name: "Center"},
				{value: "end", name: "End"}
			]
		},
		optional: {
			breakpoint: breakpoints
		}
	},
	textColor: {
		name: "textColor",
		label: "Text Color",
		type: 'singleClassSelect',
		options: [
			...colors.map(
				(item) => {
					return {value: "text-" + item.value, name: item.name}
				}),
			...colors.map(
				(item) => {
					return {value: "text-" + item.value + "-emphasis", name: item.name + " emphasis"}
				}),
			{value: "text-reset", name: "Reset Color"}

		]

	},
	textWrap: {
		name: "textWrap",
		type: 'multiClassSelect',
		options: [
			{value: "text-wrap", name: "Wrap"},
			{value: "text-nowrap", name: "No Wrap"},
			{value: "text-break", name: "Break"}
		]
	},
	textTransform: {
		name: "textTransform",
		type: 'singleClassSelect',
		options: [
			{value: "text-lowercase", name: "Wrap"},
			{value: "text-lowercase", name: "No Wrap"},
			{value: "text-lowercase", name: "Break"},
			{value: "font-monospace", name: "Monospace"}
		]
	},
	textSize: {
		name: "textSize",
		type: 'singleClassSelect',
		options: sizes.map(
			(item) => {
				return {value: "fs-" + item.value, name: "H-" + item.name}
			}
		)
	},
	textDecoration: {
		name: "textDecoration",
		type: 'singleClassSelect',
		options: [
			{value: "text-decoration-underline", name: "Underline"},
			{value: "text-decoration-line-through", name: "Line Through"},
			{value: "text-decoration-none", name: "None"},
		]
	},
	/**
	 * <p class="fw-bold">Bold text.</p>
	 * <p class="fw-bolder">Bolder weight text (relative to the parent element).</p>
	 * <p class="fw-semibold">Semibold weight text.</p>
	 * <p class="fw-medium">Medium weight text.</p>
	 * <p class="fw-normal">Normal weight text.</p>
	 * <p class="fw-light">Light weight text.</p>
	 * <p class="fw-lighter">Lighter weight text (relative to the parent element).</p>
	 * <p class="fst-italic">Italic text.</p>
	 * <p class="fst-normal">Text with normal font style</p>
	 */
	textWeight: {
		name: "textWeight",
		type: 'singleClassSelect',
		options: [
			{value: "fw-bold", name: "Bold"},
			{value: "fw-bolder", name: "Bolder"},
			{value: "fw-semibold", name: "Semibold"},
			{value: "fw-medium", name: "Medium"},
			{value: "fw-normal", name: "Normal"},
			{value: "fw-light", name: "Light"},
			{value: "fw-lighter", name: "Lighter"},
			{value: "fst-italic", name: "Italic"},
		]
	},
	textLineHeight: {
		name: "textLineHeight",
		type: 'singleClassSelect',
		options: [
			{value: "lh-1", name: "One"},
			{value: "lh-sm", name: "Small"},
			{value: "lh-base", name: "Base"},
			{value: "lh-lg", name: "Large"}
		]
	},
	verticalAlign: {
		name: "verticalAlign",
		type: 'singleClassSelect',
		options: [
			{value: "align-baseline", name: "Baseline"},
			{value: "align-top", name: "Top"},
			{value: "align-middle", name: "Middle"},
			{value: "align-bottom", name: "Bottom"},
			{value: "align-text-top", name: "Text Top"},
			{value: "align-text-bottom", name: "Text Bottom"}
		]
	},
	visibility: {
		name: "visibility",
		type: 'singleClassSelect',
		options: [
			{value: "visible", name: "visible"},
			{value: "invisible", name: "invisible"}
		]
	},
	zIndex: {
		name: "zIndex",
		type: 'singleClassSelect',
		options: [
			{value: "z-1", name: "1"},
			{value: "z-2", name: "2"},
			{value: "z-3", name: "3"},
			{value: "z-n1", name: "-1"},
			{value: "z-n2", name: "-2"},
			{value: "z-n3", name: "-3"},
		]
	}


}