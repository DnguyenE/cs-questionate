export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Questionate
      </a>
      <ul>
        <li>
          <a href="/saved-flashcards">
            <button type="submit">Flashcard</button>
          </a>
        </li>
        <li>
          <a href="/create">
            <button type="submit">Custom New Flashcard Set</button>
          </a>
        </li>
      </ul>
    </nav>
  )
}
