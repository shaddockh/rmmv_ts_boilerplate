/*:
 * @plugindesc Sample Template Plugin
 * @author You
 *
 * @param My Parameter
 * @desc My parameter description
 * @default True
 *
 * @help
 * This is the help section.
 */
(function() {
    const pluginName = "TemplatePlugin";
    const parameters = PluginManager.parameters(pluginName);
    const myParameter = Boolean(parameters["My Parameter"]) || true;
    console.log(myParameter);
})();
