import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Todo from "./views/todo";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Todo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
