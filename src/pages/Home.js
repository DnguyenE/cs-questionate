import { Button } from "@mui/material";
import cspic from "./cspic.avif";
export default function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${cspic})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
      }}
    >
      <h1 className="intro0">Welcome to Questionate</h1>
      <h2 className="intro1">
        This is a digital study application that uses flashcards to help you
        study and learn! You can use one of our built-in flashcard sets, or
        create a set of custom flashcards to test yourself with. Click below to
        create your own questions and start learning now!
      </h2>
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
      <h3 className="learnbutton">To learn about this project, click below:</h3>
      <form className="homepagebutton">
        <Button
          href="/aboutus"
          colour="primary"
          size="medium"
          variant="contained"
        >
          About Our Project
        </Button>
      </form>
    </div>
  );
}
