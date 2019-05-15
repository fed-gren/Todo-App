import React from "react";
import "./App.css";

// components
import Title from "./components/Title";
import TodoControl from "./components/TodoControl";
import TodoContainer from "./components/TodoContainer";
import TodoForm from "./components/TodoForm";

function App() {
  return (
    <div className="App">
      <header>
        <Title />
        <TodoControl />
      </header>
      <TodoContainer/>
      {/* <TodoForm/> */}
    </div>
  );
}

export default App;
