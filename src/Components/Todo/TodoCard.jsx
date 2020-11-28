import React from 'react'

const TodoCard = (props) => {
    const { task } = props
    console.log('TodoCard task --> ', task)
    console.log('TodoCard props --> ', props)
    return (
        <div>
            <p>{task}</p>
        </div>
    )
}

export default TodoCard
