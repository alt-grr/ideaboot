var fs = require('fs');

var file = '<?xml version="1.0" encoding="UTF-8"?>'
    '<module type="WEB_MODULE" version="4">'
    '<component name="NewModuleRootManager" inherit-compiler-output="true">'
        '<exclude-output />'
        '<content url="file://$MODULE_DIR$">'
            '<excludeFolder url="file://$MODULE_DIR$/.idea" />'
        '</content>'
        '<orderEntry type="sourceFolder" forTests="false" />'
        '<orderEntry type="library" name="Node.js v0.8.16 Core Modules" level="application" />'
    '</component>'
    '</module>';

exports.save = function (c) {
    exports.writeFile(projectName);
}

exports.writeFile = function (projectName) {
    fs.writeFile(projectName+".iml", file);
}