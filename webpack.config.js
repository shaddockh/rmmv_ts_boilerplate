const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const fs = require("fs");
const rmmvBuildConfig = require("./rmmv.build.config");

// Iterate over the file in the ./ts/plugins directory and create a bundle for each
const rmmvPluginList = fs
    .readdirSync(rmmvBuildConfig.pluginPath)
    .filter(f => f.endsWith(".ts") && !f.endsWith(".d.ts"));

const rmmvPluginBundleEntries = {};
rmmvPluginList.forEach(
    p => (rmmvPluginBundleEntries[p.replace(/\.ts$/, "")] = `${rmmvBuildConfig.pluginPath}/${p}`)
);

const webpackPlugins = [new webpack.optimize.OccurrenceOrderPlugin()];

if (rmmvBuildConfig.copyAdditionalResources) {
    webpackPlugins.push(new CopyWebpackPlugin(rmmvBuildConfig.copyPatterns));
}

if (rmmvBuildConfig.identifySharedCode) {
    webpackPlugins.push(
        new webpack.optimize.CommonsChunkPlugin({
            name: rmmvBuildConfig.sharedCodeBundleName,
            //chunks: ["pageA", "pageB", "admin-commons"],
            minChunks: 2
        })
    );
}

const plugins = {
    entry: rmmvPluginBundleEntries,
    output: {
        filename: "[name].js",
        path: __dirname + "/js/plugins"
    },
    plugins: webpackPlugins,
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader",
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    }
};

module.exports = [plugins];
