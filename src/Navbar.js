export default function Navbar() {
  const path = window.location.pathname

  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Questionate
      </a>
      <ul>
        <li>
          <a href="/saved-flashcards">FlashCards</a>
        </li>
        <li>
          <a href="/create">Create New Flashcard</a>
        </li>
      </ul>
    </nav>
  )
}
