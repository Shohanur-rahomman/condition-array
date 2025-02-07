const number = [1,2,3,4,5,6,7,8,9];
const number2 = [50,60,70];

// tow array add
// fast rul
const newArray = number.concat(number2)
// best way
const okArray = [...number,...number2]
console.log(okArray)

// const newNumber = number.slice(1,4);
// const update = number.splice(1,2);
const update = number.splice(2,8);
// console.log(update);
// console.log(number);
// console.log(newNumber);