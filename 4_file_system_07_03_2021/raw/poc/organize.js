let types = {
    media: ["mp4", "mkv", "mp3"],
    archives: ["zip", "7z", "rar", "tar", "gz", "ar", "iso", "xz"],
    documents: ["docx", "doc", "pdf", "xlsx", "xls", "odt", "ods", "odg", "odf", "txt", "ps", "tex"],
    app: ["exe", "dmg", "pkg", "deb"]
}

//organized files
//app
// media
//archive
//documents
//others
function dirCreator(dirpath) {
    if (fs.existsSync(dirpath) == false) {
        fs.mkdirSync(dirpath);
    }
}

let fs = require("fs");
let path = require("path");

//mkdir ,mkdirsync
let input = process.argv.slice(2);
let dirpath = input[0];
let orgFilePath = path.join(dirpath, "organized_files");
dirCreator(orgFilePath);

for (let key in types) {
    let innerdirPath = path.join(orgFilePath, key);
    dirCreator(innerdirPath);
}

//orthers
let otherPath = path.join(orgFilePath, "others");
dirCreator(otherPath);

//traverse
//identity -> det directory
//copy

function getDirectoryName(dirpath) {
    let strArr = dirpath.split(".");
    let ext = strArr.pop();
    //js

    //.js
    //path.extname(dirpath);

    for (let key in types) {
        //types[key].includes(ext);
        for (let i = 0; i < types[key].length; i++) {
            if (types[key][i] == ext) {
                return key;
            }
        }
    }
    return "others";
}

function isFileorNot(dirpath) {
    //check extension
    return fs.lstatSync(dirpath).isFile();
}

function getContent(dirpath) {
    //content
    return fs.readdirSync(dirpath);
}

function copyFiletoFolder(dirpath, destFolder){
    let orgFileName=path.basename(dirpath);
    let destFilePath = path.join(destFolder, orgFileName);
    fs.copyFileSync(dirpath, destFilePath);
}

function OrganizeDir(dirpath) {
    let isFile = isFileorNot(dirpath);
    if (isFile == true) {

        //identity  ->dest  Directory
        //copy
        let folderName = getDirectoryName(dirpath);
        console.log(dirpath, "->", folderName);
        //other
        let destFolder = path.join(orgFilePath, folderName);
        copyFiletoFolder(dirpath, destFolder);
    } else {
        let content = getContent(dirpath);
        for (let i = 0; i < content.length; i++) {
            let childPath = path.join(dirpath, content[i])
            OrganizeDir(childPath);
        }
    }
}

OrganizeDir(dirpath);


