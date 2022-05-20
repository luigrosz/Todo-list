import { useContext, useEffect, useState } from "react";
import Header from "../components/Header";
import Loading from "../components/Loading";
import { IdContext } from "../contexts/IdContext";

export default function Update() {
  const [task, setTask] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const { id } = useContext(IdContext);

  useEffect(() => {
    if (!id) {
      return window.location.href = "/";
    }
    async function fetchTask(id) {
      const response = await fetch(`http://localhost:3001/${id}`);
      const task = await response.json();
      setTask(task);
      setIsLoading(false);
    }
    fetchTask(id);
  }, [id]);

  function renderTask(task) {
    return (
      <tr>
        <td>{task[0].name}</td>
        <td>{task[0].task}</td>
        <td>{task[0].stat}</td>
      </tr>
    )
  }

  async function onConfirmClick() {
    const selectedStatus = document.getElementById("dropdown-edit").value;
    if (selectedStatus === task[0].stat) {
      return window.location.href = "/";
    }
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ stat: selectedStatus })
    };
    await fetch(`http://localhost:3001/${id}`, requestOptions);
    return window.location.href = "/";
  }

  function onBackClick() {
    return window.location.href = "/";
  }

  return (
    isLoading ? <Loading /> :
      <div className='home'>
        <Header />
        <table className="table table-edit">
          <thead>
            <tr>
              <th><h1>Name</h1></th>
              <th><h1>Task</h1></th>
              <th><h1>Status</h1></th>
            </tr>
          </thead>
          <tbody>
            {task ? renderTask(task) : null}
          </tbody>
        </table>
        <div className="text-edit-div" >
          <h2 className="title-edit">What status would you like to change to?</h2>
          <select id="dropdown-edit" className="dropdown-edit">
            <option value="Pendente">Pendente</option>
            <option value="Em Andamento">Em Andamento</option>
            <option value="Finalizado">Finalizado</option>
          </select>
          <div className="edit-buttons">
            <button className="confirm-button"
              onClick={(e) => {
                e.preventDefault();
                onConfirmClick();
              }}>Confirm</button>
            <button className="back-button"
              onClick={(e) => {
                e.preventDefault();
                onBackClick();
              }}>Go back</button>
          </div>
        </div>
      </div>
  )
}
