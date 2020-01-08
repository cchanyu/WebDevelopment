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

const filters = {
    searchText: ''
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter (function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed;
    });

    document.querySelector(`#todos`).innerHTML = ''
    
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    document.querySelector('#todos').appendChild(summary);
    
    filteredTodos.forEach(function (todo) {
        const p = document.createElement('p');
        p.textContent = todo.text;
        document.querySelector('#todos').appendChild(p);
    })
}

renderTodos(todos, filters);

document.querySelector('#todo').addEventListener('click', function(e) {
    console.log("Add a new todo...");
});

document.querySelector('#new-todo-text').addEventListener('input', function(e){
    console.log(document.getElementById('new-todo-text').value);
});

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = document.getElementById('new-todo-text').value;
    renderTodos(todos, filters);
})