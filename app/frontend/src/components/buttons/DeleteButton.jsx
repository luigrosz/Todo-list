export default function DeleteButton() {
  let OnDeleteClick = async () => {
    const tr = document.querySelector("input:checked")?.parentElement?.parentElement
    if(!tr){ return null};
    const { id } = tr;
    await fetch(`http://localhost:3001/${id}`, { method: 'DELETE'});
    window.location.reload();
  }

  return (
    <button className='button-delete button' onClick={(e) => {
      e.preventDefault();
      OnDeleteClick();
    }}>Delete</button>
  )
}
