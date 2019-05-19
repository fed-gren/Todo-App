import React, { useState, useRef, useEffect } from "react";
import "../styles/TodoCard.css";
import { Collapse, Button } from "react-bootstrap";
import { MdExpandLess, MdExpandMore } from "react-icons/md";
import { Link } from "react-router-dom";
import axios from "axios";

function TodoCard(props) {
  const todoId = props.id;
  const editUrl = `edit/${todoId}`;
  // const [todoDone, toggleStatus] = useState(false);
  const [cardOpened, toggleCard] = useState(false);
  const [visible, setVisible] = useState(true);
  let parsedDate = "기한 : ";
  const checker = useRef(null);
  const checkFlag = useRef(null);
  const titleText = useRef(null);
  const deadlineText = useRef(null);
  const contentText = useRef(null);

  const cardHandler = () => toggleCard(!cardOpened);

  const { title, content, priority, deadline } = props;
  let { todoStatus } = props;
  let priorityColor = "gray";
  let checkerClassName = "checker";
  let checkFlagClassName = "check_flag";

  function setCheckerColor() {
    checkerClassName = "checker";
    checkFlagClassName = "check_flag";
    console.log(`priority : ${priority}`);
    switch (priority) {
      case "1":
        priorityColor = " red";
        break;
      case "2":
        priorityColor = " orange";
        break;
      case "3":
        priorityColor = " green";
        break;
      default:
        priorityColor = " gray";
        break;
    }
    checkerClassName += priorityColor;
    checkFlagClassName += priorityColor;
  }

  function parseDate() {
    if (deadline === null) {
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
    parsedDate += `${dateInfoObj.year}년 ${dateInfoObj.month}월 ${
      dateInfoObj.day
    }일 ${dateInfoObj.hour}시 ${dateInfoObj.min}분`;
  }

  function deleteTodoCard() {
    const apiUrl = `http://localhost:8080/todo/${todoId}`;
    axios.delete(apiUrl).catch(function(error) {
      console.log(error);
    });
    setVisible(false);
  }

  function setCardStatus() {
    //todoStatus에 따라서 카드 상태 바꿈
    if (titleText.current === null) return;
    let title = titleText.current.innerText;
    let deadline = deadlineText.current.innerText;
    let content = contentText.current.innerText;

    if (todoStatus === "TODO") {
      titleText.current.innerHTML = title;
      deadlineText.current.innerHTML = deadline;
      contentText.current.innerHTML = content;
      checkFlag.current.innerHTML = ``;
    } else if (todoStatus === "DONE") {
      titleText.current.innerHTML = `<del>${title}</del>`;
      deadlineText.current.innerHTML = `<del>${deadline}</del>`;
      contentText.current.innerHTML = `<del>${content}</del>`;
      checkFlag.current.innerHTML = `<div class="${checkFlagClassName}" />`;
    }
    console.log(`checkFlagClassName: ${checkFlagClassName}`);
  }

  function toggleTodoStatus() {
    todoStatus = todoStatus === "TODO" ? "DONE" : "TODO";
    const apiUrl = `http://localhost:8080/todo/${todoId}`;
    const updateTodo = {};
    updateTodo.status = todoStatus;

    axios.put(apiUrl, updateTodo).catch(function(error) {
      console.log(error);
    });
    setCardStatus();
  }

  useEffect(() => {
    setCardStatus();
  }, [setCardStatus]);

  return (
    <>
      {parseDate()}
      {setCheckerColor()}
      {visible && (
        <section className="todo_card">
          <section className="todo_card_summary">
            <section className="todo_card_left">
              <section className="todo_card_checker" ref={checker}>
                <div
                  className={checkerClassName}
                  onClick={toggleTodoStatus}
                  ref={checkFlag}
                >
                </div>
              </section>
              <section className="todo_card_title" ref={titleText}>
                {title}
              </section>
            </section>
            <section className="todo_card_deadline" ref={deadlineText}>
              {parsedDate}
            </section>
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
                <p ref={contentText}>{content}</p>
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
