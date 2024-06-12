import styles from "./todoitem.module.css";
export default function TodoItem({ item, todos, setTodos }) {
  //item: The current todo item to display
  //todos: The list of all todo items
  //setTodos: A function to update the list of todo items.
  function handleDelete(item) {
    console.log("Delete item clicked for item", item);
    setTodos(todos.filter((todo) => todo !== item));
    //' setTodos(todos.filter((todo) => todo !== item));':Updates  the 'todos' state
    //by removing the current 'item' from the list. The filter medthod creates a
    //a new array that includes all todos execpt teh one that matches the 'item
    //to be deleted
  }
  function handleClick(name) {
    setTodos(
      (todos.name = todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      ))
    );
  }
  const className = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            x
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
