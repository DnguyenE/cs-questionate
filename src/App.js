import './App.css'
import Navbar from './Navbar'
import SavedFlashCards from './pages/FlashCards'
import Create from './pages/Create'
import Home from './pages/Home'
import ElementCards from './pages/PeriodicElements'
import MathCards from './pages/MathContent'
import LiteratureInfo from './pages/LiteratureContent'

export default function App() {
  let component //declaring a varibale component 

  switch (window.location.pathname) {
    case '/':
      component = <Home />
      break
    case '/saved-flashcards':
      component = <SavedFlashCards />
      break
    case '/create':
      component = <Create />
      break
    case '/saved-flashcards/periodic-elements':
      component = <ElementCards />
      break
    case '/saved-flashcards/math-cards':
      component = <MathCards />
      break
    case '/saved-flashcards/literature':
      component = <LiteratureInfo />
      break
    default:
      break;
  }

  

  return (
    <div>
      <Navbar />
      {component}
    </div>
  )
}
