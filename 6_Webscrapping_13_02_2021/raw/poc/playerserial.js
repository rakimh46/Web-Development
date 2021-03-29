let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results"
let request = require("request");
let cheerio = require("cheerio");
console.log("Before");
request(url, cb);
function cb(error, response, html) {
    if (error) {
        console.log(error)
    } else {
        // console.log(html);
        extractHtml(html);
    }
}
function extractHtml(html) {
    let selectorTool = cheerio.load(html);
    let matchCard= selectorTool(".col-md-8.col-16");
    console.log(matchCard.length);
    for(let i=0; i<matchCard.length;i++){
        let cardBtns=selectorTool(matchCard[i]).find(".btn.btn-sm.btn-outline-dark.match-cta");
        let linkofMatch = selectorTool(cardBtns[2]).attr("href");
        let fulllink="https://www.espncricinfo.com"+linkofMatch;
        getPlayerofTheMatch(fulllink);
    }
}


