import React from "react";
import "../styles/TodoContainer.css";

//components
import TodoCard from "./TodoCard";

function TodoContainer() {
  return (
    <section className="todo_card_container">
      <TodoCard />
      {/* <TodoCard />
      <TodoCard />
      <TodoCard /> */}
    </section>
  );
}

export default TodoContainer;
