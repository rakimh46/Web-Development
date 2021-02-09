// top -> bootom,left -> right
console.log("Hello PP :)");

// variable declare
let a;

//undefined
//basic data types -> undefined,nuber,string boolean, null
//statically typed language
//int a;
a=10;
a="Hi i am string";
console.log("a is ",a);

// javascript -> syntax(java)(Brenden eich)(Netscape)[10]
// for,while, if else break, return, class;
// search -> undefined, null
let flag = true;
let num = 23;
for(let i=2; i*i <=num;i++){
    if(num%i==0){
        flag=false;
        break;
    }
}
if(flag==true){
    console.log(num,"prime");
}else{
    console.log(num,"not prime");
}