import React from "react";

//components
import TodoCard from "./TodoCard";

function TodoContainer() {
  return (
    <section>
      <TodoCard />
      <TodoCard />
      <TodoCard />
      <TodoCard />
    </section>
  );
}

export default TodoContainer;
