import './App.css'
import Navbar from './navBar/Navbar'
import SavedFlashCards from './pages/FlashCards'
import Create from './pages/Create'
import Home from './pages/Home'
import ElementCards from './pages/PeriodicElements'
import MathCards from './pages/MathContent'
import LiteratureInfo from './pages/LiteratureContent'
import CompsciCards from './pages/CompsciContent'
import AboutProject from './pages/aboutproject'
import { Typography, createTheme, ThemeProvider } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#29b6f6',
    },
    secondary: {
      main: '#ab47bc',
    },
  },
})

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
    case '/saved-flashcards/compsci':
      component = <CompsciCards />
      break
    case '/aboutus':
      component = <AboutProject />
    default:
      break
  }

  return (
    <ThemeProvider theme={theme}>
      <Typography>
        <Navbar />
        {component}
      </Typography>
    </ThemeProvider>
  )
}
