

export default function List(props) {
  
  function renderTasks() {
    let arr = Object.entries(props);
    arr.map((e) => e.shift())
    let result = arr.map((e) => {
      
      return (
      <tr id={e[0].id} key={e[0].id}>
        <td>{e[0].name}</td>
        <td>{e[0].task}</td>
        <td>{e[0].stat}</td>
        <td><input type="radio" name="select"/></td>
      </tr>
      )
    })
    return result;
  }
  return (
    <table className="table">
      <thead>
        <tr>
          <th><h1>Name</h1></th>
          <th><h1>Task</h1></th>
          <th><h1>Status</h1></th>
          <th><h1>Select</h1></th>
        </tr>
      </thead>
      <tbody>
        { renderTasks() }
      </tbody>
    </table>
  )
}
