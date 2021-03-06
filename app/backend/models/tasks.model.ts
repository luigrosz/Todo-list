import connection from './connection';


export default class TasksModel {
  public static async findAll() {
    const [result] = await connection.query('SELECT * FROM tasks');
    return result;
  }

  public static async findOne(id: String) {
    const query = 'SELECT * FROM tasks WHERE id = ?';
    const [result] = await connection.query(query, [id]);
    return result;
  }

  public static async create(name: String, task: String) {
    const query = 'INSERT INTO tasks (name, task) VALUES (?, ?)';
    const [result] = await connection.query(query, [name, task]);
    return result;
  }

  public static async update(stat: String, id: string) {   
    const query = 'UPDATE tasks SET stat = ? WHERE id = ?';
    const [result] = await connection.query(query, [stat, id]);
    return result;
  }

  public static async delete(id: String) {
    const query = 'DELETE FROM tasks WHERE id = ?';
    const [result] = await connection.query(query, [id]);
    return result;
  }
}