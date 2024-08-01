import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserList from "./UserList";
import TodoList from "./TodoList";
import Navbar from "./Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/userlist" element={<UserList />}></Route>
          <Route path="/todolist" element={<TodoList />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
