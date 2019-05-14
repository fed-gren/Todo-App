import React from "react";
import "./App.css";

// components
import Title from "./components/Title";
import TodoControlBar from "./components/TodoControlBar";
import TodoContainer from "./components/TodoContainer";

function App() {
  return (
    <div className="App">
      <Title />
      <TodoControlBar/>
      <TodoContainer/>
    </div>
  );
}

export default App;
