/* eslint-disable react/prop-types */
import style from "./footer.module.css";

const Footer = ({ completedTodos, totalTodos }) => {
  return (
    <div className={style.footer}>
      <span className={style.item}>Completed Todos:{completedTodos}</span>
      <span className={style.item}>Total Todos:{totalTodos}</span>
    </div>
  );
};

export default Footer;
