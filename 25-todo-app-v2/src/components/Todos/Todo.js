import { RiDeleteBin2Line, RiTodoFill } from "react-icons/ri"
import styles from "./Todo.module.css"
import { useState } from "react"
import { FaCheck } from "react-icons/fa"

function Todo({ todo, removeTodo, toggleTodo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ""
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>
      <RiDeleteBin2Line
        className={styles.interactIcon}
        onClick={() => removeTodo(todo.id)}
      />
      <FaCheck
        className={styles.interactIcon}
        onClick={() => toggleTodo(todo.id)}
      />
    </div>
  )
}

export default Todo
