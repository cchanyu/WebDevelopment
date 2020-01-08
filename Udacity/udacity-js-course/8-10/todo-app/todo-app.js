// 1. delete the dummy data
// 2. Read and parse the data when the app starts up
// 3. Stringify and write the data when new data is added

let todos = getSavedTodos();

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters);

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
})

document.querySelector('#new-todo').addEventListener('submit', function(e) {
    e.preventDefault();
    console.log('test')
    todos.push({
        id: uuidv4(),
        text: document.getElementById('new-todo-text').value,
        completed: false
        
    });
    saveTodos(todos);
    renderTodos(todos, filters)
    document.getElementById('new-todo-text').value = '';
});

document.querySelector('#hide-completed').addEventListener('change', function(e) {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
});


