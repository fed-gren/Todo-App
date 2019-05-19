import React from "react";
import "../styles/TodoControl.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MessagePopOver from "./MessagePopOver";

function TodoControl() {
  return (
    <section className="todo_control_container">
      <section className="todo_control_left">
        <section className="section_alarm">
          <MessagePopOver/>
        </section>

        <section className="section_button_newTodo">
          <Link to="/new">
            <Button className="button_newTodo" variant="outline-dark">
              New
            </Button>
          </Link>
        </section>
      </section>
    </section>
  );
}

export default TodoControl;
