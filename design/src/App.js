
import './App.css';
import NavbarComponents from './components/NavbarComponents.js'
import About from './components/About.js'
import AboutMe from './components/AboutMe.js'
import MyProjects from './components/MyProjects.js'
import ContactMe from './components/ContactMe.js'
import WorkExperience from './components/WorkExperience.js'
import Skills from './components/Skills.js'
import Lowest from './components/Lowest.js'


function App() {
  return (
    <div className="App">
      
      <NavbarComponents/>
      <About/>
      <AboutMe/>
      <Skills/>
      <WorkExperience/>
      <MyProjects/>
      <ContactMe/>
      <Lowest/>
    </div>
  );
}

export default App;
