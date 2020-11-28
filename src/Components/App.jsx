import React from 'react'
import Form from './Form'
import TodoList from './Todo/TodoList'
import Header from './Header'

const App = () => {
    return (
        <div className="app">
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
