import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import CheckMark from '../../Assets/images/icon-check.svg'
import Delete from '../../Assets/images/icon-cross.svg'

const TodoCard = (props) => {
    const { task, completed, id } = props.task

    const handleComplete = () => {
        localStorage.setItem('todo', JSON.stringify(props.todo.map(t => t.id == id ? { ...t, completed: !completed } : t).sort((a, b) => a.completed - b.completed)))
        props.setTodo(JSON.parse(localStorage.getItem('todo')))
        window.location.reload()
    }

    const handleDelete = () => {
        localStorage.setItem('todo', JSON.stringify(props.todo.filter(t => t.id != id)))
        props.setTodo(JSON.parse(localStorage.getItem('todo')))
        window.location.reload()

    }
    return (
        <Draggable draggableId={`${id}`} index={props.index}>
            {provided => (
                <div className="todoCard"
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
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
            )}
        </Draggable>
    )
}

export default TodoCard
