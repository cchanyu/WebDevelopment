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

// 1. convert array to array of objects -> text, completed
// 2. create function to remove a todo by text value

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase();
    });
    
    if (index > -1) {
        todos.splice(index, 1);
    }
};

const getThingsToDo = function(todos) {
    return todos.filter(function(todo) {
        return !todo.completed;
    })
}

console.log(todos);