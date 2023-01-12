import { useState } from "react";
import FlashcardList from "../FlashcardList";
import Button from "@mui/material/Button";
import renderMathInElement from "katex/dist/contrib/auto-render.js";

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
  <script
    defer
    src="https://cdn.jsdelivr.net/npm/katex@0.10.0-rc.1/dist/contrib/auto-render.min.js"
    integrity="sha384-yACMu8JWxKzSp/C1YV86pzGiQ/l1YUfE8oPuahJQxzehAjEt2GiQuy/BIvl9KyeF"
    crossorigin="anonymous"
    onload="renderMathInElement(document.body);"
  ></script>
  <script>
    document.addEventListener("DOMContentLoaded", function(){" "}
    {renderMathInElement(document.body)}
  </script>
</head>;

const HISTORY_CARDS = [
  //enter math info here (same format)
  {
    id: 1,
    question: "Who Was the First Prime Minister of Canada?",
    answer: "John MacDonald",
    options: [
      "Pierre Trudeau",
      "John MacDonald",
      "Stephen Harper",
      "Alexander Mackenzie",
    ],
  },
  {
    id: 2,
    question: "What Year Was Canada Declared a Country?",
    answer: "1867",
    options: ["1667", "1920", "1883", "1867"],
  },
  {
    id: 3,
    question: "In What Year Did World War Two Begin?",
    answer: "1939",
    options: ["1812", "1914", "1939", "1945"],
  },
  {
    id: 4,
    question:
      "The Meltdown of a Nuclear Reactor Killed 100+ People in Which Ukrainian City?",
    answer: "Chernobyl",
    options: ["Kyiv", "Odessa", "Lyiv", "Chernobyl"],
  },
  {
    id: 5,
    question:
      "Which Country Joined Germany and Italy with the Axis Powers During WW2?",
    answer: "Japan",
    options: ["USA", "Austria", "China", "Japan"],
  },
  {
    id: 6,
    question: "In Which City Did Hitler Die In Following His Downfall in WW2?",
    answer: "Berlin",
    options: ["Munich", "Paris", "London", "Berlin"],
  },
  {
    id: 7,
    question: "The Cold War Was Between Which Two Countries?",
    answer: "USA-Soviet Union",
    options: [
      "USA-China",
      "USA-Soviet Union",
      "Soviet Union-Canada",
      "Canada-France",
    ],
  },
  {
    id: 8,
    question: "Which American President Was Assasinate in 1963?",
    answer: "John F. Kennedy",
    options: [
      "John F. Kennedy",
      "George Bush",
      "Bill Clinton",
      "Abraham Lincoln",
    ],
  },
  {
    id: 9,
    question: "Which Astronaut Was the First American to Step on the Moon?",
    answer: "Neil Armstrong",
    options: [
      "Buzz Aldrin",
      "Neil Armstrong",
      "Michael Collins",
      "James Lovell",
    ],
  },
  {
    id: 10,
    question: "In What Year Did the Soviet Union Dismantle?",
    answer: "1991",
    options: ["1922", "2001", "1989", "1991"],
  },
  {
    id: 11,
    question: "In What Year Did the Twin Towers Fall?",
    answer: "2001",
    options: ["2000", "2011", "2001", "2003"],
  },
  {
    id: 12,
    question: "Jeff Bezoz Founded Which Online Company in 1994?",
    answer: "Amazon",
    options: ["Amazon", "Microsoft", "Apple", "Rogers"],
  },
  {
    id: 13,
    question: "The First Ever Iphone is Released in Which Year?",
    answer: "2007",
    options: ["2003", "2005", "2007", "2008"],
  },
  {
    id: 14,
    question:
      "The 2010 FIFA World Cup is Held in This Continent for the First Time?",
    answer: "Africa",
    options: ["North America", "Asia", "Africa", "Australia"],
  },
  {
    id: 15,
    question:
      "The Novel Coronavirus is Widely Believed to Have Originated From Which City Wet Market?",
    answer: "Wuhan",
    options: ["Tokyo", "New York City", "Shanghai", "Wuhan"],
  },
  {
    id: 16,
    question:
      "The American Capitol Hill Insurrection Occured in Which U.S. City?",
    answer: "Washington DC",
    options: ["Washington DC", "New York City", "Chicago", "Boston"],
  },
];

export default function HistoryCards() {
  const [flashcards] = useState(HISTORY_CARDS);

  //const [variable, setVariable] = useState(default value)

  return (
    <div className="container">
      <div>
        <FlashcardList flashcards={flashcards} />
      </div>
      {/*for rendering the actual flashcard template 'for FLashcards'*/}
      <form className="backbuttonhistory">
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
