import "./App.css";
import "./pages/homePage/homepage.css"
import Navbar from "./navBar/Navbar"
import SavedFlashCards from "./pages/FlashCards";
import Create from "./pages/Create";
import Home from "./pages/homePage/Home"
import ElementCards from "./pages/eduContent/PeriodicElements"
import HistoryCards from "./pages/eduContent/HistoryContent"
import LiteratureInfo from "./pages/eduContent/LiteratureContent"
import CompsciCards from "./pages/eduContent/CompsciContent"
import CustomSaved from "./pages/eduContent/CustomCards"
import AboutProject from "./pages/homePage/aboutproject"
import { Typography, createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#29b6f6",
    },
    secondary: {
      main: "#ab47bc",
    },
  },
});

export default function App() {
  let component; //declaring a varibale component

  switch (window.location.pathname) {
    case "/":
      component = <Home />;
      break;
    case "/saved-flashcards":
      component = <SavedFlashCards />;
      break;
    case "/create":
      component = <Create />;
      break;
    case "/saved-flashcards/periodic-elements":
      component = <ElementCards />;
      break;
    case "/saved-flashcards/history-cards":
      component = <HistoryCards />;
      break;
    case "/saved-flashcards/literature":
      component = <LiteratureInfo />;
      break;
    case "/saved-flashcards/compsci":
      component = <CompsciCards />;
      break;
    case "/saved-flashcards/custom":
      component = <CustomSaved />
      break;
    case "/aboutus":
      component = <AboutProject />;
      break;
    default:
      break;
  }

  return (
    <ThemeProvider theme={theme}>
      <Typography>
        <Navbar />
        {component}
      </Typography>
    </ThemeProvider>
  );
}
