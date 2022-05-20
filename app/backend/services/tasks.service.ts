import TasksModel from '../models/tasks.model';

export default class TasksService {
  public static async getAll() {
    const tasks = await TasksModel.findAll();
    return tasks;
  }

  public static async getTask(id: String) {
    const task = await TasksModel.findOne(id);
    return task;
  }

  public static async addTask(name: String, task: String) {
    const newTask = await TasksModel.create(name, task);
    return newTask;
  }

  public static async updateTask(stat: String, id: string) {
    const updatedTask = await TasksModel.update(stat, id);
  }

  public static async deleteTask(id: String) {
    const deletedTask = await TasksModel.delete(id);
    return deletedTask;
  }
}