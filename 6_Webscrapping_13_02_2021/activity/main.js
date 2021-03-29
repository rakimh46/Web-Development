const cheerio = require("cheerio");
let request = require("request");
let fs = require("fs");
let path = require("path");
let PDFDocument = require('pdfkit');

console.log("before");

let url = "https://www.github.com/topics";
request(url, cb);
function cb(error, response, html) {
    if (error) {
        throw error;
    } else {
        extractHtml(html);
    }
}

function extractHtml(html) {
    let selectorTool = cheerio.load(html);
    let topicsArr = selectorTool(".no-underline.d-flex.flex-column.flex-justify-center");
    for (let i = 0; i < topicsArr.length; i++) {
        let link = selectorTool(topicsArr[i]).attr("href");
        let fulllink = "https://github.com/" + link;
        processrepoPage(fulllink);
    }
}

function processrepoPage(url) {
    request(url, cb);
    function cb(err, resp, html) {
        if (err) {
            console.log(err);
        } else {
            getRepoLinks(html);
        }
    }
}
function getRepoLinks(html) {
    let selTool = cheerio.load(html);
    let topicElem = selTool(".h1-mktg");
    let repolinks = selTool("a.text-bold");
    //console.log(topicElem.text());
    let topicName = topicElem.text().trim();
    dirCreater(topicName);
    for (let i = 0; i < 8; i++) {
        let repoPageLink = selTool(repolinks[i]).attr("href");
        let repoName = repoPageLink.split("/").pop();
        repoName = repoName.trim();
        //console.log(repoName);
        //createFile(repoName, topicName);
        let fullRepoLink = "https://github.com" + repoPageLink + "/issues";
        getIssues(repoName, topicName, fullRepoLink);
    }
    console.log("--------------------------");
}

function getIssues(repoName, topicName, repoPageLink) {
    request(repoPageLink, cb);
    function cb(err, resp, html) {
        if (err) {
            if (resp.statusCode == 404) {
                console.log("no issues  Page found");
            } else {
                console.log(err);
            }
        } else {
            extractIssues(html, repoName, topicName);
        }
    }
}

function extractIssues(html, repoName, topicName) {
    let selTool = cheerio.load(html);
    let IssuesAnchAr = selTool("a.Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
    let arr = [];
    for (let i = 0; i < IssuesAnchAr.length; i++) {
        let name = selTool(IssuesAnchAr[i]).text();
        let link = selTool(IssuesAnchAr[i]).attr("href");
        arr.push({
            "Name": name,
            "Link": "https://github.com" + link
        })

    }
    let filePath = path.join(__dirname, topicName, repoName + ".pdf");
    let pdfDoc = new PDFDocument;
    pdfDoc.pipe(fs.createWriteStream(filePath));
    pdfDoc.text(JSON.stringify(arr));
    pdfDoc.end();
    // fs.writeFileSync(filePath, JSON.stringify(arr));
    // file write 
    // console.table(arr);
}

function dirCreater(topicName) {
    let pathOfFolder = path.join(__dirname, topicName);
    if (fs.existsSync(pathOfFolder) == false) {
        fs.mkdirSync(pathOfFolder);
    }

}
function createFile(repoName, topicName) {
    let pathOfFile = path.join(__dirname, topicName, repoName + ".json");
    if (fs.existsSync(pathOfFile) == false) {
        let createStream = fs.createWriteStream(pathOfFile);
        createStream.end();
    }
}
console.log("after");