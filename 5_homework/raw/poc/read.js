let p = require("path");
let fs = require("fs");
let input = process.argv.slice(2);
let dirpath;
if (input.length > 1) {
    for (let i = 0; i < input.length; i++) {
        dirpath = input[i];
        viewTree(dirpath);
    }
} else {
    dirpath = input[0];
    viewTree(dirpath);
}

function filedata(filename) {
    fs.readFile(filename, cb);
    function cb(err, data) {
        if (err) throw err;
        console.log(filename + " -> " + data);
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
function viewTree(dirpath) {
    let isFile = isFileorNot(dirpath);
    if (isFile == true) {
        // let strArr = dirpath.split("\\");
        // let toPrint = strArr.pop();
        //or p.basename(dirpath)
        //console.log(p.basename(dirpath) + "*");
        filedata(dirpath);
    } else {
        // let strArr = dirpath.split("\\");
        // let toPrint = strArr.pop();
        //console.log(p.basename(dirpath));
        // recursion
        let content = getContent(dirpath);
        //console.log(content);
        for (let i = 0; i < content.length; i++) {
            let childPath = p.join(dirpath, content[i]);
            viewTree(childPath);
        }
    }
}
