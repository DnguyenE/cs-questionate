import FlashcardList from '../FlashcardList'
import React, { useState } from 'react'
import '../App.css'
import { Button, TextField } from '@mui/material'

export default function Create() {
  const [flashcards, setFlashcards] = useState([])

  //const [variable, setVariable] = useState(default value)

  const [inputQuestion, setInputQuestion] = useState('')
  const [inputAnswer, setInputAnswer] = useState('')

  function handleOnClickAdd() {
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

      <form className="center-obj">
        <TextField
          sx={{ input: { color: 'white' } }}
          id="inputDefaultQ"
          variant="outlined"
          label="Enter Term"
          color="secondary"
          value={inputQuestion}
          onChange={(event) => {
            setInputQuestion(event.target.value)
          }}
        />
        <TextField
          sx={{ input: { color: 'white' } }}
          id="inputDefaultAns"
          variant="outlined"
          label="Enter Definition"
          color="secondary"
          value={inputAnswer}
          onChange={(event) => {
            setInputAnswer(event.target.value)
          }}
        />
      </form>

      <div className="center-obj">
        <Button onClick={handleOnClickAdd} variant="outlined">
          Save Flashcard
        </Button>
      </div>
      <form className="backbutton1">
        <Button
          href="/saved-flashcards"
          colour="secondary"
          size="medium"
          variant="contained"
        >
          Back
        </Button>
      </form>
    </div>
  )
}
