import { useState } from 'react'
import ReactDOM from 'react'
import FlashcardList from '../FlashcardList'
import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex';
import renderMathInElement from "katex/dist/contrib/auto-render.js";
import katex from 'katex'

<head> 
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.css" integrity="sha384-vKruj+a13U8yHIkAyGgK1J3ArTLzrFGBbBc0tDp4ad/EyewESeXE/Iv67Aj8gKZ0" crossorigin="anonymous"/>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/katex.min.js" integrity="sha384-PwRUT/YqbnEjkZO0zZxNqcxACrXe+j766U2amXcgMg5457rve2Y7I6ZJSm2A0mS4" crossorigin="anonymous"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.4/dist/contrib/auto-render.min.js" integrity="sha384-+VBxd3r6XgURycqtZ117nYw44OOcIax56Z4dCRWbxyPt0Koah1uHoK0o4+/RRE05" crossorigin="anonymous"></script>
  <script type="text/javascript" src="node_modules/katex/dist/contrib/auto-render.js"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/katex@0.10.0-rc.1/dist/contrib/auto-render.min.js" integrity="sha384-yACMu8JWxKzSp/C1YV86pzGiQ/l1YUfE8oPuahJQxzehAjEt2GiQuy/BIvl9KyeF" crossorigin="anonymous"
        onload="renderMathInElement(document.body);"></script>
  <script>
    document.addEventListener("DOMContentLoaded", function() {
        renderMathInElement(document.body)}
  </script>
  </head>
  

const MATH_CARDS = [
  //enter math info here (same format)
  {
    id: 1,
    question: '$CO^2$',
    answer: '',
    options: [],
  },
  {
    id: 2,
    question: '$$ CO^2 $$',
    answer: 'test',
    options: [],
  },
]

export default function MathCards() {
  const [flashcards] = useState(MATH_CARDS)

  //const [variable, setVariable] = useState(default value)

  return (
    <div className="container">
      <div>
        <FlashcardList flashcards={flashcards} />
      </div>
      {/*for rendering the actual flashcard template 'for FLashcards'*/}
    </div>
  )
}
