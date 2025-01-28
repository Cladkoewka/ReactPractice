import { RiTodoFill } from "react-icons/ri"
import styles from "./Todo.module.css"

function Todo({ todo, index, removeTodo }) {
  const deleteTodo = () => {
    removeTodo(index)
  }

  return (
    <div className={styles.todo} onDoubleClick={deleteTodo}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo}</div>
    </div>
  )
}

export default Todo
