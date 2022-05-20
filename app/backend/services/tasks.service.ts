import TasksModel from '../models/tasks.model';

export default class TasksService {
  public static async getAll() {
    const tasks = await TasksModel.findAll();
    return tasks;
  }

  public static async addTask(name: String, task: String) {
    const newTask = await TasksModel.create(name, task);
    return newTask;
  }
}