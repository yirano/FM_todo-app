import React from 'react'
import Form from './Form'
import TodoList from './Todo/TodoList'
import Header from './Header'

const App = () => {
    return (
        <div>
            <Header />
            <Form />
            <TodoList />
        </div>
    )
}

export default App
