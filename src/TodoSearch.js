import React from 'react';
import './TodoSearch.css'
import { FaSearch } from "react-icons/fa";

const TodoSearch = () => {
    return (
        <div className='inputContainer'>
            <input className='searchTask' placeholder="Search task" />
            <div className='iconContainer'>
                < FaSearch className='icon' />
            </div>
        </div>
    )
}

export { TodoSearch } ;