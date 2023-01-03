import React, { useState } from 'react'
import FlashcardList from './FlashcardList'
import './App.css'

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'What is 2 + 2?',
    answer: '4',
    options: ['2', '3', '4', '5'],
  },
  {
    id: 2,
    question: 'Question 2?',
    answer: 'Answer',
    options: ['Answer', 'Answer 1', 'Answer 2', 'Answer 3'],
  },
]

export default function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)
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
          // options: [],
        },
      ])
    }

    setInputAnswer('')
    setInputQuestion('')
  }

  return (
    <div>
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
