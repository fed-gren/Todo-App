import React from "react";
import "./App.css";

// components
import Title from "./components/Title";
import TodoControlBar from "./components/TodoControlBar";

function App() {
  return (
    <div className="App">
      <Title />
      <TodoControlBar/>
    </div>
  );
}

export default App;
