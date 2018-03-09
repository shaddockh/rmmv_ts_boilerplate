///////////////////////////////
// Configuration file for build
const path = require("path");
const rmmvBuildConfig = {
    // Path to where the TypeScript plugins are located.  These will be transpiled and
    // bundled to the standard rmmv plugin directory
    pluginPath: "./ts/plugins",

    // Set the following to true to identify shared code within plugins and create an additional bundle for it
    // instead of duplicating that code in each bundle.  If this is selected, then that additional bundle
    // will need to be distributed and loaded *first* in the rmmv plugin list
    identifySharedCode: false,
    sharedCodeBundleName: "commons",

    // This allows for storing assets outside of the RTP and then overriding them on build.  The RTP asset will
    // either be overwritten by these files or assets will be added to the correct directory
    copyAdditionalResources: true,
    copyPatterns: [
        {
            from: "**/*.{m4a,ogg}",
            to: path.join(__dirname, "audio"),
            context: "rtp_overrides/audio/"
        },
        {
            from: "**/*.{css,ttf}",
            to: path.join(__dirname, "fonts"),
            context: "rtp_overrides/fonts/"
        },
        { from: "**/*.png", to: path.join(__dirname, "icon"), context: "rtp_overrides/icon/" },
        { from: "**/*.png", to: path.join(__dirname, "img"), context: "rtp_overrides/img/" },
        { from: "**/*.*", to: path.join(__dirname, "movies"), context: "rtp_overrides/movies/" }
    ]
};

module.exports = rmmvBuildConfig;
