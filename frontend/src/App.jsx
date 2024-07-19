import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Signup from "./components/Auth/Signup";
import Home from "./pages/Home";
import Test from "./components/text";
import TodoList from "./components/Todo/Todolist";

const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<TodoList />} />
      <Route path="/" element={<Home />} />
      <Route path="*" element={<Test />} />
    </Routes>
  );
};

export default App;
