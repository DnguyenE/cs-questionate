import React, { useState } from 'react'

//creating a function and exporting that function
export default function Flashcard({ flashcard }) {
  const [flip, setFlip] = useState(false) //creating a constant array which is the flip, and setting the flip state using a default state of false
  return (
    <div
      className={`card ${flip ? 'flip' : ''}`} //setting this classname to be dynamic which is compiled of whether the card is flipped or not
      onClick={() => setFlip(!flip)} //on the click, set the value of 'flip' to be the other option, swapping between the two
    >
      <div className="front">
        {/*creating a div for the front side of the card*/}
        {flashcard.question}
        {/** Printing out the value question from the flashcard array in app.js */}
        <div className="flashcard-options">
          {flashcard.options.map((option) => {
            return <div className="flashcard-option">{option}</div>
          })}
        </div>
      </div>
      <div className="back">{flashcard.answer}</div>
    </div>
  )
}
