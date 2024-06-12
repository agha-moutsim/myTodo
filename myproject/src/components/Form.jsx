import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState(""); // 'todo' starts as an empty string
  const [todo, setTodo] = useState({ name: "", done: false });
  function handleSubmit(e) {
    e.preventDefault(); // Prevents the form from refreshing the page
    setTodos([...todos, todo]); // Adds the current 'todo' to the 'todos' list
    setTodo({ name: "", done: false }); // Clears the input field
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })} // Updates 'todo' with the input value
          value={todo.name} // Sets the input value to 'todo'
          type="text"
          placeholder="Enter todo item..."
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
