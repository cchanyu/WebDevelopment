// Get saved todos
const getSavedTodos = () => {
    const todosJSON = localStorage.getItem('todos');

    if(todosJSON !== null) {
    todos = JSON.parse(todosJSON);
    } else {
        return []
    }
}

// saved todos
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// remove todos
const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id == id);

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
    }
}

// toggle completed todos
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id == id);

    if(todo !== undefined) {
        todo.completed = !todo.completed;
    }
}

// Render todos
const renderTodos = (todos, filters) => {
    const filteredTodos = todos.filter ((todo) => {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase());
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed;

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter((todo) => !todo.completed);

    document.querySelector(`#todos`).innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos));
    
    filteredTodos.forEach((todo) => {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo));
    })
}



// get the DOM elements for an individual note
const generateTodoDOM = (todo) => {
    const todoEl = document.createElement('div');
    const checkbox = document.createElement('input');
    const todoText = document.createElement('span');
    const removeButton = document.createElement('button');

    // set up todo checkbox
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = todo.completed;
    todoEl.appendChild(checkbox);
    checkbox.addEventListener('change', () => {
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
    removeButton.addEventListener('click', () => {
        removeTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters);
    })

    return todoEl;
}

// get the DOM elements for list summary
const generateSummaryDOM = (incompleteTodos) => {
    const summary = document.createElement('h2');
    summary.textContent = `You have ${incompleteTodos.length} todos left`;
    return summary;
}