import React, { useState } from 'react'
import Form from './Form'
import TodoList from './Todo/TodoList'
import Header from './Header'

const App = () => {
    const [mode, setMode] = useState("light")

    return (
        <div className={`app ${mode}`}>
            <div className="background" />
            <div className="container">
                <Header />
                <div className="todo">
                    <Form />
                    <TodoList />
                </div>
            </div>
        </div>
    )
}

export default App
