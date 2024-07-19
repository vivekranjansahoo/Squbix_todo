<h2>Live Link : https://squbixtodo.netlify.app/ </h2>
<h2>api-docs: https://squbix-todo.onrender.com/api-docs/</h2>
<br>
<h3>Complete Demo Video :</h3>




Demo user
 ```bash
Email-testuser@gmail.com
Password - 123456
```


# TODO Application

A TODO application built using the MERN stack, allowing users to manage their tasks efficiently. The platform features authentication, task management, and a user-friendly interface for interacting with TODO items.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Features

- User authentication (login/signup)
- Users can create, read, update, and delete TODO items
- Tasks can be marked as completed or pending
- Responsive and user-friendly interface

## Tech Stack

- **Frontend:** React, DaisyUI, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Other:** Mongoose

## Getting Started

### Prerequisites

Make sure you have the following installed on your machine:

- Node.js
- npm (Node Package Manager)
- MongoDB

### Installation

1. **Clone the repository:**

    ```bash
   https://github.com/vivekranjansahoo/Squbix_todo.git
    cd Squbix_todo
    ```

2. **Install backend dependencies:**

    ```bash
    cd backend
    npm install
    ```

3. **Install frontend dependencies:**

    ```bash
    cd ../frontend
    npm install
    ```

### Running the Application

1. **Start MongoDB:**

    Make sure your MongoDB server is running. You can start it using:

    ```bash
    mongod
    ```

2. **Start the backend server:**

    ```bash
    cd backend
    npm start
    ```

    
3. **Add env file backend server:**
   
     ```bash
   MONGO_URI=your mongo string
   PORT= 
   JWT_SECRET=
    ```
   The backend server will start on `http://localhost:3002`

4. **Start the frontend server:**

    Open a new terminal window:

    ```bash
    cd frontend
    npm start
    ```

    The frontend server will start on `http://localhost:5173`.

## API Documentation

### User Authentication

- **POST** `/api/auth/register` - Register a new user
- **POST** `/api/auth/login` - Log in an existing user

### Curd TODO

- **POST** `/api/todos` - Create a new TODO item
- **GET** `/api/todos` - Get all TODO items (auth user only)
- **GET** `/api/todos/:id` - Get a specific TODO item
- **PUT** `/api/todos/:id` - Update a TODO item
- **DELETE** `/api/todos/:id` - Delete a TODO item



## Contributing

We welcome contributions from the community! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

If you have any questions or suggestions, feel free to reach out to us at:

- Email: work.vivekranjansahoo@gmail.com
- GitHub: [vivekranjansahoo](https://github.com/vivekranjansahoo)


