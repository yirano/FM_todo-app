import React, { useEffect, useState } from 'react'

const Status = (props) => {

    const [taskFilter, setTaskFilter] = useState([])
    const tasks = Array.prototype.slice.call(taskFilter)
    const [filterDisplay, setFilterDisplay] = useState()

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
        setFilterDisplay('active')
        props.setTodo(JSON.parse(localStorage.getItem('todo')))
    }

    const showActive = () => {
        setFilterDisplay('active')
        props.setTodo(JSON.parse(localStorage.getItem('todo')).filter(t => {
            return t.completed == false
        }))
    }

    const showCompleted = (e) => {
        console.log('show Completed --> ', e)
        setFilterDisplay('completed')
        props.setTodo(JSON.parse(localStorage.getItem('todo')).filter(t => {
            return t.completed == true
        }))
    }


    return (
        <div className="status">
            <div className="length">
                {filterDisplay != 'completed' ?
                    <p>{props.todo.filter(f => !f.completed).length} items left</p>
                    : <p>{props.todo.filter(f => f.completed).length} items completed</p>}
            </div>
            <div className="filter">
                <p className="taskFilter all active" onClick={(e) => showAll(e)}>All</p>
                <p className="taskFilter incomplete" onClick={() => showActive()}>Active</p>
                <p className="taskFilter completed" onClick={(e) => showCompleted(e)}>Completed</p>
            </div>
            <div className="clear" onClick={() => handleClear()}>
                <p>Clear Completed</p>
            </div>
        </div>
    )
}

export default Status
