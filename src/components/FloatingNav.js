import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/FloatingNav.module.css';

const sections = [
  { id: 'inicio',   label: 'Início',      color: 'var(--green)'   },
  { id: 'sobre',    label: 'Sobre mim',   color: 'var(--blue)'    },
  { id: 'skills',   label: 'Habilidades', color: 'var(--mauve)'   },
  { id: 'projetos', label: 'Projetos',    color: 'var(--peach)'   },
  { id: 'contato',  label: 'Contato',     color: 'var(--teal)'    },
];

export default function FloatingNav() {
  const [active, setActive] = useState('inicio');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { threshold: 0.35, rootMargin: '-5% 0px -45% 0px' }
    );
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.nav
      className={styles.nav}
      aria-label="Navegação rápida"
      initial={{ opacity: 0, x: 24 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.label}>Navegação</div>

      <div className={styles.items}>
        {sections.map((s) => {
          const isActive = active === s.id;
          return (
            <motion.button
              key={s.id}
              className={`${styles.item} ${isActive ? styles.activeItem : ''}`}
              onClick={() => scrollTo(s.id)}
              whileHover={{ x: -4 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.15 }}
            >
              <motion.span
                className={styles.dot}
                animate={{
                  backgroundColor: isActive ? s.color : 'var(--surface2)',
                  boxShadow: isActive ? `0 0 8px ${s.color}` : 'none',
                  scale: isActive ? 1.3 : 1,
                }}
                transition={{ duration: 0.25 }}
              />
              <motion.span
                className={styles.itemLabel}
                animate={{ color: isActive ? 'var(--text)' : 'var(--overlay1)' }}
                transition={{ duration: 0.2 }}
              >
                {s.label}
              </motion.span>
              {isActive && (
                <motion.span
                  className={styles.activeTag}
                  style={{ background: s.color }}
                  layoutId="activeTag"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          );
        })}
      </div>

      <div className={styles.footer}>↓ role para explorar</div>
    </motion.nav>
  );
}
