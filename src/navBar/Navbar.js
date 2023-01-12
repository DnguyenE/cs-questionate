import { Button } from "@mui/material";

export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Questionate
      </a>
      <ul>
        <li>
          <a href="/saved-flashcards">
            <Button variant="text" size="small">
              Created Flashcards
            </Button>
          </a>
        </li>
        <li>
          <a href="/create">
            <Button variant="text" size="small">
              Custom New Flashcard Set
            </Button>
          </a>
        </li>
      </ul>
    </nav>
  );
}
