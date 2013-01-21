var iml = require('./ImlCreator.js'),
    mod = require('./ModuleCreator.js'),
    lib = require('./LibraryCreator.js'),
    fs = require('fs');

exports.init = function (args) {
    fs.exists(".idea", function (data) {
        if (data && !args.force) {
            console.log("This folder contains an idea project. Exiting! (use --force)");
            return;
        }

        var projectname;

        if (args._.length > 1) {
            projectname = args._[1];
        } else {
            projectname = fs.realpathSync()
            var patharray = projectname.split('/');
            projectname = patharray[patharray.length - 1];
        }

        console.log("Initializing Project " + projectname + "....");
        iml.save(projectname);
        mod.save(projectname);
        lib.save();
    })
}

exports.documentation = function (args) {
    return ("usage: ideaboot init {projectname}");
}