import React from 'react'
import { Link } from "react-router-dom";
import './styles.scss'

const Navigation = () => {
  return (
    <header className="header">
        <nav className="navbar">
            <Link to="/" className="nav-logo">Helloworld App </Link>
            <ul className="nav-menu">
                <li className="nav-item">
                    <Link to="/" className="nav-link"> Todos </Link>
                </li>
                <li className="nav-item">
                    <Link to="/weather" className="nav-link button"> Weather </Link>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navigation