import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import TodoCard from './TodoCard'
import Status from '../Status'

const TodoList = () => {
    const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('todo')) || [])

    const onDragEnd = (result) => {
        console.log('OnDragEnd --> ', result)
        if (!result.destination) return
        const items = todo
        const [reorderedItem] = items.splice(result.source.index, 1)
        items.splice(result.destination.index, 0, reorderedItem)

        setTodo(items)
    }
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="todoList">
                {provided => (
                    <div className="todoList"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {todo.map((task, index) => (
                            <>
                                <TodoCard task={task}
                                    todo={todo}
                                    setTodo={setTodo}
                                    index={index}
                                    key={task.id}
                                />
                            </>
                        ))}
                        { provided.placeholder}
                    </div >

                )}
            </Droppable>
            <Status todo={todo} setTodo={setTodo} />
        </DragDropContext>
    )
}

export default TodoList
