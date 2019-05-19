import React, { useState, useEffect } from "react";
import { Popover, OverlayTrigger } from "react-bootstrap";
import { FaBell } from "react-icons/fa";
import "../styles/MessagePopOver.css";
import axios from "axios";

function MessagePopOver() {
  // const [todos, setTodos] = useState(null);
  const [numOfMessage, setNumOfMessage] = useState(0);
  const [renderedTitles, setRenderedTitle] = useState(null);

  const getAllTodos = function() {
    axios("http://localhost:8080/todos")
      .then(res => res.data)
      .then(todos => {
        setRenderedTitle(renderTitles(todos));
      });
  };


  function renderTitles(todos) {
    if (todos === null) return;
    // console.log(todos);
    const titles = todos.map((todo, index) => {
      const { title: todoTitle } = todo;
      return (
        <div className="out_of_date" key={index}>
          {todoTitle}
        </div>
      );
    });
    setNumOfMessage(titles.length);
    return titles;
  }

  useEffect(() => {
    getAllTodos();
    setInterval(() => {
      getAllTodos();
    }, 5000);
  }, []);

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
