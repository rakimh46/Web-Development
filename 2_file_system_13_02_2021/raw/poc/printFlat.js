//file system -> nodejs modules
//google
let fs = require("fs");
function isFileChecker(dirPath) {
    return fs.lstatSync(dirPath).isFile();
}
function readContent(dirPath) {
    return fs.readdirSync(dirPath);
}

function viewFlat(dirPath) {
    //path -> file/ folder
    let isFile = isFileChecker(dirPath);
    if (isFile == true) {
        console.log(dirPath + "*");
    }else{
        //directory
        //console.log
        //print path
        console.log(dirPath);
        //get childrens
        let childrens = readContent(dirPath);
        //call forview Flat
        for(let i=0; i < childrens.length; i++){
            viewFlat(dirPath+"/"+childrens[i]);
        }
        //console.log("children: ",childrens);
    }
}

viewFlat("D:/Friends");