'use strict'

let todos = getSavedTodos();

const filters = {
    searchText: '',
    hideCompleted: false
}

renderTodos(todos, filters);

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value;
    renderTodos(todos, filters);
})

document.querySelector('#new-todo').addEventListener('submit', (e) => {
    const text = document.getElementById('new-todo-text').value.trim();
    e.preventDefault();

    if(text.length > 0) {
        console.log('test')
        todos.push({
            id: uuidv4(),
            text,
            completed: false
            
        });
        saveTodos(todos);
        renderTodos(todos, filters)
        document.getElementById('new-todo-text').value = '';
    }
});

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    filters.hideCompleted = e.target.checked;
    renderTodos(todos, filters);
});


