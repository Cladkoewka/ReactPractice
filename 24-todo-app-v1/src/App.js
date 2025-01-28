import { useState } from "react"
import "./App.css"
import TodoForm from "./components/Todos/TodoForm"
import TodoList from "./components/Todos/TodoList"

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    setTodos([...todos, text])
  }

  const removeTodoHandler = (index) => {
    setTodos(todos.filter((t, id) => id !== index))
  }

  return (
    <div className="App">
      <h1 className="">TodoApp</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} removeTodo={removeTodoHandler} />
    </div>
  )
}

export default App
