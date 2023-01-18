import express from "express";
import {
  getTasks,
  getTask,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/tasks.js";
const router = express.Router();

router.get("/task", getTasks);

router.get("/task/:id", getTask); // get con parametros

router.post("/task", createTask);

router.put("/task/:id", updateTask); // parametros

router.delete("/task/:id", deleteTask); // delete con parametros
export default router;
