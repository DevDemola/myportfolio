import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
