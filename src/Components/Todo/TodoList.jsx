import React, { useState } from 'react'
import TodoCard from './TodoCard'
const TodoList = () => {
    const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('todo')) || [])
    return (
        <div className="todoList">
            {todo.map(task => {
                return <TodoCard task={task} todo={todo} setTodo={setTodo} />
            })}
        </div>
    )
}

export default TodoList
