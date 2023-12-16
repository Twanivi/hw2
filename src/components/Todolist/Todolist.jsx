import './Todolist.css';
import { Todo } from '../Todo/Todo';

export const Todolist = ({allTodo}) => (
    <div className='todo-list'>
        {allTodo.map((todo) => {
            return <Todo todo={todo} key={todo.id} />
            })}
    </div>
)



