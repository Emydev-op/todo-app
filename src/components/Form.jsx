/* eslint-disable react/prop-types */
import { useState } from "react";
import style from "./form.module.css";

const Form = ({ todos, setTodos }) => {
  const [todo, setTodo] = useState({ name: "", done: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  };

  return (
    <form className={style.todoform} onSubmit={handleSubmit}>
      <div className={style.inputContainer}>
        <input
          className={style.moderninput}
          placeholder="Enter Todo item"
          type="text"
          value={todo.name}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
        />
        <button className={style.modernbutton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
};

export default Form;
