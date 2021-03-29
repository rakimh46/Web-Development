let Puppeteer = require("puppeteer");
let { password, email } = require("../../secrets");
let gtab;
console.log("before");
let browserPromise = Puppeteer.launch({
    headless: false
})
browserPromise.then(function (browserInstance) {
    let newTabPromise  = browserInstance.newPage();
    return newTabPromise;
}).then(function (newTab) {
    let loginPageWillBeOpenedPromise = newTab.goto("https://www.hackerrank.com/auth/login?h_l=body_middle_left_button&h_r=login");
    gtab = newTab;
    return loginPageWillBeOpenedPromise;
}).then(function () {
    let emailWillBeTypedPromise = gtab.type("#input-1", email, { delay: 2 });
    return emailWillBeTypedPromise;
}).then(function () {
    let passwordWillBeTypedPromise = gtab.type("#input-2", password, { delay: 200 });
    return passwordWillBeTypedPromise;
}).then(function () {
    let loginPageWillBeClickedPromise = gtab.click("button[data-analytics='LoginPassword']");
    return loginPageWillBeClickedPromise;
})
    .then(function () {
        console.log("Login Done");
    }).catch(function (err) {
        console.log(err);
    })
console.log("After");