let fs = require('fs');
let p = require('path');

function bigline(filename) {
    fs.readFile(filename, 'utf8', function (err, data) {
        var arr = data.toString().split('\n'),
            names = [];
        for (var i in arr) {
            var trimmed = arr[i].trim();
            if (trimmed.length !== 0) {
                names.push(trimmed);
            }
        }
        let s = "";
        for (let j = 0; j < arr.length; j++) {
            if (names[j] == undefined) {
                break;
            }
            s += names[j] + " ";
            //console.log(names[j]);
        }
        console.log(s);
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
function bigLineFile(dirpath) {
    let isFile = isFileorNot(dirpath);
    if (isFile == true) {
        bigline(dirpath);
    } else {
        let content = getContent(dirpath);
        for (let i = 0; i < content.length; i++) {
            let childPath = p.join(dirpath, content[i]);
            bigLineFile(childPath);
        }
    }
}
module.exports = {
    bigLinefn: bigLineFile
}