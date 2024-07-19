import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import TodoEditModal from "./TodoEditModal";
import TodoCreateModal from "./TodoCreateModal";
import { todo } from "../../Routes/Allroutes";
import Navbar1 from "../Navbar1";

const TodoList = () => {
  const [data, setdata] = useState([]);
  const [selectedTodoId, setSelectedTodoId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const token = localStorage.getItem("token");
  const name = JSON.parse(
    atob(localStorage.getItem("token").split(".")[1])
  ).name;
  console.log(name);

  const fetchTodos = async () => {
    try {
      const { data } = await axios.get(`${todo}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setdata(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const updateStatus = async (todoid) => {
    try {
      console.log(token);
      const res = await axios.patch(`${todo}/${todoid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setdata(fetchTodos());
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClick = (todoId) => {
    setSelectedTodoId(todoId);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedTodoId(null);
  };

  const ModalClose = () => {
    setIsModalOpen(false);
  };

  const handleTodoUpdated = async () => {
    const res = await axios.get(`${todo}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    setdata(res.data);
  };

  const deleteJob = async (todoId) => {
    try {
      await axios.delete(`${todo}/${todoId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setdata(data.filter((todo) => todo._id !== todoId));
    } catch (error) {
      console.log(error);
    }
  };

  const handleTodoCreated = async (newJob) => {
    setdata([...data, newJob]);
    await fetchTodos();
  };

  return (
    <>
      <Navbar1 />
      <div className="container mx-auto mt-2">
        <h1 style={{ textAlign: "center", fontSize: "3rem" }}>Todo Details</h1>
        <h1 className="text-3xl font-bold mb-6">
          My Todo List (Name : {name})
        </h1>
        <label htmlFor="jobCreateModal" className="btn btn-primary mb-4">
          Create Todo
        </label>

        <TodoCreateModal
          onTodoCreated={handleTodoCreated}
          onClose={ModalClose}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data && data.length > 0 ? (
            data.map((todo) => (
              <div
                key={todo._id}
                className="card bg-base-100 shadow-md bg-black "
              >
                <div className="card-body">
                  <h2 className="card-title">Title: {todo.title}</h2>
                  <p>Description: {todo.description}</p>
                  <p>Status: {todo.status}</p>
                  <button
                    className="btn btn-warning mt-4"
                    onClick={() => handleEditClick(todo._id)}
                  >
                    Edit
                  </button>

                  <button
                    className="btn btn-info mt-4"
                    onClick={() => updateStatus(todo._id)}
                  >
                    Change Status
                  </button>

                  <button
                    onClick={() => deleteJob(todo._id)}
                    className="btn btn-error mt-4"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))
          ) : (
            <tr>
              <td colSpan="4">Create your first todo</td>
            </tr>
          )}

          {isModalOpen && (
            <TodoEditModal
              todoId={selectedTodoId}
              isOpen={isModalOpen}
              onClose={handleModalClose}
              ontodoUpdated={handleTodoUpdated}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default TodoList;
