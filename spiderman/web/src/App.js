import NavBar from "./components/Menu/NavBar";
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';
import { Home } from "./Pages/Home/Home";
import { About } from "./Pages/About/About";
import { Projects } from "./Pages/Projects/Projects";
import { Contact } from "./Pages/Contact/Contact";

export default function App() {
  return (
    <>
    <Router>
      <NavBar />
        <Routes>
          <Route path="/" element={ <Home />}/>
          <Route path="/About" element={ <About />}/>
          <Route path="/Projects" element={ <Projects />}/>
          <Route path="/Contact" element={ <Contact />}/>
        </Routes>
      </Router>
    </>
  );
}
