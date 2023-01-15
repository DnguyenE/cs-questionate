import { useState } from 'react'
import FlashcardList from '../../FlashcardList'
import { Button } from '@mui/material'

export default function CustomSaved() {
  let [isFilled] = useState(
    JSON.parse(localStorage.getItem('custom-cards')),
  )

  const [flashcards] = useState(
    JSON.parse(localStorage.getItem('custom-cards')),
  )

  function handleOnClickDelete() {
    localStorage.clear('custom-title')
    localStorage.clear('custom-cards')
  }

  return (
    <div className="container">
      {isFilled ? (
        <div>
          <div>
            <Button onClick={handleOnClickDelete}>Delete Flashcard Set</Button>
          </div>

          <FlashcardList flashcards={flashcards} />
        </div>
      ) : (
        <div className="empty-set">
          <h1>Empty Flashcard Set</h1>
          <h3>
            To create a new flashcard set, navigate to{' '}
            <a href="/create" color="white">
              Create New Flashcard Set
            </a>
          </h3>
        </div>
      )}
    </div>
  )
}
