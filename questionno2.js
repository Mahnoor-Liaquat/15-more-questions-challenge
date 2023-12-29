// How does the optional chaining operator (?.) work, and how can it be used to access nested properties of an object?

const person = {
  name: "Ali",
  address: {
    street: "3",
    city: "Karachi",
    town: "Lyari",
  },
};

// Without optional chaining
const city1 = person && person.address && person.address.city; 
console.log(city1);

// With optional chaining
const city2 = person?.address?.city;
console.log(city2);