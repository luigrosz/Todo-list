import { Response, Request, NextFunction } from "express";
import TasksService from "../services/tasks.service";

export default class TasksController {
  public static async getAll(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).json(await TasksService.getAll());
    } catch (err) {
      next(err);
    }
  }

  public static async getTask(req: Request, res: Response, next: NextFunction) {
    const { id } = req.params;
    try {
      res.status(200).json(await TasksService.getTask(id));
    } catch (err) {
      next(err);
    }
   ;
  }

  public static async addTask(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, task } = req.body;
      const newTask = await TasksService.addTask(name, task);
      res.status(201).json(newTask);
    } catch (err) {
      next(err);
    }
  }

  public static async updateTask(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const { stat } = req.body;
      await TasksService.updateTask(stat, id);
      res.status(200);
    } catch (err) {
      next(err);
    }
  }

  public static async deleteTask(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      const deletedTask = await TasksService.deleteTask(id);
      res.status(200).json(deletedTask);
    } catch (err) {
      next(err);
    }
  }
}