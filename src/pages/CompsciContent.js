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
        answer:'Inherits',
        options: ['Extends','Inherits','Inheritance','Implements'],
    },
    {
        id: 11,
        question:'Which Method is the Conventional Java Method For Comparing Two Objects For Equailty?',
        answer:'EQUALS()',
        options: ['CLONE()','EQUALS()','IS()','ISEQUAL()'],
    },
    {
        id: 12,
        question:'Which is NOT an Example of an "Is-A" Relationship',
        answer:'',
        options: ['A Car is a Vehicle','A Flute is a Woodwind','Mr. Seow is a Human','Water is Wet'],
    },
    {
        id: 13,
        question:'Which Keyword is Used to Declare an Interface?',
        answer:'Interface',
        options: ['Extends','Interface','Inheritance','Implements'],
    },
    {
        id: 14,
        question:'Must an Abstract Class Be Implemented in its Child Class?',
        answer:'Yes',
        options: ['Yes','No','Sometimes'],
    },
    {
        id: 15,
        question:'Should Abstract Classes Be Instantiated?',
        answer:'No',
        options: ['Yes','No','Sometimes'],
    },
    {
        id: 16,
        question:'Members of a Base Class That are Declared Private are Accessible to Which Classes?',
        answer:'Derived Classes',
        options: ['Derived Classes','Parent Classes','No Other Classes','Interfaces'],
    }
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