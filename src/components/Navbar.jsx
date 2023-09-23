import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/books">Books</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/connect">Connect</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar