import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import Button from "../UI/Button";
import styles from './TodosActions.module.css'

function TodosActions({ completedTodoExist, resetTodos, deleteCompletedTodos }) {
  return (
    <div className={styles.todosActionsContainer}>
      <Button
        title="Reset Todos"
        onClick={resetTodos}>
        <RiRefreshLine />
      </Button>
      <Button
        title="Clear completed Todos"
        onClick={deleteCompletedTodos}
        disabled={!completedTodoExist}>
        <RiDeleteBin2Line />
      </Button>
    </div>
  )
}

export default TodosActions;