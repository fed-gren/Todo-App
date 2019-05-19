import React, { useState, useEffect } from "react";
import "../styles/TodoContainer.css";
import axios from "axios";

//components
import TodoCard from "./TodoCard";

function TodoContainer() {
  const [todos, setTodos] = useState(null);

  const getAllTodos = function() {
    async function fetchData() {
      await axios("http://localhost:8080/todos")
      .then(res => res.data)
      .then(res => setTodos(res));
    }
    fetchData();
  }

  useEffect(getAllTodos, [(todos && true)]);

  function renderTodos() {
    const todoCards = todos.map((todoCard) => {
      const {id, title, content, deadline, priority, status} = todoCard;
      return <TodoCard
        key={id}
        id={id}
        title={title}
        content={content}
        deadline={deadline}
        priority={priority}
        getAllTodos={getAllTodos}
        todoStatus={status}
      />
    });
    return todoCards;
  }

  return (
    <section className="todo_card_container">
      {todos && renderTodos()}
    </section>
  );
}

export default TodoContainer;
