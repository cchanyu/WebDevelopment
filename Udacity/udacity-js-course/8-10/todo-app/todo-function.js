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

// remove todos
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo) {
        return todo.id == id
    })

    if (todoIndex > -1) {
        todo.splice(todoIndex, 1)
    }
}

// toggle completed todos
const toggleTodo = function(id) {
    const todo = todos.find(function (todo) {
        return todo.id == id;
    });

    if(todo !== undefined) {
        todo.completed = !todo.completed;
    }
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
    checkbox.checked = todo.completed;
    todoEl.appendChild(checkbox);
    checkboxbox.addEventListener('change', function () {
        toggleTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    })

    // set up todo text
    todoText.textContent = todo.text;
    todoEl.appendChild(todoText);

    // set up the remove button
    removeButton.textContent = 'x'
    todoEl.appendChild(removeButton);
    removeButton.addEventListener('click', function() {
        removeTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    })

    return todoEl;
}

// get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    return summary;
}