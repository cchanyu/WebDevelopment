// 1. delete the dummy data
// 2. Read and parse the data when the app starts up
// 3. Stringify and write the data when new data is added

let todos = [];

const filters = {
    searchText: '',
    hideCompleted: false
}

const todosJSON = localStorage.getItem('todos');

if(todosJSON !== null) {
    todos = JSON.parse(todosJSON);
}

const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter (function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

        return searchTextMatch && hideCompletedMatch
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
    console.log(e.target.value);
});

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
})


document.querySelector('#form').addEventListener("submit", function(e) {
    e.preventDefault();
    todos.push({
        text: document.getElementById('new-todo-text').value,
        completed: false
    });

    localStorage.setItem('todos', JSON.stringify(todos))

    renderTodos(todos, filters)
    document.getElementById('new-todo-text').value = '';
});

document.querySelector('#hide-completed').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
});