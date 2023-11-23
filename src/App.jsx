import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AboutMe from "./pages/Aboutme";

/* import './cssApp.css' */

const App = () => {
  return(
  <Routes>
  <Route element={<Home />} path="/" />
  <Route element={<AboutMe />} path="/Me" />
  </Routes>
  )
}

export default App;