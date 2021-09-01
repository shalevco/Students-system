const express = require("express");
const cors = require("cors");

const studentController = require("./server/controllers/studentController");

require("./server/configs/studentsDataBase");

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/students", studentController);

app.listen(8000, console.log("the Server is Running on port 8000"));
