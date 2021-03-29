let fs = require("fs");
// npm   install puppeteer
let puppeteer = require("puppeteer");

//browser launch
let browserWillBeLaunchPromise = puppeteer.launch({
    headless: false
})



// first Method
// browserWillBeLaunchPromise
//     .then(function (browserInstance) {
//         //new tab
//         let newPagePromise = browserInstance.newPage();
//         newPagePromise
//             .then(function (newPage) {
//                 console.log("new tab opened");
//                 //go to pepcoding
//                 let pageWillBeOpenedPromise = newPage.goto("https://www.pepcoding.com/");
//                 pageWillBeOpenedPromise
//                     .then(function () {
//                         console.log("page is opened");
//                     })

//             })

//     })



//second method
browserWillBeLaunchPromise
    .then(function (browserInstance) {
        //new tab
        let newPagePromise = browserInstance.newPage();
        return newPagePromise;
    }).then(function (newPage) {
        console.log("new tab opened");
        //go to pepcoding
        let pageWillBeOpenedPromise = newPage.goto("https://www.pepcoding.com/");
        return pageWillBeOpenedPromise;

    }).then(function () {
        console.log("page is opened");
    }).catch(function (err) {
        console.log("err", err);
    })