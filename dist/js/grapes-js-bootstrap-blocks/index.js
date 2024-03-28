(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key2 of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key2) && key2 !== except)
          __defProp(to, key2, { get: () => from[key2], enumerable: !(desc = __getOwnPropDesc(from, key2)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/lodash.flattendeep/index.js
  var require_lodash = __commonJS({
    "node_modules/lodash.flattendeep/index.js"(exports, module) {
      var INFINITY = 1 / 0;
      var MAX_SAFE_INTEGER = 9007199254740991;
      var argsTag = "[object Arguments]";
      var funcTag = "[object Function]";
      var genTag = "[object GeneratorFunction]";
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      function arrayPush(array, values) {
        var index = -1, length = values.length, offset = array.length;
        while (++index < length) {
          array[offset + index] = values[index];
        }
        return array;
      }
      var objectProto = Object.prototype;
      var hasOwnProperty = objectProto.hasOwnProperty;
      var objectToString = objectProto.toString;
      var Symbol2 = root.Symbol;
      var propertyIsEnumerable = objectProto.propertyIsEnumerable;
      var spreadableSymbol = Symbol2 ? Symbol2.isConcatSpreadable : void 0;
      function baseFlatten(array, depth, predicate, isStrict, result) {
        var index = -1, length = array.length;
        predicate || (predicate = isFlattenable);
        result || (result = []);
        while (++index < length) {
          var value = array[index];
          if (depth > 0 && predicate(value)) {
            if (depth > 1) {
              baseFlatten(value, depth - 1, predicate, isStrict, result);
            } else {
              arrayPush(result, value);
            }
          } else if (!isStrict) {
            result[result.length] = value;
          }
        }
        return result;
      }
      function isFlattenable(value) {
        return isArray(value) || isArguments(value) || !!(spreadableSymbol && value && value[spreadableSymbol]);
      }
      function flattenDeep3(array) {
        var length = array ? array.length : 0;
        return length ? baseFlatten(array, INFINITY) : [];
      }
      function isArguments(value) {
        return isArrayLikeObject(value) && hasOwnProperty.call(value, "callee") && (!propertyIsEnumerable.call(value, "callee") || objectToString.call(value) == argsTag);
      }
      var isArray = Array.isArray;
      function isArrayLike(value) {
        return value != null && isLength(value.length) && !isFunction(value);
      }
      function isArrayLikeObject(value) {
        return isObjectLike(value) && isArrayLike(value);
      }
      function isFunction(value) {
        var tag = isObject(value) ? objectToString.call(value) : "";
        return tag == funcTag || tag == genTag;
      }
      function isLength(value) {
        return typeof value == "number" && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
      }
      function isObject(value) {
        var type = typeof value;
        return !!value && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return !!value && typeof value == "object";
      }
      module.exports = flattenDeep3;
    }
  });

  // src/commands.js
  var commands_default = (editor2, config2 = {}) => {
    const commands = editor2.Commands;
  };

  // src/utils.js
  var elHasClass = (el, toFind) => {
    let cls = el.className;
    cls = cls && cls.toString();
    if (cls && cls.split(" ").indexOf(toFind) >= 0)
      return 1;
  };
  var htmlToElement = (html) => {
    let element = htmlToTemplate(html).content;
    return element.firstChild;
  };
  var htmlToTemplate = (html) => {
    let template = document.createElement("template");
    html = html.trim();
    template.innerHTML = html;
    return template;
  };

  // src/traits/TraitClassSelect.js
  var import_lodash = __toESM(require_lodash());

  // src/traits/lists.js
  var breakpoints = [
    { value: "sm", name: "SM" },
    { value: "md", name: "MD" },
    { value: "lg", name: "LG" },
    { value: "xl", name: "XL" },
    { value: "xxl", name: "XXL" }
  ];
  var columns = [
    { value: "0", name: "0" },
    { value: "1", name: "1" },
    { value: "2", name: "2" },
    { value: "3", name: "3" },
    { value: "4", name: "4" },
    { value: "5", name: "5" },
    { value: "6", name: "6" },
    { value: "7", name: "7" },
    { value: "8", name: "8" },
    { value: "9", name: "9" },
    { value: "10", name: "10" },
    { value: "11", name: "11" },
    { value: "12", name: "12" }
  ];
  var display = [
    { value: "none", name: "none" },
    { value: "inline", name: "inline" },
    { value: "block", name: "block" },
    { value: "grid", name: "grid" },
    { value: "inline-grid", name: "inline-grid" },
    { value: "table", name: "table" },
    { value: "table-cell", name: "table-cell" },
    { value: "table-row", name: "table-row" },
    { value: "flex", name: "flex" },
    { value: "inline-flex", name: "inline-flex" }
  ];
  var flexAlign = [
    { value: "start", name: "start" },
    { value: "end", name: "end" },
    { value: "center", name: "center" },
    { value: "baseline", name: "baseline" },
    { value: "stretch", name: "stretch" }
  ];
  var sizes = [
    { value: "0", name: "0" },
    { value: "1", name: "1" },
    { value: "2", name: "2" },
    { value: "3", name: "3" },
    { value: "4", name: "4" },
    { value: "5", name: "5" }
  ];
  var directions = [
    { value: "s", name: "Start" },
    { value: "e", name: "End" },
    { value: "t", name: "Top" },
    { value: "b", name: "Bottom" }
  ];
  var directionNames = [
    { value: "start", name: "Start" },
    { value: "end", name: "End" },
    { value: "top", name: "Top" },
    { value: "bottom", name: "Bottom" }
  ];
  var directionsWithXY = [
    ...directions,
    { value: "x", name: "X" },
    { value: "y", name: "Y" }
  ];
  var opacity = [
    { value: "100", name: "100" },
    { value: "75", name: "75" },
    { value: "50", name: "50" },
    { value: "25", name: "25" },
    { value: "0", name: "0" }
  ];
  var justifyContent = [
    { value: "begin", name: "Start" },
    { value: "end", name: "End" },
    { value: "center", name: "Center" },
    { value: "between", name: "Distribute" }
  ];
  var borders = [
    { value: "border", name: "Full" },
    { value: "border-top-1", name: "Top" },
    { value: "border-end-1", name: "Right" },
    { value: "border-bottom-1", name: "Bottom" },
    { value: "border-start-1", name: "Left" },
    { value: "border-0", name: "None" }
  ];
  var colors = [
    { value: "primary", name: "primary" },
    { value: "secondary", name: "secondary" },
    { value: "success", name: "success" },
    { value: "danger", name: "danger" },
    { value: "warning", name: "warning" },
    { value: "info", name: "info" },
    { value: "light", name: "light" },
    { value: "dark", name: "dark" },
    { value: "body", name: "body" }
  ];
  var extraColors = [
    { value: "body-secondary", name: "body" },
    { value: "body-tertiary", name: "body" },
    { value: "black", name: "black" },
    { value: "white", name: "white" }
  ];

  // src/traits/traits.js
  var traits_default = {
    /**
     * Colors
     */
    backgroundColor: {
      name: "backgroundColor",
      type: "singleClassSelect",
      options: [].concat(
        colors.map(
          (item) => {
            return { value: "bg-" + item.value, name: item.name };
          }
        )
      ).concat(
        colors.map(
          (item) => {
            return { value: "bg-" + item.value + "-subtle", name: item.name + " subtle" };
          }
        )
      ).concat(extraColors)
    },
    textBackgroundColor: {
      name: "textBackgroundColor",
      type: "singleClassSelect",
      options: [].concat(
        colors.map(
          (item) => {
            return { value: "text-bg-" + item.value, name: item.name };
          }
        )
      )
    },
    /**
     * Borders
     */
    border: {
      name: "border",
      type: "multiClassSelect",
      requiredClass: "border",
      options: [].concat(
        borders.map(
          (item) => {
            return { value: "border-" + item.value, name: item.name };
          }
        )
      ).concat(
        borders.map(
          (item) => {
            return { value: "border-" + item.value + "-0", name: item.name + " none" };
          }
        )
      )
    },
    borderColor: {
      name: "borderColor",
      type: "multiClassSelect",
      requiredClass: "border",
      options: colors.map(
        (item) => {
          return { value: "border-" + item.value, name: item.name };
        }
      ).concat(
        colors.map(
          (item) => {
            return { value: "border-" + item.value + "-subtle", name: item.name + " subtle" };
          }
        )
      )
    },
    borderWidth: {
      name: "borderWidth",
      type: "multiClassSelect",
      requiredClass: "border",
      options: [].concat(
        sizes.map(
          (item) => {
            return { value: "border-" + item.value, name: item.name };
          }
        )
      )
    },
    borderRadius: {
      name: "borderRadius",
      type: "multiClassSelect",
      prefix: "rounded-",
      //optionalLast : true,
      required: {
        sizes: sizes.map(
          (item) => {
            return { value: item.value, name: item.name };
          }
        )
      },
      optional: {
        direction: directionNames
      }
    },
    radius: {
      name: "rounded",
      type: "singleClassSelect",
      options: [
        { value: "rounded-pill", name: "Pill" },
        { value: "rounded-circle", name: "Circle" }
      ]
    },
    buttonType: {
      name: "type",
      type: "select",
      requiredClass: "btn",
      options: [
        { value: "submit", name: "Submit" },
        { value: "reset", name: "Reset" },
        { value: "button", name: "Button" },
        { value: "link", name: "Link" }
      ]
    },
    buttonStyle: {
      name: "buttonStyle",
      type: "multiClassSelect",
      requiredClass: "btn",
      options: [
        { value: "btn-sm", name: "Button Small" },
        { value: "btn-lg", name: "Button Large" }
      ]
    },
    buttonColor: {
      name: "buttonColor",
      type: "singleClassSelect",
      requiredClass: "btn",
      options: colors.map(
        (item) => {
          return { value: "btn-" + item.value, name: item.name };
        }
      ).concat(
        colors.map(
          (item) => {
            return { value: "btn-outline-" + item.value, name: item.name + " Outline" };
          }
        )
      )
    },
    display: {
      name: "display",
      type: "multiClassSelect",
      prefix: "d-",
      required: {
        display
      },
      optional: {
        breakpoint: breakpoints
      }
    },
    displayPrint: {
      name: "displayPrint",
      type: "multiClassSelect",
      prefix: "d-print-",
      required: {
        display
      },
      optional: {
        breakpoint: breakpoints
      }
    },
    flexDirection: {
      name: "flexDirection",
      type: "multiClassSelect",
      prefix: "flex-",
      requiredClass: "d-flex",
      required: {
        direction: [
          { value: "row", name: "row" },
          { value: "row-reverse", name: "Row Reverse" },
          { value: "row-column", name: "Column" },
          { value: "row-column-reverse", name: "Column Reverse" }
        ]
      },
      optional: {
        breakpoint: breakpoints
      }
    },
    flexJustify: {
      name: "flexJustify",
      type: "multiClassSelect",
      prefix: "justify-content-",
      requiredClass: "d-flex",
      required: {
        direction: justifyContent
      },
      optional: {
        breakpoint: breakpoints
      }
    },
    flexAlignContent: {
      name: "flexAlignContent",
      type: "multiClassSelect",
      prefix: "align-content-",
      requiredClass: "d-flex",
      required: {
        align: flexAlign
      },
      optional: {
        breakpoint: breakpoints
      }
    },
    flexAlignItems: {
      name: "flexAlignItems",
      type: "multiClassSelect",
      prefix: "align-items-",
      requiredClass: "d-flex",
      required: {
        direction: flexAlign
      },
      optional: {
        breakpoint: breakpoints
      }
    },
    flexAlignSelf: {
      name: "flexAlignSelf",
      type: "multiClassSelect",
      prefix: "align-self-",
      requiredClass: "d-flex",
      required: {
        align: flexAlign
      },
      optional: {
        breakpoint: breakpoints
      }
    },
    flexGrow: {
      name: "flexGrow",
      type: "multiClassSelect",
      prefix: "flex-",
      required: {
        direction: [
          { value: "grow-", name: "grow" },
          { value: "shrink-", name: "shrink" }
        ],
        amount: [
          { value: "0", name: "0" },
          { value: "1", name: "1" }
        ]
      },
      optional: {
        breakpoint: breakpoints
      }
    },
    flexWrap: {
      name: "flexWrap",
      type: "multiClassSelect",
      prefix: "flex-",
      requiredClass: "d-flex",
      required: {
        direction: [
          { value: "nowrap", name: "nowrap" },
          { value: "wrap", name: "wrap" },
          { value: "wrap-reverse", name: "wrap-reverse" }
        ]
      },
      optional: {
        breakpoint: breakpoints
      }
    },
    flexOrder: {
      name: "flexOrder",
      type: "multiClassSelect",
      prefix: "order-",
      requiredClass: "d-flex",
      required: {
        sizes: [
          ...sizes,
          { value: "first", name: "first" },
          { value: "last", name: "last" }
        ]
      },
      optional: {
        breakpoint: breakpoints
      }
    },
    float: {
      name: "float",
      type: "multiClassSelect",
      prefix: "float-",
      required: {
        direction: [
          { value: "start", name: "Left" },
          { value: "end", name: "Right" },
          { value: "clearfix", name: "Clearfix", prefix: false }
        ]
      },
      optional: {
        breakpoint: breakpoints
      }
    },
    layoutContainer: {
      name: "layoutContainer",
      type: "multiClassSelect",
      options: [
        { value: "container", name: "container", prefix: false },
        { value: "container-fluid", name: "container fluid", prefix: false }
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
        { value: "row", name: "Row", prefix: false }
      ]
    },
    layoutRowGutters: {
      name: "layoutRowGutters",
      type: "singleClassSelect",
      requiredClass: "row",
      prefix: "gx-",
      options: sizes
    },
    layoutColumn: {
      name: "layoutColumn",
      type: "multiClassSelect",
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
        { value: "col", name: "Auto Column", prefix: false }
      ]
    },
    layoutColumnOffset: {
      name: "layoutColumnOffset",
      type: "multiClassSelect",
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
      type: "multiClassSelect",
      requiredParentNodeClass: "grid",
      prefix: "g-col-",
      optional: {
        breakpoint: breakpoints
      },
      required: {
        size: columns
      }
    },
    layoutRowGap: {
      name: "layoutRowGap",
      type: "multiClassSelect",
      requiredClass: "grid",
      prefix: "row-gap-",
      options: sizes
    },
    layoutColumnGap: {
      name: "layoutColumnGap",
      type: "multiClassSelect",
      requiredClass: "grid",
      prefix: "gap-",
      options: sizes
    },
    objectFit: {
      name: "objectFit",
      type: "singleClassSelect",
      prefix: "object-fit-",
      description: "To help an image fit into a parent container",
      required: {
        direction: [
          { value: "contain", name: "contain" },
          { value: "cover", name: "cover" },
          { value: "fill", name: "fill" },
          { value: "scale", name: "scale" },
          { value: "start", name: "start" },
          { value: "none", name: "none" }
        ]
      },
      optional: {
        breakpoint: breakpoints
      }
    },
    opacity: {
      name: "opacity",
      type: "singleClassSelect",
      prefix: "opacity-",
      options: opacity
    },
    overflow: {
      name: "overflow",
      type: "singleClassSelect",
      prefix: "overflow-",
      required: {
        options: [
          { value: "auto", name: "auto" },
          { value: "hidden", name: "hidden" },
          { value: "hidden", name: "hidden" },
          { value: "visible", name: "visible" },
          { value: "scroll", name: "scroll" }
        ]
      },
      optional: {
        direction: [
          { value: "x", name: "x" },
          { value: "y", name: "y" }
        ]
      }
    },
    position: {
      name: "position",
      type: "singleClassSelect",
      prefix: "position-",
      options: [
        { value: "absolute", name: "Absolute" },
        { value: "relative", name: "Relative" },
        { value: "static", name: "Static" },
        { value: "fixed", name: "Fixed" },
        { value: "sticky", name: "Sticky" }
      ]
    },
    positionArrangement: {
      name: "positionArrangement",
      type: "multiClassSelect",
      prefix: "",
      required: {
        direction: [
          { value: "start-", name: "Start" },
          { value: "end-", name: "End" },
          { value: "top-", name: "Top" },
          { value: "bottom-", name: "Bottom" }
        ],
        amount: [
          { value: "0", name: "0" },
          { value: "50", name: "50%" },
          { value: "100", name: "100%" }
        ]
      }
    },
    positionTranslate: {
      name: "positionTranslate",
      type: "singleClassSelect",
      prefix: "translate-",
      options: [
        { value: "middle", name: "Middle" },
        { value: "middle-y", name: "Middle Y" },
        { value: "middle-x", name: "Middle X" }
      ]
    },
    shadow: {
      name: "shadow",
      type: "singleClassSelect",
      options: [
        { value: "shadow-sm", name: "shadow small" },
        { value: "shadow-lg", name: "shadow large" },
        { value: "shadow ", name: "shadow" },
        { value: "shadow-none", name: "None" }
      ]
    },
    size: {
      name: "size",
      type: "multiClassSelect",
      options: [
        { value: "w-100", name: "Width 100%" },
        { value: "mw-100", name: "Min Width 100%" },
        { value: "h-100", name: "Height 100%" },
        { value: "mh-100", name: "Min Height 100%" },
        { value: "vw-100", name: "100% Window Width" },
        { value: "min-vw-100", name: "Min 100% Window Width" },
        { value: "vh-100", name: "100% Window Height" },
        { value: "min-vh-100", name: "Min 100% Window Height" }
      ]
    },
    spacingPadding: {
      name: "spacingPadding",
      type: "multiClassSelect",
      prefix: "p",
      doNotPrefix: ["direction"],
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
      type: "multiClassSelect",
      prefix: "m",
      doNotPrefix: ["direction"],
      required: {
        size: sizes
      },
      optional: {
        direction: [
          ...directionsWithXY
        ],
        breakpoint: breakpoints
      },
      options: [
        { value: "auto", name: "Center", prefix: false }
      ]
    },
    textAlign: {
      name: "textAlign",
      type: "multiClassSelect",
      prefix: "text-",
      required: {
        "direction": [
          { value: "start", name: "Start" },
          { value: "center", name: "Center" },
          { value: "end", name: "End" }
        ]
      },
      optional: {
        breakpoint: breakpoints
      }
    },
    textColor: {
      name: "textColor",
      label: "Text Color",
      type: "singleClassSelect",
      options: [
        ...colors.map(
          (item) => {
            return { value: "text-" + item.value, name: item.name };
          }
        ),
        ...colors.map(
          (item) => {
            return { value: "text-" + item.value + "-emphasis", name: item.name + " emphasis" };
          }
        ),
        { value: "text-reset", name: "Reset Color" }
      ]
    },
    textWrap: {
      name: "textWrap",
      type: "multiClassSelect",
      options: [
        { value: "text-wrap", name: "Wrap" },
        { value: "text-nowrap", name: "No Wrap" },
        { value: "text-break", name: "Break" }
      ]
    },
    textTransform: {
      name: "textTransform",
      type: "singleClassSelect",
      options: [
        { value: "text-lowercase", name: "Wrap" },
        { value: "text-lowercase", name: "No Wrap" },
        { value: "text-lowercase", name: "Break" },
        { value: "font-monospace", name: "Monospace" }
      ]
    },
    textSize: {
      name: "textSize",
      type: "singleClassSelect",
      options: sizes.map(
        (item) => {
          return { value: "fs-" + item.value, name: "H-" + item.name };
        }
      )
    },
    textDecoration: {
      name: "textDecoration",
      type: "singleClassSelect",
      options: [
        { value: "text-decoration-underline", name: "Underline" },
        { value: "text-decoration-line-through", name: "Line Through" },
        { value: "text-decoration-none", name: "None" }
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
      type: "singleClassSelect",
      options: [
        { value: "fw-bold", name: "Bold" },
        { value: "fw-bolder", name: "Bolder" },
        { value: "fw-semibold", name: "Semibold" },
        { value: "fw-medium", name: "Medium" },
        { value: "fw-normal", name: "Normal" },
        { value: "fw-light", name: "Light" },
        { value: "fw-lighter", name: "Lighter" },
        { value: "fst-italic", name: "Italic" }
      ]
    },
    textLineHeight: {
      name: "textLineHeight",
      type: "singleClassSelect",
      options: [
        { value: "lh-1", name: "One" },
        { value: "lh-sm", name: "Small" },
        { value: "lh-base", name: "Base" },
        { value: "lh-lg", name: "Large" }
      ]
    },
    verticalAlign: {
      name: "verticalAlign",
      type: "singleClassSelect",
      options: [
        { value: "align-baseline", name: "Baseline" },
        { value: "align-top", name: "Top" },
        { value: "align-middle", name: "Middle" },
        { value: "align-bottom", name: "Bottom" },
        { value: "align-text-top", name: "Text Top" },
        { value: "align-text-bottom", name: "Text Bottom" }
      ]
    },
    visibility: {
      name: "visibility",
      type: "singleClassSelect",
      options: [
        { value: "visible", name: "visible" },
        { value: "invisible", name: "invisible" }
      ]
    },
    zIndex: {
      name: "zIndex",
      type: "singleClassSelect",
      options: [
        { value: "z-1", name: "1" },
        { value: "z-2", name: "2" },
        { value: "z-3", name: "3" },
        { value: "z-n1", name: "-1" },
        { value: "z-n2", name: "-2" },
        { value: "z-n3", name: "-3" }
      ]
    }
  };

  // node_modules/inflected/dist/esm/inflected.js
  var toString = Object.prototype.toString;
  function isFunc(obj) {
    return toString.call(obj) === "[object Function]";
  }
  var classCallCheck = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };
  var createClass = /* @__PURE__ */ function() {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor)
          descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }
    return function(Constructor, protoProps, staticProps) {
      if (protoProps)
        defineProperties(Constructor.prototype, protoProps);
      if (staticProps)
        defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();
  function icPart(str) {
    return str.split("").map(function(c) {
      return "(?:" + c.toUpperCase() + "|" + c.toLowerCase() + ")";
    }).join("");
  }
  function remove(arr, elem) {
    for (var i = arr.length - 1; i >= 0; i--) {
      if (arr[i] === elem) {
        Array.prototype.splice.call(arr, i, 1);
      }
    }
  }
  function hasProp(obj, key2) {
    return Object.prototype.hasOwnProperty.call(obj, key2);
  }
  var instances = {};
  var Inflector = function() {
    createClass(Inflector2, null, [{
      key: "getInstance",
      value: function getInstance(locale) {
        instances[locale] = instances[locale] || new Inflector2();
        return instances[locale];
      }
    }]);
    function Inflector2() {
      classCallCheck(this, Inflector2);
      this.plurals = [];
      this.singulars = [];
      this.uncountables = [];
      this.humans = [];
      this.acronyms = {};
      this.acronymRegex = /(?=a)b/;
    }
    createClass(Inflector2, [{
      key: "acronym",
      value: function acronym(word) {
        this.acronyms[word.toLowerCase()] = word;
        var values = [];
        for (var key2 in this.acronyms) {
          if (hasProp(this.acronyms, key2)) {
            values.push(this.acronyms[key2]);
          }
        }
        this.acronymRegex = new RegExp(values.join("|"));
      }
    }, {
      key: "plural",
      value: function plural(rule, replacement) {
        if (typeof rule === "string") {
          remove(this.uncountables, rule);
        }
        remove(this.uncountables, replacement);
        this.plurals.unshift([rule, replacement]);
      }
    }, {
      key: "singular",
      value: function singular(rule, replacement) {
        if (typeof rule === "string") {
          remove(this.uncountables, rule);
        }
        remove(this.uncountables, replacement);
        this.singulars.unshift([rule, replacement]);
      }
    }, {
      key: "irregular",
      value: function irregular(singular, plural) {
        remove(this.uncountables, singular);
        remove(this.uncountables, plural);
        var s0 = singular[0];
        var sRest = singular.substr(1);
        var p0 = plural[0];
        var pRest = plural.substr(1);
        if (s0.toUpperCase() === p0.toUpperCase()) {
          this.plural(new RegExp("(" + s0 + ")" + sRest + "$", "i"), "$1" + pRest);
          this.plural(new RegExp("(" + p0 + ")" + pRest + "$", "i"), "$1" + pRest);
          this.singular(new RegExp("(" + s0 + ")" + sRest + "$", "i"), "$1" + sRest);
          this.singular(new RegExp("(" + p0 + ")" + pRest + "$", "i"), "$1" + sRest);
        } else {
          var sRestIC = icPart(sRest);
          var pRestIC = icPart(pRest);
          this.plural(new RegExp(s0.toUpperCase() + sRestIC + "$"), p0.toUpperCase() + pRest);
          this.plural(new RegExp(s0.toLowerCase() + sRestIC + "$"), p0.toLowerCase() + pRest);
          this.plural(new RegExp(p0.toUpperCase() + pRestIC + "$"), p0.toUpperCase() + pRest);
          this.plural(new RegExp(p0.toLowerCase() + pRestIC + "$"), p0.toLowerCase() + pRest);
          this.singular(new RegExp(s0.toUpperCase() + sRestIC + "$"), s0.toUpperCase() + sRest);
          this.singular(new RegExp(s0.toLowerCase() + sRestIC + "$"), s0.toLowerCase() + sRest);
          this.singular(new RegExp(p0.toUpperCase() + pRestIC + "$"), s0.toUpperCase() + sRest);
          this.singular(new RegExp(p0.toLowerCase() + pRestIC + "$"), s0.toLowerCase() + sRest);
        }
      }
    }, {
      key: "uncountable",
      value: function uncountable() {
        for (var _len = arguments.length, words = Array(_len), _key = 0; _key < _len; _key++) {
          words[_key] = arguments[_key];
        }
        this.uncountables = this.uncountables.concat(words);
      }
    }, {
      key: "human",
      value: function human(rule, replacement) {
        this.humans.unshift([rule, replacement]);
      }
    }, {
      key: "clear",
      value: function clear() {
        var scope = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "all";
        if (scope === "all") {
          this.plurals = [];
          this.singulars = [];
          this.uncountables = [];
          this.humans = [];
        } else {
          this[scope] = [];
        }
      }
    }]);
    return Inflector2;
  }();
  function en(inflector) {
    inflector.plural(/$/, "s");
    inflector.plural(/s$/i, "s");
    inflector.plural(/^(ax|test)is$/i, "$1es");
    inflector.plural(/(octop|vir)us$/i, "$1i");
    inflector.plural(/(octop|vir)i$/i, "$1i");
    inflector.plural(/(alias|status)$/i, "$1es");
    inflector.plural(/(bu)s$/i, "$1ses");
    inflector.plural(/(buffal|tomat)o$/i, "$1oes");
    inflector.plural(/([ti])um$/i, "$1a");
    inflector.plural(/([ti])a$/i, "$1a");
    inflector.plural(/sis$/i, "ses");
    inflector.plural(/(?:([^f])fe|([lr])f)$/i, "$1$2ves");
    inflector.plural(/(hive)$/i, "$1s");
    inflector.plural(/([^aeiouy]|qu)y$/i, "$1ies");
    inflector.plural(/(x|ch|ss|sh)$/i, "$1es");
    inflector.plural(/(matr|vert|ind)(?:ix|ex)$/i, "$1ices");
    inflector.plural(/^(m|l)ouse$/i, "$1ice");
    inflector.plural(/^(m|l)ice$/i, "$1ice");
    inflector.plural(/^(ox)$/i, "$1en");
    inflector.plural(/^(oxen)$/i, "$1");
    inflector.plural(/(quiz)$/i, "$1zes");
    inflector.singular(/s$/i, "");
    inflector.singular(/(ss)$/i, "$1");
    inflector.singular(/(n)ews$/i, "$1ews");
    inflector.singular(/([ti])a$/i, "$1um");
    inflector.singular(/((a)naly|(b)a|(d)iagno|(p)arenthe|(p)rogno|(s)ynop|(t)he)(sis|ses)$/i, "$1sis");
    inflector.singular(/(^analy)(sis|ses)$/i, "$1sis");
    inflector.singular(/([^f])ves$/i, "$1fe");
    inflector.singular(/(hive)s$/i, "$1");
    inflector.singular(/(tive)s$/i, "$1");
    inflector.singular(/([lr])ves$/i, "$1f");
    inflector.singular(/([^aeiouy]|qu)ies$/i, "$1y");
    inflector.singular(/(s)eries$/i, "$1eries");
    inflector.singular(/(m)ovies$/i, "$1ovie");
    inflector.singular(/(x|ch|ss|sh)es$/i, "$1");
    inflector.singular(/^(m|l)ice$/i, "$1ouse");
    inflector.singular(/(bus)(es)?$/i, "$1");
    inflector.singular(/(o)es$/i, "$1");
    inflector.singular(/(shoe)s$/i, "$1");
    inflector.singular(/(cris|test)(is|es)$/i, "$1is");
    inflector.singular(/^(a)x[ie]s$/i, "$1xis");
    inflector.singular(/(octop|vir)(us|i)$/i, "$1us");
    inflector.singular(/(alias|status)(es)?$/i, "$1");
    inflector.singular(/^(ox)en/i, "$1");
    inflector.singular(/(vert|ind)ices$/i, "$1ex");
    inflector.singular(/(matr)ices$/i, "$1ix");
    inflector.singular(/(quiz)zes$/i, "$1");
    inflector.singular(/(database)s$/i, "$1");
    inflector.irregular("person", "people");
    inflector.irregular("man", "men");
    inflector.irregular("child", "children");
    inflector.irregular("sex", "sexes");
    inflector.irregular("move", "moves");
    inflector.irregular("zombie", "zombies");
    inflector.uncountable("equipment", "information", "rice", "money", "species", "series", "fish", "sheep", "jeans", "police");
  }
  var defaults$1 = {
    en
  };
  function inflections(locale, fn) {
    if (isFunc(locale)) {
      fn = locale;
      locale = null;
    }
    locale = locale || "en";
    if (fn) {
      fn(Inflector.getInstance(locale));
    } else {
      return Inflector.getInstance(locale);
    }
  }
  for (locale in defaults$1) {
    inflections(locale, defaults$1[locale]);
  }
  var locale;
  function capitalize(str) {
    var result = str === null || str === void 0 ? "" : String(str);
    return result.charAt(0).toUpperCase() + result.slice(1);
  }
  function camelize(term, uppercaseFirstLetter) {
    if (uppercaseFirstLetter === null || uppercaseFirstLetter === void 0) {
      uppercaseFirstLetter = true;
    }
    var result = "" + term;
    if (uppercaseFirstLetter) {
      result = result.replace(/^[a-z\d]*/, function(a) {
        return inflections().acronyms[a] || capitalize(a);
      });
    } else {
      result = result.replace(new RegExp("^(?:" + inflections().acronymRegex.source + "(?=\\b|[A-Z_])|\\w)"), function(a) {
        return a.toLowerCase();
      });
    }
    result = result.replace(/(?:_|(\/))([a-z\d]*)/gi, function(match, a, b, idx, string) {
      a || (a = "");
      return "" + a + (inflections().acronyms[b] || capitalize(b));
    });
    return result;
  }
  function underscore(camelCasedWord) {
    var result = "" + camelCasedWord;
    result = result.replace(new RegExp("(?:([A-Za-z\\d])|^)(" + inflections().acronymRegex.source + ")(?=\\b|[^a-z])", "g"), function(match, $1, $2) {
      return "" + ($1 || "") + ($1 ? "_" : "") + $2.toLowerCase();
    });
    result = result.replace(/([A-Z\d]+)([A-Z][a-z])/g, "$1_$2");
    result = result.replace(/([a-z\d])([A-Z])/g, "$1_$2");
    result = result.replace(/-/g, "_");
    return result.toLowerCase();
  }
  function humanize(lowerCaseAndUnderscoredWord, options) {
    var result = "" + lowerCaseAndUnderscoredWord;
    var humans = inflections().humans;
    var human = void 0, rule = void 0, replacement = void 0;
    options = options || {};
    if (options.capitalize === null || options.capitalize === void 0) {
      options.capitalize = true;
    }
    for (var i = 0, ii = humans.length; i < ii; i++) {
      human = humans[i];
      rule = human[0];
      replacement = human[1];
      if (rule.test && rule.test(result) || result.indexOf(rule) > -1) {
        result = result.replace(rule, replacement);
        break;
      }
    }
    result = result.replace(/_id$/, "");
    result = result.replace(/_/g, " ");
    result = result.replace(/([a-z\d]*)/gi, function(match) {
      return inflections().acronyms[match] || match.toLowerCase();
    });
    if (options.capitalize) {
      result = result.replace(/^\w/, function(match) {
        return match.toUpperCase();
      });
    }
    return result;
  }
  function titleize2(word) {
    return humanize(underscore(word)).replace(/(^|[\s¿/]+)([a-z])/g, function(match, boundary, letter, idx, string) {
      return match.replace(letter, letter.toUpperCase());
    });
  }
  var DEFAULT_APPROXIMATIONS = {
    "\xC0": "A",
    "\xC1": "A",
    "\xC2": "A",
    "\xC3": "A",
    "\xC4": "A",
    "\xC5": "A",
    "\xC6": "AE",
    "\xC7": "C",
    "\xC8": "E",
    "\xC9": "E",
    "\xCA": "E",
    "\xCB": "E",
    "\xCC": "I",
    "\xCD": "I",
    "\xCE": "I",
    "\xCF": "I",
    "\xD0": "D",
    "\xD1": "N",
    "\xD2": "O",
    "\xD3": "O",
    "\xD4": "O",
    "\xD5": "O",
    "\xD6": "O",
    "\xD7": "x",
    "\xD8": "O",
    "\xD9": "U",
    "\xDA": "U",
    "\xDB": "U",
    "\xDC": "U",
    "\xDD": "Y",
    "\xDE": "Th",
    "\xDF": "ss",
    "\xE0": "a",
    "\xE1": "a",
    "\xE2": "a",
    "\xE3": "a",
    "\xE4": "a",
    "\xE5": "a",
    "\xE6": "ae",
    "\xE7": "c",
    "\xE8": "e",
    "\xE9": "e",
    "\xEA": "e",
    "\xEB": "e",
    "\xEC": "i",
    "\xED": "i",
    "\xEE": "i",
    "\xEF": "i",
    "\xF0": "d",
    "\xF1": "n",
    "\xF2": "o",
    "\xF3": "o",
    "\xF4": "o",
    "\xF5": "o",
    "\xF6": "o",
    "\xF8": "o",
    "\xF9": "u",
    "\xFA": "u",
    "\xFB": "u",
    "\xFC": "u",
    "\xFD": "y",
    "\xFE": "th",
    "\xFF": "y",
    "\u0100": "A",
    "\u0101": "a",
    "\u0102": "A",
    "\u0103": "a",
    "\u0104": "A",
    "\u0105": "a",
    "\u0106": "C",
    "\u0107": "c",
    "\u0108": "C",
    "\u0109": "c",
    "\u010A": "C",
    "\u010B": "c",
    "\u010C": "C",
    "\u010D": "c",
    "\u010E": "D",
    "\u010F": "d",
    "\u0110": "D",
    "\u0111": "d",
    "\u0112": "E",
    "\u0113": "e",
    "\u0114": "E",
    "\u0115": "e",
    "\u0116": "E",
    "\u0117": "e",
    "\u0118": "E",
    "\u0119": "e",
    "\u011A": "E",
    "\u011B": "e",
    "\u011C": "G",
    "\u011D": "g",
    "\u011E": "G",
    "\u011F": "g",
    "\u0120": "G",
    "\u0121": "g",
    "\u0122": "G",
    "\u0123": "g",
    "\u0124": "H",
    "\u0125": "h",
    "\u0126": "H",
    "\u0127": "h",
    "\u0128": "I",
    "\u0129": "i",
    "\u012A": "I",
    "\u012B": "i",
    "\u012C": "I",
    "\u012D": "i",
    "\u012E": "I",
    "\u012F": "i",
    "\u0130": "I",
    "\u0131": "i",
    "\u0132": "IJ",
    "\u0133": "ij",
    "\u0134": "J",
    "\u0135": "j",
    "\u0136": "K",
    "\u0137": "k",
    "\u0138": "k",
    "\u0139": "L",
    "\u013A": "l",
    "\u013B": "L",
    "\u013C": "l",
    "\u013D": "L",
    "\u013E": "l",
    "\u013F": "L",
    "\u0140": "l",
    "\u0141": "L",
    "\u0142": "l",
    "\u0143": "N",
    "\u0144": "n",
    "\u0145": "N",
    "\u0146": "n",
    "\u0147": "N",
    "\u0148": "n",
    "\u0149": "'n",
    "\u014A": "NG",
    "\u014B": "ng",
    "\u014C": "O",
    "\u014D": "o",
    "\u014E": "O",
    "\u014F": "o",
    "\u0150": "O",
    "\u0151": "o",
    "\u0152": "OE",
    "\u0153": "oe",
    "\u0154": "R",
    "\u0155": "r",
    "\u0156": "R",
    "\u0157": "r",
    "\u0158": "R",
    "\u0159": "r",
    "\u015A": "S",
    "\u015B": "s",
    "\u015C": "S",
    "\u015D": "s",
    "\u015E": "S",
    "\u015F": "s",
    "\u0160": "S",
    "\u0161": "s",
    "\u0162": "T",
    "\u0163": "t",
    "\u0164": "T",
    "\u0165": "t",
    "\u0166": "T",
    "\u0167": "t",
    "\u0168": "U",
    "\u0169": "u",
    "\u016A": "U",
    "\u016B": "u",
    "\u016C": "U",
    "\u016D": "u",
    "\u016E": "U",
    "\u016F": "u",
    "\u0170": "U",
    "\u0171": "u",
    "\u0172": "U",
    "\u0173": "u",
    "\u0174": "W",
    "\u0175": "w",
    "\u0176": "Y",
    "\u0177": "y",
    "\u0178": "Y",
    "\u0179": "Z",
    "\u017A": "z",
    "\u017B": "Z",
    "\u017C": "z",
    "\u017D": "Z",
    "\u017E": "z",
    "\u0410": "A",
    "\u0411": "B",
    "\u0412": "V",
    "\u0413": "G",
    "\u0414": "D",
    "\u0415": "E",
    "\u0401": "E",
    "\u0416": "ZH",
    "\u0417": "Z",
    "\u0418": "I",
    "\u0419": "J",
    "\u041A": "K",
    "\u041B": "L",
    "\u041C": "M",
    "\u041D": "N",
    "\u041E": "O",
    "\u041F": "P",
    "\u0420": "R",
    "\u0421": "S",
    "\u0422": "T",
    "\u0423": "U",
    "\u0424": "F",
    "\u0425": "KH",
    "\u0426": "C",
    "\u0427": "CH",
    "\u0428": "SH",
    "\u0429": "SHCH",
    "\u042A": "",
    "\u042B": "Y",
    "\u042C": "",
    "\u042D": "E",
    "\u042E": "YU",
    "\u042F": "YA",
    "\u0430": "a",
    "\u0431": "b",
    "\u0432": "v",
    "\u0433": "g",
    "\u0434": "d",
    "\u0435": "e",
    "\u0451": "e",
    "\u0436": "zh",
    "\u0437": "z",
    "\u0438": "i",
    "\u0439": "j",
    "\u043A": "k",
    "\u043B": "l",
    "\u043C": "m",
    "\u043D": "n",
    "\u043E": "o",
    "\u043F": "p",
    "\u0440": "r",
    "\u0441": "s",
    "\u0442": "t",
    "\u0443": "u",
    "\u0444": "f",
    "\u0445": "kh",
    "\u0446": "c",
    "\u0447": "ch",
    "\u0448": "sh",
    "\u0449": "shch",
    "\u044A": "",
    "\u044B": "y",
    "\u044C": "",
    "\u044D": "e",
    "\u044E": "yu",
    "\u044F": "ya"
  };
  var DEFAULT_REPLACEMENT_CHAR = "?";
  var instances$1 = {};
  var Transliterator = function() {
    createClass(Transliterator2, null, [{
      key: "getInstance",
      value: function getInstance(locale) {
        instances$1[locale] = instances$1[locale] || new Transliterator2();
        return instances$1[locale];
      }
    }]);
    function Transliterator2() {
      classCallCheck(this, Transliterator2);
      this.approximations = {};
      for (var char in DEFAULT_APPROXIMATIONS) {
        this.approximate(char, DEFAULT_APPROXIMATIONS[char]);
      }
    }
    createClass(Transliterator2, [{
      key: "approximate",
      value: function approximate(char, replacement) {
        this.approximations[char] = replacement;
      }
    }, {
      key: "transliterate",
      value: function transliterate(string, replacement) {
        var _this = this;
        return string.replace(/[^\u0000-\u007f]/g, function(c) {
          return _this.approximations[c] || replacement || DEFAULT_REPLACEMENT_CHAR;
        });
      }
    }]);
    return Transliterator2;
  }();

  // src/traits/get-trait-classes.js
  var import_lodash2 = __toESM(require_lodash());
  var get_trait_classes_default = (trait) => {
    let options = trait.options;
    let required = trait.required;
    let optional = trait.optional;
    let prefix2 = trait.prefix || null;
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
              optionalClasses[optionalClasses.length - 1].forEach(
                (previousValue) => {
                  let values = [...optional[optionalKey].map((item) => {
                    return previousValue + "-" + item.value;
                  })];
                  optionalClasses.push(values);
                }
              );
            } else {
              optionalClasses.push(optional[optionalKey].map((item) => {
                return item.value;
              }));
            }
          }
        );
        optionalClasses = (0, import_lodash2.default)(optionalClasses);
      }
      let requiredKeys = Object.keys(required);
      requiredKeys.forEach(
        (requiredKey, index) => {
          if (requiredClasses.length > 0) {
            let result = [];
            requiredClasses.forEach(
              (previousValue) => {
                result = result.concat(required[requiredKey].map((item) => {
                  return previousValue + item.value;
                }));
              }
            );
            requiredClasses = result;
          } else {
            requiredClasses = required[requiredKey].map((item) => {
              return item.value;
            });
          }
        }
      );
      if (optionalClasses.length > 0) {
        requiredClasses.forEach(
          (rValue) => {
            optionalClasses.forEach(
              (oValue) => {
                if (trait.optionalLast === true) {
                  classes.push(prefix2 + rValue + "-" + oValue);
                } else {
                  classes.push(prefix2 + oValue + "-" + rValue);
                }
              }
            );
          }
        );
      }
      requiredClasses = requiredClasses.map((value) => {
        if (prefix2) {
          return prefix2 + (prefix2.indexOf("-") === -1 ? "-" : "") + value;
        } else {
          return value;
        }
      });
      classes = classes.concat(requiredClasses);
    }
    if (options) {
      options.forEach(
        (item) => {
          if (item.prefix !== false) {
            classes.push((prefix2 ? prefix2 : "") + item.value);
          } else {
            classes.push(item.value);
          }
        }
      );
    }
    return classes.sort();
  };

  // src/traits/class-select.js
  var class_select_default = {
    createBadge(value) {
      let html = `
            <span class="badge bg-primary me-1 my-1 border-bottom" data-value="${value}">
				${value}
				<i class="bi bi-x-circle ms-2"></i>
			</span>`;
      return htmlToElement(html);
    },
    createBadgesTemplate() {
      return `<div class="badges border-top fs-6 p-1 border-bottom"></div>`;
    },
    createInput({ component, trait, elInput }) {
      let attributes = this.model.attributes;
      this.type = attributes.type;
      let select;
      let html;
      switch (this.type) {
        case "multiClassSelect":
          html = `
                    <div>
                        ${this.createBadgesTemplate()}
                        <div>${titleize2(attributes.name)}</div>
                        <div class="options border-top"></div>
                    </div>
                `;
          this.validClasses = get_trait_classes_default(attributes);
          break;
        case "singleClassSelect":
          select = this.createSelect(attributes.name, attributes.options);
          html = `
					<div>
						${this.createBadgesTemplate()}
						${select}
					</div>
				`;
          this.validClasses = get_trait_classes_default(attributes);
          break;
        default:
          let keys = Object.keys(traits_default);
          select = this.createSelect("styles", keys.map(
            (value) => {
              return { value, name: titleize2(value) };
            }
          ));
          this.validClasses = [];
          keys.forEach(
            (key2) => {
              this.validClasses = this.validClasses.concat(get_trait_classes_default(traits_default[key2]));
            }
          );
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
              badgesElement.append(button);
            }
          }
        );
        this.addBadgeButtonEvents(buttons);
        setTimeout(
          () => {
            this.setSelectedTrait(attributes);
          },
          100
        );
      } else if (this.type === "singleClassSelect") {
        let button;
        classList.forEach(
          (value) => {
            if (this.validClasses.includes(value)) {
              this.currentClass = value;
              button = this.createBadge(value);
              badgesElement.append(button);
            }
          }
        );
        setTimeout(
          () => {
            this.element.querySelector("select").addEventListener(
              "change",
              (e) => {
                if (this.currentClass) {
                  badgesElement.innerHTML = "";
                  this.target.removeClass(this.currentClass);
                }
                this.target.addClass(e.target.value);
                this.currentClass = e.target.value;
                let button2 = this.createBadge(e.target.value);
                badgesElement.append(button2);
                this.addButtonEvent(button2);
                e.target.value = "";
              }
            );
            if (button) {
              this.addButtonEvent(button);
            }
          },
          100
        );
      } else {
        classList.forEach(
          (value) => {
            if (value.indexOf("gjs") !== -1) {
              return;
            }
            let button = this.createBadge(value);
            buttons.push(button);
            element.querySelector(".badges").append(button);
          }
        );
        this.addBadgeButtonEvents(buttons);
      }
      return element;
    },
    createLabel({ label }) {
      return "<div></div>";
      return `
            <div>
                <b>${titleize2(label)}</b>
            </div>`;
    },
    createSelect(name, list) {
      return `
            <select name="${name}" class="form-select form-select-sm">
                <option value="">${titleize2(name)}</option>
                ${list.map((item) => {
        return `
							<option value="${item.value}">${titleize2(item.name || item.value)}</option>`;
      }).join("\n")}
            </select>
        `;
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
          );
        },
        1e3
      );
    },
    onTraitCategoryChange(e) {
      let select = e.target;
      let name = select.value;
      this.setSelectedTrait(traits_default[name]);
    },
    setSelectedTrait(trait) {
      this.selectedTrait = trait;
      let optionsEl = this.element.querySelector(".options");
      this.traitMap = {};
      optionsEl.innerHTML = "";
      if (trait.optional || trait.required) {
        if (trait.optional) {
          let keys2 = Object.keys(trait.optional);
          this.traitMap.optional = [];
          keys2.forEach(
            (key2) => {
              let select = htmlToElement(this.createSelect(key2, trait.optional[key2]));
              optionsEl.append(select);
              select.addEventListener("change", (e) => {
                this.onPropertyChange(e);
              });
              console.log(select);
              this.traitMap.optional.push(select);
            }
          );
        }
        let keys = Object.keys(trait.required);
        this.traitMap.required = [];
        keys.forEach(
          (key2) => {
            let options = [];
            if (trait.options) {
              options = options.concat(trait.options);
            }
            options = options.concat(trait.required[key2]);
            let select = htmlToElement(this.createSelect(key2, options));
            optionsEl.append(select);
            select.addEventListener("change", (e) => {
              this.onPropertyChange(e);
            });
            console.log(select);
            this.traitMap.required.push(select);
          }
        );
      } else {
        let select = htmlToElement(this.createSelect("options", trait.options));
        optionsEl.append(select);
        select.addEventListener("change", (e) => {
          this.onPropertyChange(e);
        });
        this.traitMap.options = select;
      }
    },
    onPropertyChange(e) {
      let prefix2 = this.selectedTrait.prefix || null;
      prefix2 = prefix2 || "";
      let badges = this.element.querySelector(".badges");
      let value = prefix2;
      let hasRequired = true;
      let capturedSelects = [];
      let doNotPrefix = this.selectedTrait.doNotPrefix || [];
      if (this.selectedTrait.optional || this.selectedTrait.required) {
        if (this.selectedTrait.optional) {
          this.traitMap.optional.forEach(
            (el) => {
              if (el.value !== "") {
                if (doNotPrefix.includes(el.name)) {
                  value += el.value;
                } else {
                  value += "-" + el.value;
                }
                capturedSelects.push(el);
              }
            }
          );
        }
        this.traitMap.required.forEach(
          (el) => {
            if (el.value !== "") {
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
        );
      } else {
        value += this.traitMap.options.value;
        capturedSelects.push(this.traitMap.options);
      }
      if (hasRequired === false) {
        return;
      } else {
        capturedSelects.forEach(
          (el) => {
            el.value = "";
          }
        );
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
      button.querySelector("i").addEventListener(
        "click",
        (e) => {
          let button2 = e.target.parentNode;
          console.log(button2);
          this.removeClass(button2.getAttribute("data-value"));
          button2.remove();
        }
      );
    },
    removeClass(value) {
      this.target.removeClass(value);
    },
    onEvent({ elInput, component, event }) {
    },
    onUpdate({ elInput, component }) {
    }
  };

  // src/traits.js
  var traits_default2 = (editor2, config2 = {}) => {
    const tm = editor2.TraitManager;
    tm.addType(
      "classSelect",
      class_select_default
    );
    tm.addType(
      "singleClassSelect",
      class_select_default
    );
    tm.addType(
      "multiClassSelect",
      class_select_default
    );
    tm.addType("class_select", {
      events: {
        "change": "onChange"
        // trigger parent onChange method on input change
      },
      createLabel({ label }) {
        return `<div><i class="${this.icon}"></i>${label}</div>`;
      },
      getOptions(options) {
        const target_view_el = this.target.view.el;
        let list = [];
        for (let i = 0; i < options.length; i++) {
          let value = options[i].value;
          if (value === "") {
            value = "GJS_NO_CLASS";
          }
          let text = options[i].name;
          const css = Array.from(target_view_el.classList);
          const value_a = value.split(" ");
          const intersection = css.filter((x) => value_a.includes(x));
          let selected = false;
          if (intersection.length === value_a.length) {
            selected = true;
          }
          let html = `
					<option value="${value}" ${selected ? "selected" : ""}>
						${options[i].name}
					</option>`;
          list.push(html);
        }
        return list;
      },
      createInput({ trait }) {
        const options = trait.get("options") || [];
        return htmlToElement(
          //language=HTML
          `
					<select class='gsm-sm-select' data-name="${trait.getName()}">
						${this.getOptions(options)}
					</select>`
        );
      },
      onUpdate({ elInput, component }) {
        const classes = component.getClasses();
        const opts = this.model.get("options") || [];
        for (let i = 0; i < opts.length; i++) {
          let value = opts[i].value;
          if (value && classes.includes(value)) {
            elInput.value = value;
            return;
          }
        }
        elInput.value = "GJS_NO_CLASS";
      },
      onEvent({ elInput, component, event }) {
        const options = this.model.get("options");
        const classes = options.map((opt) => opt.value);
        for (let i = 0; i < classes.length; i++) {
          if (classes[i].length > 0) {
            const classes_i_a = classes[i].split(" ");
            for (let j = 0; j < classes_i_a.length; j++) {
              if (classes_i_a[j].length > 0) {
                component.removeClass(classes_i_a[j]);
              }
            }
          }
        }
        const value = this.model.get("value");
        const elAttributes = component.attributes.attributes;
        delete elAttributes[""];
        let name = elInput.getAttribute("data-name");
        component.removeAttributes([name]);
        if (value.length > 0 && value !== "GJS_NO_CLASS") {
          const value_a = value.split(" ");
          for (let i = 0; i < value_a.length; i++) {
            component.addClass(value_a[i]);
          }
        }
        component.em.trigger("component:toggled");
      }
    });
    const textTrait = tm.getType("text");
    tm.addType("content", {
      events: {
        "keyup": "onChange"
      },
      onValueChange: function() {
        const md = this.model;
        const target = md.target;
        target.set("content", md.get("value"));
      },
      getInputEl: function() {
        if (!this.inputEl) {
          this.inputEl = textTrait.prototype.getInputEl.bind(this)();
          this.inputEl.value = this.target.get("content");
        }
        return this.inputEl;
      }
    });
    tm.addType("innerHTML", {
      events: {
        "keyup": "onChange"
      },
      onValueChange: function() {
        this.target.view.el.innerHTML = this.inputEl.value;
      },
      getInputEl: function() {
        if (!this.inputEl) {
          this.inputEl = textTrait.prototype.getInputEl.bind(this)();
          this.inputEl.value = this.target.view.el.innerHTML;
        }
        return this.inputEl;
      }
    });
  };

  // src/components/ComponentBase.js
  var ComponentBase = class {
    constructor(editor2) {
      this.editor = editor2;
      this.addTypes();
      this.addTraits();
      this.addBlocks();
    }
    get namespace() {
      return "bs-";
    }
    get type() {
      return this.namespace + this.name.toLowerCase();
    }
    /**
     * Override this on all subclasses as code mangling with be weird
     * @returns {*}
     */
    get name() {
      return this.constructor.name;
    }
    set editor(value) {
      this._editor = value;
    }
    get editor() {
      return this._editor;
    }
    get components() {
      return this.editor.DomComponents;
    }
    get blockManager() {
      return this.editor.BlockManager;
    }
    get traitManager() {
      return this.editor.TraitManager;
    }
    createLabel(icon, label) {
      if (icon.indexOf("http") === 0) {
        return `
			<div class="gjs-block__media ratio ratio-1x1">
				<img src="${icon}" class="currentColor"></img>
			</div>
			<div class="gjs-block-label">label</div>`;
      }
      return `
            <div class="gjs-block__media">
				${this.createIcon(icon)}
			</div>
			<div class="gjs-block-label">${label}</div>
        `;
    }
    createIcon(icon) {
      return `
			<div class="d-flex justify-content-center align-items-center">
				<i class="${icon} fs-40"></i>
			</div>`;
    }
    addTypes() {
    }
    addBlocks() {
    }
    addTraits() {
    }
    get traitId() {
      return {
        type: "text",
        label: "ID",
        name: "id",
        placeholder: "my_element",
        changeProp: true
      };
    }
    get traitTitle() {
      return {
        type: "text",
        label: "Title",
        name: "title",
        placeholder: "My Element",
        changeProp: true
      };
    }
    getTraits(list) {
      let traits = [];
      list.forEach(
        (item) => {
          let key2 = camelize("trait" + camelize(item, true), false);
          if (this[key2]) {
            traits.push(this[key2]);
          }
        }
      );
      return traits;
    }
    getAllTraits() {
      let keys = Object.keys(this);
      keys.sort();
      let traits = [];
      keys.forEach(
        (key2) => {
          if (key2.indexOf("trait") === 0) {
            traits.push(this[key2]);
          }
        }
      );
      console.log(traits);
      return traits;
    }
    get traits() {
      return [
        this.traitId,
        this.traitTitle,
        {
          type: "classSelect",
          name: "class-select",
          label: "Styles"
        }
      ];
    }
    getRootNode(selector, element) {
      if (element.parentNode === document.body) {
        return null;
      }
      if (element.parentNode.classList.has(selector)) {
        return element.parentNode;
      }
      return this.getRootNode(selector, element.parentNode);
    }
  };

  // src/components/Accordion.js
  var Accordion = class extends ComponentBase {
    constructor(editor2) {
      super(editor2);
    }
    get type() {
      return "accordion";
    }
    get name() {
      return "Accordion";
    }
    get item() {
      return `
            <div class="accordion-item" data-gjs-type="${this.type}-item">
                <h2 class="accordion-header" data-gjs-type="${this.type}-header">
                    <div class="accordion-button" 
						 type="button" 
						 data-bs-toggle="collapse"
                         data-bs-target="#collapseOne"
                         aria-expanded="false"
                         aria-controls="collapseOne"
                         data-gjs-type="accordion_button"
                         role="button"
                    >
                        Accordion Item #1
                    </div>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordion"
                     data-gjs-type="${this.type}-collapse">
                    <div class="accordion-body" data-gjs-type="${this.type}-body">
                        <div>

                        </div>
                    </div>
                </div>
            </div>`;
    }
    addBlocks() {
      this.blockManager.add(this.type, {
        attributes: {
          title: this.name
        },
        label: this.name,
        //language=SVG
        media: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14">
                    <defs>
                        <style>.a{opacity:0.5;}</style>
                    </defs>
                    <title>container</title>
                    <g class="a">
                        <path d="M22.25,6a.76.76,0,0,1,.75.75v10.5a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,17.25V6.75A.76.76,0,0,1,1.75,6h20.5m0-1H1.75A1.76,1.76,0,0,0,0,6.75v10.5A1.76,1.76,0,0,0,1.75,19h20.5A1.76,1.76,0,0,0,24,17.25V6.75A1.76,1.76,0,0,0,22.25,5Z"
                              transform="translate(0 -5)"/>
                    </g>
                    <g class="a">
                        <polygon points="19.65 2.01 19.38 2.29 20.2 3.09 20.46 2.81 19.65 2.01 19.65 2.01"/>
                        <polygon points="20.73 2 19.93 2.82 20.2 3.09 21 2.27 20.73 2 20.73 2"/>
                    </g>
                    <polygon points="7 2 2 2 2 3 7 3 7 2 7 2"/>
                    <g class="a">
                        <polygon points="23 4 1 4 1 5 23 5 23 4 23 4"/>
                    </g>
                    <g class="a">
                        <polygon points="19.65 6.01 19.38 6.29 20.2 7.09 20.46 6.81 19.65 6.01 19.65 6.01"/>
                        <polygon points="20.73 6 19.93 6.82 20.2 7.09 21 6.27 20.73 6 20.73 6"/>
                    </g>
                    <polygon points="7 6 2 6 2 7 7 7 7 6 7 6"/>
                    <g class="a">
                        <polygon points="23 8 1 8 1 9 23 9 23 8 23 8"/>
                    </g>
                </svg>`,
        category: "Components",
        id: this.type,
        //language=HTML
        content: `
				<div class="accordion open" id="accordion" data-gjs-type="${this.type}">
					${this.item}
				</div>
			`,
        activate: true
      });
    }
    addTypes() {
      let context = this;
      this.components.addType(this.type, {
        extend: this.namespace + "default",
        model: {
          defaults: {
            name: this.name,
            classes: ["accordion"],
            draggable: true,
            droppable: ".accordion-item",
            //this.type + "-item",
            traits: this.traits
          },
          update() {
          },
          init() {
            this.on("component:create", this.setItemAttributes);
            this.on("component:update", this.setItemAttributes);
            this.on("change:attributes:recordId", this.setItemAttributes);
          },
          setItemAttributes() {
            console.warn("setAccordionItemAttributes");
            let attributes = this.getAttributes();
            let id = attributes.id;
            let accordions = this.findType("accordion_item");
            accordions.forEach(
              (item, index) => {
                let button = item.findType("accordion_button")[0];
                let collapse = item.findType("accordion_collapse")[0];
                let itemId = id + "-" + index;
                button.addAttributes({
                  "data-bs-target": "#" + itemId,
                  "aria-controls": itemId,
                  "aria-expanded": "false",
                  "data-bs-toggle": "collapse"
                });
                collapse.addAttributes({ "data-bs-parent": "#" + id, id: itemId });
              }
            );
          }
        },
        isComponent: (el) => {
          if (el && el.classList && el.classList.contains("accordion")) {
            return { type: this.type };
          }
        }
      });
      this.components.addType(this.type + "-item", {
        extend: this.namespace + "default",
        model: {
          defaults: {
            name: this.name + " Item",
            classes: ["accordion-item"],
            droppable: false,
            draggable: ".accordion",
            //this.type,
            stylable: false,
            traits: this.traits
          },
          init() {
          },
          updated() {
          }
        },
        isComponent: (el) => {
          if (el && el.classList && el.classList.contains("accordion-item")) {
            return { type: this.type + "-item" };
          }
        }
      });
      this.components.addType(this.type + "-header", {
        extend: this.namespace + "default",
        model: {
          defaults: {
            name: this.name + " Header",
            classes: ["accordion-header"],
            droppable: false,
            removable: false,
            copyable: false,
            draggable: false,
            selectable: true,
            stylable: false,
            traits: this.traits
          },
          init() {
          }
        },
        isComponent: (el) => {
          if (el && el.classList && el.classList.contains("accordion-header")) {
            return { type: this.type + "-header" };
          }
        }
      });
      this.components.addType(this.type + "-button", {
        extend: this.namespace + "text",
        model: {
          defaults: {
            name: this.name + " Button",
            classes: ["accordion-button"],
            droppable: true,
            removable: false,
            copyable: false,
            draggable: false,
            stylable: false,
            traits: this.traits
          },
          updated(property, value, previous) {
            console.log(this.getAttributes());
            if (this.getAttributes().title) {
            }
          }
        },
        isComponent: (el) => {
          if (el && el.classList && el.classList.contains("accordion-button")) {
            return { type: this.type + "-button" };
          }
        },
        view: {
          init() {
            let el = null;
            console.log(this);
            if (this.el) {
              this.el.addEventListener(
                "keydown",
                (e) => {
                  console.log(e);
                }
              );
              this.el.addEventListener(
                "click",
                (e) => {
                  console.log(e);
                }
              );
            }
          }
        }
      });
      this.components.addType(this.type + "-collapse", {
        extend: this.namespace + "default",
        model: {
          defaults: {
            name: this.name + " Collapse",
            classes: ["accordion-collapse"],
            droppable: false,
            removable: false,
            copyable: false,
            draggable: false,
            stylable: false,
            highlightable: false
          },
          init() {
          }
        },
        isComponent: (el) => {
          if (el && el.classList && el.classList.contains("accordion-collapse")) {
            return { type: this.type + "-collapse" };
          }
        }
      });
      this.components.addType(this.type + "-body", {
        extend: this.namespace + "text",
        model: {
          defaults: {
            name: this.name + " Body",
            classes: ["accordion-body"],
            /*
            					droppable: true,
            					removable: false,
            					copyable: false,
            					draggable: false,
            
            					 */
            stylable: false,
            traits: this.traits,
            editable: true
          },
          init() {
          }
        },
        isComponent: (el) => {
          if (el && el.classList && el.classList.contains("accordion-body")) {
            return { type: this.type + "-body" };
            console.log("casting accordion body as text");
            return { type: "bs-text" };
          }
        }
      });
    }
  };

  // src/components/Alert.js
  var Alert = class extends ComponentBase {
    addBlocks() {
      this.blockManager.add(
        "alert",
        {
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
          category: "Components",
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
            name: "Alert",
            tagName: "div",
            classes: ["alert"],
            traits: [
              {
                name: "Alert Context",
                type: "singleClassSelect",
                requiredClass: "alert",
                options: colors.map(
                  (item) => {
                    return { value: "alert-" + item.value, name: item.name };
                  }
                ),
                label: ""
              },
              ...this.traits
            ]
          }
        },
        isComponent: (el) => {
          if (el && el.classList && el.classList.contains("alert")) {
            return { type: this.type };
          }
        }
      });
    }
  };

  // src/components/Badge.js
  var Badge = class extends ComponentBase {
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
        category: "Components",
        content: `<span class='badge text-bg-primary' data-gjs-type="${this.type}">Label</span>`
      });
    }
    addTypes() {
      this.components.addType(
        this.type,
        {
          extend: this.namespace + "text",
          model: {
            defaults: {
              name: "Badge",
              tagName: "span",
              classes: ["badge text-bg-primary"],
              traits: [
                traits_default.radius,
                traits_default.spacingMargin,
                traits_default.spacingPadding,
                traits_default.textBackgroundColor,
                traits_default.position,
                traits_default.positionArrangement,
                traits_default.positionTranslate
              ]
            }
          },
          isComponent(el) {
            if (el && el.classList && el.classList.contains("badge")) {
              return { type: this.type };
            }
          }
        }
      );
    }
  };

  // src/components/Button.js
  var Button = class extends ComponentBase {
    get name() {
      return "Button";
    }
    addBlocks() {
      this.blockManager.add(
        this.type,
        {
          attributes: {
            title: "Button"
          },
          label: "Button",
          //language=HTML
          media: `
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 8"><title>container</title>
						<path d="M19.5,9a.5.5,0,0,1,.5.5v5a.5.5,0,0,1-.5.5H4.5a.5.5,0,0,1-.5-.5v-5A.5.5,0,0,1,4.5,9h15m0-1H4.5A1.5,1.5,0,0,0,3,9.5v5A1.5,1.5,0,0,0,4.5,16h15A1.5,1.5,0,0,0,21,14.5v-5A1.5,1.5,0,0,0,19.5,8Z"
						      transform="translate(-3 -8)"/>
						<polygon points="11 3 3 3 3 5 11 5 11 3 11 3"/>
						<polygon points="15 3 13 3 13 5 15 5 15 3 15 3"/>
					</svg>
				`,
          category: "Basic",
          content: `<div class="btn btn-primary" role="button" data-gjs-type="${this.type}">Button!</div>`
        }
      );
      this.blockManager.add(
        this.type + "-group",
        {
          attributes: {
            title: "Button Group"
          },
          label: "Button Group",
          //language=HTML
          media: `
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 8"><title>container</title>
						<path d="M8,9v6H2.5a.5.5,0,0,1-.5-.5v-5A.5.5,0,0,1,2.5,9H8M9,8H2.5A1.5,1.5,0,0,0,1,9.5v5A1.5,1.5,0,0,0,2.5,16H9V8Z"
						      transform="translate(-1 -8)"/>
						<polygon points="6 3 2 3 2 5 6 5 6 3 6 3"/>
						<path d="M21.5,9a.5.5,0,0,1,.5.5v5a.5.5,0,0,1-.5.5H16V9h5.5m0-1H15v8h6.5A1.5,1.5,0,0,0,23,14.5v-5A1.5,1.5,0,0,0,21.5,8Z"
						      transform="translate(-1 -8)"/>
						<path d="M15,9v6H9V9h6m1-1H8v8h8V8Z" transform="translate(-1 -8)"/>
						<polygon points="13 3 9 3 9 5 13 5 13 3 13 3"/>
						<polygon points="20 3 16 3 16 5 20 5 20 3 20 3"/>
					</svg>
				`,
          category: "Basic",
          //language=HTML
          content: `
					<div class="btn-group" role="group" aria-label="Basic example" data-gjs-type="${this.type}-group">
						<div class="btn btn-primary" role="button" data-gjs-type="${this.type}">Button 1</div>
						<div class="btn btn-primary" role="button" data-gjs-type="${this.type}">Button 2</div>
					</div>`
        }
      );
    }
    addTypes() {
      this.components.addType(
        this.type,
        {
          extend: this.namespace + "text",
          model: {
            defaults: {
              name: this.name,
              droppable: true,
              attributes: {
                //role: 'button'
              },
              classes: ["btn"],
              stylable: false,
              traits: [
                traits_default.buttonType,
                ...this.traits
              ]
            },
            afterChange(e) {
              console.log(this.attributes.type);
              if (this.attributes.type === "button") {
                if (this.attributes.classes.filter((klass) => {
                  return klass.id === "btn";
                }).length === 0) {
                  this.changeType(this.namespace + "link");
                }
              }
            }
          },
          isComponent: (el) => {
            if (el && el.classList && el.classList.contains("btn")) {
              return { type: this.type };
            }
            if (el && el.classList && el.classList.contains("accordion-button")) {
              return false;
            }
            if (el && el.tagName === "BUTTON") {
              console.log("casting as BUTTON");
              return { type: this.type };
            }
          }
          /*
          viewExtend : this.namespace + "text",
          view: {
          	events: {
          		'click': 'handleClick',
          		'keydown': 'handleClick',
          		'keyup': 'handleClick'
          	},
          	init() {
          		//this.listenTo(this.model, 'change:content', this.updateContent);
          	},
          	updateContent() {
          		//this.el.innerHTML = this.model.get('content')
          	},
          	handleClick(e) {
          		console.log(e);
          		e.preventDefault();
          		e.target.setAttribute("contenteditable", true)
          	}
          }
          */
        }
      );
      this.components.addType(
        this.type + "-group",
        {
          model: {
            defaults: {
              classes: ["btn-group"],
              name: "Button Group"
            }
          },
          isComponent: (el) => {
            if (el && el.classList && el.classList.contains("btn-group")) {
              return { type: this.type + "-group" };
            }
          }
        }
      );
    }
  };

  // src/components/Card.js
  var Card = class extends ComponentBase {
    get types() {
      return {
        "card": this.type,
        "card-header": this.type + "-header",
        "card-footer": this.type + "-footer",
        "card-image-top": this.type + "card-image-top",
        "card-image-bottom": this.type + "card-image-bottom",
        "card-text": this.type + "card-text",
        "card-title": this.type + "card-title",
        "card-group": this.type + "card-group"
      };
    }
    get category() {
      return "Card";
    }
    get card() {
      return `
			<div class="card shadow-sm h-100" data-gjs-type="${this.type}">

			</div>`;
    }
    get cardHeader() {
      return `
			<div class='card-header d-flex justify-content-between align-items-center'
			     data-gjs-type="${this.type}-header">
				<div>Card Header</div>
				<div></div>
			</div>`;
    }
    get cardFooter() {
      return `
			<div class='card-footer d-flex justify-content-between align-items-center'
			     data-gjs-type="${this.type}-footer">
				<div></div>
				<div></div>
			</div>`;
    }
    get cardBody() {
      return `
			<div class="card-body" data-gjs-type="${this.type}-body">
				<h5 class="card-title" data-gjs-type="${this.type}-title">Title</h5>
				<div class="card-text" data-gjs-type="${this.type}-text">Text</div>
			</div>`;
    }
    get cardIconHeader() {
      return `
			<div
					class="card-icon-header card-header d-flex justify-content-center text-bg-primary align-items-center border-0"
					data-gjs-type="${this.type}-icon-header">
				<i class="bi bi-clock-fill my-3" data-gjs-type="${this.namespace}icon"></i>
			</div>`;
    }
    addBlocks() {
      this.blockManager.add(this.type, {
        attributes: {
          title: "Card"
        },
        label: this.name,
        //language=SVG
        media: `
                <svg id="card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
                    <defs>
                        <style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;}</style>
                    </defs>
                    <path class="cls-1" d="M7,7.8" transform="translate(0 -4)"/>
                    <path d="M22.25,5a.76.76,0,0,1,.75.75v12.5a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,18.25V5.75A.76.76,0,0,1,1.75,5h20.5m0-1H1.75A1.76,1.76,0,0,0,0,5.75v12.5A1.76,1.76,0,0,0,1.75,20h20.5A1.76,1.76,0,0,0,24,18.25V5.75A1.76,1.76,0,0,0,22.25,4Z"
                          transform="translate(0 -4)"/>
                    <g id="card_text">
                        <rect x="2" y="3" width="20" height="3"/>
                        <rect x="2" y="7" width="20" height="1"/>
                        <rect x="2" y="9" width="16" height="1"/>
                    </g>
                </svg>`,
        category: this.category,
        //language=HTML
        content: this.card,
        activate: true
      });
      this.blockManager.add(this.type + "-body", {
        attributes: {
          title: " Body"
        },
        label: this.name + " Body",
        //language=HTML
        media: `
				<svg id="card-body" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
					<defs>
						<style>.cls-1 {
							fill: none;
							stroke: #000;
							stroke-miterlimit: 10;
						}

						.cls-2 {
							opacity: 0.5;
						}</style>
					</defs>
					<path class="cls-1" d="M7,7.8" transform="translate(0 -4)"/>
					<path class="cls-2"
					      d="M22.25,5a.76.76,0,0,1,.75.75v12.5a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,18.25V5.75A.76.76,0,0,1,1.75,5h20.5m0-1H1.75A1.76,1.76,0,0,0,0,5.75v12.5A1.76,1.76,0,0,0,1.75,20h20.5A1.76,1.76,0,0,0,24,18.25V5.75A1.76,1.76,0,0,0,22.25,4Z"
					      transform="translate(0 -4)"/>
					<path d="M21,7V17H3V7H21m.38-1H2.62A.62.62,0,0,0,2,6.62V17.38a.62.62,0,0,0,.62.62H21.38a.62.62,0,0,0,.62-.62V6.62A.62.62,0,0,0,21.38,6Z"
					      transform="translate(0 -4)"/>
				</svg>`,
        category: this.category,
        content: this.cardBody
      });
      this.blockManager.add(this.type + "-header", {
        attributes: {
          title: this.name + " Header"
        },
        label: this.name + " Header",
        //language=SVG
        media: `
                <svg id="card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
                    <defs>
                        <style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;}.cls-2{opacity:0.5;}</style>
                    </defs>
                    <title>container</title>
                    <path class="cls-1" d="M7,7.8" transform="translate(0 -4)"/>
                    <g id="card_opacity" data-name="card opacity" class="cls-2">
                        <path d="M22.25,5a.76.76,0,0,1,.75.75v12.5a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,18.25V5.75A.76.76,0,0,1,1.75,5h20.5m0-1H1.75A1.76,1.76,0,0,0,0,5.75v12.5A1.76,1.76,0,0,0,1.75,20h20.5A1.76,1.76,0,0,0,24,18.25V5.75A1.76,1.76,0,0,0,22.25,4Z"
                              transform="translate(0 -4)"/>
                    </g>
                    <g id="header">
                        <polygon points="23 4 1 4 1 5 23 5 23 4 23 4"/>
                    </g>
                </svg>`,
        category: this.category,
        content: this.cardHeader
      });
      this.blockManager.add(this.type + "-footer", {
        attributes: {
          title: this.name + " Footer"
        },
        label: this.name + " Footer",
        //language=SVG
        media: `
                <svg id="card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
                    <defs>
                        <style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;}.cls-2{opacity:0.5;}</style>
                    </defs>
                    <title>container</title>
                    <path class="cls-1" d="M7,7.8" transform="translate(0 -4)"/>
                    <g id="card_opacity" data-name="card opacity" class="cls-2">
                        <path d="M22.25,5a.76.76,0,0,1,.75.75v12.5a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,18.25V5.75A.76.76,0,0,1,1.75,5h20.5m0-1H1.75A1.76,1.76,0,0,0,0,5.75v12.5A1.76,1.76,0,0,0,1.75,20h20.5A1.76,1.76,0,0,0,24,18.25V5.75A1.76,1.76,0,0,0,22.25,4Z"
                              transform="translate(0 -4)"/>
                    </g>
                    <g id="footer">
                        <polygon points="23 11 1 11 1 12 23 12 23 11 23 11"/>
                    </g>
                </svg>`,
        category: this.category,
        content: this.cardFooter
      });
      this.blockManager.add(this.type + "-image-overlay", {
        attributes: {
          title: this.name + " Image Overlay"
        },
        label: this.name + " Image Overlay",
        //language=SVG
        media: `
                <svg id="card-image-overlay" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
                    <path d="M7,7.8" transform="translate(0 -4)" style="fill:none;stroke:#000;stroke-miterlimit:10"/>
                    <path d="M22.25,5a.76.76,0,0,1,.75.75v12.5a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,18.25V5.75A.76.76,0,0,1,1.75,5h20.5m0-1H1.75A1.76,1.76,0,0,0,0,5.75v12.5A1.76,1.76,0,0,0,1.75,20h20.5A1.76,1.76,0,0,0,24,18.25V5.75A1.76,1.76,0,0,0,22.25,4Z"
                          transform="translate(0 -4)"/>
                    <g id="overlay" style="opacity:0.5">
                        <polygon points="3 15 6 12 10 15 16 9 23 15 3 15"/>
                        <circle cx="4" cy="4" r="1"/>
                    </g>
                </svg>`,
        category: this.category,
        //language=HTML
        content: `
				<div class="card text-bg-dark shadow-sm h-100">
					<div class="card-image-top" data-gjs-type="${this.type}-image-top">
						<div class="ratio ratio-16x9" data-gjs-type="${this.namespace}ratio">
							<img src="https://dummyimage.com/16:9x360" class="object-fit-cover" alt="...">
						</div>
					</div>
					<div class="card-img-overlay" data-gjs-type="${this.type}-image-overlay">
						<h5 class="card-title" data-gjs-type="${this.type}-title">Card title</h5>
						<div class="card-text" data-gjs-type="${this.type}-text">This is a wider card with supporting
							text
							below as a natural lead-in to
							additional content. This content is a little bit longer.
						</div>
						<div class="card-text" data-gjs-type="${this.type}-text"><small>Last updated 3 mins ago</small>
						</div>
					</div>
				</div>`
      });
      this.blockManager.add(this.type + "-image-top", {
        attributes: {
          title: this.name + " Image Top"
        },
        label: this.name + " Image Top",
        //language=SVG
        media: `
                <svg id="card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
                    <defs>
                        <style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;}.cls-2{opacity:0.5;}</style>
                    </defs>
                    <path class="cls-1" d="M7,7.8" transform="translate(0 -4)"/>
                    <g id="card_opacity" class="cls-2">
                        <path d="M22.25,5a.76.76,0,0,1,.75.75v12.5a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,18.25V5.75A.76.76,0,0,1,1.75,5h20.5m0-1H1.75A1.76,1.76,0,0,0,0,5.75v12.5A1.76,1.76,0,0,0,1.75,20h20.5A1.76,1.76,0,0,0,24,18.25V5.75A1.76,1.76,0,0,0,22.25,4Z"
                              transform="translate(0 -4)"/>
                    </g>
                    <g id="img_head">
                        <g id="header">
                            <polygon points="23 8 1 8 1 9 23 9 23 8 23 8"/>
                        </g>
                        <polygon points="3 8 6 5 10 8 16 2 23 8 3 8"/>
                        <circle cx="4" cy="3" r="1"/>
                    </g>
                </svg>`,
        category: this.category,
        //language=HTML
        content: `
				<div class="card-image-top" data-gjs-type="${this.type}-image-top">
					<div class="ratio ratio-16x9" data-gjs-type="${this.namespace}ratio">
						<img src="https://dummyimage.com/16:9x360" class="object-fit-cover" alt="...">
					</div>
				</div>
			`
      });
      this.blockManager.add(this.type + "-image-bottom", {
        attributes: {
          title: this.name + " Image Bottom"
        },
        label: this.name + " Image Bottom",
        //language=SVG
        media: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
                    <path d="M7,7.8" transform="translate(0 -4)" style="fill:none;stroke:#000;stroke-miterlimit:10"/>
                    <g style="opacity:0.5">
                        <path d="M22.25,5a.76.76,0,0,1,.75.75v12.5a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,18.25V5.75A.76.76,0,0,1,1.75,5h20.5m0-1H1.75A1.76,1.76,0,0,0,0,5.75v12.5A1.76,1.76,0,0,0,1.75,20h20.5A1.76,1.76,0,0,0,24,18.25V5.75A1.76,1.76,0,0,0,22.25,4Z"
                              transform="translate(0 -4)"/>
                    </g>
                    <polygon points="23 7 1 7 1 8 23 8 23 7 23 7"/>
                    <polygon points="3 15 6 12 10 15 16 9 23 15 3 15"/>
                    <circle cx="4" cy="10" r="1"/>
                </svg>`,
        category: this.category,
        //language=HTML
        content: `
				<div class="card-image-top" data-gjs-type="${this.type}-image-bottom">
					<div class="ratio ratio-16x9" data-gjs-type="${this.namespace}ratio">
						<img src="https://dummyimage.com/16:9x360" class="object-fit-cover" alt="..."
						>
					</div>
				</div>
			`
      });
      this.blockManager.add(this.type + "-group", {
        attributes: {
          title: this.name + " Group"
        },
        label: this.name + " Group",
        //language=SVG
        media: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 16">
                    <title>container</title>
                    <path d="M7,7.8" transform="translate(-1 -4)" style="fill:none;stroke:#000;stroke-miterlimit:10"/>
                    <path d="M9.25,5a.76.76,0,0,1,.75.75v3.5a.76.76,0,0,1-.75.75H2.75A.76.76,0,0,1,2,9.25V5.75A.76.76,0,0,1,2.75,5h6.5m0-1H2.75A1.76,1.76,0,0,0,1,5.75v3.5A1.76,1.76,0,0,0,2.75,11h6.5A1.76,1.76,0,0,0,11,9.25V5.75A1.76,1.76,0,0,0,9.25,4Z"
                          transform="translate(-1 -4)"/>
                    <path d="M21.25,5a.76.76,0,0,1,.75.75v3.5a.76.76,0,0,1-.75.75h-6.5A.76.76,0,0,1,14,9.25V5.75A.76.76,0,0,1,14.75,5h6.5m0-1h-6.5A1.76,1.76,0,0,0,13,5.75v3.5A1.76,1.76,0,0,0,14.75,11h6.5A1.76,1.76,0,0,0,23,9.25V5.75A1.76,1.76,0,0,0,21.25,4Z"
                          transform="translate(-1 -4)"/>
                    <path d="M9.25,14a.76.76,0,0,1,.75.75v3.5a.76.76,0,0,1-.75.75H2.75A.76.76,0,0,1,2,18.25v-3.5A.76.76,0,0,1,2.75,14h6.5m0-1H2.75A1.76,1.76,0,0,0,1,14.75v3.5A1.76,1.76,0,0,0,2.75,20h6.5A1.76,1.76,0,0,0,11,18.25v-3.5A1.76,1.76,0,0,0,9.25,13Z"
                          transform="translate(-1 -4)"/>
                    <path d="M21.25,14a.76.76,0,0,1,.75.75v3.5a.76.76,0,0,1-.75.75h-6.5a.76.76,0,0,1-.75-.75v-3.5a.76.76,0,0,1,.75-.75h6.5m0-1h-6.5A1.76,1.76,0,0,0,13,14.75v3.5A1.76,1.76,0,0,0,14.75,20h6.5A1.76,1.76,0,0,0,23,18.25v-3.5A1.76,1.76,0,0,0,21.25,13Z"
                          transform="translate(-1 -4)"/>
                </svg>`,
        category: this.category,
        //language=HTML
        content: `
				<div class="card-group" data-gjs-type="${this.type}-group">
					<div class="card" data-gjs-type="${this.type}">
						${this.cardBody}
					</div>
					<div class="card" data-gjs-type="${this.type}">
						${this.cardBody}
					</div>
					<div class="card" data-gjs-type="${this.type}">
						${this.cardBody}
					</div>
					<div class="card" data-gjs-type="${this.type}">
						${this.cardBody}
					</div>
				</div>`
      });
      this.blockManager.add(this.type + "-icon-header", {
        attributes: {
          title: this.name + " Icon Header"
        },
        label: this.name + " Icon Header",
        //language=SVG
        media: `
                <svg id="card" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
                    <defs>
                        <style>
                            .cls-1{fill:none;stroke:#000;stroke-miterlimit:10;}
                            .cls-2{opacity:0.5;}
                        </style>
                    </defs>
                    <path class="cls-1" d="M7,7.8" transform="translate(0 -4)"/>
	                <path class="cls-2" d="M22.25,5a.76.76,0,0,1,.75.75v12.5a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,18.25V5.75A.76.76,0,0,1,1.75,5h20.5m0-1H1.75A1.76,1.76,0,0,0,0,5.75v12.5A1.76,1.76,0,0,0,1.75,20h20.5A1.76,1.76,0,0,0,24,18.25V5.75A1.76,1.76,0,0,0,22.25,4Z"
                              transform="translate(0 -4)"/>
                    <polygon points="23 8.17 1 8.17 1 9.17 23 9.17 23 8.17 23 8.17"/>
                    <path d="M12,8.26l.12.25.27,0-.19.2,0,.27L12,8.88,11.76,9l0-.27-.19-.2.27,0L12,8.26M12,6l-.79,1.59-1.75.26,1.27,1.24-.3,1.74L12,10l1.57.82-.3-1.74,1.27-1.24-1.75-.26L12,6Z"
                          transform="translate(0 -4)"/>
                </svg>`,
        category: this.category,
        content: this.cardIconHeader
      });
      this.blockManager.add(this.type + "-title", {
        attributes: {
          title: this.name + " Title"
        },
        label: this.name + " Title",
        //language=SVG
        media: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
                    <defs>
                        <style>.a{opacity:0.5;}</style>
                    </defs>
                    <g class="a">
                        <path d="M22.25,5a.76.76,0,0,1,.75.75v12.5a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,18.25V5.75A.76.76,0,0,1,1.75,5h20.5m0-1H1.75A1.76,1.76,0,0,0,0,5.75v12.5A1.76,1.76,0,0,0,1.75,20h20.5A1.76,1.76,0,0,0,24,18.25V5.75A1.76,1.76,0,0,0,22.25,4Z"
                              transform="translate(0 -4)"/>
                    </g>
                    <rect x="2" y="3" width="20" height="3"/>
                    <rect class="a" x="2" y="7" width="20" height="1"/>
                    <rect class="a" x="2" y="9" width="16" height="1"/>
                </svg>`,
        category: this.category,
        content: `<h4 class="card-title" data-gjs-type="${this.type}-title">Title</h4>">`
      });
      this.blockManager.add(this.type + "-text", {
        attributes: {
          title: this.name + " Text"
        },
        label: this.name + " Text",
        //language=SVG
        media: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
                    <defs>
                        <style>.a{opacity:0.5;}</style>
                    </defs>

                    <path class="a"
                          d="M22.25,5a.76.76,0,0,1,.75.75v12.5a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,18.25V5.75A.76.76,0,0,1,1.75,5h20.5m0-1H1.75A1.76,1.76,0,0,0,0,5.75v12.5A1.76,1.76,0,0,0,1.75,20h20.5A1.76,1.76,0,0,0,24,18.25V5.75A1.76,1.76,0,0,0,22.25,4Z"
                          transform="translate(0 -4)"/>
                    <rect class="a" x="2" y="3" width="20" height="3"/>
                    <rect x="2" y="7" width="20" height="1"/>
                    <rect class="a" x="2" y="9" width="16" height="1"/>
                </svg>`,
        category: this.category,
        content: `<p class="card-text" data-gjs-type="${this.type}-text">Card Text</p>">`
      });
      this.blockManager.add(this.type + "-link", {
        attributes: {
          title: this.name + " Link"
        },
        label: this.name + " Link",
        //language=SVG
        media: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
                    <defs>
                        <style>.a{opacity:0.5;}</style>
                    </defs>
                    <g class="a">
                        <path d="M22.25,5a.76.76,0,0,1,.75.75v12.5a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,18.25V5.75A.76.76,0,0,1,1.75,5h20.5m0-1H1.75A1.76,1.76,0,0,0,0,5.75v12.5A1.76,1.76,0,0,0,1.75,20h20.5A1.76,1.76,0,0,0,24,18.25V5.75A1.76,1.76,0,0,0,22.25,4Z"
                              transform="translate(0 -4)"/>
                    </g>
                    <rect class="a" x="2" y="3" width="20" height="3"/>
                    <rect class="a" x="2" y="7" width="20" height="1"/>
                    <rect x="2" y="9" width="16" height="1"/>
                </svg>`,
        category: this.category,
        content: `<a href="#" class="card-link" data-gjs-type="${this.type}-link">Card link</a>">`
      });
    }
    addTypes() {
      this.components.addType(this.type, {
        extend: this.namespace + "default",
        model: {
          defaults: {
            name: this.name,
            classes: ["card"],
            draggable: true,
            //droppable: [this.type + '-icon-header', this.namespace + "-ratio", this.type + "-body", this.type + "-header", this.type + "-footer", this.type + "-image-top", this.type + "-image-bottom"].join(", "),
            stylable: false,
            traits: [
              {
                type: "class_select",
                options: [
                  { value: "", name: "Default" },
                  { value: "shadow-sm", name: "shadow small" },
                  { value: "shadow-lg", name: "shadow large" },
                  { value: "shadow ", name: "shadow" },
                  { value: "shadow-none", name: "None" }
                ],
                name: "shadow",
                label: "Shadow"
              }
            ].concat(this.traits)
          },
          init() {
          }
        },
        isComponent: (el) => {
          if (el && el.classList && el.classList.contains("card")) {
            return { type: this.type };
          }
        }
      });
      this.components.addType(this.type + "-body", {
        extend: this.namespace + "text",
        model: {
          defaults: {
            name: "Card Body",
            classes: ["card-body"],
            /**
             * @param {Component} component
             */
            droppable(component) {
              let name = component.getName();
              switch (name) {
                case "card-image-bottom":
                case "card-image-top":
                  return false;
              }
              return true;
            },
            copyable: false
          }
        },
        viewExtend: "text",
        isComponent: (el) => {
          if (el && el.classList && el.classList.contains("card-body")) {
            return { type: this.type + "-body" };
          }
        }
      });
      this.components.addType(this.type + "-header", {
        extend: this.namespace + "default",
        model: {
          defaults: {
            name: "Card Header",
            classes: ["card-header", "d-flex", "justify-content-between", "align-items-center"],
            ////droppable : [this.type].join(", "),
            draggable: ".card",
            copyable: false,
            stylable: false,
            traits: [
              this.traitPadding,
              this.traitTextBackgroundColor,
              this.traitJustify
            ]
          }
        },
        isComponent: (el) => {
          if (el && el.classList && el.classList.contains("card-header")) {
            return { type: this.type + "-header" };
          }
        }
      });
      this.components.addType(this.type + "-icon-header", {
        extend: this.type + "-header",
        model: {
          defaults: {
            name: "Icon Header",
            classes: ["card-header", "d-flex", "justify-content-center", "align-items-center", "card-icon-header"],
            copyable: false,
            stylable: false,
            draggable: ".card",
            traits: [
              this.traitPadding,
              this.traitTextBackgroundColor,
              this.traitJustify
            ]
          }
        },
        isComponent: (el) => {
          if (el && el.classList && el.classList.contains("card-icon-header")) {
            return { type: this.type + "-icon-header" };
          }
        }
      });
      this.components.addType(this.type + "-footer", {
        extend: this.namespace + "default",
        model: {
          defaults: {
            name: "Card Footer",
            classes: ["card-footer", "d-flex", "justify-content-between", "align-items-center"],
            //droppable : [this.type].join(", "),
            draggable: ".card",
            copyable: false,
            stylable: false,
            traits: [
              this.traitPadding,
              this.traitTextBackgroundColor,
              this.traitJustify
            ]
          }
        },
        isComponent: (el) => {
          if (el && el.classList && el.classList.contains("card-footer")) {
            return { type: this.type + "-footer" };
          }
        }
      });
      this.components.addType(this.type + "-group", {
        extend: this.namespace + "default",
        model: {
          defaults: {
            name: "Card Group",
            classes: ["card-group"],
            droppable: true,
            draggable: true
            //'.body, .container, .container-fluid'
          }
        },
        isComponent: (el) => {
          if (el && el.classList && el.classList.contains("card-group")) {
            return { type: this.type + "-group" };
          }
        }
      });
      this.components.addType(this.type + "-image-bottom", {
        extend: this.namespace + "image",
        model: {
          defaults: {
            name: "Card Image Bottom",
            classes: ["card-img-bottom"],
            droppable: false,
            draggable: ".card"
          }
        },
        isComponent: (el) => {
          if (el && el.classList && el.classList.contains("card-img-bottom")) {
            return { type: this.type + "-image-bottom" };
          }
        }
      });
      this.components.addType(this.type + "-image-top", {
        extend: this.namespace + "image",
        model: {
          defaults: {
            name: "Card Image Top",
            classes: ["card-img-top"],
            droppable: false,
            draggable: ".card"
          }
        },
        isComponent: (el) => {
          if (el && el.classList && el.classList.contains("card-img-top")) {
            return { type: this.type + "-image-top" };
          }
        }
      });
      this.components.addType(this.type + "-image-overlay", {
        extend: this.namespace + "default",
        model: {
          defaults: {
            name: "Card Image Overlay",
            classes: ["card-img-overlay"],
            droppable: true,
            draggable: ".card"
          }
        },
        isComponent: (el) => {
          if (el && el.classList && el.classList.contains("card-img-overlay")) {
            return { type: this.type + "-image-overlay" };
          }
        }
      });
      this.components.addType(this.type + "-link", {
        extend: this.namespace + "link",
        model: {
          defaults: {
            name: "Card Link",
            classes: ["card-link"],
            droppable: false,
            draggable: ".card-body"
          }
        },
        isComponent: (el) => {
          if (el && el.classList && el.classList.contains("card-link")) {
            return { type: this.type + "-link" };
          }
        }
      });
      this.components.addType(this.type + "-title", {
        extend: this.namespace + "text",
        model: {
          defaults: {
            "custom-name": "Card Title",
            classes: ["card-title"],
            droppable: false,
            draggable: ".card-body",
            copyable: true,
            stylable: false,
            traits: this.traits
          }
        },
        isComponent: (el) => {
          if (el && el.classList && el.classList.contains("card-title")) {
            return { type: this.type + "-title" };
          }
        }
      });
      this.components.addType(this.type + "-text", {
        extend: this.namespace + "text",
        model: {
          defaults: {
            name: "Card Text",
            classes: ["card-text"],
            droppable: false,
            draggable: ".card-body",
            copyable: true,
            stylable: false,
            traits: this.traits
          }
        },
        isComponent: (el) => {
          if (el && el.classList && el.classList.contains("card-text")) {
            return { type: this.type + "-text" };
          }
        }
      });
    }
  };

  // src/components/Carousel.js
  var Carousel = class extends ComponentBase {
    /*
    	get type() {
    		return 'carousel';
    	}
    
    	get name() {
    		return "Carousel"
    	}
    
    	 */
    item(index) {
      return `
			<div class="carousel-item position-relative ${index === 0 ? "active" : ""}"
			     data-gjs-type="${this.type}-item">
				<div class="ratio ratio-21x9" data-gjs-type="ratio">
					<img src="https://dummyimage.com/800x500/999/222" class="d-block w-100 object-fit-cover" alt=""
					     data-gjs-type="${this.namespace}image">
				</div>
				<div class="carousel-item-content position-absolute bottom-0 end-0 start-0 m-md-5 m-3 p-3 text-bg-primary rounded"
				     data-gjs-type="${this.type}-item-content">
					<h2 class="fs-1">Title ${index + 1}</h2>
					<h4>Subheading</h4>
				</div>
			</div>`;
    }
    addBlocks() {
      this.blockManager.add(
        this.type,
        {
          attributes: {
            title: this.name
          },
          label: this.name,
          //language=SVG
          media: `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 16">
                        <defs>
                            <style>.a{opacity:0.5;}</style>
                        </defs>
                        <title>container</title>
                        <path d="M22.25,5a.76.76,0,0,1,.75.75v12.5a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,18.25V5.75A.76.76,0,0,1,1.75,5h20.5m0-1H1.75A1.76,1.76,0,0,0,0,5.75v12.5A1.76,1.76,0,0,0,1.75,20h20.5A1.76,1.76,0,0,0,24,18.25V5.75A1.76,1.76,0,0,0,22.25,4Z"
                              transform="translate(0 -4)"/>
                        <g class="a">
                            <polygon points="3 15 6 12 10 15 16 9 23 15 3 15"/>
                            <circle cx="4" cy="4" r="1"/>
                        </g>
                        <g class="a">
                            <polygon points="21.81 7.27 21.01 8.09 21.29 8.35 22.09 7.54 21.81 7.27 21.81 7.27"/>
                            <polygon points="21.27 6.73 21 7.01 21.82 7.81 22.09 7.54 21.27 6.73 21.27 6.73"/>
                        </g>
                        <g class="a">
                            <polygon points="2.8 6.73 2 7.55 2.27 7.82 3.08 7 2.8 6.73 2.8 6.73"/>
                            <polygon points="2.27 7.28 2 7.55 2.82 8.35 3.09 8.08 2.27 7.28 2.27 7.28"/>
                        </g>
                    </svg>`,
          category: "Components",
          //language=HTML
          content: `
					<div id="carousel" class="carousel slide" data-gjs-type="${this.type}">
						<div class="carousel-inner" data-gjs-type="${this.type}-inner">
							${this.item(0)}
							${this.item(1)}
							${this.item(2)}
						</div>
						<button class="carousel-control-prev" type="button" data-bs-target="#carousel"
						        data-bs-slide="prev" data-gjs-type="${this.type}-prev">
							<i class="bi bi-chevron-right carousel-control-prev-icon"></i>
							<span class="visually-hidden">Previous</span>
						</button>
						<button class="carousel-control-next" type="button" data-bs-target="#carousel"
						        data-bs-slide="next" data-gjs-type="${this.type}-next">
							<i class="bi bi-chevron-left carousel-control-next-icon" aria-hidden="true"></i>
							<span class="visually-hidden">Next</span>
						</button>
					</div>`
        }
      );
    }
    addTypes() {
      const context = this;
      this.components.addType(
        this.type,
        {
          extend: this.namespace + "default",
          model: {
            defaults: {
              name: "Carousel",
              traits: this.traits
            },
            init() {
              this.on("component:create", this.setItemAttributes);
              this.on("component:update", this.setItemAttributes);
              this.on("change:attributes:recordId", this.setItemAttributes);
            },
            /**
             * Make sure all the ids match up
             */
            setItemAttributes() {
              let items = this.findType(this.type + "-item");
              items.forEach(
                (item, index) => {
                  if (index === 0) {
                    item.addClass("active");
                  }
                }
              );
              let id = this.getAttributes().id;
              let prev = this.findType(context.type + "-prev");
              if (prev.length > 0) {
                prev[0].addAttributes({
                  "data-bs-target": "#" + id,
                  type: "button",
                  "data-bs-slide": "prev"
                });
              }
              let next = this.findType(context.type + "-next");
              if (next.length > 0) {
                next[0].addAttributes({
                  "data-bs-target": "#" + id,
                  type: "button",
                  "data-bs-slide": "next"
                });
              }
            }
          },
          isComponent: (el) => {
            if (el && el.classList && el.classList.contains("carousel")) {
              return { type: context.type };
            }
          }
        }
      );
      this.components.addType(
        this.type + "-inner",
        {
          extend: this.namespace + "default",
          model: {
            defaults: {
              name: "Carousel Inner",
              droppable: ".carousel-item",
              removable: false,
              copyable: false,
              draggable: false
            }
          },
          isComponent: (el) => {
            if (el && el.classList && el.classList.contains("carousel-inner")) {
              return { type: context.type + "-inner" };
            }
          }
        }
      );
      this.components.addType(
        this.type + "-item",
        {
          extend: this.namespace + "default",
          model: {
            defaults: {
              name: "Carousel Item",
              classes: ["carousel-item"],
              draggable: ".carousel-inner",
              //can drag into other things
              droppable: true,
              //can drop other things inside
              stylable: false,
              traits: [
                {
                  name: "interval",
                  type: "number",
                  min: 5e3,
                  max: 1e4,
                  step: 1e4
                },
                this.traits
              ]
            }
          },
          isComponent: (el) => {
            if (el && el.classList && el.classList.contains("carousel-item")) {
              return { type: context.type + "-item" };
            }
          }
        }
      );
      this.components.addType(
        this.type + "-item-content",
        {
          extend: this.namespace + "default",
          model: {
            defaults: {
              name: "Carousel Item Content",
              draggable: true,
              classes: ["carousel-item-content"],
              stylable: false,
              traits: this.traits,
              copyable: false
            }
          },
          isComponent: (el) => {
            if (el && el.classList && el.classList.contains("carousel-item-content")) {
              return { type: context.type + "-item-content" };
            }
          }
        }
      );
      this.components.addType(
        this.type + "-prev",
        {
          extend: this.namespace + "default",
          model: {
            defaults: {
              "name": this.name + " Previous",
              classes: ["carousel-control-prev"],
              droppable: false,
              removable: false,
              copyable: false,
              draggable: false,
              editable: false,
              stylable: false,
              badgable: false,
              propagate: ["droppable", "removable", "copyable", "editable", "stylable", "draggable", "badgable"],
              traits: [
                {
                  type: "text",
                  label: "Target",
                  name: "data-bs-target",
                  placeholder: "Carousel ID"
                }
              ]
            }
          },
          isComponent: (el) => {
            if (el && el.getAttribute && el.getAttribute("data-bs-slide") === "prev") {
              console.log(el, context.type + "-prev");
              return { type: context.type + "-prev" };
            }
          }
        }
      );
      this.components.addType(
        this.type + "-prev-icon",
        {
          extend: this.namespace + "text",
          model: {
            defaults: {
              "name": this.name + " Previous Icon",
              classes: ["carousel-control-prev-icon"],
              droppable: false,
              removable: true,
              copyable: false,
              draggable: false,
              editable: false,
              stylable: false,
              badgable: false,
              propagate: ["droppable", "removable", "copyable", "editable", "stylable", "draggable", "badgable"],
              traits: [
                traits_default.textSize,
                traits_default.textColor
              ]
            }
          },
          isComponent: (el) => {
            if (el && el.classList && el.classList.contains("carousel-control-prev-icon")) {
              return { type: this.type + "-prev-icon" };
            }
          }
        }
      );
      this.components.addType(
        this.type + "-next",
        {
          extend: this.namespace + "default",
          model: {
            defaults: {
              "name": this.name + " Next",
              classes: ["carousel-control-next"],
              droppable: false,
              removable: false,
              copyable: false,
              draggable: false,
              editable: false,
              stylable: false,
              badgable: false,
              propagate: ["droppable", "removable", "copyable", "editable", "stylable", "draggable", "badgable"],
              traits: [
                {
                  type: "text",
                  label: "Target",
                  name: "data-bs-target",
                  placeholder: "Carousel ID"
                }
              ]
            }
          },
          isComponent: (el) => {
            if (el && el.getAttribute && el.getAttribute("data-bs-slide") === "next") {
              console.log(el, context.type + "-next");
              return { type: context.type + "-next" };
            }
          }
        }
      );
      this.components.addType(
        this.type + "-next-icon",
        {
          extend: this.namespace + "text",
          model: {
            defaults: {
              "name": this.name + " Next Icon",
              classes: ["carousel-control-next-icon"],
              droppable: false,
              removable: true,
              copyable: false,
              draggable: false,
              editable: false,
              stylable: false,
              badgable: false,
              propagate: ["droppable", "removable", "copyable", "editable", "stylable", "draggable", "badgable"],
              traits: [
                traits_default.textSize,
                traits_default.textColor
              ]
            }
          },
          isComponent: (el) => {
            if (el && el.classList && el.classList.contains("carousel-control-next-icon")) {
              return { type: this.type + "-next-icon" };
            }
          }
        }
      );
    }
  };

  // src/components/Collapse.js
  var CollapseBlock = (bm, label) => {
    bm.add("collapse", {
      label: `Collapse`,
      //language=SVG
      media: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 15">
                <defs>
                    <style>.a{opacity:0.5;}</style>
                </defs>
                <title>container</title>
                <path d="M22,5a1,1,0,0,1,1,1V8H1V6A1,1,0,0,1,2,5H22m0-1H2A2,2,0,0,0,0,6V9H24V6a2,2,0,0,0-2-2Z"
                      transform="translate(0 -4)"/>
                <g class="a">
                    <path d="M23,10v7a1,1,0,0,1-1,1H2a1,1,0,0,1-1-1V10H23m1-1H0v8a2,2,0,0,0,2,2H22a2,2,0,0,0,2-2V9Z"
                          transform="translate(0 -4)"/>
                </g>
                <g class="a">
                    <polygon points="19.65 2.01 19.38 2.29 20.2 3.09 20.46 2.81 19.65 2.01 19.65 2.01"/>
                    <polygon points="20.73 2 19.93 2.82 20.2 3.09 21 2.27 20.73 2 20.73 2"/>
                </g>
            </svg>`,
      category: "Components",
      content: {
        type: "collapse"
      }
    });
  };
  var Collapse_default = (editor2) => {
    const comps = editor2.DomComponents;
    comps.addType("collapse", {
      extend: "bs-default",
      model: {
        defaults: {
          "custom-name": "Dropdown",
          classes: ["collapse"],
          droppable: true,
          traits: [
            {
              type: "class_select",
              options: [
                { value: "", name: "Closed" },
                { value: "show", name: "Open" }
              ],
              label: "Initial state"
            }
          ]
        }
        /*init2() {
        			  window.asdf = this;
        			  const toggle = {
        				type: 'button',
        				content: 'Click to toggle',
        				classes: ['btn', 'dropdown-toggle']
        			  }
        			  const toggle_comp = this.append(toggle)[0];
        			  const menu = {
        				type: 'dropdown_menu'
        			  }
        			  const menu_comp = this.append(menu)[0];
        			  this.setupToggle(null, null, {force: true});
        			  const comps = this.components();
        			  comps.bind('add', this.setupToggle.bind(this));
        			  comps.bind('change', this.setupToggle.bind(this));
        			  comps.bind('remove', this.setupToggle.bind(this));
        			  const classes = this.get('classes');
        			  classes.bind('add', this.setupToggle.bind(this));
        			  classes.bind('change', this.setupToggle.bind(this));
        			  classes.bind('remove', this.setupToggle.bind(this));
        			},
        			setupToggle(a, b, options = {}) {
        			  const toggle = this.components().addQueryFilter(c => c.getAttributes().class.split(' ').includes('dropdown-toggle'))[0];
        			  // raise error if toggle not found
        			  const menu = this.components().addQueryFilter(c => c.getAttributes().class.split(' ').includes('dropdown-menu'))[0];
        			  // raise error if menu not found
        
        			  if(options.force !== true && options.ignore === true) {
        				return;
        			  }
        
        			  if(toggle && menu) {
        
        				function hasEvent(comp) {
        				  let eca = comp._events['change:attributes'];
        				  if(!eca) return false;
        				  return eca.addQueryFilter(e => e.callback.type == 'setupToggle').length != 0;
        				}
        
        				// setup event listeners if they aren't set
        				if(!hasEvent(toggle)) {
        				  this.listenTo(toggle, 'change:attributes', this.setupToggle);
        				}
        				if(!hasEvent(menu)) {
        				  this.listenTo(menu, 'change:attributes', this.setupToggle);
        				}
        
        				// setup toggle
        				var toggle_attrs = toggle.getAttributes();
        				toggle_attrs['role'] = 'button'; // if A
        				var menu_attrs = menu.getAttributes();
        				if(!toggle_attrs.hasOwnProperty('data-toggle')) {
        				  toggle_attrs['data-toggle'] = 'dropdown';
        				}
        				if(!toggle_attrs.hasOwnProperty('aria-haspopup')) {
        				  toggle_attrs['aria-haspopup'] = true;
        				}
        				const dropdown_classes = this.getAttributes().class.split(' ');
        				toggle_attrs['aria-expanded'] = dropdown_classes.includes('show');
        				toggle.set('attributes', toggle_attrs, {ignore: true});
        				// setup menu
        				// toggle needs ID for aria-labelled on the menu, could alert here
        				if(toggle_attrs.hasOwnProperty('recordId')) {
        				  menu_attrs['aria-labelledby'] = toggle_attrs.recordId;
        				} else {
        				  delete menu_attrs['aria-labelledby'];
        				}
        				menu.set('attributes', menu_attrs, {ignore: true});
        			  }
        			}*/
      },
      isComponent: (el) => {
        if (el && el.classList && el.classList.contains("dropdown")) {
          return { type: "dropdown" };
        }
      }
    });
  };

  // src/components/Column.js
  var Column = class extends ComponentBase {
    addBlocks() {
      this.blockManager.add(
        this.type,
        {
          attributes: {
            title: this.name
          },
          label: this.name,
          //language=SVG
          media: `
                    <svg id="container" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14">
                        <defs>
                            <style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;}.cls-2{opacity:0.5;}</style>
                        </defs>
                        <title>container</title>
                        <path class="cls-1" d="M7,7.8" transform="translate(0 -5)"/>
                        <g id="container_opac" data-name="container opac" class="cls-2">
                            <path d="M23,6V18H1V6H23m1-1H0V19H24V5Z" transform="translate(0 -5)"/>
                        </g>
                        <g id="row_50" data-name="row 50" class="cls-2">
                            <path d="M21,8v8H3V8H21m1-1H2V17H22V7Z" transform="translate(0 -5)"/>
                        </g>
                        <g id="columns">
                            <g id="row">
                                <path d="M7,10v4H5V10H7M8,9H4v6H8V9Z" transform="translate(0 -5)"/>
                            </g>
                            <g id="column" class="cls-2">
                                <path d="M13,10v4H11V10h2m1-1H10v6h4V9Z" transform="translate(0 -5)"/>
                            </g>
                            <g id="column-2" data-name="column" class="cls-2">
                                <path d="M19,10v4H17V10h2m1-1H16v6h4V9Z" transform="translate(0 -5)"/>
                            </g>
                        </g>
                    </svg>`,
          category: "Layout",
          content: `<div class="col" data-gjs-type="${this.type}"></div>`
        }
      );
    }
    addTypes() {
      const spans = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
      this.components.addType(this.type, {
        extend: this.namespace + "text",
        model: {
          defaults: {
            name: "Column",
            tagName: "div",
            draggable: true,
            droppable: true,
            /*
            					resizable: {
            						updateTarget: (el, rect, opt) => {
            							const selected = editor.getSelected();
            							if (!selected) {
            								return;
            							}
            
            							//compute the current screen size (bootstrap semantic)
            							const docWidth = el.getRootNode().body.offsetWidth;
            							let currentSize = "";
            							if (docWidth >= 1200) {
            								currentSize = "xl";
            							} else if (docWidth >= 992) {
            								currentSize = "lg";
            							} else if (docWidth >= 768) {
            								currentSize = "md";
            							} else if (docWidth >= 576) {
            								currentSize = "sm";
            							}
            
            							//compute the threshold when add on remove 1 col span to the element
            							const row = el.parentElement;
            							const oneColWidth = row.offsetWidth / 12;
            							//the threshold is half one column width
            							const threshold = oneColWidth * 0.5;
            
            							//check if we are growing or shrinking the column
            							const grow = rect.w > el.offsetWidth + threshold;
            							const shrink = rect.w < el.offsetWidth - threshold;
            							if (grow || shrink) {
            								let testRegexp = new RegExp("^col-" + currentSize + "-\\d{1,2}$");
            								if (!currentSize) {
            									testRegexp = new RegExp("^col-\\d{1,2}$");
            								}
            								let found = false;
            								let sizesSpans = {};
            								let oldSpan = 0;
            								let oldClass = null;
            								for (let cl of el.classList) {
            									if (cl.indexOf("col-") === 0) {
            										let [c, size, span] = cl.split("-");
            										if (!span) {
            											span = size;
            											size = "";
            										}
            										sizesSpans[size] = span;
            										if (size === currentSize) {
            											//found the col-XX-99 class
            											oldClass = cl;
            											oldSpan = span;
            											found = true;
            										}
            									}
            								}
            
            								if (!found) {
            									const sizeOrder = ["", "xs", "sm", "md", "lg", "xl"];
            									for (let s of sizeOrder) {
            										if (sizesSpans[s]) {
            											oldSpan = sizesSpans[s];
            											found = true;
            										}
            										if (s === currentSize) {
            											break;
            										}
            									}
            								}
            
            								let newSpan = Number(oldSpan);
            								if (grow) {
            									newSpan++;
            								} else {
            									newSpan--;
            								}
            								if (newSpan > 12) {
            									newSpan = 12;
            								}
            								if (newSpan < 1) {
            									newSpan = 1;
            								}
            
            								let newClass = "col-" + currentSize + "-" + newSpan;
            								if (!currentSize) {
            									newClass = "col-" + newSpan;
            								}
            								//update the class
            								selected.addClass(newClass);
            								if (oldClass && oldClass !== newClass) {
            									selected.removeClass(oldClass);
            								}
            								//notify the corresponding trait to update its value accordingly
            								//selected.getTrait((currentSize || "xs") + "_width").view.updateTrait()  //.postUpdate();
            							}
            						},
            						tl: 0,
            						tc: 0,
            						tr: 0,
            						cl: 0,
            						cr: 1,
            						bl: 0,
            						bc: 0,
            						br: 0
            					},
            
            					 */
            stylable: false,
            traits: [
              ...this.traits
            ]
          }
        },
        isComponent: (el) => {
          let match = false;
          if (el && el.classList) {
            el.classList.forEach(function(selector) {
              if (selector === "col" || selector.match(/^col-/)) {
                match = true;
              }
            });
          }
          if (match)
            return { type: this.type };
        }
      });
    }
  };

  // src/components/Container.js
  var Container = class extends ComponentBase {
    addBlocks() {
      this.blockManager.add(
        this.type,
        {
          attributes: {
            title: "Container"
          },
          label: "Container",
          //language=SVG
          media: `
                    <svg id="container" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14">
                        <title>container</title>
                        <path d="M7,7.8" transform="translate(0 -5)"
                              style="fill:none;stroke:#000;stroke-miterlimit:10"/>
                        <path d="M23,6V18H1V6H23m1-1H0V19H24V5Z" transform="translate(0 -5)"/>
                    </svg>`,
          category: "Layout",
          //language=HTML
          content: `
                    <div class='container mb-3' data-gjs-type="${this.type}">
                            <!--<div class="row" data-gjs-type="${this.namespace}row">
							
							<div class="col mb-3" data-gjs-type="${this.namespace}column">
						
							</div>
							<div class="col mb-3" data-gjs-type="${this.namespace}column">
							
							</div>
							<div class="col mb-3" data-gjs-type="${this.namespace}column">
					
							</div>
							<div class="col mb-3" data-gjs-type="${this.namespace}column">
						
							</div>
							
						</div>-->
                    </div>`
        }
      );
    }
    addTypes() {
      this.components.addType(this.type, {
        extend: this.namespace + "default",
        model: {
          defaults: {
            name: "Container",
            tagName: "div",
            droppable: true,
            draggable: true,
            stylable: false,
            traits: this.traits
          }
        },
        isComponent: (el) => {
          if (el && el.classList && (el.classList.contains("container") || el.classList.contains("container-fluid"))) {
            return { type: this.type };
          }
        }
      });
    }
  };

  // src/components/Default.js
  var Default = class extends ComponentBase {
    addTypes() {
      console.log(this.type);
      this.components.addType(this.type, {
        extend: "default",
        model: {
          defaults: {
            name: "BS Div",
            tagName: "div",
            styleable: false,
            traits: this.traits
          },
          init() {
            const classes = this.get("classes");
            classes.bind("add", this.classesChanged.bind(this));
            classes.bind("change", this.classesChanged.bind(this));
            classes.bind("remove", this.classesChanged.bind(this));
            const attributes = this.get("attributes");
            if (attributes && typeof attributes.bind === "function") {
              attributes.bind("change", this.attributesChanged.bind(this));
              attributes.bind("remove", this.attributesChanged.bind(this));
            }
            this.bsInit();
          },
          /* BS comps use init2, not init */
          bsInit() {
          },
          attributesChanged() {
            console.log("attributesChanged");
          },
          /* method where we can check if we should changeType */
          classesChanged() {
          },
          /* replace the comp with a copy of a different type */
          changeType(new_type) {
            const collection = this.collection;
            const at = collection.indexOf(this);
            const button_opts = {
              type: new_type,
              style: this.getStyle(),
              attributes: this.getAttributes(),
              content: this.view.el.innerHTML
            };
            collection.remove(this);
            collection.add(button_opts, { at });
            this.destroy();
          },
          isComponent: (el) => {
            if (el && el.tagName === "DIV") {
            }
          }
        }
      });
    }
  };

  // src/components/Dropdown.js
  var Dropdown = class extends ComponentBase {
    addBlocks() {
      this.blockManager.add("dropdown", {
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
        category: "Components",
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
            name: "Dropdown",
            classes: ["dropdown"],
            droppable: "a, button, .dropdown-menu",
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
              case "status":
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
          if (el && el.classList && el.classList.contains("dropdown")) {
            return { type: "dropdown" };
          }
        },
        viewExtend: "default",
        view: {
          events: {
            "click": "onClick"
          },
          init() {
            console.log(this);
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
      this.components.addType(this.type + "-dropdown-menu", {
        model: {
          defaults: {
            name: "Dropdown Menu",
            classes: ["dropdown-menu"],
            draggable: ".dropdown",
            droppable: true,
            traits: this.traits
          }
        },
        isComponent: (el) => {
          if (el && el.classList && el.classList.contains("dropdown-menu")) {
            return { type: this.type + "-dropdown-menu" };
          }
        }
      });
      this.components.addType(this.type + "-item", {
        extend: this.namespace + "text",
        model: {
          defaults: {
            name: "Dropdown Item",
            classes: ["dropdown-menu"],
            draggable: ".dropdown",
            droppable: true,
            traits: [
              {
                type: "innerHTML",
                label: "Text"
              },
              {
                type: "text",
                name: "href"
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
          if (el && el.classList && el.classList.contains("dropdown-item")) {
            return { type: this.type + "-dropdown-item" };
          }
        },
        view: {
          events: {
            click: "onClick"
          },
          onClick: (e) => {
          },
          onRender() {
            console.log(this);
          }
        }
      });
    }
  };

  // src/components/Form.js
  var Form = class extends ComponentBase {
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
        category: "Forms",
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
			`
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
          category: "Forms",
          //language=HTML
          content: `
					<fieldset data-gjs-type="${this.type}-fieldset">Heading</fieldset>`
        }
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
          category: "Forms",
          //language=HTML
          content: `
					<legend data-gjs-type="${this.type}-legend">Heading</legend>`
        }
      );
    }
    addTypes() {
      this.components.addType(this.type, {
        model: {
          defaults: {
            name: "Form",
            droppable: ":not(form)",
            draggable: function(obj, destination) {
              if (!(destination == null ? void 0 : destination.cid)) {
                return false;
              }
              const pf = destination.closest("form");
              if (pf == null ? void 0 : pf.cid) {
                return false;
              }
              return true;
            },
            traits: [
              {
                type: "select",
                label: "Encoding Type",
                name: "enctype",
                options: [
                  {
                    value: "application/x-www-form-urlencoded",
                    name: "application/x-www-form-urlencoded (default)"
                  },
                  { value: "multipart/form-data", name: "multipart/form-data" },
                  { value: "text/plain", name: "text/plain" }
                ]
              },
              {
                type: "select",
                label: "Method",
                name: "method",
                options: [
                  { value: "post", name: "POST" },
                  { value: "get", name: "GET" }
                ]
              },
              {
                type: "input",
                label: "Action",
                name: "action"
              }
            ]
          },
          init() {
            this.listenTo(this, "change:formState", this.updateFormState);
          },
          updateFormState() {
            var state = this.get("formState");
            switch (state) {
              case "success":
                this.showState("success");
                break;
              case "error":
                this.showState("error");
                break;
              default:
                this.showState("normal");
            }
          },
          showState(state) {
            let st = state || "normal";
            let failVis, successVis;
            if (st === "success") {
              failVis = "none";
              successVis = "block";
            } else if (st === "error") {
              failVis = "block";
              successVis = "none";
            } else {
              failVis = "none";
              successVis = "none";
            }
            let successModel = this.getStateModel("success");
            let failModel = this.getStateModel("error");
            let successStyle = successModel.getStyle();
            let failStyle = failModel.getStyle();
            successStyle.display = successVis;
            failStyle.display = failVis;
            successModel.setStyle(successStyle);
            failModel.setStyle(failStyle);
          },
          getStateModel(state) {
            let st = state || "success";
            let stateName = "form-state-" + st;
            let stateModel;
            let comps = this.get("components");
            for (let i = 0; i < comps.length; i++) {
              let model = comps.models[i];
              if (model.get("form-state-type") === st) {
                stateModel = model;
                break;
              }
            }
            if (!stateModel) {
              let contentStr = formMsgSuccess;
              if (st === "error") {
                contentStr = formMsgError;
              }
              stateModel = comps.add({
                "form-state-type": st,
                type: "text",
                removable: false,
                copyable: false,
                draggable: false,
                attributes: { "data-form-state": st },
                content: contentStr
              });
            }
            return stateModel;
          }
        },
        isComponent: (el) => {
          if (el && el.tagName === "FORM") {
            return { type: this.type };
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
      this.components.addType(
        this.type + "-fieldset",
        {
          extends: this.namespace + "default",
          model: {
            defaults: {
              tagName: "FIELDSET",
              name: "Fieldset"
            }
          },
          isComponent: (el) => {
            if (el && el.tagName === "FIELDSET") {
              return { type: this.type + "-fieldset" };
            }
          }
        }
      );
      this.components.addType(
        this.type + "-legend",
        {
          extends: this.namespace + "default",
          model: {
            defaults: {
              tagName: "LEGEND",
              name: "Fieldset"
            }
          },
          isComponent: (el) => {
            if (el && el.tagName === "LEGEND") {
              return { type: this.type + "-legend" };
            }
          }
        }
      );
    }
  };

  // src/components/FormInputFloating.js
  var FormInputFloating = class extends ComponentBase {
    addBlocks() {
      this.blockManager.add(
        this.type,
        {
          label: "Floating Input",
          //language=SVG
          media: `
                    <svg class="gjs-block-svg" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path class="gjs-block-svg-path"
                              d="M22,9 C22,8.4 21.5,8 20.75,8 L3.25,8 C2.5,8 2,8.4 2,9 L2,15 C2,15.6 2.5,16 3.25,16 L20.75,16 C21.5,16 22,15.6 22,15 L22,9 Z M21,15 L3,15 L3,9 L21,9 L21,15 Z"></path>
                        <polygon class="gjs-block-svg-path" points="4 10 5 10 5 14 4 14"></polygon>
                    </svg>
				`,
          category: "Forms",
          //language=HTML
          content: `
					<div class="form-floating" data-gjs-type="${this.type}">
						<input type="text" class="form-control" value="Some Value" data-gjs="${this.namespace}input">
						<label data-gjs="${this.namespace}label" for="">Label</label>
					</div>`
        }
      );
    }
    addTypes() {
      this.components.addType(
        this.type,
        {
          extend: this.namespace + "default",
          model: {
            defaults: {
              name: "Floating Input",
              classes: ["form-floating"],
              draggable: false,
              droppable: true
            }
          },
          isComponent: (el) => {
            if (el && el.classList && el.classList.contains("form-floating")) {
              return { type: this.type };
            }
          }
        }
      );
    }
  };

  // src/components/Icon.js
  var Icon = class extends ComponentBase {
    addBlocks() {
      this.blockManager.add(
        this.type,
        {
          label: this.createLabel("fa-solid fa-icons", "Icon"),
          category: "Basic",
          content: `<i class="fa-solid fa-icons" data-gjs-type="${this.type}"></i>`
        }
      );
    }
    addTypes() {
      this.components.addType(
        this.type,
        {
          extends: this.namespace + "default",
          model: {
            defaults: {
              name: "Icon",
              stylable: false,
              droppable: false,
              draggable: true,
              traits: [
                {
                  type: "text",
                  label: "Icon",
                  name: "class",
                  placeholder: "fa fa-..."
                },
                this.traitFontSize,
                this.traitTextColor,
                this.traits
              ]
            }
          },
          isComponent: (el) => {
            if (el.tagName === "I") {
              return {
                type: this.type
              };
            }
          }
        }
      );
    }
  };

  // src/components/Image.js
  var Image = class extends ComponentBase {
    get src() {
      return "https://dummyimage.com/800x500/999/222";
    }
    addBlocks() {
      this.blockManager.add(this.type, {
        label: this.createLabel("bi bi-image", this.name),
        category: "Basic",
        content: `<img src='${this.src}' data-gjs-type='${this.type}' alt="..." loading="eager" class="object-fit-cover">`
      });
    }
    addTypes() {
      this.components.addType(this.type, {
        extend: this.namespace + "default",
        model: {
          defaults: {
            "name": "Image",
            tagName: "img",
            resizable: 1,
            attributes: {
              src: this.src
            },
            classes: ["img-fluid"],
            stylable: false,
            traits: [
              {
                type: "file_select",
                label: "File",
                name: "src"
              },
              {
                type: "text",
                label: "Alternate text",
                name: "alt"
              },
              traits_default.objectFit,
              traits_default.spacingPadding,
              traits_default.spacingMargin,
              traits_default.float
            ]
          }
        },
        isComponent: (el) => {
          if (el && el.tagName === "IMG") {
            return { type: this.type };
          }
        }
      });
    }
  };

  // src/components/FormInput.js
  var FormInput = class extends ComponentBase {
    addBlocks() {
      this.blockManager.add(
        this.name,
        {
          label: this.createLabel("bi bi-input-cursor-text", "FormInput"),
          category: "Forms",
          //language=HTML
          content: `
					<div class="mb-3">
						<label class="form-label" for="" data-gjs-type="${this.type}-label">Label</label>
						<input type="text" class="form-control" data-gjs-type="${this.type}" placeholder="Input"/>
					</div>`
        }
      );
      this.blockManager.add(
        this.namespace + "label",
        {
          label: this.createLabel("bi bi-tag", "Label"),
          category: "Forms",
          //language=HTML
          content: `
					<label class="form-check-label" for="" data-gjs-type="${this.type}-label">Label</label>`
        }
      );
      this.blockManager.add(
        this.namespace + "check",
        {
          attributes: {
            title: "Checkbox"
          },
          label: "Checkbox",
          //language=SVG
          media: `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 6">
                        <title>container</title>
                        <path d="M7,10v4H3V10H7M8,9H2v6H8V9Z" transform="translate(-2 -9)"/>
                        <rect x="7" y="2" width="13" height="2"/>
                    </svg>`,
          category: "Forms",
          //language=HTML
          content: `
					<div class="form-check mb-3" data-gjs-type="${this.type}-form-check">
						<input class="form-check-input" type="checkbox" value="" id="defaultCheck1"
						       data-gjs-type="${this.type}-check">
						<label class="form-check-label" for="defaultCheck1" data-gjs-type="${this.type}-label">Default
							checkbox</label>
					</div>`
        }
      );
      this.blockManager.add(
        this.namespace + "radio",
        {
          attributes: {
            title: "Radio"
          },
          label: "Radio",
          //language=SVG
          media: `
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 7">
                        <title>container</title>
                        <rect x="8" y="2.5" width="13" height="2"/>
                        <path d="M4.5,9.5A2.5,2.5,0,1,1,2,12,2.5,2.5,0,0,1,4.5,9.5m0-1A3.5,3.5,0,1,0,8,12,3.5,3.5,0,0,0,4.5,8.5Z"
                              transform="translate(-1 -8.5)"/>
                    </svg>`,
          category: "Forms",
          //language=HTML
          content: `
					<div class="form-check mb-3" data-gjs-type="${this.type}-form-check">
						<input class="form-check-input" type="radio" id="defaultCheck1"
						       data-gjs-type="${this.type}-radio">
						<label class="form-check-label" for="defaultCheck1" data-gjs-type="${this.type}-label">Default
							checkbox</label>
					</div>`
        }
      );
    }
    addTypes() {
      this.components.addType(this.type, {
        extend: this.namespace + "default",
        model: {
          defaults: {
            name: "FormInput",
            tagName: "input",
            draggable: true,
            droppable: false,
            stylable: false,
            traits: [
              {
                label: "Type",
                type: "select",
                name: "type",
                options: [
                  { value: "button", name: "button" },
                  { value: "color", name: "color" },
                  { value: "date", name: "date" },
                  { value: "datetime-local", name: "date time" },
                  { value: "email", name: "email" },
                  { value: "file", name: "file" },
                  { value: "hidden", name: "hidden" },
                  { value: "image", name: "image" },
                  { value: "month", name: "month" },
                  { value: "number", name: "number" },
                  { value: "password", name: "password" },
                  { value: "range", name: "range" },
                  { value: "reset", name: "reset" },
                  { value: "search", name: "search" },
                  { value: "submit", name: "submit" },
                  { value: "tel", name: "tel" },
                  { value: "text", name: "text" },
                  { value: "time", name: "time" },
                  { value: "url", name: "url" },
                  { value: "week", name: "week" }
                ]
              }
            ].concat(this.inputTraits).concat([
              this.traitInputSize,
              this.traitBackgroundColor,
              this.traitBorderColor
            ])
          }
        },
        isComponent: (el) => {
          if (el.tagName === "INPUT" && !["checkbox", "radio"].includes(el.type)) {
            return { type: this.type };
          }
        },
        view: {
          events: {
            "click": "handleClick"
          },
          handleClick: (e) => {
            e.preventDefault();
          }
        }
      });
      this.components.addType(this.type + "-label", {
        extend: "text",
        model: {
          defaults: {
            tagName: "label",
            stylable: false,
            traits: [
              {
                label: "For",
                type: "input",
                name: "for"
              }
            ]
          }
        },
        isComponent: (el) => {
          if (el && el.tagName === "LABEL" && el.classList.contains("form-check-label")) {
            return { type: this.type + "-label" };
          }
        }
      });
      this.components.addType(this.type + "-checkbox", {
        extend: this.namespace + "input",
        model: {
          defaults: {
            name: "Checkbox",
            tagName: "input",
            draggable: true,
            droppable: false,
            stylable: false,
            classes: ["form-check-input"],
            traits: [
              {
                label: "Checked",
                type: "checkbox",
                name: "checked"
              }
            ].concat(this.inputTraits)
          },
          init() {
            this.listenTo(this, "change:checked", this.handleChecked);
          },
          handleChecked() {
            let checked = this.get("checked");
            let attrs = this.get("attributes");
            const view = this.view;
            if (checked) {
              attrs.checked = true;
            } else {
              delete attrs.checked;
            }
            if (view) {
              view.el.checked = checked;
            }
            this.set("attributes", { ...attrs });
          }
        },
        isComponent: (el) => {
          if (el.tagName === "INPUT" && el.type === "checkbox") {
            return { type: this.type + "-checkbox" };
          }
        }
      });
      this.components.addType(this.type + "-radio", {
        model: {
          defaults: {
            name: "Radio",
            tagName: "input",
            classes: ["form-check-input"],
            draggable: true,
            droppable: false,
            stylable: false,
            traits: [
              {
                label: "Checked",
                type: "checkbox",
                name: "checked"
              }
            ].concat(this.inputTraits)
          }
        },
        isComponent: (el) => {
          if (el.tagName === "INPUT" && el.type === "radio") {
            return { type: this.type + "-radio" };
          }
        }
      });
      this.components.addType(this.type + "-form-check", {
        model: {
          defaults: {
            name: "Form Check",
            tagName: "div",
            draggable: true,
            droppable: false,
            stylable: false,
            traits: [
              this.traitCheckType,
              this.traitMarginBottom,
              this.traitId,
              this.traitTitle
            ]
          }
        },
        isComponent: (el) => {
          if (el.tagName === "DIV" && el.classList.contains("form-check")) {
            return { type: this.type + "-form-check" };
          }
        }
      });
    }
    get traitName() {
      return {
        label: "Name",
        type: "input",
        name: "name"
      };
    }
    get traitValue() {
      return {
        label: "Value",
        type: "input",
        name: "value"
      };
    }
    get traitPlaceHolder() {
      return {
        label: "Placeholder",
        type: "input",
        name: "placeholder"
      };
    }
    get traitRequired() {
      return {
        label: "Required",
        type: "checkbox",
        name: "required",
        changeProp: 1
      };
    }
    get inputTraits() {
      return [
        this.traitId,
        this.traitName,
        this.traitValue,
        this.traitPlaceHolder,
        this.traitRequired
      ];
    }
    get traitCheckType() {
      return {
        type: "class_select",
        options: [
          { value: "", name: "Default" },
          { value: "form-switch", name: "Switch" },
          { value: "form-check-inline", name: "Inline" },
          { value: "form-check-reverse", name: "Reverse" }
        ],
        name: "check-style",
        label: "Checkbox Style"
      };
    }
    get traitInputSize() {
      return {
        type: "class_select",
        options: [
          { value: "", name: "Default" },
          { value: "form-control-lg", name: "Large" },
          { value: "form-control-sm", name: "Small" }
        ],
        name: "input-size",
        label: "FormInput Size"
      };
    }
  };

  // src/components/Link.js
  var Link = class extends ComponentBase {
    get name() {
      return "Link";
    }
    addBlocks() {
      this.blockManager.add(this.type, {
        label: this.createLabel("bi bi-link", "Link"),
        category: "Basic",
        content: {
          type: "link",
          content: "Link text"
        }
      });
    }
    addTypes() {
      const comps = editor.DomComponents;
      const textType = comps.getType("text");
      const textModel = textType.model;
      const linkType = comps.getType("link");
      const linkView = linkType.view;
      this.components.addType(
        this.type,
        {
          extend: this.namespace + "text",
          model: {
            defaults: {
              name: "link",
              tagName: "a",
              droppable: true,
              editable: true,
              traits: [
                {
                  type: "text",
                  label: "Href",
                  name: "href",
                  placeholder: "https://www.grapesjs.com"
                },
                {
                  type: "select",
                  options: [
                    { value: "", name: "This window" },
                    { value: "_blank", name: "New window" }
                  ],
                  label: "Target",
                  name: "target"
                },
                {
                  type: "select",
                  options: [
                    { value: "", name: "None" },
                    { value: "button", name: "Self" },
                    { value: "collapse", name: "Collapse" },
                    { value: "dropdown", name: "Dropdown" }
                  ],
                  label: "Toggles",
                  name: "data-toggle",
                  changeProp: 1
                },
                ...this.traits
              ]
            },
            init() {
              this.listenTo(this, "change:data-toggle", this.setupToggle);
              this.listenTo(this, "change:attributes", this.setupToggle);
            },
            setupToggle(a, b, options = {}) {
              if (options.ignore === true && options.force !== true) {
                return;
              }
              console.log("setup toggle");
              const attrs = this.getAttributes();
              const href = attrs.href;
              delete attrs["data-toggle"];
              delete attrs["aria-expanded"];
              delete attrs["aria-controls"];
              delete attrs["aria-haspopup"];
              if (href && href.length > 0 && href.match(/^#/)) {
                console.log("link has href");
                const els = this.em.get("Editor").DomComponents.getWrapper().find(href);
                if (els.length > 0) {
                  console.log("referenced el found");
                  const el = els[0];
                  const el_attrs = el.getAttributes();
                  const el_classes = el_attrs.class;
                  if (el_classes) {
                    console.log("el has classes");
                    const el_classes_list = el_classes.split(" ");
                    const includes = ["collapse", "dropdown-menu"];
                    const intersection = el_classes_list.filter((x) => includes.includes(x));
                    if (intersection.length) {
                      console.log("link data-toggle matches el class");
                      switch (intersection[0]) {
                        case "collapse":
                          attrs["data-toggle"] = "collapse";
                          break;
                      }
                      attrs["aria-expanded"] = el_classes_list.includes("show");
                      if (intersection[0] === "collapse") {
                        attrs["aria-controls"] = href.substring(1);
                      }
                    }
                  }
                }
              }
              this.set("attributes", attrs, { ignore: true });
            },
            classesChanged(e) {
              console.log("classes changed");
              if (this.attributes.type === "link") {
                if (this.attributes.classes.filter(function(klass) {
                  return klass.id === "btn";
                }).length > 0) {
                  this.changeType("button");
                }
              }
            }
          },
          isComponent: (el) => {
            if (el && el.tagName && el.tagName === "A") {
              return { type: this.type };
            }
          },
          viewExtend: "link"
        }
      );
    }
  };

  // src/components/ListGroup.js
  var ListGroup = class extends ComponentBase {
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
        category: "Components",
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
    }
    addTypes() {
      this.components.addType(this.type, {
        extend: this.namespace + "default",
        model: {
          defaults: {
            name: "List Group",
            tagName: "ul",
            droppable: "list-group-item",
            traits: this.traits
          }
        },
        isComponent: (el) => {
          if (el && el.classList && el.classList.contains("list-group")) {
            return { type: "bs-list-group" };
          }
        }
      });
      this.components.addType(this.type + "-item", {
        extend: this.namespace + "text",
        model: {
          defaults: {
            "custom-name": "ListGroupItem",
            tagName: "li",
            resizable: false,
            draggable: ["ul"],
            droppable: true,
            editable: true,
            traits: this.traits
          }
        },
        isComponent: (el) => {
          if (el && el.classList && el.classList.contains("list-group-item")) {
            return { type: this.type + "-item" };
          }
        }
      });
    }
  };

  // src/components/MediaObject.js
  var MediaObject = class extends ComponentBase {
    get name() {
      return "MediaObject";
    }
    addBlocks() {
      this.blockManager.add(this.type, {
        label: "Media Object",
        //language=SVG
        media: `
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 22 8">
                    <title>container</title>
                    <path d="M8,9v6H2V9H8M9,8H1v8H9V8Z" transform="translate(-1 -8)"/>
                    <polygon points="22 2 9 2 9 4 22 4 22 2 22 2"/>
                    <polygon points="20 5 9 5 9 6 20 6 20 5 20 5"/>
                    <polygon points="7.29 6.71 1 6.71 1 7 7.29 7 7.29 6.71 7.29 6.71"/>
                    <polygon points="1.57 6.71 2.43 5.86 3.57 6.71 5.29 5 7.29 6.71 1.57 6.71"/>
                    <circle cx="3" cy="3" r="1"/>
                </svg>`,
        category: "Components",
        //language=HTML
        content: `
			<div class="media-object d-flex align-items-center w-100" data-gjs-type="${this.type}">
				<div class="flex-shrink-0" data-gjs-type="${this.namespace}shrink">
					<div class="avatar">
						<img src="" data-gjs-type="${this.namespace}image">
					</div>
				</div>
				<div class="flex-grow-1 ms-3" data-gjs-type="${this.namespace}grow">
					Cras sit amet nibh libero, in gravida nulla.
				</div>
			</div>`
      });
    }
    addTypes() {
      this.components.addType(this.type, {
        extend: this.namespace + "default",
        model: {
          defaults: {
            name: "Media Object",
            tagName: "div",
            classes: ["d-flex", "media-object"]
          }
        },
        isComponent: (el) => {
          if (el && el.classList && el.classList.contains("media-object")) {
            return { type: this.type };
          }
        }
      });
      this.components.addType(this.namespace + "shrink", {
        extend: this.namespace + "default",
        model: {
          defaults: {
            name: "Flex Shrink",
            tagName: "div",
            classes: ["flex-shrink-0", "ms-3"]
          }
        },
        isComponent: (el) => {
          if (el && el.classList && el.classList.contains("flex-shrink-0")) {
            return { type: this.namespace + "shrink" };
          }
        }
      });
      this.components.addType(this.namespace + "grow", {
        extend: this.namespace + "default",
        model: {
          defaults: {
            name: "Flex Grow",
            tagName: "div",
            classes: ["flex-grow-1", "ms-3"]
          }
        },
        isComponent: (el) => {
          if (el && el.classList && el.classList.contains("flex-grow-1")) {
            return { type: this.namespace + "grow" };
          }
        }
      });
    }
  };

  // src/components/Ratio.js
  var Ratio = class extends ComponentBase {
    get name() {
      return "Ratio";
    }
    addBlocks() {
      this.blockManager.add(this.type, {
        label: this.createLabel("bi bi-aspect-ratio", this.name),
        category: "Media",
        //language=HTML
        content: `
				<div class='ratio ratio-16x9 overflow-hidden' data-gj="${this.type}">
					
				</div>`
      });
    }
    addTypes() {
      this.components.addType(this.type, {
        extend: this.namespace + "default",
        model: {
          defaults: {
            name: this.name,
            tagName: "div",
            resizable: false,
            draggable: true,
            droppable: true,
            stylable: false,
            classes: ["ratio", "ratio-21x9", "overflow-hidden"],
            traits: [
              {
                type: "class_select",
                options: [
                  { value: "", name: "None" },
                  { value: "ratio-21x9", name: "21:9" },
                  { value: "ratio-16x9", name: "16:9" },
                  { value: "ratio-4x3", name: "4:3" },
                  { value: "ratio-1x1", name: "1:1" }
                ],
                name: "aspect-ratio",
                label: "Aspect Ratio"
              },
              ...this.traits
            ]
          }
        },
        isComponent: (el) => {
          if (el && el.classList && el.classList.contains("ratio")) {
            return { type: this.type };
          }
        },
        view: {
          init() {
            const props = [
              "Aspect Ratio"
            ];
            const reactTo = props.map((prop) => `change:${prop}`).join(" ");
            this.listenTo(this.model, reactTo, this.render);
            const comps = this.model.components();
          }
        }
      });
    }
  };

  // src/components/Row.js
  var Row = class extends ComponentBase {
    get name() {
      return "Row";
    }
    addBlocks() {
      this.blockManager.add(this.type).set({
        attributes: {
          title: "Row"
        },
        label: "Row",
        //language=SVG
        media: `
                <svg id="container" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14">
                    <defs>
                        <style>.cls-1{fill:none;stroke:#000;stroke-miterlimit:10;}.cls-2{opacity:0.5;}</style>
                    </defs>
                    <title>container</title>
                    <path class="cls-1" d="M7,7.8" transform="translate(0 -5)"/>
                    <g id="container_opac" class="cls-2">
                        <path d="M23,6V18H1V6H23m1-1H0V19H24V5Z" transform="translate(0 -5)"/>
                    </g>
                    <g id="container-2">
                        <path d="M21,8v8H3V8H21m1-1H2V17H22V7Z" transform="translate(0 -5)"/>
                    </g>
                </svg>
			`,
        id: this.type,
        category: "Layout",
        //language=HTML
        content: `
				<div class="row" data-gjs-type="${this.type}">
					<div class="col" data-gjs-type="${this.namespace}column"></div>
					<div class="col" data-gjs-type="${this.namespace}column"></div>
					<div class="col" data-gjs-type="${this.namespace}column"></div>
					<div class="col" data-gjs-type="${this.namespace}column"></div>
				</div>
			`
      });
    }
    addTypes() {
      this.components.addType(this.type, {
        extend: this.namespace + "default",
        model: {
          defaults: {
            name: "Row",
            tagName: "div",
            draggable: true,
            droppable: true,
            stylable: false,
            traits: [
              /*
              						{
              							type: 'class_select',
              							options: [
              								{value: '', name: 'Default'},
              								{value: 'gx-0', name: 'gx-0'},
              								{value: 'gx-1', name: 'gx-1'},
              								{value: 'gx-2', name: 'gx-2'},
              								{value: 'gx-3', name: 'gx-3'},
              								{value: 'gx-4', name: 'gx-4'},
              								{value: 'gx-5', name: 'gx-5'},
              							],
              							name: 'gutters',
              							label: 'Gutters'
              						},
              						{
              							type: 'row_columns_select',
              							options: [
              							],
              							name: 'rows-columns',
              							label: 'Columns'
              						},
              
              						 */
              ...this.traits
            ]
          }
        },
        isComponent: (el) => {
          if (el && el.classList && el.classList.contains("row")) {
            return { type: this.type };
          }
        }
      });
    }
  };

  // src/components/tabs/constants.js
  var prefix = "tabs-";
  var containerName = `${prefix}container`;
  var navigationName = `${prefix}navigation`;
  var tabPanesName = `${prefix}panes`;
  var tabName = `${prefix}tab`;
  var tabPaneName = `${prefix}tab-pane`;
  var constants_default = {
    navigationName,
    tabPanesName,
    tabName,
    tabPaneName,
    // Selectors
    navigationSelector: `[data-gjs-type="${navigationName}"]`,
    tabPanesSelector: `[data-gjs-type="${tabPanesName}"]`,
    tabSelector: `[data-gjs-type="${tabName}"]`,
    tabPaneSelector: `[data-gjs-type="${tabPaneName}"]`,
    // IDs
    containerId: `data-${containerName}`,
    navigationId: `data-${navigationName}`,
    tabPanesId: `data-${tabPanesName}`,
    tabId: `data-${tabName}`,
    tabPaneId: `data-${tabPaneName}`
  };

  // src/components/tabs/TabsNavigation.js
  var TabsBlock = (bm, c) => {
    bm.add("tabs", {
      label: "Tabs",
      //language=SVG
      media: `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 14">
                <defs>
                    <style>.a{opacity:0.5;}</style>
                </defs>
                <title>container</title>
                <path d="M6.25,5A.76.76,0,0,1,7,5.75V8H1V5.75A.76.76,0,0,1,1.75,5h4.5m0-1H1.75A1.76,1.76,0,0,0,0,5.75V9H8V5.75A1.76,1.76,0,0,0,6.25,4Z"
                      transform="translate(0 -4)"/>
                <g class="a">
                    <path d="M14.25,5a.76.76,0,0,1,.75.75V8H9V5.75A.76.76,0,0,1,9.75,5h4.5m0-1H9.75A1.76,1.76,0,0,0,8,5.75V9h8V5.75A1.76,1.76,0,0,0,14.25,4Z"
                          transform="translate(0 -4)"/>
                </g>
                <g class="a">
                    <path d="M22.25,5a.76.76,0,0,1,.75.75V8H17V5.75A.76.76,0,0,1,17.75,5h4.5m0-1h-4.5A1.76,1.76,0,0,0,16,5.75V9h8V5.75A1.76,1.76,0,0,0,22.25,4Z"
                          transform="translate(0 -4)"/>
                </g>
                <path d="M23,11v5.25a.76.76,0,0,1-.75.75H1.75A.76.76,0,0,1,1,16.25V11H23m1-1H0v6.25A1.76,1.76,0,0,0,1.75,18h20.5A1.76,1.76,0,0,0,24,16.25V10Z"
                      transform="translate(0 -4)"/>
            </svg>`,
      category: "Components",
      content: `
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Tab 1</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Tab 2</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Tab 3</a>
              </li>
            </ul>
            <div class="tab-content">
              <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"></div>
              <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"></div>
              <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"></div>
            </div>
        `
    });
  };
  var TabsNavigation_default = (dc, config2 = {}) => {
    const { navigationName: navigationName2, tabSelector } = constants_default;
    const classId = config2.classNavigation;
    const type = navigationName2;
    dc.addType(type, {
      extend: "default",
      model: {
        defaults: {
          name: "Tabs Navigation",
          copyable: 0,
          draggable: true,
          droppable: tabSelector,
          traits: [
            {
              type: "class_select",
              options: [
                { value: "nav-tabs", name: "Tabs" },
                { value: "nav-pills", name: "Pills" }
              ],
              label: "Type"
            },
            {
              type: "class_select",
              options: [
                { value: "", name: "Left" },
                { value: "nav-fill", name: "Fill" },
                { value: "nav-justified", name: "Justify" }
              ],
              label: "Layout"
            }
          ]
        },
        init() {
          this.get("classes").pluck("name").indexOf(classId) < 0 && this.addClass(classId);
        }
      },
      isComponent(el) {
        if (elHasClass(el, classId))
          return { type };
      },
      view: {
        init() {
          const props = [
            "type",
            "layout"
          ];
          const reactTo = props.map((prop) => `change:${prop}`).join(" ");
          this.listenTo(this.model, reactTo, this.render);
          const comps = this.model.components();
          if (!comps.length) {
            comps.add(`
                        <ul class="nav nav-tabs" role="tablist">
                          <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Tab 1</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Tab 2</a>
                          </li>
                          <li class="nav-item">
                            <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Tab 3</a>
                          </li>
                        </ul>
                    `);
          }
        }
      }
    });
  };

  // src/components/tabs/TabsPanes.js
  var TabsPanes_default = (dc, config2 = {}) => {
    const defaultType = dc.getType("default");
    const defaultModel = defaultType.model;
    const defaultView = defaultType.view;
    const { tabPanesName: tabPanesName2, tabPaneSelector } = constants_default;
    const classId = config2.classTabPanes;
    const type = tabPanesName2;
    dc.addType(type, {
      extend: "default",
      model: {
        defaults: {
          name: "Tabs Panes",
          copyable: 0,
          draggable: true,
          droppable: tabPaneSelector
        },
        init() {
          this.get("classes").pluck("name").indexOf(classId) < 0 && this.addClass(classId);
        }
      },
      isComponent(el) {
        if (elHasClass(el, classId))
          return { type };
      },
      view: {
        init() {
          const comps = this.model.components();
          if (!comps.length) {
            comps.add(`
                        <div class="tab-content" id="myTabContent">
                          <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">Tab pane 1</div>
                          <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">Tab pane 2</div>
                          <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">Tab pane 3</div>
                        </div>
                    `);
          }
        }
      }
    });
  };

  // src/components/tabs/Tab.js
  var Tab_default = (dc, config2 = {}) => {
    const { tabName: tabName2, navigationSelector } = constants_default;
    const classId = config2.classTab;
    const type = tabName2;
    dc.addType(type, {
      extend: "default",
      model: {
        defaults: {
          name: "Tab",
          //language=SVG
          media: `
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 5">
						<defs>
							<style>.a {
								opacity: 0.5;
							}</style>
						</defs>
						<title>container</title>
						<path d="M6.25,11a.76.76,0,0,1,.75.75V14H1V11.75A.76.76,0,0,1,1.75,11h4.5m0-1H1.75A1.76,1.76,0,0,0,0,11.75V15H8V11.75A1.76,1.76,0,0,0,6.25,10Z"
						      transform="translate(0 -10)"/>
						<g class="a">
							<path d="M14.25,11a.76.76,0,0,1,.75.75V14H9V11.75A.76.76,0,0,1,9.75,11h4.5m0-1H9.75A1.76,1.76,0,0,0,8,11.75V15h8V11.75A1.76,1.76,0,0,0,14.25,10Z"
							      transform="translate(0 -10)"/>
						</g>
						<g class="a">
							<path d="M22.25,11a.76.76,0,0,1,.75.75V14H17V11.75a.76.76,0,0,1,.75-.75h4.5m0-1h-4.5A1.76,1.76,0,0,0,16,11.75V15h8V11.75A1.76,1.76,0,0,0,22.25,10Z"
							      transform="translate(0 -10)"/>
						</g>
					</svg>`,
          tagName: "li",
          copyable: true,
          draggable: navigationSelector
        },
        init() {
          this.get("classes").pluck("name").indexOf(classId) < 0 && this.addClass(classId);
        }
      },
      isComponent(el) {
        if (elHasClass(el, classId))
          return { type };
      },
      view: {
        init() {
          const comps = this.model.components();
          if (!comps.length) {
            comps.add(`
              <a class="nav-link active" id="tab-1" data-toggle="tab" href="#tab-pane-1" role="tab" aria-controls="tab" aria-selected="true">Tab</a>
          `);
          }
        }
      }
    });
  };

  // src/components/tabs/TabPane.js
  var TabPane_default = (dc, config2 = {}) => {
    const { tabPaneName: tabPaneName2, tabPanesSelector } = constants_default;
    const classId = config2.classTabPane;
    const type = tabPaneName2;
    dc.addType(type, {
      extend: "bs-default",
      model: {
        defaults: {
          name: "Tab Pane",
          copyable: true,
          draggable: tabPanesSelector,
          traits: [
            "id",
            {
              type: "class_select",
              options: [
                { value: "fade", name: "Fade" },
                { value: "", name: "None" }
              ],
              label: "Animation"
            },
            {
              type: "class_select",
              options: [
                { value: "", name: "Inactive" },
                { value: "active", name: "Active" }
              ],
              label: "Is Active"
            }
          ]
        },
        init() {
          this.get("classes").pluck("name").indexOf(classId) < 0 && this.addClass(classId);
        }
      },
      isComponent(el) {
        if (elHasClass(el, classId))
          return { type };
      }
    });
  };

  // src/components/Text.js
  var Text = class extends ComponentBase {
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
      );
      this.blockManager.add(this.type + "-paragraph", {
        label: this.createLabel(
          "bi bi-paragraph",
          "Paragraph"
        ),
        category: "Basic",
        content: `<p data-gjs-type="${this.type}-paragraph">Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.</p>`
      });
      this.blockManager.add(this.type, {
        label: this.createLabel("bi bi-body-text", this.name + " / Block"),
        category: "Basic",
        content: {
          type: "text",
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
        category: "Basic",
        //language=HTML
        content: `
                <ul data-gjs-type="${this.type}-list">
                    <li data-gjs-type="${this.type}-list-item">This is a list.</li>
                </ul>`
      });
      this.blockManager.add(this.type + "-hr", {
        label: this.createLabel(
          "bi bi-hr",
          "HR"
        ),
        category: "Basic",
        //language=HTML
        content: `
                <hr data-gjs-type="${this.type}-hr"/>`
      });
      this.blockManager.add(this.type + "-blockquote", {
        label: this.createLabel(
          "bi bi-hr",
          "Blockquote"
        ),
        category: "Basic",
        //language=HTML
        content: `
                <figure class="text-center">
                    <blockquote class="blockquote" data-gjs-type="${this.type}-blockquote">
                        <p>A well-known quote, contained in a blockquote element.</p>
                    </blockquote>
                    <figcaption class="blockquote-footer">
                        Someone famous in <cite title="Source Title">Source Title</cite>
                    </figcaption>
                </figure>`
      });
    }
    addTypes() {
      this.components.addType(this.type, {
        extend: "text",
        model: {
          defaults: {
            //classes: ['body'],
            name: "Div",
            tagName: "div",
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
            return { type: this.type };
          }
        }
      });
      this.components.addType(this.type + "-heading", {
        extend: this.namespace + "text",
        model: {
          defaults: {
            "custom-name": "Heading",
            tagName: "h1",
            stylable: false,
            traits: [
              {
                type: "select",
                options: [
                  { value: "h1", name: "H1" },
                  { value: "h2", name: "H2" },
                  { value: "h3", name: "H3" },
                  { value: "h4", name: "H4" },
                  { value: "h5", name: "H5" },
                  { value: "h6", name: "H6" }
                ],
                label: "Size (e.g H1, H2, H3)",
                name: "tagName",
                changeProp: 1
              },
              ...this.traits
            ]
          }
        },
        isComponent: (el) => {
          if (el && ["H1", "H2", "H3", "H4", "H5", "H6"].includes(el.tagName)) {
            if (el.classList && el.classList.contains("card-title")) {
              return false;
            }
            return { type: this.type + "-heading" };
          }
        }
      });
      this.components.addType(this.type + "-paragraph", {
        extend: this.namespace + "text",
        model: {
          defaults: {
            name: "Paragraph",
            tagName: "p",
            stylable: false,
            traits: [
              {
                type: "class_select",
                options: [
                  { value: "", name: "No" },
                  { value: "lead", name: "Yes" }
                ],
                label: "Lead?"
              },
              ...this.traits
            ]
          }
        },
        isComponent: (el) => {
          if (el && el.tagName && el.tagName === "P") {
            return { type: this.type + "-paragraph" };
          }
        }
      });
      this.components.addType(this.type + "-list", {
        model: {
          defaults: {
            name: "List",
            tagName: "ul",
            resizable: 1,
            droppable: "li",
            stylable: false,
            traits: [
              {
                type: "select",
                options: [
                  { value: "ul", name: "No" },
                  { value: "ol", name: "Yes" }
                ],
                label: "Ordered?",
                name: "tagName",
                changeProp: 1
              },
              this.traits
            ]
          }
        },
        isComponent: (el) => {
          if (el && ["UL", "OL"].includes(el.tagName)) {
            return { type: this.type + "-list" };
          }
        }
      });
      this.components.addType(this.type + "-list-item", {
        model: {
          defaults: {
            name: "List Item",
            tagName: "li",
            droppable: false,
            stylable: false,
            traits: this.traits
          }
        },
        isComponent: (el) => {
          if (el && ["UL", "OL"].includes(el.tagName)) {
            return { type: this.type + "-list-item" };
          }
        }
      });
      this.components.addType(this.type + "-hr", {
        extend: this.namespace + "default",
        model: {
          defaults: {
            name: "Horizontal Rule",
            tagName: "hr",
            droppable: true,
            draggable: true,
            stylable: false,
            traits: this.traits
          }
        },
        isComponent: (el) => {
          if (el && ["HR"].includes(el.tagName)) {
            return { type: this.type + "-hr" };
          }
        }
      });
      this.components.addType(this.type + "-blockquote", {
        extend: this.namespace + "default",
        model: {
          defaults: {
            name: "Blockquote",
            tagName: "blockquote",
            droppable: true,
            draggable: true,
            stylable: false,
            traits: this.traits
          }
        },
        isComponent: (el) => {
          if (el && ["BLOCKQUOTE"].includes(el.tagName)) {
            el.classList.add("blockquote");
            return { type: this.type + "-blockquote" };
          }
        }
      });
    }
  };

  // src/components/video/Video.js
  var VideoBlock = (bm, label) => {
    bm.add("bs-video", {
      label: "Video",
      //language=SVG
      media: `
            <svg aria-hidden="true" width="24" height="50" focusable="false" data-prefix="fab" data-icon="youtube"
                 class="svg-inline--fa fa-youtube fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg"
                 viewBox="0 0 576 512">
                <path fill="currentColor"
                      d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path>
            </svg>
        `,
      category: "Media",
      content: {
        type: "bs-embed-responsive"
      }
    });
  };
  var Video_default = (domComponent) => {
    const type = "bs-embed-responsive";
    domComponent.addType(type, {
      extend: "video",
      model: {
        defaults: {
          "custom-name": "Video",
          resizable: false,
          droppable: false,
          draggable: false,
          copyable: false,
          provider: "so",
          classes: ["embed-responsive-item"]
        }
      },
      isComponent: function(el) {
        if (el && el.className === "embed-responsive-item") {
          var result = {
            provider: "so",
            type
          };
          var isYtProv = /youtube\.com\/embed/.test(el.src);
          var isYtncProv = /youtube-nocookie\.com\/embed/.test(el.src);
          var isViProv = /player\.vimeo\.com\/video/.test(el.src);
          var isExtProv = isYtProv || isYtncProv || isViProv;
          if (el.tagName == "VIDEO" || el.tagName == "IFRAME" && isExtProv) {
            if (el.src)
              result.src = el.src;
            if (isExtProv) {
              if (isYtProv)
                result.provider = "yt";
              else if (isYtncProv)
                result.provider = "ytnc";
              else if (isViProv)
                result.provider = "vi";
            }
          }
          return result;
        }
      }
    });
  };

  // src/components.js
  var components_default = (editor2, config2 = {}) => {
    const c = config2;
    console.log(config2);
    const domc = editor2.DomComponents;
    const blocks = c.blocks;
    const bm = editor2.BlockManager;
    const cats = c.blockCategories;
    const traits = {
      id: {
        name: "id",
        label: c.labels.trait_id
      },
      for: {
        name: "for",
        label: c.labels.trait_for
      },
      name: {
        name: "name",
        label: c.labels.trait_name
      },
      placeholder: {
        name: "placeholder",
        label: c.labels.trait_placeholder
      },
      value: {
        name: "value",
        label: c.labels.trait_value
      },
      required: {
        type: "checkbox",
        name: "required",
        label: c.labels.trait_required
      },
      checked: {
        label: c.labels.trait_checked,
        type: "checkbox",
        name: "checked",
        changeProp: 1
      }
    };
    new Default(editor2);
    if (cats.basic) {
      new Text(editor2);
      new Link(editor2);
      new Icon(editor2);
    }
    if (cats.media) {
      new Image(editor2);
      new Ratio(editor2);
      VideoBlock(bm, c.labels.video);
      Video_default(domc);
    }
    if (cats.layout) {
      new Container(editor2);
      new Row(editor2);
      new Column(editor2);
    }
    if (cats.components) {
      new Card(editor2);
      new Accordion(editor2);
      new Carousel(editor2);
      new Alert(editor2);
      TabsBlock(bm, c);
      TabsNavigation_default(domc, config2);
      Tab_default(domc, config2);
      TabsPanes_default(domc, config2);
      TabPane_default(domc, config2);
      new Badge(editor2);
      new ListGroup(editor2);
      CollapseBlock(bm, c.labels.collapse);
      Collapse_default(editor2);
      new Dropdown(editor2);
      new MediaObject(editor2);
    }
    if (cats.forms) {
      new Form(editor2);
      new FormInputFloating(editor2);
      new FormInput(editor2);
      new Button(editor2);
    }
  };

  // src/devices.js
  var devices_default = (editor2, config2 = {}) => {
    console.log("editor", editor2);
    const c = config2;
    const deviceManager = editor2.DeviceManager;
    if (c.gridDevices) {
      deviceManager.add(
        {
          id: "xl",
          name: "Desktop (XL)",
          width: "1366px",
          mediaWidth: "1399px"
        }
      );
      deviceManager.add(
        {
          id: "lg",
          name: "Tablet (LG)",
          width: "1180px",
          mediaWidth: "1199px"
        }
      );
      deviceManager.add(
        {
          id: "md",
          name: "Tablet (MD)",
          width: "820px",
          mediaWidth: "819px"
        }
      );
      deviceManager.add(
        {
          id: "mobile",
          name: "Mobile  (SM)",
          width: "390px",
          mediaWidth: "390px"
        }
      );
      return;
      if (c.gridDevicesPanel) {
        const panels = editor2.Panels;
        const commands = editor2.Commands;
        var panelDevices = panels.addPanel({ id: "devices-buttons" });
        var deviceBtns = panelDevices.get("buttons");
        deviceBtns.add([{
          id: "deviceXl",
          command: "set-device-xl",
          className: "fa fa-desktop",
          text: "XL",
          attributes: { "title": "Extra Large" },
          active: 1
        }, {
          id: "deviceLg",
          command: "set-device-lg",
          className: "fa fa-desktop",
          attributes: { "title": "Large" }
        }, {
          id: "deviceMd",
          command: "set-device-md",
          className: "fa fa-tablet",
          attributes: { "title": "Medium" }
        }, {
          id: "deviceSm",
          command: "set-device-sm",
          className: "fa fa-mobile",
          attributes: { "title": "Small" }
        }, {
          id: "deviceXs",
          command: "set-device-xs",
          className: "fa fa-mobile",
          attributes: { "title": "Extra Small" }
        }]);
        commands.add("set-device-xs", {
          run: function(editor3) {
            editor3.setDevice("Extra Small");
          }
        });
        commands.add("set-device-sm", {
          run: function(editor3) {
            editor3.setDevice("Small");
          }
        });
        commands.add("set-device-md", {
          run: function(editor3) {
            editor3.setDevice("Medium");
          }
        });
        commands.add("set-device-lg", {
          run: function(editor3) {
            editor3.setDevice("Large");
          }
        });
        commands.add("set-device-xl", {
          run: function(editor3) {
            editor3.setDevice("Extra Large");
          }
        });
      }
    }
  };

  // src/BootstrapBlocks.js
  var BootstrapBlocks = class _BootstrapBlocks {
    static check() {
      if (!window.grapesjs) {
        console.warn("Grapes Not Installed");
        return false;
      }
      return true;
    }
    static initCss(editor2) {
      {
        editor2.Config.canvasCss += `
				/* Layout */
				
				
				.gjs-dashed .container,
				.gjs-dashed .container-fluid,
				.gjs-dashed .row,
				.gjs-dashed .col,
				.gjs-dashed [class^="col-"],
				.gjs-dashed .card,
				.gjs-dashed .accordion,
				.gjs-dashed .carousel,
				.gjs-dashed .carousel-inner,
				.gjs-dashed .carousel-item,
				.gjs-dashed .dropdown-menu,
				.gjs-dashed .ratio,
				.gjs-dashed div,
				.gjs-dashed ul,
				.gjs-dashed [data-gjs-type='bs-text'] {
					padding-top:10px;
					padding-bottom:10px;
					margin-bottom:10px;
					min-height: 30px !important;
				}

				.gjs-dashed .col,
				.gjs-dashed [class^="col-"] {
					min-height:50px !important;
				}
								
				.gjs-dashed .w-100 {
					min-height: .25rem !important;
					background-color: rgba(0, 0, 0, 0.1);
				}

				.gjs-dashed img {
					min-width: 25px;
					min-height: 25px;
					background-color: rgba(0, 0, 0, 0.5);
				}

				.gjs-dashed .button-group {
				
					margin-right:10px;
				}


				/* Components */

				.gjs-dashed .btn-group,
				.gjs-dashed .btn-toolbar {
					padding-right: 1.5rem !important;
					min-height: 1.5rem !important;
				}

				.gjs-dashed .card,
				.gjs-dashed .card-group, .gjs-dashed  {
					min-height: 1.5rem !important;
				}

				.gjs-dashed .card-footer,.gjs-dashed .card-header {
					min-height:40px;
				}

				.gjs-dashed .collapse {
					display: block !important;
					min-height: 1.5rem !important;
				}
								
				/*
				.gjs-dashed .dropdown-menu {
					min-height: 1.5rem !important;
					display: block !important;
					position:relative !important;
				}
				
				 */

				.carousel-control-prev, .carousel-control-next {
					width:60px;
				}


			`;
      }
      ;
    }
    static init(grapesjs) {
      grapesjs.plugins.add("bootstrap-blocks", (editor2, opts = {}) => {
        window.editor = editor2;
        _BootstrapBlocks.initCss(editor2);
        const opts_blocks = opts.blocks || {};
        const opts_labels = opts.labels || {};
        const opts_categories = opts.blockCategories || {};
        delete opts["blocks"];
        delete opts["labels"];
        delete opts["blockCategories"];
        const default_blocks = {
          default: true,
          text: true,
          link: true,
          image: true,
          ratio: true,
          // LAYOUT
          container: true,
          row: true,
          column: true,
          column_break: true,
          media_object: true,
          // COMPONENTS
          alert: true,
          tabs: true,
          badge: true,
          button: true,
          button_group: true,
          button_toolbar: true,
          card: true,
          card_container: true,
          collapse: true,
          dropdown: true,
          video: true,
          // TYPOGRAPHY
          header: true,
          paragraph: true,
          // BASIC
          list: true,
          list_item: true,
          // FORMS
          form: true,
          input: true,
          form_group_input: true,
          input_group: true,
          textarea: true,
          select: true,
          label: true,
          checkbox: true,
          radio: true
        };
        const default_labels = {
          // LAYOUT
          container: "Container",
          row: "Row",
          column: "Column",
          column_break: "Column Break",
          media_object: "Media Object",
          // COMPONENTS
          alert: "Alert",
          tabs: "Tabs",
          tab: "Tab",
          tabPane: "Tab Pane",
          badge: "Badge",
          button: "Button",
          button_group: "Button Group",
          button_toolbar: "Button Toolbar",
          card: "Card",
          card_container: "Card Container",
          collapse: "Collapse",
          dropdown: "Dropdown",
          dropdown_menu: "Dropdown Menu",
          dropdown_item: "Dropdown Item",
          // MEDIA
          ratio: "Ratio",
          image: "Image",
          video: "Video",
          // TYPOGRAPHY
          text: "Text",
          // BASIC
          header: "Header",
          paragraph: "Paragraph",
          link: "Link",
          list: "Simple List",
          list_item: "Simple List Item",
          // FORMS
          form: "Form",
          input: "Input",
          file_input: "File",
          form_group_input: "Form Group",
          input_group: "Input group",
          textarea: "Textarea",
          select: "Select",
          select_option: "- Select option -",
          option: "Option",
          label: "Label",
          checkbox: "Checkbox",
          radio: "Radio",
          trait_method: "Method",
          trait_enctype: "Encoding Type",
          trait_multiple: "Multiple",
          trait_action: "Action",
          trait_state: "State",
          trait_id: "ID",
          trait_for: "For",
          trait_name: "Name",
          trait_placeholder: "Placeholder",
          trait_value: "Value",
          trait_required: "Required",
          trait_type: "Type",
          trait_options: "Options",
          trait_checked: "Checked",
          type_text: "Text",
          type_email: "Email",
          type_password: "Password",
          type_number: "Number",
          type_date: "Date",
          type_hidden: "Hidden",
          type_submit: "Submit",
          type_reset: "Reset",
          type_button: "Button"
        };
        const default_categories = {
          "layout": true,
          "media": true,
          "components": true,
          "typography": true,
          "basic": true,
          "forms": true
        };
        let options = {
          ...{
            blocks: Object.assign(default_blocks, opts_blocks),
            labels: Object.assign(default_labels, opts_labels),
            blockCategories: Object.assign(default_categories, opts_categories),
            optionsStringSeparator: "::",
            gridDevices: true,
            gridDevicesPanel: false,
            classNavigation: "nav",
            classTabPanes: "tab-content",
            classTabPane: "tab-pane",
            classTab: "nav-item"
          },
          ...opts
        };
        commands_default(editor2, options);
        traits_default2(editor2, options);
        components_default(editor2, options);
        devices_default(editor2, options);
      });
    }
    static initFileManager(editor2) {
    }
  };

  // src/index.js
  (function() {
    window.addEventListener(
      "load",
      function() {
        if (BootstrapBlocks.check()) {
          BootstrapBlocks.init(window.grapesjs);
        }
      }
    );
  })();
})();
//# sourceMappingURL=index.js.map
