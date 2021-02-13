let fs = require("fs");
let path=require("path");
function isFileChecker(dirPath) {
    return fs.lstatSync(dirPath).isFile();
}
function readContent(dirPath) {
    return fs.readdirSync(dirPath);
}

function viewTree(dirPath,indent) {
    //path -> file/ folder
    let isFile = isFileChecker(dirPath);
    if (isFile == true) {
        console.log(indent,path.basename(dirPath) + "*");
    }else{
        //directory
        //console.log
        //print path
        console.log(indent,path.basename(dirPath));
        //get childrens
        let childrens = readContent(dirPath);
        //call forview Flat
        for(let i=0; i < childrens.length; i++){
            viewTree(path.join(dirPath,childrens[i]),indent+"\t",);
        }
        //console.log("children: ",childrens);
    }
}

viewTree("d10","");