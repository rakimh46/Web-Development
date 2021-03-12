let input = process.argv.slice(2);
let cmd = input[0];
fileContentObj = require("./command/read_content.js");
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
    default:
        console.log("wrong");
}



















