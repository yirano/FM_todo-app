import React from 'react'
import MoonIcon from '../Assets/images/icon-moon.svg'
import SunIcon from '../Assets/images/icon-sun.svg'

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
            <button onClick={(e) => handleClick(e)}>
                <img src={mode == "dark" ? SunIcon : MoonIcon} />
            </button>
        </div>
    )
}

export default Header
