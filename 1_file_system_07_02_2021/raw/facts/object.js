// object

// car ->blueprint -> new car develop
// object -> class-> oject ->
//protoypal opps
//empty object declare
//json -> javascript object notation
//value -> properties object
//function -> methods
let obj = {
    name: "steve",
    lastName: "rogers",
    address: {
        city: "Manghatan",
        state: "New york",
    },
    isAvenger: false,
    age:35,
    movies: ["civil war","first avenger","age of ultron"], 
    sayhi: function (param){
        console.log("cap say's hi", param);
        return "return blessing";
    }
}
   //get
console.log("GET");
let key ="address";
console.log("adress object", obj[key]); //1
console.log("address object :", obj.address); //2    1 and 2 same method
console.log("address object :", obj.address.state);  // 
console.log("Movies :", obj.movies[1]);  // array index print
console.log("function is inside an object", obj.sayhi("i am a paran"));
console.log("----------------------");
//update set
console.log("UPDATE");
obj.friends = ["peter", "thor", "tony"];
obj.age =36;
obj.address.pincode =110084;
obj.movies[3]="infinty war";
console.log("obj = ",obj);
console.log("----------------------");

//delete
console.log("DELETE");
delete obj.movies;
console.log("obj = ",obj);
console.log("----------------------");

//loop
console.log("LOOP");
for(let key in obj){
    console.log("key :",key, "|value :", obj[key]);
    console.log("key :",key, "|value :", obj.key);   
}
console.log(obj.abc);
console.log("----------------------");

