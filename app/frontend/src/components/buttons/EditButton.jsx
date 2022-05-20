import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { IdContext } from "../../contexts/IdContext";

export default function EditButton() {
  const { setId } = useContext(IdContext);

  const navigate = useNavigate();

  let OnEditClick = async () => {
    const tr = document.querySelector("input:checked")?.parentElement?.parentElement
    if (!tr) { return null };
    const { id } = tr;
    setId(id);
    navigate(`/update`)
  }

  return (
    <button className='button-edit button' onClick={(e) => {
      e.preventDefault();
      OnEditClick();
    }}>Edit</button>
  )
}
