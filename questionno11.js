// Write a for...in loop that iterates over the properties of an object and logs each property name and value.
let myCat ={
    name : "Mano",
    color : "white",
    age : 1,
    canEat : true
}
for(let key in myCat){
    console.log(key,":",myCat[key]);
}



