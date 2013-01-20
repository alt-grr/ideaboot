var fs = require('fs');

var file = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<project version="4">\n' +
    '<component name="JavaScriptLibraryMappings">\n' +
    '<file url="PROJECT" libraries="{Node.js v0.8.16 Core Modules}" />\n' +
    '<includedPredefinedLibrary name="Node.js Globals" />\n' +
    '</component>\n' +
    '</project>';

exports.save = function () {
    if (!fs.exists(".idea")) {
        fs.mkdir(".idea", exports.writeFile);
    } else exports.writeFile();
}

exports.writeFile = function () {
    fs.writeFile(".idea/jsLibraryMappings.xml", file);
}