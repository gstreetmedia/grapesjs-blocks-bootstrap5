const Build = require("./Build");
const path = require("path");

class Builder extends Build {
	static get destinationPath() {
		return path.resolve(__dirname, "./", "dist", "js", "grapes-js-bootstrap-blocks");
	}

	static get entry() {
		return ['./src/index.js']
	}

	static get mode() {
		return "development";
	}
}

Builder.watch().then();
