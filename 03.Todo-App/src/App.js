import React from 'react'
import TodoItem from './TodoItem'
import todoData from './TodoData'

function App() {
    const todoItems = todoData.map(item => <TodoItem key={item.id} item={item} />);


    return (
        <div className="todo-list">
            {todoItems}
        </div>
    )
}

export default App