import React from 'react'

const Header = (props) => {
    const { mode, setMode } = props
    const handleClick = () => {
        if (mode == "light") {
            localStorage.setItem('mode', 'dark')
            setMode('dark')
        } else {
            localStorage.setItem('mode', 'light')
            setMode('light')
        }
    }
    return (
        <div className="header">
            <h1>Todo</h1>
            <button onClick={(e) => handleClick(e)}>Light/Dark</button>
        </div>
    )
}

export default Header
