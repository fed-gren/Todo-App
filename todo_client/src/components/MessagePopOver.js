import React, {useState, useEffect} from "react";
import { Popover, OverlayTrigger } from "react-bootstrap";
import { FaBell } from "react-icons/fa";
import "../styles/MessagePopOver.css";
import axios from "axios";

function MessagePopOver() {
  const [todos, setTodos] = useState(null);
  // const [numOfMessage, setNumOfMessage] = useState(0);
  const getAllTodos = function() {
    axios("http://localhost:8080/todos")
      .then(res => res.data)
      .then(res => setTodos(res));
  }

  useEffect(getAllTodos, [(todos && true)]);
  console.log(todos);
  console.log(typeof todos);

  let numOfMessage;

  function renderTitles() {
    if(todos === null) return;
    const titles = todos.map((todo, index) => {
      const {title:todoTitle} = todo;
      return (<div className="out_of_date" key={index}>
        {todoTitle}
      </div>)
    });
    numOfMessage = titles.length;
    return titles;
  }

  const renderedTitles = renderTitles();

  const popover = (
    <Popover id="popover-basic" title="일정 지난 Todo">
      {renderedTitles}
    </Popover>
  );

  return (
    <section className="message_popover">
      <OverlayTrigger
        trigger="click"
        placement="auto"
        overlay={popover}
        rootClose
      >
        <FaBell className="alarm" />
      </OverlayTrigger>
      <div className="count_messages">{numOfMessage}</div>
    </section>
  );
}

export default MessagePopOver;
