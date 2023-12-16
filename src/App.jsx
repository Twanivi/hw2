import { useState } from 'react'
import './App.css';
import { AddNewTodo } from './components/AddNewTodo/AddNewTodo';


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {

    console.log('newTodo', newTodo)
    
    setTodos([...todos, newTodo]);
    }

    return (
      <div className='app'>
        <AddNewTodo allTodo={todos} addTodo={addTodo}/>
      </div>
  )
}

export default App
