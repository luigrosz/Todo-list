interface ITableProps {
  name: string,
  task: string,
  stat: string,
}

export default function List(props: ITableProps[]) {
  let arr = Object.entries(props);
  arr.map((e) => e.shift())
  console.log(arr)

  function renderTasks() {
    let result = arr.map((e) => {
      return (
      <tr>
        <td>hello</td>
        <td>by</td>
        <td>me!</td>
        <td><input type="checkbox"/></td>
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
