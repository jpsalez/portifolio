import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from '../styles/WelcomeModal.module.css';

const outputLines = [
  { text: 'Inicializando portfólio...',                                    color: 'var(--overlay1)', delay: 0.6  },
  { text: '',                                                              color: '',                delay: 0.85 },
  { text: 'Olá! Este é o meu portfólio pessoal.',                         color: 'var(--text)',     delay: 1.0  },
  { text: 'Me chamo João Pedro Sales, tenho 21 anos',                     color: 'var(--lavender)', delay: 1.18, bold: true },
  { text: 'e sou Desenvolvedor Full-Stack de Salvador, Bahia, Brasil. 🇧🇷', color: 'var(--lavender)', delay: 1.36, bold: true },
  { text: '',                                                              color: '',                delay: 1.5  },
  { text: 'Trabalho com C# / .NET no back-end',                           color: 'var(--subtext0)', delay: 1.6  },
  { text: 'e Angular / React no front-end.',                              color: 'var(--subtext0)', delay: 1.76 },
  { text: '',                                                              color: '',                delay: 1.9  },
  { text: 'Aqui você vai encontrar:',                                      color: 'var(--text)',     delay: 2.0  },
  { text: '  →  Sobre mim e minha formação',                              color: 'var(--blue)',     delay: 2.14 },
  { text: '  →  Minhas habilidades técnicas',                             color: 'var(--mauve)',    delay: 2.27 },
  { text: '  →  Projeto FatFood (app de delivery)',                       color: 'var(--peach)',    delay: 2.4  },
  { text: '  →  Como me contatar',                                        color: 'var(--teal)',     delay: 2.53 },
  { text: '',                                                              color: '',                delay: 2.65 },
  { text: 'Use a navegação à direita ou ↑↓ para explorar.',               color: 'var(--overlay1)', delay: 2.75 },
];

const CTA_DELAY = 3.2;

export default function WelcomeModal() {
  const [visible, setVisible] = useState(true);
  const [showCta, setShowCta] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowCta(true), CTA_DELAY * 1000);
    return () => clearTimeout(t);
  }, []);

  const close = useCallback(() => setVisible(false), []);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Enter' || e.key === 'Escape') close();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [close]);

  return (
    <AnimatePresence>
      {visible && (
        <>
          {/* Backdrop + centering wrapper */}
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={close}
          >
            {/* Modal window — centered via flexbox on backdrop */}
            <motion.div
              className={styles.modal}
              role="dialog"
              aria-modal="true"
              aria-label="Bem-vindo ao portfólio"
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
            {/* Title bar */}
            <div className={styles.titleBar}>
              <div className={styles.dots}>
                <button className={`${styles.dot} ${styles.red}`}   onClick={close} aria-label="fechar" />
                <span   className={`${styles.dot} ${styles.yellow}`} />
                <span   className={`${styles.dot} ${styles.green}`}  />
              </div>
              <span className={styles.tabTitle}>portfolio.sh — bash</span>
              <div style={{ width: 60 }} />
            </div>

            {/* Terminal body */}
            <div className={styles.body}>
              {/* Command prompt */}
              <motion.div
                className={styles.promptLine}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.15, duration: 0.3 }}
              >
                <span className={styles.pUser}>joao</span>
                <span className={styles.pAt}>@</span>
                <span className={styles.pHost}>macbook</span>
                <span className={styles.pColon}>:</span>
                <span className={styles.pDir}>~</span>
                <span className={styles.pSym}> % </span>
                <TypingText text="./portfolio.sh" delay={0.2} />
              </motion.div>

              {/* Output lines */}
              {outputLines.map((line, i) => (
                <motion.div
                  key={i}
                  className={styles.line}
                  style={{
                    color: line.color || 'transparent',
                    fontWeight: line.bold ? 700 : 400,
                    minHeight: '1.55em',
                  }}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: line.delay, duration: 0.25 }}
                >
                  {line.text || ' '}
                </motion.div>
              ))}

              {/* CTA */}
              <AnimatePresence>
                {showCta && (
                  <motion.div
                    className={styles.cta}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.button
                      className={styles.ctaBtn}
                      onClick={close}
                      animate={{ boxShadow: ['0 0 0px rgba(180,190,254,0)', '0 0 18px rgba(180,190,254,0.35)', '0 0 0px rgba(180,190,254,0)'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                      whileHover={{ scale: 1.04, y: -1 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <span className={styles.ctaKey}>ENTER</span>
                      Começar exploração
                    </motion.button>
                    <span className={styles.ctaHint}>ou pressione Enter / Esc</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

function TypingText({ text, delay = 0, speed = 42 }) {
  const [displayed, setDisplayed] = useState('');

  useEffect(() => {
    const start = setTimeout(() => {
      let i = 0;
      const id = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) clearInterval(id);
      }, speed);
      return () => clearInterval(id);
    }, delay * 1000);
    return () => clearTimeout(start);
  }, [text, delay, speed]);

  return (
    <span className={styles.typedCmd}>
      {displayed}
      {displayed.length < text.length && <span className={styles.cursor} />}
    </span>
  );
}
