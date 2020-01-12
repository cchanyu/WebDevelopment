import uuidv4 from 'uuid/v4'

let todos = [];

// Get saved todos
const loadTodos = () => {
    const todosJSON = localStorage.getItem('todos');
    try {
        todos = todosJSON ? JSON.parse(todosJSON) : []; 
    } catch (e) {
        todos = [];
    }
}

// saved todos
const saveTodos = () => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

const getTodos = () => todos;

const createTodo = (text) => {
    todos.push({
        id: uuidv4(),
        text,
        completed: false
    });
    saveTodos();
}

const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id == id);

    if (todoIndex > -1) {
        todos.splice(todoIndex, 1)
        saveTodos();
    }
}

// toggle completed todos
const toggleTodo = (id) => {
    const todo = todos.find((todo) => todo.id == id);

    if(todo) {
        todo.completed = !todo.completed;
        saveTodos();
    }
}

loadTodos();

export { getTodos, createTodo, removeTodo, toggleTodo }