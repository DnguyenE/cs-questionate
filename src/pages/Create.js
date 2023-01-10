import FlashcardList from '../FlashcardList'
import React, { useState } from 'react'
import '../App.css'
import { Button, TextField } from '@mui/material'

export function setCard(obj) {
  window.localStorage.setItem('cards', JSON.stringify(obj))
}

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
      {/*for rendering the actual flashcard template 'for FLashcards'*/}

      <form className="save-flashcard-button">
        <TextField
          id="inputDefaultQ"
          variant="outlined"
          label="Enter Term"
          color="primary"
          value={inputQuestion}
          onChange={(event) => {
            setInputQuestion(event.target.value)
          }}
        />
        <TextField
          id="inputDefaultAns"
          variant="outlined"
          label="Enter Definition"
          color="primary"
          value={inputAnswer}
          onChange={(event) => {
            setInputAnswer(event.target.value)
          }}
        />
      </form>

      <div className="save-flashcard-button">
        <Button onClick={handleOnClick} variant="outlined">
          Save Flashcard
        </Button>
      </div>
    </div>
  )
}
