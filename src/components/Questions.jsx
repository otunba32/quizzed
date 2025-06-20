import React from 'react'
import Options from './options'

export default function Questions({ question, dispatch, answer }) {
  if (!question) return null

  return (
    <div>
        <h4>{question.question}</h4>
        <Options question={question} dispatch={dispatch} answer={answer} />
    </div>
  )
}
