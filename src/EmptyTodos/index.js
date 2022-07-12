import React from 'react';
import { BsFillPlusCircleFill } from "react-icons/bs";
import imgEmpty from '../assets/Empty-amico.png'
import './EmptyTodos.css';

function EmptyTodos () {
    return (
        <>
            <div className='emptyImgContainer'>
                <img alt="img empty" src={imgEmpty} className='imgEmpty'/>
            </div>
            <p className='empty'>Oh, you've got nothing</p>
            <p className='textAdd'>Use < BsFillPlusCircleFill className="litteButtonAdd" /> button to add new tasks</p>
        </>   
    )
}

export { EmptyTodos };