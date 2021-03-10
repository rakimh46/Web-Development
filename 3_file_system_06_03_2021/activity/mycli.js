//input
let input = process.argv.slice(2);
// node mycli.js view <dirname> tree
// node mycli.js view <dirname> flat
// node mycli.js organize <dirname>
// node mycli.js help
let cmd = input[0];
switch (cmd) {
    case "view":
        console.log("view command implemented");
        break;
    case "organize":
        console.log("view command implemented");
        break;
    case "help":
        console.log(`List of all the commands
        1.node mycli.js view <dirname> tree
        2. node mycli.js view <dirname> flat
        3. node mycli.js organize <dirname>
        4. node mycli.js help
        `
        );
        break;
    default:
        console.log("Wrong command :(type help to see the list of all commands");
}

function view(dirname, mode) {
    if(mode == "tree"){
        console.log("tree implemented");
    }else if (mode == "flat"){
        viewFlat(path);
        console.log("flat view implemented");
    }else  {
        console.log("wrong mode");
    }
}

function viewFlat(dirPath);