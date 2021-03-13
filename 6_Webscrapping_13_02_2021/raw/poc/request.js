// npm init -y
//npm install request cheerio

let request=require("request");
request("https://www.google.com",cb);
console.log("before");
function cb(error,response,html){
    if(error) {
        throw error;
    }else { 
        console.log(html);
    }
}
console.log("after");