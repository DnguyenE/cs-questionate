import { useState } from 'react'
import FlashcardList from '../FlashcardList'

const MATH_CARDS = [
  //enter math info here (same format)
  {
    id: 1,
    question: 'test',
    answer: 'test',
    options: [],
  },
]

export default function MathCards() {
  const [flashcards] = useState(MATH_CARDS)

  //const [variable, setVariable] = useState(default value)

  return (
    <div className="container">
      <div>
        <FlashcardList flashcards={flashcards} />
      </div>
      {/*for rendering the actual flashcard template 'for FLashcards'*/}
    </div>
  )
}
