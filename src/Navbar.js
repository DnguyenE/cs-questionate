export default function Navbar() {

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
