import { useState } from "react";
import FlashcardList from "../FlashcardList";
import Button from "@mui/material/Button";

/*Finished the english 'literature' flashcards, but the questions are more
grammar-based, not really on literature. I left the const and file name as 
literature bc its pointless to go and change all that, but i did change the "
Study Literature with me" to "Study Grammar with me".
*/

const LITERATURE_CARDS = [
  //enter literature content in this array (same format)
  {
    id: 1,
    question: "Which of these is a noun?",
    answer: "All of the Above",
    options: ["a Car", "A thought", "A Lion", "All of the Above"],
  },
  {
    id: 2,
    question: "Should the Name of a Stadium Be Capitalized?",
    answer: "Yes",
    options: ["Yes", "No"],
  },
  {
    id: 3,
    question: "Which Group of Letters Compose the Vowels?",
    answer: "A,E,I,O,U",
    options: ["S,C,T,H,J", "S,T,K,D,P", "A,E,I,O,U", "A,B,C,D,E"],
  },
  {
    id: 4,
    question: "What Word Describes a Word That Sounds Like the Noise it Makes?",
    answer: "Onotopeia",
    options: ["Simile", "Metaphor", "Onomatopeia", "Alliteration"],
  },
  {
    id: 5,
    question: "What is the Objective of the Use of Imagery?",
    answer: "Appeal to the Reader's senses",
    options: [
      "Appeal to the Reader's Confusion",
      "Appeal to the Reader's Judgement",
      "Appeal to the Reader's Fears",
      "Appeal to the Reader's Senses",
    ],
  },
  {
    id: 6,
    question: "What is the Name of a Word that Modifies a Noun?",
    answer: "Adjective",
    options: ["Adjective", "Noun", "Verb", "Adverb"],
  },
  {
    id: 7,
    question:
      'In the Sentence "John kicked the football across the yard," What is the Verb?',
    answer: "Kicked",
    options: ["John", "Kicked", "Football", "Across"],
  },
  {
    id: 8,
    question: 'What is the Plural Form of the Word "Leaf"?',
    answer: "Leaves",
    options: ["Leafs", "Leavys", "Leeves", "Leaves"],
  },
  {
    id: 9,
    question: 'Which is the plural of "Ox"?',
    answer: "Oxen",
    options: ["Oxi", "Oxes", "Oxia", "Oxen"],
  },
  {
    id: 10,
    question:
      "What is the Name of a Word that Adds Meaning to the Basic Meaning of the Main Verb?",
    answer: "Auxiliary Verb",
    options: [
      "Auxiliary Verb",
      "Transitive Verb",
      "Stative Verb",
      "Intransitive Verb",
    ],
  },
  {
    id: 11,
    question: "What Does the Tense Express?",
    answer: "Time",
    options: ["Place", "Thing", "Time", "Person"],
  },
  {
    id: 12,
    question: "What Are the Five Types of Nouns?",
    answer: "Proper, Common, Concrete, Abstract, Collective",
    options: [
      "Masculine, Feminine, Neutral, Singular, Plural",
      "Descriptive, Limiting, Proper, Degree, Functional",
      "Proper, Common, Concrete, Abstract, Collective",
    ],
  },
  {
    id: 13,
    question: "What Are the Five Types of Adverbs?",
    answer: "Time, Place, Manner, Degree, Numeral, Interrogative",
    options: [
      "Proper, Common, Concrete, Abstract, Collective",
      "Descriptive, Limiting, Proper, Degree, Functional",
      "Time, Place, Manner, Degree, Numeral, Interrogative",
    ],
  },
  {
    id: 14,
    question: "Which Clause Can Be a Complete Sentence?",
    answer: "Independant Clause",
    options: ["Dependant Clause", "Independant Clause"],
  },
  {
    id: 15,
    question:
      "Which Type of Word Shows a Relationship Between a Noun or a Pronoun in a Sentence?",
    answer: "Preposition",
    options: ["Copula", "Auxiliary Verb", "Adverb", "Preposition"],
  },
  {
    id: 16,
    question: "Which Type of Noun is Used to Name Groups of Objects?",
    answer: "Common",
    options: ["Concrete", "Common", "Proper", "Collective"],
  },
];

export default function LiteratureInfo() {
  const [flashcards] = useState(LITERATURE_CARDS);

  //const [variable, setVariable] = useState(default value)

  return (
    <div className="container">
      <div>
        <FlashcardList flashcards={flashcards} />
      </div>
      {/*for rendering the actual flashcard template 'for FLashcards'*/}
      <form className="backbuttonliterature">
        <Button
          href="/saved-flashcards"
          colour="secondary"
          size="medium"
          variant="contained"
        >
          Home
        </Button>
      </form>
    </div>
  );
}
