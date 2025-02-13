import { Button } from '@mui/material'

export default function savedFlashCards() {
  let isFilled = JSON.parse(localStorage.getItem('custom-title'))

  return (
    <div className="container">
      <h1 className="header">Try one of our pre-made study packages below!</h1>

      <form>
        <Button
          href="/saved-flashcards/periodic-elements"
          variant="contained"
          color="primary"
        >
          Study some Chemistry with me
        </Button>
      </form>
      <form>
        <Button
          href="/saved-flashcards/history-cards"
          variant="contained"
          color="primary"
        >
          Study some History with me
        </Button>
      </form>

      <form>
        <Button
          href="/saved-flashcards/literature"
          variant="contained"
          color="primary"
        >
          Study some Literature with me
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
      <form>
        {isFilled ? (
          <div>
            <h3 className='header'>Created Custom Flashcards</h3>
            <Button href="/saved-flashcards/custom" variant="contained">
              {JSON.parse(localStorage.getItem('custom-title'))}
            </Button>
          </div>
        ) : (
          ''
        )}
      </form>
      <form className="backhome">
        <Button href="/" variant="contained" color="primary">
          Home
        </Button>
      </form>
    </div>
  )
}
