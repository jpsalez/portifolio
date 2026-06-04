import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNav } from '../context/NavContext';
import styles from '../styles/SectionView.module.css';

const variants = {
  enter: (dir) => ({ y: dir > 0 ? '6%' : '-6%', opacity: 0, filter: 'blur(4px)' }),
  center: { y: '0%', opacity: 1, filter: 'blur(0px)' },
  exit:  (dir) => ({ y: dir > 0 ? '-6%' : '6%', opacity: 0, filter: 'blur(4px)' }),
};

export default function SectionView({ children }) {
  const { currentIdx, direction } = useNav();
  const childArray = React.Children.toArray(children);
  const slideRef = useRef(null);

  return (
    <div className={styles.viewport}>
      <AnimatePresence custom={direction} mode="wait">
        <motion.div
          key={currentIdx}
          ref={slideRef}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.48, ease: [0.16, 1, 0.3, 1] }}
          className={styles.slide}
          data-section={currentIdx}
        >
          {childArray[currentIdx]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
