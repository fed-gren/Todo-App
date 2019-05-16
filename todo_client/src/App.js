import React from "react";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";

// components
import Header from "./components/Header";
import TodoIndex from "./components/TodoIndex";
import TodoNew from "./components/TodoNew";
import TodoEdit from "./components/TodoEdit";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Header />
        <Route path="/" exact component={TodoIndex} />
        <Route path="/new/" exact component={TodoNew} />
        <Route path="/edit/" exact component={TodoEdit} />
      </BrowserRouter>
    </div>
  );
}

export default App;
