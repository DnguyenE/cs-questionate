import { useState } from "react"
import FlashcardList from "../FlashcardList"

const COMPSCI_FLASHCARDS = [
    {
        id: 1,
        question:'Which is the Equivalent for x = a+x+0, Where a =2*7',
        answer:'x = +a',
        options: ['x+ = (15-1)','x*a','x+ = x+a','x = +a'],
    },
    {
        id: 2,
        question:'In Java, 1/5 + 5 is Equal to...?',
        answer:'5',
        options: ['5.2','0.1','5','5.0'],
    },
    {
        id: 3,
        question:'A "For" Loop Must Iterate Once Before Evaluating the Condition',
        answer:'False',
        options: ['True','False'],
    },
    {
        id: 4,
        question:'Which is the Equivalent for x = a+x+0, Where a =2*7',
        answer:'x = +a',
        options: ['x+ = (15-1)','x*a','x+ = x+a','x = +a'],
    },
    {
        id: 5,
        question:'What is the Worst-Case Efficiency for Linear Search? ',
        answer:'O(n)',
        options: ['O(nlogn)','O(logn)','O(n)','O(1)'],
    },
    {
        id: 6,
        question:'What is the Time Complexity of the Worst-Case Uniform Binary Search?',
        answer:'O(logn)',
        options: ['O(nlogn)','O(logn)','O(n)','O(1)'],
    },
    {
        id: 7,
        question:'How Many Times is the Array [8,7,6,5,4] Passed On During Bubble Sort?',
        answer:'4',
        options: ['0','5','4','6'],
    },
    {
        id: 8,
        question:'Which type of Classes Can Be Instantiated?',
        answer:'Neither',
        options: ['Abstract','Interface','Both','Neither'],
    },
    {
        id: 9,
        question:'How Many Levels of of Inheritance Can a Class Have?',
        answer:'Unlimited',
        options: ['Unlimited','None','1','3'],
    },
    {
        id: 10,
        question:'Which Keyword is Used When a Class Inherits Another Class?',
        answer:'x = +a',
        options: ['x+ = (15-1)','Private','x+ = x+a','x = +a'],
    },
]
export default function CompsciCards() {
    const [flashcards, setFlashcards] = useState(COMPSCI_FLASHCARDS)
  
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