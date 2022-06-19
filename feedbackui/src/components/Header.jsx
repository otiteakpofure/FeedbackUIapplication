import React from 'react'
import "./styles.css"
// This is the component for the header 
function Header({text}) {
  return (
    <header className="header">
        <h2>{text}</h2>
    </header>
  )
}

export default Header