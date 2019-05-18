import React, { useState } from "react";
import "../styles/TodoCard.css";
import { Collapse, Button } from "react-bootstrap";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";

function TodoCard(props) {
  const todoId = props.id;
  const editUrl = `edit/${todoId}`;
  const [todoDone, toggleStatus] = useState(false);
  const [cardOpened, toggleCard] = useState(false);
  const [visible, setVisible] = useState(true);
  let parsedDate = "기한 : ";

  const statusHandler = () => toggleStatus(!todoDone);
  const cardHandler = () => toggleCard(!cardOpened);

  const { title, content, priority, deadline } = props;

  function parseDate() {
    if(deadline === null) {
      parsedDate += "없음";
      return;
    }
    let date = new Date(deadline);
    const dateInfoObj = {};
    dateInfoObj.year = date.getFullYear();
    dateInfoObj.month = date.getMonth() + 1;
    dateInfoObj.day = date.getDate();
    dateInfoObj.hour = date.getHours();
    dateInfoObj.min = date.getMinutes();
    parsedDate += `${dateInfoObj.year}년 ${dateInfoObj.month}월 ${dateInfoObj.day}일 ${dateInfoObj.hour}시 ${dateInfoObj.min}분`;
  }

  function deleteTodoCard() {
    const apiUrl = `http://localhost:8080/todo/${todoId}`;
    axios.delete(apiUrl).catch(function(error) {
      console.log(error);
    });
    setVisible(false);
  }

  return (
    <>
    {parseDate()}
      {visible && (
        <section className="todo_card">
          <section
            className="todo_card_summary"
          >
            <section className="todo_card_left">
              <section className="todo_card_checker">
                <div className="checker" onClick={statusHandler}>
                  {todoDone && <div className="check_flag" />}
                </div>
              </section>
              <section className="todo_card_title">{title}</section>
            </section>
            <section className="todo_card_deadline">{parsedDate}</section>
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
                  <Link to={editUrl}>
                    <Button className="button_editTodo" variant="outline-dark">
                      edit
                    </Button>
                  </Link>
                  <Button
                    className="button_deleteTodo"
                    onClick={deleteTodoCard}
                    variant="outline-dark"
                  >
                    delete
                  </Button>
                </section>
              </div>
            </Collapse>
          </section>
        </section>
      )}
    </>
  );
}

export default TodoCard;
