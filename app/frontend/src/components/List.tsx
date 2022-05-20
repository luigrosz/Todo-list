interface ITableProps {
  name: string;
  task: string;
  stat: string;
}

export default function List(props: ITableProps[]) {
  console.log(props);
  
  return (
    <div className="list">
     <div className="list-title"> Name </div>
     <div className="list-title"> Task </div>
     <div className="list-title"> Status </div>
    </div>
  )
}
