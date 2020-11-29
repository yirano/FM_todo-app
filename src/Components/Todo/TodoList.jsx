import React, { useState } from 'react'
import TodoCard from './TodoCard'
import Status from '../Status'
const TodoList = () => {
    const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('todo')) || [])
    return (
        <div className="todoList">
            {todo.map(task => {
                return <TodoCard task={task} todo={todo} setTodo={setTodo} />
            })}
            <Status todo={todo} />
        </div>
    )
}

export default TodoList
