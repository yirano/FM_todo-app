import React from 'react'

const Status = (props) => {
    return (
        <div className="status">
            <div className="length">
                <p>{props.todo.length} items left</p>
            </div>
            <div className="filter">
                <p>All</p>
                <p>Active</p>
                <p>Completed</p>
            </div>
            <div className="clear">
                <p>Clear Completed</p>
            </div>
        </div>
    )
}

export default Status
