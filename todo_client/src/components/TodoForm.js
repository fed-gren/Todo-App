//? 새로운 TODO를 생성하거나, 기존 TODO를 수정할 때 사용할 컴포넌트
import React, { useState, useEffect, useRef } from "react";
import { Form, Col, Button } from "react-bootstrap";
import "../styles/TodoForm.css";
import { Link, Redirect } from "react-router-dom";
import { STV_priority } from "../utils/StringToValue";
import axios from "axios";
import DateTimePicker from "./DateTimePicker";

function TodoForm(props) {
  const [redirect, setRedirect] = useState(false);
  const [todo, setTodo] = useState(null);
  const title_input = useRef(null);
  const content_textarea = useRef(null);
  const priority_select = useRef(null);
  const deadline_date = useRef(null);

  function registNewTodo(event) {
    event.preventDefault();
    const apiUrl = "http://localhost:8080/todo";
    let form = event.target;
    const {title, content, priority, deadline} = form.elements;
    const newTodo = {};
    newTodo.title = title.value;
    newTodo.content = content.value;
    newTodo.priority = STV_priority[priority.value];
    newTodo.deadline = (deadline.value === "") ? undefined : deadline.value;

    axios.post(apiUrl, newTodo).catch(function(error) {
      console.log(error);
    });
    setRedirect(true);
  }

  function setFormValues() {
    title_input.current.value = todo.title;
    content_textarea.current.value = todo.content;
    for (let [key, value] of Object.entries(STV_priority)) {
      if (value === todo.priority) {
        priority_select.current.value = key;
        break;
      }
    }
  }

  function getEditTodoValues() {
    async function fetchData() {
      await axios
        .get(`http://localhost:8080/todo/${props.editTodoId}`)
        .then(res => res.data)
        .then(res => setTodo(res));
    }
    fetchData();
  }

  function editTodo(event) {
    event.preventDefault();
    const apiUrl = `http://localhost:8080/todo/${props.editTodoId}`;
    let form = event.target;
    const {title, content, priority, deadline} = form.elements;
    const updateTodo = {};
    updateTodo.title = title.value;
    updateTodo.content = content.value;
    updateTodo.priority = STV_priority[priority.value];
    updateTodo.deadline = (deadline.value === "") ? undefined : deadline.value;

    axios.put(apiUrl, updateTodo).catch(function(error) {
      console.log(error);
    });
    setRedirect(true);
  }

  useEffect(() => {
    props.editTodoId && getEditTodoValues();
    todo && setFormValues();
  }, [todo && true]);

  return (
    <section className="FormContainer">
      {redirect && <Redirect push to="/" />}
      <Form
        className="forms"
        onSubmit={props.work === "new" ? registNewTodo : editTodo}
      >
        <Form.Group controlId="title">
          <Form.Label>제목</Form.Label>
          <Form.Control
            type="text"
            placeholder="할 일 제목을 적어주세요.(최대 14글자)"
            maxLength={14}
            ref={title_input}
          />
        </Form.Group>
        <Form.Group controlId="content">
          <Form.Label>내용</Form.Label>
          <Form.Control
            as="textarea"
            rows="4"
            className="todo_content"
            placeholder="할 일 내용을 적어주세요."
            ref={content_textarea}
          />
        </Form.Group>

        <Form.Row>
          <Form.Group as={Col} controlId="priority">
            <Form.Label>우선순위</Form.Label>
            <Form.Control as="select" ref={priority_select}>
              <option>없음</option>
              <option>높음</option>
              <option>중간</option>
              <option>낮음</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} className="date-time-picker">
            <DateTimePicker/>
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
