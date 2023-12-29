// Compare the for...in loop and the for...of loop in terms of their use cases and the types of values they iterate over.

// for...in when iterating over the properties of an object, and use for...of when iterating over the values of an iterable object like an array,strings,maps,sets etc
let mobilePhone = {
    modelName : "Redmi Note 9S",
    price : 37000,
    RAM: 128
}
for(let key in mobilePhone){
    console.log(key ,":", mobilePhone[key]);
}

let arr =[1,2,3,4,5,6,7,8,9,10];
for(let val of arr){
    console.log(val);
}


