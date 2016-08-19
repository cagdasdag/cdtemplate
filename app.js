var cdjtemplate = require("./index.js");
var fs = require('fs');


var fileContents = fs.readFileSync('./test/index.cd', 'utf8');
var jsonValues = fs.readFileSync('./test/index.cdj', 'utf8');
jsonValues = JSON.parse(jsonValues);

console.log(cdjtemplate(fileContents, jsonValues));
