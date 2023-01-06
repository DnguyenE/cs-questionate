import FlashcardList from '../FlashcardList'
import React, { useState } from 'react'
import './App.css'

export function setCard (obj) {
  window.localStorage.setItem('cards', JSON.stringify(obj))
}

export default function Create() {

  var existingCard = localStorage.getItem('cards')

  const [flashcards, setFlashcards] = useState([])
  setCard(flashcards)

  //const [variable, setVariable] = useState(default value)

  const [inputQuestion, setInputQuestion] = useState('')
  const [inputAnswer, setInputAnswer] = useState('')
  const [inputTitle, setInputTitle] = useState('')

  window.localStorage.setItem('title', inputTitle)

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
        }
      ])

      setCard(flashcards)
      localStorage.setItem('title', inputTitle)
    }

    setInputAnswer('')
    setInputQuestion('')
  }

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Enter Title"
        value={inputTitle}
        onChange={(event) => {
          setInputTitle(event.target.value)
        }}
      ></input>

      <div>
        <FlashcardList flashcards={flashcards} />
      </div>

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
