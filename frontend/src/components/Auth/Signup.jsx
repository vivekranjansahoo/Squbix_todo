import React, { useState } from "react";
import axios from "axios";
import { register } from "../../Routes/Allroutes";
import { useNavigate, Link } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(register, formData);
      console.log(res.data.message);
      if (res.data.message === "User registered") {
        alert("signup successful");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black-100">
      <div className="w-full max-w-md p-8 space-y-3 rounded-xl bg-black shadow-md">
        <h1 className="text-2xl font-bold text-center text-white">Signup</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="form-control text-white ">
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={formData.name}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control text-white">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
              className="input input-bordered w-full"
            />
          </div>
          <div className="form-control text-white">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={formData.password}
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
