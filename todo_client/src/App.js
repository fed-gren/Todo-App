import React from "react";
import "./App.css";

// components
import Title from "./components/Title";
import TodoControlBar from "./components/TodoControlBar";
import TodoContainer from "./components/TodoContainer";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <Title />
      <TodoControlBar/>
      {/* <TodoContainer/> */}
      <TodoForm/>
    </div>
  );
}

export default App;
