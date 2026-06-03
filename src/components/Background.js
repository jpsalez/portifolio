import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from '../styles/Background.module.css';

export default function Background() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 2000], [0, -280]);
  const y2 = useTransform(scrollY, [0, 2000], [0,  220]);
  const y3 = useTransform(scrollY, [0, 2000], [0, -140]);

  return (
    <div className={styles.bg} aria-hidden="true">
      <motion.div
        className={styles.orb1}
        style={{ y: y1 }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.55, 0.75, 0.55] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className={styles.orb2}
        style={{ y: y2 }}
        animate={{ scale: [1, 1.18, 1], opacity: [0.45, 0.65, 0.45] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 3 }}
      />
      <motion.div
        className={styles.orb3}
        style={{ y: y3 }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 13, repeat: Infinity, ease: 'easeInOut', delay: 6 }}
      />
      <div className={styles.noise} />
    </div>
  );
}
