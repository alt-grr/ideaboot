/**
 *
 * IdeaBoot
 *
 */

var func = require('./src/Functions.js');

var arg = require('optimist')
    .options(["force"])
    .usage(func.documentation())
    .argv;

switch (arg._[0]) {
    case "init":
        func.init(arg);
        break;
    case "remove":
        break;
    default:
        console.log(func.documentation());
}
