import React from "react";
import TodoForm from "./TodoForm";

function TodoEdit(props) {
  const editTodoId = props.match.params.todoId;
  return (
    <>
      <TodoForm
        editTodoId={editTodoId}
      />
    </>
  );
}

export default TodoEdit;
