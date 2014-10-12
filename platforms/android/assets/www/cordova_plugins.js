cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.borismus.webintent/www/webintent.js",
        "id": "com.borismus.webintent.WebIntent",
        "clobbers": [
            "CDV.WebIntent"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.borismus.webintent": "3.0.0"
}
// BOTTOM OF METADATA
});