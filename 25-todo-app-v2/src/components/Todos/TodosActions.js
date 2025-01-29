import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri"
import Button from "../UI/Button"
import styles from "./TodosActions.module.css"

function TodosActions({
  resetTodos,
  deleteCompletedTodos,
  isThereCompletedTodos,
}) {
  return (
    <div className={styles.todosActions}>
      <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear completed Todos"
        onClick={deleteCompletedTodos}
        disabled={isThereCompletedTodos}
      >
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}

export default TodosActions
