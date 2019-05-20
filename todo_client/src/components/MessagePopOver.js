import React, { useState, useEffect } from "react";
import { Popover, OverlayTrigger } from "react-bootstrap";
import { FaBell } from "react-icons/fa";
import "../styles/MessagePopOver.css";
import axios from "axios";

function MessagePopOver() {
  const [numOfMessage, setNumOfMessage] = useState(0);
  const [renderedTitles, setRenderedTitle] = useState(null);
  const Min = 60 * 1000;

  const getAllTodos = function() {
    axios("http://localhost:8080/todos")
      .then(res => res.data)
      .then(todos => {
        setRenderedTitle(renderTitles(todos));
      });
  };

  function checkExcedeed({title, deadline, status}) {
    if(!deadline) return false;
    if(status === "DONE") return false;
    let nowTime = new Date().getTime();
    let deadlineTime = new Date(deadline).getTime();
    if(nowTime > deadlineTime) return title;
    else return false;
  }

  function renderTitles(todos) {
    if (todos === null) return;
    const titles = todos.filter(todo => {
      return checkExcedeed(todo);
    })
    .map((todo, index) => {
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
    }, Min);
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
      <div className="count_messages">
        <p>{numOfMessage}</p>
        </div>
    </section>
  );
}

export default MessagePopOver;
