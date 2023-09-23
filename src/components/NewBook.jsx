import React from 'react'
import { useOutletContext } from 'react-router-dom'

const NewBook = () => {
    const obj = useOutletContext()
    return (
        <div>NewBook {obj.hello}</div>

    )
}

export default NewBook