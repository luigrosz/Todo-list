import tasksController from "./controllers/tasks.controller";
import error from "./middlewares/errorMiddleware";
const dotenv = require('dotenv');

dotenv.config()
const port = process.env.PORT;

const express = require('express')
const app = express()
const cors = require("cors");
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());


app.get("/", tasksController.getAll);
app.post("/add", tasksController.addTask);
app.delete("/:id", tasksController.deleteTask);

app.use(error);

app.listen(port, () => {
  console.log(`Server is running at https://localhost:${port}`);
});