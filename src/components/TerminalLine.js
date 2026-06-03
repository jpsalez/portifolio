import React, { useRef, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { useTypeWriter } from '../hooks/useTypeWriter';
import styles from '../styles/TerminalLine.module.css';

export function Prompt({ user = 'joao', host = 'macbook', dir = '~', speed = 38, delay = 0, children, onDone }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const { displayed, done, trigger } = useTypeWriter(children, speed, delay);
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  const stableTrigger = useCallback(trigger, []); // eslint-disable-line react-hooks/exhaustive-deps

  React.useEffect(() => {
    if (inView) stableTrigger();
  }, [inView, stableTrigger]);

  React.useEffect(() => {
    if (done && onDoneRef.current) onDoneRef.current();
  }, [done]);

  return (
    <div ref={ref} className={styles.promptLine}>
      <span className={styles.user}>{user}</span>
      <span className={styles.at}>@</span>
      <span className={styles.host}>{host}</span>
      <span className={styles.colon}>:</span>
      <span className={styles.dir}>{dir}</span>
      <span className={styles.symbol}> % </span>
      <span className={styles.command}>{displayed}</span>
      {!done && <span className={styles.cursor} />}
    </div>
  );
}

export function OutputLine({ children, color, delay = 0, className = '' }) {
  return (
    <motion.div
      className={`${styles.outputLine} ${className}`}
      style={{ color: color || 'var(--subtext1)' }}
      initial={{ opacity: 0, x: -4 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.3, delay }}
    >
      {children}
    </motion.div>
  );
}

export function Divider() {
  return <div className={styles.divider} />;
}
