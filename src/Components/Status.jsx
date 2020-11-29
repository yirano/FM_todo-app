import React from 'react'

const Status = (props) => {

    const handleClear = () => {
        localStorage.setItem('todo', JSON.stringify(props.todo.filter(t => t.completed == false)))
        props.setTodo(JSON.parse(localStorage.getItem('todo')))
    }

    const showAll = () => {
        props.setTodo(JSON.parse(localStorage.getItem('todo')))
    }

    const showActive = () => {
        props.setTodo(JSON.parse(localStorage.getItem('todo')).filter(t => {
            return t.completed == false
        }))
    }

    const showCompleted = () => {
        props.setTodo(JSON.parse(localStorage.getItem('todo')).filter(t => {
            return t.completed == true
        }))
    }

    return (
        <div className="status">
            <div className="length">
                <p>{props.todo.length} items left</p>
            </div>
            <div className="filter">
                <p className="active" onClick={() => showAll()}>All</p>
                <p onClick={() => showActive()}>Active</p>
                <p onClick={() => showCompleted()}>Completed</p>
            </div>
            <div className="clear" onClick={() => handleClear()}>
                <p>Clear Completed</p>
            </div>
        </div>
    )
}

export default Status
