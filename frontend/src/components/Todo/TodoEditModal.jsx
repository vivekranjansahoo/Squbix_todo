import React, { useState, useEffect } from "react";
import axios from "axios";
import { todo } from "../../Routes/Allroutes";
const TodoEditModal = ({ todoId, isOpen, onClose, ontodoUpdated }) => {
  const token = localStorage.getItem("token");
  const [TodoDetails, setTodoDetails] = useState({
    title: "",
    description: "",
  });

  useEffect(() => {
    if (isOpen) {
      const fetchTodoDetails = async () => {
        try {
          const res = await axios.get(`${todo}/${todoId}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log(res);
          setTodoDetails(res.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchTodoDetails();
    }
  }, [isOpen, todoId]);

  const handleChange = (e) => {
    setTodoDetails({
      ...TodoDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`${todo}/${todoId}`, TodoDetails, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      ontodoUpdated();
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-black p-4 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4">Edit Job</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="title">
              Job Title
            </label>
            <input
              id="title"
              name="title"
              type="text"
              value={TodoDetails.title}
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="description"
            >
              Job Description
            </label>
            <textarea
              id="description"
              name="description"
              value={TodoDetails.description}
              onChange={handleChange}
              className="textarea textarea-bordered w-full"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="btn btn-secondary mr-2"
            >
              Cancel
            </button>
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoEditModal;
