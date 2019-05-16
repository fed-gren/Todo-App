import React from "react";
import "../styles/TodoControl.css";
import { FaBell } from "react-icons/fa";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function TodoControl() {
  return (
    <section className="todo_control_container">
      <section className="todo_control_left">
        <section className="section_alarm">
          <FaBell className="alarm" />
        </section>

        <section className="section_button_newTodo">
          <Link to="/new">
            <Button className="button_newTodo" variant="outline-dark">
              New
            </Button>
          </Link>
        </section>
      </section>

      {/* <section className="section_button_delete">
        <Button className="button_delete" variant="outline-danger">
          Delete
        </Button>
      </section> */}
    </section>
  );
}

export default TodoControl;
