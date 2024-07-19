const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const todoRoutes = require("./routes/todoRoutes");
const userRoutes = require("./routes/user");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
const swaggerDocument = YAML.load("./swagger.yaml");

dotenv.config();

const app = express();
const port = process.env.PORT || 3002;
const swaggerOptions = {
  customCss: `
    .swagger-ui .topbar { display: none }
  `,
};

app.use(cors());

app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument, swaggerOptions)
);

// Middleware
app.use(bodyParser.json());

// Routes
app.use("/api/auth", userRoutes);
app.use("/api/todos", todoRoutes);

// Database Connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

module.exports = app;
