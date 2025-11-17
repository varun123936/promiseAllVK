function deepFreeze(obj) {
  // Retrieve property names
  const propNames = Object.getOwnPropertyNames(obj);
  console.log(propNames)

  // Freeze properties before freezing self
  for (const name of propNames) {
    const value = obj[name];

    // If value is an object, freeze it recursively
    if (value && typeof value === 'object') {
      deepFreeze(value);
    }
  }

  return Object.freeze(obj);
}

const user = {
  name: 'Varun',
  address: {
    city: 'Hyderabad'
  }
};

deepFreeze(user);

user.address.city = 'Delhi'; // ❌ No effect
console.log(user.address.city); // 'Hyderabad'