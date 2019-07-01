import React from 'react'
import TodoItem from './TodoItem'
import todoData from './TodoData'

class App extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            todos: todoData
        }
    }

    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} />);

        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )
    }
}

export default App