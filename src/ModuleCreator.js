var fs = require('fs');

var file = '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<project version="4">\n' +
    '<component name="ProjectModuleManager">\n' +
    '<modules>\n' +
    '<module fileurl="file://$PROJECT_DIR$/$PROJECT_NAME$.iml" filepath="$PROJECT_DIR$/$PROJECT_NAME$.iml" />\n' +
    '</modules>\n' +
    '</component>\n' +
    '</project>';

exports.save = function (projectName) {
    if (!fs.exists(".idea")) {
        fs.mkdir(".idea", function () {
            exports.writeFile(projectName)
        });
    } else exports.writeFile(projectName);
}

exports.writeFile = function (projectName) {
    file = file.replace(/\$PROJECT_NAME\$/g, projectName);
    fs.writeFile(".idea/modules.xml", file);
}