import React, { useState } from "react";
import "../styles/TodoCard.css";
import { Collapse } from "react-bootstrap";
import { MdExpandLess, MdExpandMore, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";

function TodoCard() {
  const [todoDone, toggleStatus] = useState(false);
  const [cardOpened, toggleCard] = useState(false);

  const statusHandler = () => toggleStatus(!todoDone);
  const cardHandler = () => toggleCard(!cardOpened);

  return (
    <section className="todo_card">
      <section className="todo_card_summary">
        <section className="todo_card_left">
          <section className="todo_card_checker">
            <div className="checker" onClick={statusHandler}>
              {todoDone ? (
                <div className="check_flag done" />
              ) : (
                <div className="check_flag todo" />
              )}
            </div>
          </section>
          <section className="todo_card_title">title</section>
        </section>
        <section className="todo_card_deadline">deadline</section>
        <section className="todo_card_right">
          <section
            className="todo_card_collapse"
            onClick={cardHandler}
            aria-controls="example-collapse-text"
            aria-expanded={cardOpened}
          >
            {cardOpened ? <MdExpandLess /> : <MdExpandMore />}
          </section>
          <section className="todo_card_edit">
            <Link to="/edit">
              <MdEdit />
            </Link>
          </section>
        </section>
      </section>
      <section className="todo_card_content">
        <Collapse in={cardOpened}>
          <div id="example-collapse-text">
            {/* id는 나중에 todo id랑 조합해서 생성 */}
            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
            labore wes anderson cred nesciunt sapiente ea proident.
          </div>
        </Collapse>
      </section>
    </section>
  );
}

export default TodoCard;
