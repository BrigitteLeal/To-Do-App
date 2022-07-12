import React from 'react';
import errorImg from '../assets/error2.png'
import './TodosError.css';

function TodosError () {
    return (
        <>
            <div className='errorImgContainer'>
                <img alt='error img' src={errorImg} className='errorImg'/>
            </div>
            <p className='sorryText'>We're sorry</p>
            <p className='explicationText'>An error occurred while loading your TO DOs</p>
        </>
    )
}

export { TodosError };