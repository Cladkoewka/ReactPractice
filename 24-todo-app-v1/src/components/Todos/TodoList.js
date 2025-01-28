import Todo from "./Todo"

function TodoList({ todos, removeTodo }) {
  return (
    <div>
      {!todos.length && <h1>Todo list is empty</h1>}
      {todos.map((todo, index) => (
        <Todo todo={todo} key={index} index={index} removeTodo={removeTodo} />
      ))}
    </div>
  )
}

export default TodoList
