import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Proyectos from "./pages/Proyectos";


const App = () => {
  return(
  <Routes>
  <Route element={<Home />} path="/" />
  <Route element={<Proyectos />} path="/Proyectos" />
  </Routes>
  )
}

export default App;