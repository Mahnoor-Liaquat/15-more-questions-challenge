// How can you clone an object in JavaScript and also give one example each deep copy, shallow copy, and reference copy

// Shallow copy using Object.assign
const obj = { a: 1, b: { c: 2 } };
const shallowCopy = Object.assign({}, obj);

console.log(shallowCopy); // { a: 1, b: { c: 2 } }
console.log(obj === shallowCopy); // false
console.log(obj.a === shallowCopy.a); // true (reference to the nested object is the same)

// Deep copy using JSON.stringify and JSON.parse
const oriObject = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(oriObject));

console.log(deepCopy); // { a: 1, b: { c: 2 } }
console.log(oriObject === deepCopy); // false
console.log(oriObject.b === deepCopy.b); // false (new nested object is created)

// Reference copy
const originalObject = { a: 1, b: { c: 2 } };
const referenceCopy = originalObject;

console.log(referenceCopy); // { a: 1, b: { c: 2 } }
console.log(originalObject === referenceCopy); // true (both refer to the same object)
console.log(originalObject.c === referenceCopy.c); // true (reference to the nested object is the same)


