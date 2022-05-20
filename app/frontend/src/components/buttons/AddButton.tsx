import { useNavigate } from 'react-router-dom';

export default function AddButton() {
  const navigate = useNavigate();
  const location = window.location.pathname;
  return (
    <button className='button-add button' onClick={() => navigate(`${location}add`)
    }>Add</button>
  )
}
