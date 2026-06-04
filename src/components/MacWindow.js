import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollProgress from './ScrollProgress';
import DownloadCV from './DownloadCV';
import SectionDots from './SectionDots';
import styles from '../styles/MacWindow.module.css';

export default function MacWindow({ children }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className={styles.window}
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Title Bar */}
      <div
        className={styles.titleBar}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className={styles.trafficLights}>
          <button className={`${styles.dot} ${styles.red}`} aria-label="close">
            {hovered && <span className={styles.dotIcon}>✕</span>}
          </button>
          <button className={`${styles.dot} ${styles.yellow}`} aria-label="minimize">
            {hovered && <span className={styles.dotIcon}>−</span>}
          </button>
          <button className={`${styles.dot} ${styles.green}`} aria-label="maximize">
            {hovered && <span className={styles.dotIcon}>+</span>}
          </button>
        </div>

        <div className={styles.tabBar}>
          <div className={styles.tab}>
            <svg className={styles.tabIcon} viewBox="0 0 16 16" fill="none">
              <rect x="1" y="1" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.2"/>
              <path d="M1 4h14" stroke="currentColor" strokeWidth="1.2"/>
              <circle cx="3.5" cy="2.5" r="0.8" fill="currentColor"/>
              <circle cx="6" cy="2.5" r="0.8" fill="currentColor"/>
              <circle cx="8.5" cy="2.5" r="0.8" fill="currentColor"/>
              <path d="M4 8l2.5 2L4 12" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 12h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
            </svg>
            <span>joaopedro — zsh</span>
          </div>
        </div>

        <div className={styles.windowMeta}>
          <DownloadCV variant="header" />
          <span className={styles.windowSize}>80×24</span>
        </div>

        {/* Scroll progress bar */}
        <ScrollProgress />
      </div>

      {/* Terminal Body */}
      <div className={styles.body}>
        <div className={styles.scanlines} aria-hidden="true" />
        {children}
        <SectionDots />
      </div>
    </motion.div>
  );
}
