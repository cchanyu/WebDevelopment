// Type Coercion - a string, a number, a boolean
// instead of error, you will still get a number, 
// true = 1, false = 0, so be careful

const value = false + 12;
const type = typeof value
console.log(type);
console.log(value);