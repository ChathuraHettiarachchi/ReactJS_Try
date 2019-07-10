import React, {useState} from 'react'

import Todo from './Todo'
import TodoForm from './TodoForm'

function App() {
    const [todos, setTodos] = useState([
        {
            text: "Learn about react",
            isCompleted: false
        },
        {
            text: "Learn about Android development",
            isCompleted: true
        },
        {
            text: "Learn about Swift 4 migration :p",
            isCompleted: false
        }
    ]);

    const addTodo = text => {
        const newTodos = [...todos, {text}];
        setTodos(newTodos);
    };

    const completeTodo = index => {
        const newTodos = [...todos];
        newTodos[index].isCompleted = true;
        setTodos(newTodos);
    };

    const deleteTodo = index => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos)
    };

    return (
        <div className="main">
            <div className="app">
                <div className="todo-list">
                    {todos.map((todo, index) => (
                        <Todo
                            key={index}
                            index={index}
                            todo={todo}
                            completeTodo={completeTodo}
                            deleteTodo={deleteTodo
                            }/>
                    ))}
                </div>
            </div>
            <div className="new-item">
                <TodoForm addTodo={addTodo}/>
            </div>
        </div>
    );
}

export default App