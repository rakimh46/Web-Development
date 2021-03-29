let fs = require("fs");
console.log("before");

//callback is an older way to do async prgramming
// fs.readFile("f1.txt", function cb(err, data) ){
//     if (err) {
//         console.log(err);
//     } else {
//         console.log("data->" + data);
//     }
// }

//promise return intial state is always pending
let promise = fs.promises.readFile("f1.txt");
console.log("initial state", promise);
console.log("after");

//comsumer function it will be called when a promise is fullfiled
promise
    .then(function (data) {
        console.log(data);
    })

//reject
promise
    .catch(function (err) {
        console.log("err", err);
    })

// setTimeout(function (){
// console.log("final state", promise);
// }, 2000)

console.log("hello");