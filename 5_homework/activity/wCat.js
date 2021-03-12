let input = process.argv.slice(2);
let cmd = input[0];
fileContentObj = require("./command/read_content.js");
bigLineObj = require("./command/bigLine.js");
switch (cmd) {
    case "file_content":
        /* 
        1- node wcat.js filepath => displays content of the file in the terminal 
        2- node wcat.js filepath1 filepath2 filepath3... => 
           displays content of all files in the terminal(contactinated form) in the given order.
        */
        for (let i = 1; i < input.length; i++) {
            fileContentObj.contentfn(input[i]);
        }
        break;

    case "-s":
        //3- node wcat.js -s filepath => convert big line breaks into a singular line break
        for (let i = 1; i < input.length; i++) {
            bigLineObj.bigLinefn(input[i]);
        }        
        break;

    default:
        console.log("wrong code");
}



















