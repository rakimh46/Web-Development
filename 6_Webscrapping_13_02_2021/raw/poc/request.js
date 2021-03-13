// npm init -y
//npm install request cheerio

const cheerio = require("cheerio");
let request=require("request");
request("https://www.google.com",cb);
console.log("before");
function cb(error,response,html){
    if(error) {
        throw error;
    }else { 
        extractHtml(html);
    }
}

function extractHtml(html){
    let selectorTool = cheerio.load(html);
    let selectElem  = selectorTool("#SIvCob");
    console.log(selectElem.text());
    console.log(selectElem.html());
}
console.log("after");