/* eslint-disable react/prop-types */
import style from "./todoitem.module.css";

const TodoItem = ({ item, todos, setTodos }) => {
  const handleDelete = (item) => {
    alert("delete button clicked" + item);
    setTodos(todos.filter((todo) => todo !== item));
  };

  const handleClick = (name) => {
    const newArray = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newArray);
  };

  const strikeThrough = item.done && style.completed;

  return (
    <div className={style.item}>
      <div className={style.itemName}>
        <span className={strikeThrough} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            className={style.deletebutton}
            onClick={() => handleDelete(item)}
          >
            x
          </button>
        </span>
      </div>
      <hr className={style.line} />
    </div>
  );
};

export default TodoItem;
