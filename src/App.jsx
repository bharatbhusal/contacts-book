import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import BookList from './components/BookList'
import Connect from './components/Connect'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import "./App.css"

const App = () => {
    return (
        <div className='app'>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/books' element={<BookList />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
                <Route path='/connect' element={<Connect />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div>
    )
}

export default App