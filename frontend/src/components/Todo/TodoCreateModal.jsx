import React, { useState } from "react";
import axios from "axios";
import { todo } from "../../Routes/Allroutes";
const TodoCreateModal = ({ onTodoCreated, onClose }) => {
  const token = localStorage.getItem("token");
  const [TodoDetails, setTodoDetails] = useState({
    title: "",
    description: "",
  });

  const handleChange = (e) => {
    setTodoDetails({
      ...TodoDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${todo}`, TodoDetails, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(res);

      onTodoCreated(res.data);
      onClose();
      document.getElementById("jobCreateModal").checked = false;
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <input type="checkbox" id="jobCreateModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Create Todo</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="title">
                Todo Title
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
                Todo Description
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

            <div className="modal-action">
              <button type="submit" className="btn btn-primary">
                Create Todo
              </button>
              <label htmlFor="jobCreateModal" className="btn">
                Cancel
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TodoCreateModal;
