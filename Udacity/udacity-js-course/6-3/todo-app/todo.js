const todos = ['go to school','study in class','do the homework','go home','walk the dog'];

// delete the 3rd item
// add a new item onto the end
// remove the 1st item from the list

todos.splice(2,1);
todos.push('clean the house');
todos.shift();

console.log(`You have ${todos.length} todos`);
console.log(todos);