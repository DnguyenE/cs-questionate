import FlashcardList from "../FlashcardList";
import React, { useState, useEffect } from "react";
import "../App.css";
import audio from "../assets/success-sound.mp3";
import { Button, TextField } from "@mui/material";

export let custom_flashcard = [];

export default function Create() {
  const [flashcards, setFlashcards] = useState([]);
  const [inputQuestion, setInputQuestion] = useState("");
  const [inputAnswer, setInputAnswer] = useState("");
  const [inputTitle, setinputTitle] = useState("");

  const [value, setValue] = useState(0);

  function sound() {
    new Audio(audio).play();
  }

  useEffect(() => {
    sound();
  }, [value]);

  function handleOnClickAdd() {
    //putting information through the localStorage

    if (inputAnswer !== "" && inputQuestion !== "") {
      setFlashcards((flashcards) => [
        ...flashcards,
        {
          id: flashcards.length + 1,
          question: inputQuestion,
          answer: inputAnswer,
          options: [],
        },
      ]);
    }

    setInputAnswer("");
    setInputQuestion("");
  }

  function handleOnClickSaveSet() {
    setValue(value + 1);

    localStorage.setItem("custom-cards", JSON.stringify(flashcards));
    localStorage.setItem("custom-title", JSON.stringify(inputTitle));
    if (
      JSON.parse(localStorage.getItem("custom-cards")) !== [] &&
      JSON.parse(localStorage.getItem("custom-title")) !== ""
    )
      alert(
        "Flashcard Set Saved! To access this set, navigate to (created flashcards)"
      );
  }

  return (
    <div className="container">
      <form>
        <TextField
          sx={{ input: { color: "white" } }}
          variant="outlined"
          label="Enter Title"
          color="secondary"
          value={inputTitle}
          onChange={(event) => {
            setinputTitle(event.target.value);
          }}
        />
      </form>

      <FlashcardList flashcards={flashcards} />
      {/*for rendering the actual flashcard template 'for FLashcards'*/}

      <form className="center-obj">
        <TextField
          sx={{ input: { color: "white" } }}
          id="inputDefaultQ"
          variant="outlined"
          label="Enter Term"
          color="secondary"
          value={inputQuestion}
          onChange={(event) => {
            setInputQuestion(event.target.value);
          }}
        />
        <TextField
          sx={{ input: { color: "white" } }}
          id="inputDefaultAns"
          variant="outlined"
          label="Enter Definition"
          color="secondary"
          value={inputAnswer}
          onChange={(event) => {
            setInputAnswer(event.target.value);
          }}
        />
      </form>

      <div className="center-obj">
        <Button onClick={handleOnClickAdd} variant="outlined">
          Save Flashcard
        </Button>
      </div>

      <div className="center-obj">
        <Button onClick={handleOnClickSaveSet} variant="outlined">
          Save Flashcard Set
        </Button>
      </div>

      <form className="backbutton1">
        <Button
          href="/saved-flashcards"
          colour="secondary"
          size="medium"
          variant="contained"
        >
          Back
        </Button>
      </form>
    </div>
  );
}
