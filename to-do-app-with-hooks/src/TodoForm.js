import React, {useState} from 'react'

function TodoForm({addTodo}) {
    const [value, setValue] = useState('');

    const handleSubmit = d => {
        d.preventDefault();

        if(!value) return;

        addTodo(value);
        setValue('')
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                className="input"
                value={value}
                placeholder="Add new item"
                onChange={d => setValue(d.target.value)}/>
        </form>
    )
}

export default TodoForm