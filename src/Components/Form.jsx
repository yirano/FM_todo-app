import React, { useState } from 'react'

const initialState = {
    task: "",
    completed: false
}

const Form = () => {
    const [form, setForm] = useState(initialState)
    const [todo] = useState(JSON.parse(localStorage.getItem('todo')) || [])
    const handleSubmit = () => {
        todo.push(form)
        localStorage.setItem('todo', JSON.stringify(todo))
    }

    return (
        <div className="form-group">
            <form onSubmit={() => handleSubmit()}>
                <input type="text" name="task" value={form.task} onChange={e => setForm(e.target.value)} />
                <input type="submit" />
            </form>
        </div>
    )
}

export default Form
