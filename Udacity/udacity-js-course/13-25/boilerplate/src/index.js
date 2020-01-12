const todo = {
    id: 'asdskjfasadf',
    text: 'Pay the bills',
    completed: false
}

const printTodo = (todo) => {
    console.log(`${todo.text}: ${todo}`)
}
printTodo(todo);

const { text: todoText, completed, details = 'No details provided', ...others } = todo
console.log(todoText)
console.log(completed)
console.log(details)
console.log(others)

const age = [65,0,13]
const [firstAge, ...otherAges] = age

console.log(firstAge)
console.log(otherAges)