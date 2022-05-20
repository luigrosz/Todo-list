import Header from "../components/Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [name, setName] = useState("");
  const [task, settask] = useState("");
  const navigate = useNavigate();

  let onSubmitClick = () => {
    let location = window.location.pathname;
    location = location.slice(0, -3);
    navigate(location);
  }

  return (
    <div>
      <Header/>
      <h1 className="title-add-item">Fill the form to add a task to the list </h1>
      <div className='form-div'>
        <form className='form-create'>
          <input value={name} onChange={(e) => setName(e.target.value)} className="input-name" maxLength={40} type="text" placeholder="Name" />
          <input value={task} onChange={(e) => settask(e.target.value)} className="input-task" maxLength={40} type="text" placeholder="Task" />
          <button className="form-button" onClick={() => onSubmitClick }>Submit</button>
        </form>
      </div>
    </div>
  )
}
