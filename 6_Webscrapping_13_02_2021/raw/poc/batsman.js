//https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary
let url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";
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
    let teamNameElemArr = selectorTool(".Collapsible h5");
    let teamNameArr = [];
    for (let i = 0; i < teamNameElemArr.length; i++) {
        let teamName = selectorTool(teamNameElemArr[i]).text();
        teamName = teamName.split("INNINGS")[0];
        teamName = teamName.trim();
        teamNameArr.push(teamName);
    }

    let batsmantableArr = selectorTool(".table.batsman");
    
    for (let i = 0; i < batsmantableArr.length; i++) {
        let batsmanName = selectorTool(batsmantableArr[i]).find("tbody tr .batsman-cell");
        
        for (let j = 0; j < batsmanName.length; j++){
            let name = selectorTool(batsmanName[j]).text();
            console.log(name+" of "+teamNameArr[i]);
        }
        console.log("-----------------");
    }


}
console.log("after");