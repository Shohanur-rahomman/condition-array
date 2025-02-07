const friends = ['babul','abul','kalam','joy'];
const brother = ['babul','abul','kalam','joy'];

// array check
console.log(Array.isArray(friends));
// array length check
console.log(friends.length);

// find array element number
console.log(friends.indexOf('abul'));

// best way to find array element
console.log(friends.includes('abul'));

// array last element add
friends.push('jamal');

// remove last element
friends.pop();

// array fast element remove
const removeElement = friends.shift();
console.log(removeElement);
friends.shift();
console.log(friends);

// array fast element add
friends.unshift('joynal');

console.log(friends);