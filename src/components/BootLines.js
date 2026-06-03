import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/BootLines.module.css';

const lines = [
  { label: 'System  ', value: 'macOS Sequoia 15.5',              color: 'var(--subtext0)' },
  { label: 'Runtime ', value: 'Node.js v24 + React 19',          color: 'var(--subtext0)' },
  { label: 'Loading ', value: 'joaopedrosales.dev portfolio...',  color: 'var(--blue)'     },
  { label: 'Status  ', value: 'All systems operational',          color: 'var(--green)'    },
];

const STAGGER = 0.11;
const TOTAL_DELAY = lines.length * STAGGER + 0.45;

export default function BootLines({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, TOTAL_DELAY * 1000);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <div className={styles.boot}>
      {lines.map((line, i) => (
        <motion.div
          key={i}
          className={styles.line}
          initial={{ opacity: 0, x: -6 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.18, delay: i * STAGGER, ease: 'easeOut' }}
        >
          <span className={styles.lineLabel}>{line.label}</span>
          <span className={styles.lineSep}>→</span>
          <span className={styles.lineValue} style={{ color: line.color }}>{line.value}</span>
          <motion.span
            className={styles.ok}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: i * STAGGER + 0.15, duration: 0.1 }}
          >
            [OK]
          </motion.span>
        </motion.div>
      ))}

      <motion.div
        className={styles.sep}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        style={{ originX: 0 }}
        transition={{ duration: 0.5, delay: lines.length * STAGGER + 0.05, ease: 'easeOut' }}
      />
    </div>
  );
}
