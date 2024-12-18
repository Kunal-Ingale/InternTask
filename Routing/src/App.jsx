import Home from "./Pages/Home"
import About from "./Pages/About"
import Navbar from "./Components/Navbar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App(){
  return(
    <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
    </>
  )
}

export default App
