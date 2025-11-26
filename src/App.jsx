import Aboutme from "./AboutMe/Aboutme";
import Contact from "./Contact/Contact";
import Experience from "./Experience/Experience";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Landingpage from "./LandingPage/Landingpage";
import Projects from "./Projects/Projects";
import Skills from "./SKILLS/Skills";

const App = () => {
  return (
    <>
      <Header />

      <Landingpage id="landing" />
      <Aboutme id="about" />
      <Skills id="skills" />
      <Projects id="projects" />
      <Experience id="experience" />
      <Contact id="contact" />

      <Footer />
    </>
  );
};

export default App;
