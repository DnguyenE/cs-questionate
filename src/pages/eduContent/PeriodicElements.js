import { useState } from "react";
import FlashcardList from "../../../src/FlashcardList";
import Button from "@mui/material/Button";
import renderMathInElement from "katex/dist/contrib/auto-render.js";

/*Creating 16 different Chem/Table of Elements flashcards.
Increasing in difficulty as id # increases. */

/*import MathJax from 'react-mathjax' --need to figure out how 
to get math symbols for id15 & id16 */

<head>
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css"
    integrity="sha384-vKruj+a13U8yHIkAyGgK1J3ArTLzrFGBbBc0tDp4ad/EyewESeXE/Iv67Aj8gKZ0"
    crossorigin="anonymous"
  />
  <script
    defer
    src="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.js"
    integrity="sha384-PwRUT/YqbnEjkZO0zZxNqcxACrXe+j766U2amXcgMg5457rve2Y7I6ZJSm2A0mS4"
    crossorigin="anonymous"
  ></script>
  <script
    defer
    src="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/contrib/auto-render.min.js"
    integrity="sha384-+VBxd3r6XgURycqtZ117nYw44OOcIax56Z4dCRWbxyPt0Koah1uHoK0o4+/RRE05"
    crossorigin="anonymous"
  ></script>
  <script
    type="text/javascript"
    src="node_modules/katex/dist/contrib/auto-render.js"
  ></script>
  <script>
    document.addEventListener("DOMContentLoaded", function(){" "}
    {renderMathInElement(document.body)}
  </script>
</head>;
const ATOMIC_FLASHCARDS = [
  {
    id: 1,
    question: "What is the First Element in the Periodic Table of Elements?",
    answer: "Hydrogen",
    options: ["Helium", "Oxygen", "Hydrogen", "Carbon"],
  },
  {
    id: 1,
    question: "Which Group of Elements Compose the Halogens?",
    answer: "F, Cl, Br, I, At, Ts",
    options: [
      "H, Li, Na, K, Rb, Cs, Fr",
      "He, Ne, Ar, Kr, Xe",
      "Be, Mg, Ca, Sr, Ba",
    ],
  },
  {
    id: 3,
    question:
      "Must Atoms of Any Element Have an Equal Number of Protons and Neutrons?",
    answer: "No",
    options: ["Yes", "No"],
  },
  {
    id: 4,
    question: "Which Scientist Organized the First Periodic Table of Elements?",
    answer: "Mendeleev",
    options: ["Bohr", "Dalton", "Thomson", "Mendeleev"],
  },
  {
    id: 5,
    question: "What Group of Elements Are the Least Reactive?",
    answer: "Noble Gases",
    options: [
      "Halogens",
      "Noble Gases",
      "Alkaline Metals",
      "Alkaline Earth Metals",
    ],
  },
  {
    id: 6,
    question:
      "Do Elements in the Same Family Have Similar Properties Because They Have the Same Atomic Mass?",
    answer: "No, It is Because They Have the Same Number of Valence Electrons",
    options: ["Yes", "No"],
  },
  {
    id: 7,
    question:
      "Does Ionization Energy Tend to Increase or Decrease Across a Period?",
    answer: "Increase",
    options: ["Increase", "Decrease"],
  },
  {
    id: 8,
    question: "What Generally Determines the Reactivity of an Element?",
    answer: "Number of Valence Electrons",
    options: [
      "Atomic Mass",
      "Number of Protons",
      "Number of Valence Electrons",
      "Solubility",
    ],
  },
  {
    id: 9,
    question: "How Many Blocks is the Periodic Table of Elements Divided Into?",
    answer: "4",
    options: ["1", "3", "4", "5"],
  },
  {
    id: 10,
    question:
      "How Many Protons, Neutrons, Valence Electrons, are in a Carbon Atom, Respectively?",
    answer: "6,6,4",
    options: ["6,6,4", "6,6,0", "6,5,0", "6,6,6"],
  },
  {
    id: 11,
    question: "How Many Electrons Can the First Electron Subshell Hold?",
    answer: "2",
    options: ["1", "2", "8", "18"],
  },
  {
    id: 12,
    question:
      "What are Each of the Four Electron Subshells called, and How Many Electrons Can Each Hold?",
    answer: "(s,2),(p,6)(d,10),(f,14)",
    options: [
      "(a,1),(b,2),(c,3),(d,4)",
      "(a,2),(b,2),(c,8),(d,18)",
      "(s,2),(p,6),(d,10)(f,14)",
      "(s,2),(p,8),(d,8),(f,18)",
    ],
  },
  {
    id: 13,
    question:
      "Are All Elements on the Periodic Table Are in Their Ground State?",
    answer: "Yes",
    options: ["Yes", "No"],
  },
  {
    id: 14,
    question:
      "What is the Direction of Spin on the Seventh Electron of a Sodium Atom?",
    answer: "Up",
    options: ["Up", "Down", "Left", "Right"],
  },
  {
    id: 15,
    question: "How Many Orbitals does a Ground State Oxygen Atom Occupy?",
    answer: "3",
    options: ["1", "2", "3", "4"],
  },
  {
    id: 16,
    question:
      "How Many Orbitals Does an Oxygen Atom Occupy in an Excited State?",
    answer: "4",
    options: ["0", "2", "3", "4"],
  },
];

export default function ElementCards() {
  const [flashcards] = useState(ATOMIC_FLASHCARDS);

  //const [variable, setVariable] = useState(default value)

  return (
    <div className="container">
      <div>
        <FlashcardList flashcards={flashcards} />
      </div>
      {/*for rendering the actual flashcard template 'for FLashcards'*/}

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
