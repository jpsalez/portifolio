import React from 'react';
import { motion } from 'framer-motion';
import { useNav } from '../context/NavContext';
import styles from '../styles/SectionDots.module.css';

export default function SectionDots() {
  const { currentIdx, goTo, sections } = useNav();

  return (
    <div className={styles.wrap}>
      {sections.map((s, i) => (
        <button
          key={s.id}
          className={styles.btn}
          onClick={() => goTo(i)}
          aria-label={`Ir para ${s.label}`}
          title={s.label}
        >
          <motion.span
            className={styles.dot}
            animate={{
              backgroundColor: currentIdx === i ? s.color : 'var(--surface2)',
              scale: currentIdx === i ? 1.5 : 1,
              boxShadow: currentIdx === i ? `0 0 8px ${s.color}` : 'none',
            }}
            transition={{ duration: 0.25 }}
          />
        </button>
      ))}
    </div>
  );
}
