const path = require("path");

class Build {

    static get builder() {
        return "esbuild";
    }

    static get destinationPath() {
        return path.resolve(__dirname, "../", "assets", "js", "app", "core");
    }

    static get entry() {
        return ['./src/myt/index.js']
    }

    static get mode() {
        return 'development'; //'production';
        //return 'production';
    }

    static get bundlerOptions() {
        return {
            entries: this.entry,
            //defaultConfig: '@parcel/config-default',
            mode: this.mode,
            targets: {
                default: {
                    distDir: this.destinationPath
                }
            }
        }
    }


    static async watch() {
        console.log("Watch with esbuild", this.entry, this.destinationPath);
        const esbuild = require('esbuild');
        let context = await esbuild.context(
            {
                entryPoints: this.entry,
                minify: false,//this.mode !== "development",
                bundle: true,
                outdir: this.destinationPath,
                sourcemap: true,
                logLevel: "info",
                jsx: 'automatic',
                target: ['chrome84', 'firefox76', 'safari13', 'edge84']
            });

        await context.watch();

    }

    static async build() {
        console.log("Build with esbuild", this.entry, this.destinationPath);
        const esbuild = require('esbuild');
        await esbuild.build(
            {
                entryPoints: this.entry,
                minify: true,
                bundle: true,
                outdir: this.destinationPath,
                sourcemap: false,
                logLevel: "debug"
            });
    }

    static async run() {
        if (this.mode === "development") {
            this.watch().then();
        } else {
            this.build().then();
        }
    }
}

module.exports = Build;