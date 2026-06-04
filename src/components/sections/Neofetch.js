import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Prompt } from '../TerminalLine';
import { useNav } from '../../context/NavContext';
import styles from '../../styles/Neofetch.module.css';

const infoLines = [
  { label: 'joao@macbook',  value: '',                              color: 'var(--green)',   bold: true },
  { label: '─────────────────────────────', value: '',             color: 'var(--surface1)' },
  { label: 'OS',            value: 'Developer Environment 2026',   color: 'var(--text)'    },
  { label: 'Role',          value: 'Full-Stack Developer',         color: 'var(--blue)'    },
  { label: 'Age',           value: '21',                           color: 'var(--text)'    },
  { label: 'Location',      value: 'Salvador, Bahia, Brazil 🇧🇷',  color: 'var(--peach)'   },
  { label: 'Education',     value: 'Ciência da Computação',        color: 'var(--lavender)'},
  { label: 'Degree',        value: 'Técnico em Dev. de Sistemas',  color: 'var(--lavender)'},
  { label: 'Languages',     value: 'C# • TypeScript • JavaScript', color: 'var(--mauve)'   },
  { label: 'Frameworks',    value: '.NET • Angular • React',       color: 'var(--sapphire)'},
  { label: 'GitHub',        value: 'github.com/jpsalez',           color: 'var(--blue)',    link: 'https://github.com/jpsalez' },
  { label: 'Status',        value: 'Open to opportunities ✦',      color: 'var(--green)'   },
];

const swatches = [
  'var(--red)', 'var(--peach)', 'var(--yellow)', 'var(--green)',
  'var(--teal)', 'var(--blue)', 'var(--mauve)', 'var(--pink)',
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};
const rowVariants = {
  hidden:  { opacity: 0, y: 6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.28, ease: [0.16, 1, 0.3, 1] } },
};

export default function Neofetch() {
  const [cmdDone, setCmdDone] = useState(false);
  const { goTo } = useNav();

  return (
    <section id="inicio" className={styles.section}>
      <Prompt delay={0} speed={22} onDone={() => setCmdDone(true)}>neofetch</Prompt>

      {cmdDone && (
        <motion.div
          className={styles.neofetch}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile photo */}
          <motion.div className={styles.photoWrap} variants={rowVariants}>
            <img src="/avatar.jpeg" alt="João Pedro Sales" className={styles.photo} />
          </motion.div>

          {/* System info */}
          <div className={styles.info}>
            {infoLines.map((item, i) => (
              <motion.div key={i} variants={rowVariants} className={styles.infoRow}>
                {item.value ? (
                  <>
                    <span className={styles.infoLabel} style={{ color: item.color }}>
                      {item.label}
                    </span>
                    <span className={styles.infoSep}>: </span>
                    {item.link ? (
                      <a href={item.link} target="_blank" rel="noopener noreferrer" className={styles.infoLink}>
                        {item.value}
                      </a>
                    ) : (
                      <span className={styles.infoValue} style={item.label === 'Status' ? { color: 'var(--green)', fontWeight: 600 } : {}}>
                        {item.value}
                      </span>
                    )}
                  </>
                ) : (
                  <span style={{ color: item.color, fontWeight: item.bold ? 700 : 400 }}>
                    {item.label}
                  </span>
                )}
              </motion.div>
            ))}

            <motion.div variants={rowVariants} className={styles.swatches}>
              {swatches.map((c, i) => (
                <span key={i} className={styles.swatch} style={{ background: c }} />
              ))}
            </motion.div>
            <motion.div variants={rowVariants} className={styles.swatches}>
              {swatches.map((c, i) => (
                <span key={i} className={styles.swatch} style={{ background: c, opacity: 0.42 }} />
              ))}
            </motion.div>

            {/* Navigation hint */}
            <motion.div variants={rowVariants} className={styles.navHint}>
              <span className={styles.hintKey}>↑↓</span>
              <span className={styles.hintKey}>scroll</span>
              <span className={styles.hintKey}>nav →</span>
              <span className={styles.hintLabel}>para navegar entre seções</span>

              <motion.button
                className={styles.nextBtn}
                onClick={() => goTo(1)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <motion.span
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
                >
                  ↓
                </motion.span>
                próxima seção
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
