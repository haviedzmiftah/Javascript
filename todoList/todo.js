const todos = [
  { id: 1, text: "belajar JS", done: false },
  { id: 2, text: "makan", done: true },
  { id: 3, text: "olahraga", done: false }
]

function countCompletedTodos(todos) {
  const completed = todos.filter(t => t.done === true);
  return completed.length;
}

function toggleTodo(todos, id) {
  todos.map(todo => {
    if (todo.id === id){
     todo.done = !todo.done
    }
    return todo;
  })
}

console.log(countCompletedTodos(todos));
console.log(toggleTodo(todos,2))
console.log(countCompletedTodos(todos));