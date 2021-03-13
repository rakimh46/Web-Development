// npm init -y
//npm install request cheerio

let cheerio = require("cheerio");
let request = require("request");
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary";
request(url, cb);
console.log("before");
function cb(error, response, html) {
    if (error) {
        throw error;
    } else {
        extractHtml(html);
    }
}

function extractHtml(html) {
    let selectorTool = cheerio.load(html);
    let allCommentaries = selectorTool(".d-flex.match-comment-padder.align-items-center .match-comment-long-text");

    // another ex
    //let allCommentaries = selectorTool(".sidebar-widget-coverage-item .content .title");
    

    console.log(allCommentaries.length);
    //rule -> index, cheerioselector
    // for (let i = 0; i < allCommentaries.length; i++) {
    //     let lastbComment = selectorTool(allCommentaries[i]).text();
    //     console.log(lastbComment);
    //     console.log("------------------");
    // }

    let lastbComment = selectorTool(allCommentaries[0]).text();
    console.log(lastbComment);

}
console.log("after");