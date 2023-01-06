import FlashcardList from '../FlashcardList'
import React, { useState } from 'react'
import './App.css'
import { SAMPLE_FLASHCARDS } from '../App'

export default function Create() {

  const [flashcards, setFlashcards] = useState([])
  //const [variable, setVariable] = useState(default value)

  const [inputQuestion, setInputQuestion] = useState('')
  const [inputAnswer, setInputAnswer] = useState('')

  function handleOnClick() {
    //putting information through the localStorage

    if (inputAnswer !== '' && inputQuestion !== '') {
      setFlashcards((flashcards) => [
        ...flashcards,
        {
          id: flashcards.length + 1,
          question: inputQuestion,
          answer: inputAnswer,
          options: [],
        },
      ])
    }

    setInputAnswer('')
    setInputQuestion('')
  }

  return (
    <div className="container">
      <FlashcardList flashcards={flashcards} />

      <div>
        <input
          type="text"
          placeholder="Enter Question"
          value={inputQuestion}
          onChange={(event) => {
            setInputQuestion(event.target.value)
          }}
        ></input>
        <input
          type="text"
          placeholder="Enter Answer"
          value={inputAnswer}
          onChange={(event) => {
            setInputAnswer(event.target.value)
          }}
        ></input>
        <button onClick={handleOnClick}>Submit</button>
      </div>
    </div>
  )
}
