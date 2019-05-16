//? 새로운 TODO를 생성하거나, 기존 TODO를 수정할 때 사용할 컴포넌트
import React from "react";
import { Form, Col, Button } from "react-bootstrap";
import "../styles/TodoForm.css";
import { Link } from "react-router-dom";

function TodoForm() {
  return (
    <section className="FormContainer">
      <Form className="forms">
        <Form.Group controlId="formGroupText">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Input title here" />
        </Form.Group>
        <Form.Group>
          <Form.Label>Content</Form.Label>
          <Form.Control
            as="textarea"
            rows="4"
            className="todo_content"
            placeholder="Input content here"
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col}>
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
          <Button variant="success" type="submit" className="submit_todo">
            Submit
          </Button>
        </section>
      </Form>
    </section>
  );
}

export default TodoForm;
