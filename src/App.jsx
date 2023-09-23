import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import BookList from './components/BookList'
import Book from './components/Book'
import NewBook from './components/NewBook'
import Connect from './components/Connect'
import About from './components/About'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import "./App.css"
import BookLayout from './components/BookLayout'

const App = () => {
    return (
        <div className='app'>

            <Navbar />
            <Routes>
                <Route path='/' exact element={<Home />} />
                <Route path='/books' element={<BookLayout />} >
                    {/* <Route index element={<BookList />} /> */}
                    <Route path=":id" element={<Book />} />
                    <Route path="new" element={<NewBook />} />
                </Route >
                <Route path='/contact' element={<Contact />} />
                <Route path='/about' element={<About />} />
                <Route path='/connect' element={<Connect />} />
                <Route path='/connect' element={<Connect />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </div >
    )
}

export default App