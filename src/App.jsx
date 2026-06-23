import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero"
import Aboutme from "./Components/Aboutme"
import Skills from "./Components/Skills";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import SkillsCard from "./Components/SkillsCard";
import Practiseform from "./Components/Practiseform";
import PractiseEffect from "./Components/PractiseEffect";
import PractiseApi from "./Components/PractiseApi";
function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <Aboutme/>
      <Skills/>
      <Project/>
      <Contact/>
      <Footer/>
      <Practiseform/>
      <PractiseEffect/>
      <PractiseApi/>
    </>
  );
}

export default App;