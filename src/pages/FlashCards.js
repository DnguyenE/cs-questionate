import FlashcardList from '../FlashcardList'

export default function savedFlashCards() {
  let data = localStorage.getItem('title')

  return (
    <div className="container">
      <p>{localStorage.getItem('title')}</p>
    </div>
  )
}
