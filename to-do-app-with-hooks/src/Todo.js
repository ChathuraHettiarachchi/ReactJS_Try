import React from 'react'
import './App.css'

function Todo({todo, index, completeTodo, deleteTodo}) {
    return (
        <div className="todo" style={{textDecoration: todo.isCompleted ? 'line-through':''}}>
            {todo.text}
            <div>
                <button onClick={() => completeTodo(index)}>Complete</button>
                <button onClick={() => deleteTodo(index)}>X</button>
            </div>
        </div>
    )
}

export default Todo