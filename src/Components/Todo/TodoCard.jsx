import React, { useState } from 'react'
import CheckMark from '../../Assets/images/icon-check.svg'
import Delete from '../../Assets/images/icon-cross.svg'

const TodoCard = (props) => {
    const { task, completed, id } = props.task
    const handleComplete = () => {
        localStorage.setItem('todo', JSON.stringify(props.todo.map(t => t.id == id ? { ...t, completed: !completed } : t)))
        props.setTodo(JSON.parse(localStorage.getItem('todo')))
    }

    const handleDelete = () => {
        localStorage.setItem('todo', JSON.stringify(props.todo.filter(t => t.id != id)))
        props.setTodo(JSON.parse(localStorage.getItem('todo')))
    }
    return (
        <div className="todoCard">
            <div className={completed ? "completed toggleComplete" : "incomplete toggleComplete"} onClick={() => handleComplete()}>
                {completed ?
                    <img src={CheckMark} />
                    : null
                }
            </div>
            <div className={completed ? "task completed" : "task incomplete"} onClick={() => handleComplete()}>
                <p>{task}</p>
            </div>
            <div className="delete" onClick={() => handleDelete()}>
                <img src={Delete} />
            </div>
        </div>
    )
}

export default TodoCard
