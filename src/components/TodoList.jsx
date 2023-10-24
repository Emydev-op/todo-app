/* eslint-disable react/prop-types */
import TodoItem from "./TodoItem";
import style from "./todolist.module.css";

const TodoList = ({ todos, setTodos }) => {
  return (
    <div className={style.list}>
      {todos.map((item) => (
        <TodoItem
          key={item.name}
          item={item}
          todos={todos}
          setTodos={setTodos}
        />
      ))}
    </div>
  );
};

export default TodoList;
