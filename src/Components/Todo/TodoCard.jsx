import React from 'react'

const TodoCard = (props) => {
    const { task } = props
    return (
        <div className="todoCard">
            <p>{task}</p>
        </div>
    )
}

export default TodoCard
