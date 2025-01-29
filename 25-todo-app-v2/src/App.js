import { useState } from "react"
import "./App.css"
import TodoForm from "./components/Todos/TodoForm"
import TodoList from "./components/Todos/TodoList"
import { v4 as uuidv4 } from "uuid"
import TodosActions from "./components/Todos/TodosActions"

function App() {
  const [todos, setTodos] = useState([])

  const addTodoHandler = (text) => {
    const newTodo = {
      text: text,
      isCompleted: false,
      id: uuidv4(),
    }

    setTodos([...todos, newTodo])
  }

  const removeTodoHandler = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  const toggleTodoHandler = (id) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : { ...todo }
      })
    )
  }

  const resetTodosHandler = () => {
    setTodos([])
  }

  const deleteCompletedTodosHandler = () => {
    setTodos(todos.filter((todo) => !todo.isCompleted))
  }

  const completedTodosCount = todos.filter((todo) => todo.isCompleted).length

  return (
    <div className="App">
      <h1 className="">TodoApp</h1>
      <TodoForm addTodo={addTodoHandler} />
      {todos.length !== 0 && (
        <TodosActions
          resetTodos={resetTodosHandler}
          deleteCompletedTodos={deleteCompletedTodosHandler}
          isThereCompletedTodos={completedTodosCount === 0}
        />
      )}
      <TodoList
        todos={todos}
        removeTodo={removeTodoHandler}
        toggleTodo={toggleTodoHandler}
      />
      {completedTodosCount > 0 && (
        <h1>Completed todos count: {completedTodosCount}</h1>
      )}
    </div>
  )
}

export default App
