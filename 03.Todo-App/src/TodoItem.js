import React from 'react'
import './TodoList.css'

function TodoItem(props) {
    return (
        <div className='todo-item'>
            <input type="checkbox" checked={props.item.completed} onChange={onTodoItemCheckChange}/>
            <p>{props.item.text}</p>
        </div>
    )
}

function onTodoItemCheckChange() {
    console.log('Item clicked')
}

export default TodoItem