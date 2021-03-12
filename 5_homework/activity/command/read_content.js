let p = require("path");
let fs = require("fs");

function filedata(filename) {
    fs.readFile(filename, 'utf8', function (err, data) {
        if (err) throw err;
        console.log(p.basename(filename) + " -> " + data);
    });
}

function isFileorNot(dirpath) {
    //check extension
    return fs.lstatSync(dirpath).isFile();
}
function getContent(dirpath) {
    //content
    return fs.readdirSync(dirpath);
}
function readFile(dirpath) {
    let isFile = isFileorNot(dirpath);
    if (isFile == true) {
        filedata(dirpath);
    } else {
        let content = getContent(dirpath);
        for (let i = 0; i < content.length; i++) {
            let childPath = p.join(dirpath, content[i]);
            readFile(childPath);
        }
    }
}
module.exports = {
    contentfn: readFile
}
