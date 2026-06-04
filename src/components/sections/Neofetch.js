import React, { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import { Prompt } from '../TerminalLine';
import BootLines from '../BootLines';
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
  { label: 'Status',        value: 'Open to opportunities ✦',      color: 'var(--green)'   },
  { label: '', value: '', color: '' },
];

const swatches = [
  'var(--red)', 'var(--peach)', 'var(--yellow)', 'var(--green)',
  'var(--teal)', 'var(--blue)', 'var(--mauve)', 'var(--pink)',
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.055 } },
};
const rowVariants = {
  hidden:  { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] } },
};

export default function Neofetch() {
  const [bootDone, setBootDone] = useState(false);
  const [cmdDone, setCmdDone]   = useState(false);

  const handleBootDone = useCallback(() => setBootDone(true), []);

  return (
    <section id="inicio" className={styles.section}>
      <BootLines onDone={handleBootDone} />

      {bootDone && (
        <Prompt delay={100} onDone={() => setCmdDone(true)}>neofetch</Prompt>
      )}

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
                    <span className={styles.infoValue}>{item.value}</span>
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

            {/* Scroll hint */}
            <motion.div
              variants={rowVariants}
              className={styles.scrollHint}
            >
              <motion.span
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                ↓
              </motion.span>
              role para ver mais
            </motion.div>
          </div>
        </motion.div>
      )}
    </section>
  );
}
