import { useState } from "react"
import FlashcardList from "../FlashcardList"

const LITERATURE_CARDS = [
  //enter literature content in this array (same format)
  {
      id: 1,
      question: 'test',
      answer: 'test',
      options: []
  }
]

export default function LiteratureInfo() {
  const [flashcards] = useState(LITERATURE_CARDS)

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
