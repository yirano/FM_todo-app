import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import TodoCard from './TodoCard'
import Status from '../Status'

const TodoList = () => {
    const [todo, setTodo] = useState(JSON.parse(localStorage.getItem('todo')) || [])
    return (
        <DragDropContext>
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
                                {provided.placeholder}
                            </>
                        ))}
                    </div >

                )}
            </Droppable>
            <Status todo={todo} setTodo={setTodo} />
            )
        </DragDropContext>
    )
}

export default TodoList
