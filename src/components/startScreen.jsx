import React from 'react'

export default function StartScreen({ numQuestions, dispatch }) {
    return (
        <div className='start'>
            <h2>
                Quick React Quiz!
            </h2>
            <h4>{numQuestions} questions to test your React Mastery</h4> 
            <button className='btn btn-ui' onClick={ () => dispatch({ type: "start"})}>Let's start</button>       
        </div>
    )
}

