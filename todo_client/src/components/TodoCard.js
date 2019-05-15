import React, {useState} from "react";
import "../styles/TodoCard.css";

function TodoCard() {
  const [todoDone, toggleStatus] = useState(false);

  const statusHandler = () => toggleStatus(!todoDone);

  return (
    <section className="todo_card">
      <section className="todo_card_left">
        <section className="todo_card_checker">
          <div className="checker" onClick={statusHandler}>
            {(todoDone) ? <div className="check_flag done"></div> : <div className="check_flag todo"></div>}
          </div>
        </section>
        <section className="todo_card_title">title {`${todoDone}`}</section>
      </section>
      <section className="todo_card_content">content</section>
      <section className="todo_card_right">
        <section className="todo_card_deadline">deadline</section>
        <section className="todo_card_control">control</section>
      </section>
    </section>
  );
}

export default TodoCard;
