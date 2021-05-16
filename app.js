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
app.get('/', (req, res) => {
  console.log('GET /');
  res.status(200);
  res.json('SERVER IS WORKING');
});

// ===================PULSE CHECK============================ 



app.get("/todos", (req, res) => {});
app.post("/create/todo", (req, res) => {});
app.put("/update/todo", (req, res) => {});
app.delete("/delete/todo", (req, res) => {});


// DONE , no problems


// ====================PRACTICE============================== 


















app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });