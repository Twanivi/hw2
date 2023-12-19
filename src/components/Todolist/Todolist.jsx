import './Todolist.css';
import { Todo } from '../Todo/Todo';
import App from '../../App';


export const Todolist = ({allTodo}) => {
    console.log('allTodo', allTodo);
    return (
    <div className='todo-list'>
        {allTodo.map((value) => {
            return <Todo value={value}/>
            })}
    </div>
)
}


