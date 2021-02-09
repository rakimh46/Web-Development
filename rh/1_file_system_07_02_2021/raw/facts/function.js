//function

function hello(param){
    console.log(typeof param);
    console.log("Greetings everyone with", param);
    let rval=Math.random()<0.5?"good":false;
    return rval;
}
console.log(hello(10));
console.log("....................................");
let rval=hello("Hola");
console.log(rval);