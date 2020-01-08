const todos = ['go to school','study in class','do the homework','go home','walk the dog'];

todos.splice(2,1);
todos.push('clean the house');
todos.shift();

console.log(`You have ${todos.length} todos`);

// 1. the first item
// 2. the second item

todos.forEach(function(todo, index) {
    const num = index + 1;
    console.log(`${num}, ${todo}`);
});