import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/SectionHeader.module.css';

export default function SectionHeader({ number, title, subtitle, accentColor = 'var(--lavender)' }) {
  return (
    <motion.div
      className={styles.wrapper}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className={styles.inner}>
        <span className={styles.number} style={{ color: accentColor }}>
          {String(number).padStart(2, '0')}
        </span>
        <div className={styles.text}>
          <h2 className={styles.title} style={{ '--accent': accentColor }}>
            {title}
          </h2>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </div>
      <motion.div
        className={styles.line}
        style={{ background: `linear-gradient(90deg, ${accentColor}60, transparent)` }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        style2={{ originX: 0 }}
      />
    </motion.div>
  );
}
