import './AddTodo.css';

export const AddTodo = ({todo, setTodo, addTodo}) => (
    <div className='add-todo'>
        <div className='add-todo-input'>
            <input type="text" value={todo} placeholder='Create new todo' onChange={(event) => setTodo(event.target.value)} />
        </div>
        <div className='add-todo-btn'>
            <button onClick={addTodo}>Add todo</button>
        </div>
    </div>
)