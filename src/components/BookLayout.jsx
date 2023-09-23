import React from 'react'
import { Outlet, Link } from 'react-router-dom';

const BookLayout = () => {
    const books = [];

    for (let i = 1; i <= 10; i++)
    {
        books.push({
            id: `${i}`,
            title: `Book ${i}`
        });
    }
    return (
        <div className='booklayout'>
            <div>BookLayout</div>
            <ul>
                {books.map((book) => (
                    <li key={book.id}>
                        <Link to={`${book.id}`}>{book.title}</Link>
                    </li>
                ))}
            </ul>
            <Link to="new">New Book</Link>
            <Outlet context={{ hello: "World" }} />
        </div>
    )
}

export default BookLayout