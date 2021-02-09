// Array
// java ->array is a collection of anything 

let arr =[
    1,
    1.1,
    "string",
    null,
    true,
    {
        name: "jasbir",
        lastName: "singh"
    },
    [1,2,3,4,5,6],
    function syaHi(){
        console.log("hello from sayHi");
        let a=2;
        return a*a;
    }
];
//get
console.log(arr);
console.log("val at idx 3", arr[3]);
console.log("val at idx 5", arr[5].name);
console.log("val at idx 7 idx =", arr[7]());

//loop
for( let i=0; i<arr.length; i++){
    console.log(i, ":", arr[i]);
}

//update 
arr[5]="value";

for(let key in arr){
    console.log("key :", key, "|value :", arr[key]);
}
arr[95]="some value";
console.log("at index 45", arr[45]);
arr["invalid"]="some val";
arr["invalid2"]="some val";
arr["invalid3"]="some val";
arr["invalid4"]="some val";
arr["invalid5"]="some val";
arr["invalid6"]="some val";
arr["invalid7"]="some val";
arr[15]="15the val";
console.log(arr);
console.log(arr.length);
const a=10;
console.log(arr.length);
console.log("''''''''''");

// addlast ->  push,
// removeLast -> pop,
arr.pop();
console.log(arr);

//add first -> unshift
arr.unshift();

//removefirst -> shift
arr.shift();

//gives copy of sliced arr
let sliced =arr.slice(2,4);
console.log("sliced",sliced);
console.log("actual",arr.length);

//remove entries from array
let removeEntries =arr.splice(2,2);
console.log(arr);
console.log(removeEntries);
let string = "this a string tobe searched";
let strArr = string.split(" ");
let joinedstr = strArr.join("+");
console.log(strArr);
console.log(strArr);
console.log(joinedstr);