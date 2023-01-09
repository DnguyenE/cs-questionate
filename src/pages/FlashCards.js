import FlashcardList from '../FlashcardList'

export default function savedFlashCards() {
  return (
    <div className="container">
      <h1>This page is for displaying sets of created flashcards</h1>
      <div>
        <a href="/saved-flashcards/periodic-elements">
          Study the periodic table with me
        </a>
      </div>
      <div>
        <a href="/saved-flashcards/math-cards">Study some math with me</a>
      </div>
      <div>
        <a href="/saved-flashcards/literature">Study some grammar with me</a>
      </div>
    </div>
  )
}
