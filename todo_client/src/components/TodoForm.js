//? 새로운 TODO를 생성하거나, 기존 TODO를 수정할 때 사용할 컴포넌트
import React, {useState} from "react";
import { Form, Col, Button } from "react-bootstrap";
import "../styles/TodoForm.css";
import { Link, Redirect } from "react-router-dom";
import { STV_priority } from "../utils/StringToValue";
import axios from "axios";

function TodoForm(props) {
  console.log(`work : ${props.work}`);
  const [redirect, setRedirect] = useState(false);

  function registNewTodo(event) {
    event.preventDefault();
    const apiUrl = "http://localhost:8080/todo";
    let form = event.target;
    const newTodo = {};
    newTodo.title = form.elements.title.value;
    newTodo.content = form.elements.content.value;
    newTodo.priority = STV_priority[form.elements.priority.value];

    axios
      .post(apiUrl, newTodo)
      .catch(function(error) {
        console.log(error);
      });
      setRedirect(true);
  }

  function editTodo(event) {
    console.log("not yet");
  }

  return (
    <section className="FormContainer">
      {redirect && <Redirect push to="/" />}
      <Form
        className="forms"
        onSubmit={props.work === "new" ? registNewTodo : editTodo}
      >
        <Form.Group controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="할 일 제목을 적어주세요.(최대 14글자)"
            maxLength={14}
          />
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows="4"
            className="todo_content"
            placeholder="할 일 내용을 적어주세요."
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="priority">
            <Form.Label>우선순위</Form.Label>
            <Form.Control as="select">
              <option>없음</option>
              <option>높음</option>
              <option>중간</option>
              <option>낮음</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>Deadline</Form.Label>
            <Form.Control />
          </Form.Group>
        </Form.Row>
        <section className="buttons">
          <Link to="/">
            <Button variant="danger" type="button">
              Cancel
            </Button>
          </Link>
            <Button
              variant="success"
              type="submit"
              className="submit_todo"
            >
              Submit
            </Button>
        </section>
      </Form>
    </section>
  );
}

export default TodoForm;
