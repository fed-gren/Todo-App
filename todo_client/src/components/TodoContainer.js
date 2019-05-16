import React, { useState, useEffect } from "react";
import "../styles/TodoContainer.css";

//components
import TodoCard from "./TodoCard";

function TodoContainer() {
  const [todos, setTodos] = useState(null);

  function callApi() {

    return fetch("http://localhost:8080/todos")
    .then(response => response.json())
    .then(json => json)
    // .catch(err = console.log(err));
  }

  async function getTodos() {
    const apiTodos = await callApi();
    // console.log(`apiTodos : ${apiTodos}`);
    setTodos(apiTodos);
  }

  function renderTodos() {
    const todoCards = todos.map((todoCard) => {
      const {id, title, content, deadline, priority} = todoCard;
      return <TodoCard
        key={id}
        id={id}
        title={title}
        content={content}
        deadline={deadline}
        priority={priority}
      />
    });
    return todoCards;
  }

  useEffect(() => {
    getTodos();
  });

  return (
    <section className="todo_card_container">
      {todos ? renderTodos() : <span>no</span>}
      {/* <TodoCard />
      <TodoCard />
      <TodoCard /> */}
    </section>
  );
}

export default TodoContainer;
