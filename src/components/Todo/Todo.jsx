import './Todo.css';

export const Todo = ({todo}) => (

    <div className='todo'>
        <input type="text" value={todo} />
    </div>
    )