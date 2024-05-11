import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from "./pages/Home"
import Advantages from "./pages/Advantages";
import BrainFog from "./pages/BrainFog";
function App() {


  return (
    <>
     <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/advantages" element={<Advantages/>}/>
        <Route path="/brainfog" element={<BrainFog/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App
