import React from 'react';
import { motion } from 'framer-motion';
import { useNav } from '../context/NavContext';
import styles from '../styles/FloatingNav.module.css';

export default function FloatingNav() {
  const { currentIdx, goTo, sections } = useNav();

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
        {sections.map((s, i) => {
          const isActive = currentIdx === i;
          return (
            <motion.button
              key={s.id}
              className={`${styles.item} ${isActive ? styles.activeItem : ''}`}
              onClick={() => goTo(i)}
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

      <div className={styles.footer}>↕ role para explorar</div>
    </motion.nav>
  );
}
