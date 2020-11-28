import React, { useState } from 'react'
import TodoCard from './TodoCard'
const TodoList = () => {
    const [todo] = useState(JSON.parse(localStorage.getItem('todo')) || [])
    console.log('TodoList --> ', todo)
    return (
        <div>
            {todo.map(task => {
                return <TodoCard task={task} />
            })}
        </div>
    )
}

export default TodoList
