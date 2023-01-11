import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
//import Container from '@mui/material/Container';
export default function AboutProject() {
  return (
    <div>
      <h1>About Our Project</h1>
      <form></form>
      <p>
        Questionate is an application developed by Ethan Dinh and Emil
        Melconian. Intended as a digital study tool, the goal during development
        was to create a simple and easy-to-use application that helps students
        memorize and learn efficiently. With two learning modes, students are
        able to use a template to input custom information, or use one of our
        offered study topics.
      </p>
      <h2 className="clickbelow">Click below to start learning now!</h2>
      <form className="aboutusbutton1">
        <Button
          href="/create"
          colour="primary"
          size="medium"
          variant="contained"
        >
          Create your own
        </Button>
      </form>
      <h3 className="or">Or try our pre-made flashcards:</h3>
      <form className="aboutusbutton2">
        <Button
          href="/saved-flashcards"
          colour="primary"
          size="medium"
          variant="contained"
        >
          Pre-made flashcards
        </Button>
      </form>
    </div>
  );
}
