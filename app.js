const express = require("express");
const fs = require("fs");
const axios = require("axios");
const morgan = require("morgan");

// DB======================
const todoModel = require("./schema");
const db = require("./db");

//========================

const app = express();
const port = 3000;

/* ================================= */

app.use(express.json());

/* ================================= */

//*** http://localhost:3000/
app.get("/", (req, res) => {
  console.log("GET /");
  res.status(200);
  res.json("SERVER IS WORKING");
});

// ===================PULSE CHECK============================

// DONE , no problems

// ====================PRACTICE==============================

// Q1 Done

app.post("/create/todo", (req, res) => {
  const { task, description, deadline, isCompleted, priority } = req.body;
  const todoitem = new todoModel({
    task,
    description,
    deadline,
    isCompleted,
    priority,
  });
  todoitem
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});





//Q2 Done

// Q3 Done
app.get("/todos", (req, res) => {
  todoModel
    .find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Q4
app.get("/todos/completed", (req, res) => {
  todoModel
    .find({ isCompleted: true })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Q5 Done
app.put("/update/todo", (req, res) => {
  todoModel
    .findOneAndUpdate({ task: "eat" }, req.body)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});




// Q6 Done 
app.delete("/delete/todo", (req, res) => {

  todoModel.findOneAndRemove({ task: "eat" })
  .then((result) => {
    res.json(result);
  })
  .catch((err) => {
    res.json(err);
  });


});


























app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});