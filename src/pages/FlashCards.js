import { Button } from "@mui/material";

export default function savedFlashCards() {
  return (
    <div className="container">
      <h1 className="header">Try one of our pre-made study packages below!</h1>

      <form>
        <Button
          href="/saved-flashcards/periodic-elements"
          variant="contained"
          color="primary"
        >
          Study some chemistry with me
        </Button>
      </form>
      <form>
        <Button
          href="/saved-flashcards/math-cards"
          variant="contained"
          color="primary"
        >
          Study some math with me
        </Button>
      </form>

      <form>
        <Button
          href="/saved-flashcards/literature"
          variant="contained"
          color="primary"
        >
          Study some literature with me
        </Button>
      </form>
      <form>
        <Button
          href="/saved-flashcards/compsci"
          variant="contained"
          color="primary"
        >
          Study some Computer Science with me
        </Button>
      </form>
      <form className="backhome">
        <Button href="/" variant="contained" color="primary">
          Back
        </Button>
      </form>
    </div>
  );
}
