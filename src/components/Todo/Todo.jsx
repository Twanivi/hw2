import './Todo.css';
import { useState } from 'react';

export const Todo = () =>  {
    const [value, setValue] = useState('');
    
    return (
    <div className='todo'>
        <input type="text" value={value} onChange={event => setValue(event.target.value)} />
    </div>
    )
}