import React from 'react'
import { NavLink } from "react-router-dom"

const Navbar = () => {

    return (
        <nav>
            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/books">Books</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/connect">Connect</NavLink></li>

            </ul>
        </nav>
    )
}

export default Navbar