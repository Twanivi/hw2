import './Main.css';
import { Todolist } from '../Todolist/Todolist';
import { Todo } from '../Todo/Todo';
import { AddTodo } from '../AddTodo/AddTodo';

export const Main = ({allTodo, addTodo}) => {
    
    const addNewTodo = () => {
        event.preventDefault();
        const newTodo = {value: value};
        console.log('newTodo', newTodo);
        addTodo(newTodo);
        setValue('');
    }

    return (
        <div className='add-new-todo'>
            <Todo />
            <AddTodo  btn="Add task" onClick={addNewTodo} />
            <Todolist allTodo={allTodo} />
        </div>
    )
}