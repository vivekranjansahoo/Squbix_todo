import React from "react";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <h1>Job Board</h1>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About us</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
          </div>
          <Link to="/">
            {" "}
            <p className="btn btn-ghost text-xl">Todo </p>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <li>About us</li>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/" className="btn btn-accent mr-4 ">
            Log Out
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar1;
