const todos = [{
    text: 'go to school',
    completed: true
},{
    text: 'study in class',
    completed: false
},{
    text: 'do the homework',
    completed: false
},{
    text: 'go home',
    completed: false
},{
    text: 'walk the dog',
    completed: false
}];

// you have 2 todos left (p element)
// add a p for each todo above (use text value)

const incompleteTodos = todos.filter(function (todo) {
    return !todo.completed;
});

const summary = document.createElement('h2');
summary.textContent = `You have ${incompleteTodos.length} todos left`;
document.querySelector('body').appendChild(summary);

todos.forEach(function (todo) {
    const p = document.createElement('p');
    p.textContent = todo.text;
    document.querySelector('body').appendChild(p);
})

document.querySelector('#todo').addEventListener("click", function(e) {
    console.log("Add a new todo...");
});