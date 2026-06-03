import './App.css';
import Background from './components/Background';
import WelcomeModal from './components/WelcomeModal';
import MacWindow from './components/MacWindow';
import FloatingNav from './components/FloatingNav';
import Neofetch from './components/sections/Neofetch';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function App() {
  return (
    <>
      <Background />
      <WelcomeModal />
      <div className="App">
        <MacWindow>
          <Neofetch />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </MacWindow>
        <FloatingNav />
      </div>
    </>
  );
}

export default App;
