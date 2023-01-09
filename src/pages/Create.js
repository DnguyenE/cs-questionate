import FlashcardList from '../FlashcardList'
import React, { useState, useEffect } from 'react'
import '../App.css'

export function setCard(obj) {
  window.localStorage.setItem('cards', JSON.stringify(obj))
}

export default function Create() {
  const [flashcards, setFlashcards] = useState([])
  setCard(flashcards)

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
      {/*for rendering the actual flashcard template 'for FLashcards'*/}

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
