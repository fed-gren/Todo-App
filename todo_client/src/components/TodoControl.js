import React from "react";
import "../styles/TodoControl.css";
import { FaBell } from "react-icons/fa";
import { Button, Form } from "react-bootstrap";

function TodoControl() {
  return (
    <section className="todo_control_container">
      <section className="todo_control_left">
        <section className="section_alarm">
          <FaBell className="alarm" />
        </section>

        <section className="section_button_newTodo">
          <Button className="button_newTodo" variant="outline-dark">
            New
          </Button>
        </section>
      </section>

      <section className="section_guide_message">
        <span className="guide_message">새로운 할 일을 등록하세요!</span>
      </section>

      <section className="section_button_delete">
        <Button className="button_delete" variant="outline-danger">
          Delete
        </Button>
      </section>
    </section>
  );
}

export default TodoControl;
