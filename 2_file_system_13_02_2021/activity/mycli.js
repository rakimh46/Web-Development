//commands->
//view --tree, --flat
//organize-> same floder , multiple folder
//help
//[node, mycli.js, view, dirName, mode]
//node mycli.js organiz -/foldername
//node mycli.js help

let {helpFn}=require("./commands/help.js");
let {organizeFn}=require("./commands/organize.js");
let {viewFn}=require("./commands/view.js");

let input = process.argv.slice(2);
let cmd = input[0];
switch (cmd) {
    case "view":
        viewFn();
        break;
    case "organize":
        organizeFn();
        break;     
    case "help":
        helpFn();
        break;     
    default:
        console.log("Wrong command enter help to see list of all the commands");    
}

