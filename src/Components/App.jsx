import React, { useEffect, useState } from 'react'
import Form from './Form'
import TodoList from './Todo/TodoList'
import Header from './Header'
import Footer from './Footer'

const App = () => {
    const [mode, setMode] = useState(localStorage.getItem("mode") || "light")

    return (
        <div className={`app ${mode}`}>
            <div className="container">
                <Header setMode={setMode} mode={mode} />
                <div className="todo">
                    <Form />
                    <TodoList />
                </div>
                <Footer />
            </div>
            <div className="background" />
        </div>
    )
}

export default App
