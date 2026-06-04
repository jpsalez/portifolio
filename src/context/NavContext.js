import React, { createContext, useContext, useState, useCallback, useRef } from 'react';

export const SECTIONS = [
  { id: 'inicio',   label: 'Início',      color: 'var(--green)'   },
  { id: 'sobre',    label: 'Sobre mim',   color: 'var(--blue)'    },
  { id: 'skills',   label: 'Habilidades', color: 'var(--mauve)'   },
  { id: 'projetos', label: 'Projetos',    color: 'var(--peach)'   },
  { id: 'contato',  label: 'Contato',     color: 'var(--teal)'    },
];

const NavContext = createContext();

export function NavProvider({ children }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [direction, setDirection] = useState(1);
  const lockRef = useRef(false);

  const goTo = useCallback((idx) => {
    const next = Math.max(0, Math.min(SECTIONS.length - 1, idx));
    if (next === currentIdx || lockRef.current) return;
    lockRef.current = true;
    setDirection(next > currentIdx ? 1 : -1);
    setCurrentIdx(next);
    setTimeout(() => { lockRef.current = false; }, 800);
  }, [currentIdx]);

  return (
    <NavContext.Provider value={{ currentIdx, direction, goTo, sections: SECTIONS }}>
      {children}
    </NavContext.Provider>
  );
}

export const useNav = () => useContext(NavContext);
