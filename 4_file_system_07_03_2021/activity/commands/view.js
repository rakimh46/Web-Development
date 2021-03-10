//file , folder
let fs = require("fs");
let p = require("path");
// let input = process.argv.slice(2);
// let path = input[0];
//nodejs fs module -> function


function view(dirname, mode) {
    if(mode == "tree"){
        viewTree(dirname, "");
    }else if (mode == "flat"){
        viewFlat(dirname);
        console.log("flat view implemented");
    }else  {
        console.log("wrong mode");
    }
}

function isFileorNot(dirpath) {
    //check extension
    return fs.lstatSync(dirpath).isFile();
}
function getContent(dirpath) {
    //content
    return fs.readdirSync(dirpath);
}

function viewFlat(dirpath) {
    let isFile = isFileorNot(dirpath);
    if (isFile == true) {
        console.log(dirpath + "*");
    } else {
        console.log(dirpath);
        // recursion
        let content = getContent(dirpath);
        //console.log(content);
        for (let i = 0; i < content.length; i++) {
            let childPath = dirpath + "\\" + content[i];
            viewFlat(childPath);
        }
    }

}

function viewTree(dirpath, indent) {
    let isFile = isFileorNot(dirpath);
    if (isFile == true) {
        // let strArr = dirpath.split("\\");
        // let toPrint = strArr.pop();
        //or p.basename(dirpath)
        console.log(indent, p.basename(dirpath) + "*");
    } else {
        // let strArr = dirpath.split("\\");
        // let toPrint = strArr.pop();
        console.log(indent, p.basename(dirpath));
        // recursion
        let content = getContent(dirpath);
        //console.log(content);
        for (let i = 0; i < content.length; i++) {
            let childPath = p.join(dirpath, content[i]);
            // dirpath + "\\"  + content[i];
            //or p.join(dirpath, content[i])
            viewTree(childPath, indent + "\t");
        }
    }
}

module.exports = {
    viewfn: view
}
