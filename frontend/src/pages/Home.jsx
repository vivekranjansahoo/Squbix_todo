import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hello Squbix!!!</h1>
            <br /> <br />
            <h2>
              <b>Objective:</b>
            </h2>
            <p>
              <mark>
                {" "}
                Backend Development: <br />
              </mark>
              Use Node.js and Express or Nest.js to create a RESTful API.
              Implement the CRUD API endpoints.
              <br />
              <mark>Database:</mark>
              <br /> Use a NoSQL database to store todo items. Preferred
              database include MongoDB. Design a schema for the todo items that
              includes: id: Unique identifier for the todo item. title: Title of
              the todo item. description: Detailed description of the todo item.
              status: Status of the todo item (e.g., pending, completed). Note:-
              Other fields can be added as per your requirements. <br />
              <mark>Authentication:</mark> <br /> Implement user authentication
              using JWT or any other method. Ensure that users can only
              manipulate their own todo items. Apart from user authentication
              implement API authorization also. <br />
              <mark> Documentation:</mark> <br />
              Provide API documentation using Swagger or any other API
              documentation tool. Include instructions on how to set up and run
              the project locally. <br />
              <mark> Testing:</mark> <br /> Write unit tests for your API
              endpoints using a testing framework like Mocha, Chai, or Jest.
            </p>
            <h1 className="mt-3">
              <b>BY Vivek Ranjan Sahoo</b>
            </h1>
            <Link to="/signup">
              {" "}
              <button className="btn btn-primary mt-5">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
