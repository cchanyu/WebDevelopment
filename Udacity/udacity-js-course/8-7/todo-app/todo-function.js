// Get saved todos
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos');

    if(todosJSON !== null) {
    todos = JSON.parse(todosJSON);
    } else {
        return []
    }
}

// saved todos
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render todos
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
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos));
    
    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo));
    })
}



// get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');

    // set up todo checkbox
    checkbox.setAttribute('type', 'checkbox');
    todoEl.appendChild(checkbox);

    // set up todo text
    todoText.textContent = todo.text;
    todoEl.appendChild(todoText);

    // set up the remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton);

    return todoEl;
}

// get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    return summary;
}