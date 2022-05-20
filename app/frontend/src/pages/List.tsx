import Buttons from '../components/AllButtons'
import Header from '../components/Header'
import TodoList from '../components/List'
import '../App.css'

export default function List() {
  

  return (
    <div className='home'>
      <Header/>
      <Buttons/>
      <TodoList/>
    </div>
  )
}
