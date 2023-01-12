import { Button } from "@mui/material";
export default function Home() {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://imgs.search.brave.com/7Kfcvnd6rA9SATfDilO-CXt948rAZl7KIse_86qNywM/rs:fit:490:225:1/g:ce/aHR0cHM6Ly90c2Ux/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5X/QjJucjJITlhDSjNP/Tmw4a0lDTVFBSGFI/SyZwaWQ9QXBp)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        height: 920,
        width: 1500,
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
