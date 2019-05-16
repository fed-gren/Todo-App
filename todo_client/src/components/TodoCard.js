import React, { useState } from "react";
import "../styles/TodoCard.css";
import { Collapse, Button } from "react-bootstrap";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { Link } from "react-router-dom";

function TodoCard(props) {
  const [todoDone, toggleStatus] = useState(false);
  const [cardOpened, toggleCard] = useState(false);
  let [showEdit, setEdit] = useState(false);

  const statusHandler = () => toggleStatus(!todoDone);
  const cardHandler = () => toggleCard(!cardOpened);
  const editHandler = () => setEdit(!showEdit);

  const {title, content, priority, deadline} = props;

  return (
    <section className="todo_card">
      <section
        className="todo_card_summary"
        onMouseEnter={editHandler}
        onMouseLeave={editHandler}
      >
        <section className="todo_card_left">
          <section className="todo_card_checker">
            <div className="checker" onClick={statusHandler}>
              {todoDone && <div className="check_flag" />}
            </div>
          </section>
          <section className="todo_card_title">{title}</section>
        </section>
        <section className="todo_card_deadline">{deadline}</section>
        <section className="todo_card_right">
          <section
            className="todo_card_collapse"
            onClick={cardHandler}
            aria-controls="example-collapse-text"
            aria-expanded={cardOpened}
          >
            {cardOpened ? <MdExpandLess /> : <MdExpandMore />}
          </section>
        </section>
      </section>
      <section className="todo_card_content">
        <Collapse in={cardOpened}>
          <div id="example-collapse-text">
            {/* id는 나중에 todo id랑 조합해서 생성 */}
            {content}
            <section className="todo_card_edit">
              <Link to="/edit">
                <Button className="button_editTodo" variant="outline-dark">
                  edit
                </Button>
              </Link>

              <Button className="button_deleteTodo" variant="outline-dark">
                delete
              </Button>
            </section>
          </div>
        </Collapse>
      </section>
    </section>
  );
}

export default TodoCard;
