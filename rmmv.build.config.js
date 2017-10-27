///////////////////////////////
// Configuration file for build

const rmmvBuildConfig = {
    // Path to where the TypeScript plugins are located.  These will be transpiled and
    // bundled to the standard rmmv plugin directory
    pluginPath: "./ts/plugins",

    // Set the following to true to identify shared code within plugins and create an additional bundle for it
    // instead of duplicating that code in each bundle.  If this is selected, then that additional bundle
    // will need to be distributed and loaded *first* in the rmmv plugin list
    identifySharedCode: false,
    sharedCodeBundleName: "commons"
};

module.exports = rmmvBuildConfig;
