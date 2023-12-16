import './AddNewTodo.css';
import { Todolist } from '../Todolist/Todolist';
import { Todo } from '../Todo/Todo';
import { AddTodo } from '../AddTodo/AddTodo';
import { useState } from 'react';

export const AddNewTodo = ({allTodo, addTodo}) => {
    
    const [todoValue, setTodoValue] = useState('');
    
    const addNewTodo = () => {
        const newTodo = {id: 0, todo: todoValue};
        console.log(newTodo);
        addTodo(newTodo);
        setTodoValue('');
    }

    return (
        <div className='add-new-todo'>
            <Todo value={todoValue} onChange={event => setTodoValue(event.target.value)}/>
            <AddTodo  addTodoBtn="Add task" onClick={addNewTodo} />
            <Todolist allTodo={allTodo} />
        </div>
    )
}