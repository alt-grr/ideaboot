/**
 *
 * IdeaBoot
 *
 */

var iml = require('./src/ImlCreator.js'),
    mod = require('./src/ModuleCreator.js'),
    lib = require('./src/ImlCreator.js');

var arg = require('optimist').argv;

if (arg._[0] == "init") {
    if (arg._[1]) {
        var projectname = arg._[1];

        iml.save(projectname);
        mod.save(projectname);
        lib.save(projectname);

    } else {
        console.log("A projectname is required");
    }
}

