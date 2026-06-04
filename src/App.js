import { useEffect } from 'react';
import './App.css';
import Background from './components/Background';
import WelcomeModal from './components/WelcomeModal';
import MacWindow from './components/MacWindow';
import FloatingNav from './components/FloatingNav';
import SectionView from './components/SectionView';
import Neofetch from './components/sections/Neofetch';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';
import { NavProvider, useNav } from './context/NavContext';

function AppInner() {
  const { currentIdx, goTo } = useNav();

  useEffect(() => {
    const onWheel = (e) => {
      const active = document.querySelector('[data-section]');
      if (active) {
        const { scrollTop, scrollHeight, clientHeight } = active;
        const atBottom = scrollTop + clientHeight >= scrollHeight - 8;
        const atTop = scrollTop <= 8;
        if (e.deltaY > 0 && !atBottom) return;
        if (e.deltaY < 0 && !atTop) return;
      }
      e.preventDefault();
      if (e.deltaY > 20) goTo(currentIdx + 1);
      else if (e.deltaY < -20) goTo(currentIdx - 1);
    };
    window.addEventListener('wheel', onWheel, { passive: false });
    return () => window.removeEventListener('wheel', onWheel);
  }, [currentIdx, goTo]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowDown' || e.key === 'PageDown') goTo(currentIdx + 1);
      if (e.key === 'ArrowUp'   || e.key === 'PageUp'  ) goTo(currentIdx - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [currentIdx, goTo]);

  useEffect(() => {
    let touchStartY = 0;
    const onTouchStart = (e) => { touchStartY = e.touches[0].clientY; };
    const onTouchEnd = (e) => {
      const diff = touchStartY - e.changedTouches[0].clientY;
      if (diff > 50) goTo(currentIdx + 1);
      else if (diff < -50) goTo(currentIdx - 1);
    };
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchend', onTouchEnd);
    };
  }, [currentIdx, goTo]);

  return (
    <>
      <Background />
      <WelcomeModal />
      <div className="App">
        <MacWindow>
          <SectionView>
            <Neofetch />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </SectionView>
        </MacWindow>
        <FloatingNav />
      </div>
    </>
  );
}

function App() {
  return (
    <NavProvider>
      <AppInner />
    </NavProvider>
  );
}

export default App;
