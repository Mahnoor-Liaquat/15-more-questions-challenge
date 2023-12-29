// Provide an example of using optional chaining within a loop to access a potentially missing property of an object.

const users = [
    { name: 'Maham', age: 20}, 
    { name: 'Maha', age: 14, address: { city: 'Karachi', zip: '123' } },
    { name: 'Mahram', age: 18, address: { city: 'Islamabad', zip: '456' } },
  ];

  for (const user of users) {
    const city = user?.address?.city || 'we dont know';
    console.log(`${user.name} lives in ${city}`);
  }
  

  