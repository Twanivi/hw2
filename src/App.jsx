import { useState } from 'react'
import './App.css';
import { Main } from './components/AddNewTodo/Main';


function App() {
  const [allTodo, setAllTodo] = useState([]);

  const addTodo = (newTodo) => {

    console.log('newTodo', newTodo);
    
    setAllTodo([...allTodo, newTodo]);
    }

    return (
      <div className='app'>
        <Main allTodo={allTodo} addTodo={addTodo}/>
      </div>
  )
}

export default App
