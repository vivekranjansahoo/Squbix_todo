const request = require("supertest");
const app = require("../index");
const mongoose = require("mongoose");
const Todo = require("../models/Todo");

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Todo API", () => {
  it("should create a new todo", async () => {
    const res = await request(app).post("/api/todos").send({
      title: "Test Todo",
      description: "Test Description",
      status: "pending",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty("title", "Test Todo");
  });

  it("should fetch all todos", async () => {
    const res = await request(app).get("/api/todos");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toBeInstanceOf(Array);
  });
});
