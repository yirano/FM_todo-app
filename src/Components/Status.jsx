import React, { useEffect, useState } from 'react'

const Status = (props) => {

    const [taskFilter, setTaskFilter] = useState([])
    const tasks = Array.prototype.slice.call(taskFilter)

    useEffect(() => {
        setTaskFilter(document.querySelectorAll('.taskFilter'))
    }, [])

    for (let i = 0; i < tasks.length; i++) {
        tasks[i].addEventListener("click", () => {
            const curr = document.querySelector('.active')
            console.log('curr', curr.className)
            curr.classList.remove('active')
            tasks[i].className = `${tasks[i].className} active`
        })
    }

    const handleClear = () => {
        const filterComplete = props.todo.filter(t => t.completed == false)
        localStorage.setItem('todo', JSON.stringify(filterComplete))
        props.setTodo(JSON.parse(localStorage.getItem('todo')))
        window.location.reload()
    }

    const showAll = (e) => {
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
                <p className="taskFilter all active" onClick={(e) => showAll(e)}>All</p>
                <p className="taskFilter incomplete" onClick={() => showActive()}>Active</p>
                <p className="taskFilter completed" onClick={() => showCompleted()}>Completed</p>
            </div>
            <div className="clear" onClick={() => handleClear()}>
                <p>Clear Completed</p>
            </div>
        </div>
    )
}

export default Status
