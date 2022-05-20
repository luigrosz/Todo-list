import Buttons from '../components/AllButtons'
import Header from '../components/Header'
import Table from '../components/Table'
import { useState, useEffect } from 'react'
import '../App.css'
import Loading from '../components/Loading'

export default function List() {
  const [tasks, setTasks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchAllTasks() {
      const response = await fetch('http://localhost:3001');
      const allTasks = await response.json();
      setTasks(allTasks);
      setIsLoading(false);
    }
    fetchAllTasks();
  }, []);

  useEffect(() => {

  });

  return (
    isLoading ? <Loading/> :
    <div className='home'>
      <Header />
      <Buttons />
      <Table {...tasks}/>
    </div>
  )
}
