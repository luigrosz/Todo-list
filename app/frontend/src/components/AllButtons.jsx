import AddButton from "./buttons/AddButton"
import DeleteButton from "./buttons/DeleteButton"
import EditButton from "./buttons/EditButton"

export default function Buttons() {
  return (
    <div className='buttons'>
      <AddButton/>
      <DeleteButton/>
      <EditButton/>
    </div>
  )
}
