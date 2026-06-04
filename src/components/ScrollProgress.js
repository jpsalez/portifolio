import React from 'react';
import { motion, useSpring } from 'framer-motion';
import { useNav } from '../context/NavContext';
import styles from '../styles/ScrollProgress.module.css';

export default function ScrollProgress() {
  const { currentIdx, sections } = useNav();
  const progress = sections.length > 1 ? currentIdx / (sections.length - 1) : 0;
  const scaleX = useSpring(progress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return <motion.div className={styles.bar} style={{ scaleX }} />;
}
