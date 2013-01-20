var fs = require('fs');

var file = '<?xml version="1.0" encoding="UTF-8"?>' +
    '<project version="4">' +
    '<component name="ProjectModuleManager">' +
    '<modules>' +
    '<module fileurl="file://$PROJECT_DIR$/$PROJECT_NAME$.iml" filepath="$PROJECT_DIR$/$PROJECT_NAME$.iml" />' +
    '</modules>' +
    '</component>' +
    '</project>';

exports.save = function (projectName) {
    if (!fs.exists(".idea")) {
        fs.mkdir(".idea", exports.writeFile);
    } else exports.writeFile(projectName);
}

exports.writeFile = function (projectName) {
    file = file.replace("$PROJECT_NAME$",projectName);
    fs.writeFile(".idea/modules.xml", file);
}