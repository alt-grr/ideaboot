var fs = require('fs');

var file = '<?xml version="1.0" encoding="UTF-8"?>' +
    '<project version="4">' +
    '<component name="JavaScriptLibraryMappings">' +
    '<file url="PROJECT" libraries="{Node.js v0.8.16 Core Modules}" />' +
    '<includedPredefinedLibrary name="Node.js Globals" />' +
    '</component>' +
    '</project>';

exports.save = function () {
    if (!fs.exists(".idea")) {
        fs.mkdir(".idea", exports.writeFile);
    } else exports.writeFile();
}

exports.writeFile = function () {
    fs.writeFile(".idea/jsLibraryMappings.xml", file);
}