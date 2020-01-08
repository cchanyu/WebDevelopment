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

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1;
        } else if (!b.completed && a.completed) {
            return 1;
        } else {
            return 0;
        }
    });
}

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

sortTodos(todos);
console.log(todos);