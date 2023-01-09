export default function savedFlashCards() {
  return (
    <div className="container">
      <h1>This page is for displaying sets of created flashcards</h1>
      
      <form action="/saved-flashcards/periodic-elements">
        <button class='preset-btn' type="submit">Study the periodic table with me!</button>
      </form>

      <form action="/saved-flashcards/math-cards">
        <button class='preset-btn' type="submit">Study some math with me!</button>
      </form>

      <form action="/saved-flashcards/literature">
        <button class='preset-btn' type="submit">Study some literature with me</button>
      </form>
    </div>

  )
}
