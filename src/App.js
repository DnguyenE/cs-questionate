import React, { useState } from 'react'
import FlashcardList from './FlashcardList'
import './App.css'
import Navbar from './Navbar'
import Pricing from './pages/Pricing'
import Create from './pages/Create'
import Home from './pages/Home'

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'What is 2 + 2?',
    answer: '4',
    options: ['2', '3', '4', '5'],
  },
  {
    id: 2,
    question: 'Question 2?',
    answer: 'Answer',
    options: ['Answer', 'Answer 1', 'Answer 2', 'Answer 3'],
  },
]

export default function App() {
  let component

  switch (window.location.pathname) {
    case '/':
      component = <Home />
      break
    case '/pricing':
      component = <Pricing />
      break
    case '/create':
      component = <Create />
      break
  }

  

  return (
    <div>
      <Navbar />
      {component}
    </div>
  )
}
