import Todo from "./Todo"

function TodoList({ todos, removeTodo, toggleTodo }) {
  return (
    <div>
      {!todos.length && <h1>Todo list is empty</h1>}
      {todos.map((todo) => (
        <Todo
          todo={todo}
          key={todo.id}
          removeTodo={removeTodo}
          toggleTodo={toggleTodo}
        />
      ))}
    </div>
  )
}

export default TodoList
