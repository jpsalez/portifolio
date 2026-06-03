import React from 'react';
import { motion } from 'framer-motion';
import { Prompt } from '../TerminalLine';
import SectionHeader from '../SectionHeader';
import styles from '../../styles/About.module.css';

const paragraphs = [
  { label: 'nome',       value: 'João Pedro Sales',                                                  color: 'var(--lavender)' },
  { label: 'localização',value: 'Salvador, Bahia, Brasil 🇧🇷 — 21 anos',                             color: 'var(--peach)'   },
  { label: 'formação',   value: 'Técnico em Dev. de Sistemas — SENAI CIMATEC (concluído) • Ciência da Computação — UNIFACS (em andamento)', color: 'var(--sapphire)' },
  { label: 'cursos Ford',value: 'Angular (front-end) + C# (back-end) — cursos profissionalizantes na Ford Motor Company', color: 'var(--yellow)'  },
  { label: 'foco',       value: 'Full-Stack Developer especializado em C# / .NET no backend e Angular / React no frontend', color: 'var(--green)'   },
  { label: 'sobre mim',  value: 'Apaixonado por programação e boas práticas de desenvolvimento. Gosto de construir sistemas completos — do banco de dados à interface — priorizando eficiência, escalabilidade e experiência do usuário.', color: 'var(--subtext0)' },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden:  { opacity: 0, x: -10 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  return (
    <section id="sobre">
      <SectionHeader
        number={1}
        title="Sobre Mim"
        subtitle="Quem é João Pedro Sales?"
        accentColor="var(--blue)"
      />
      <Prompt>whoami</Prompt>

      <motion.div
        className={styles.card}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {paragraphs.map((p) => (
          <motion.div key={p.label} className={styles.row} variants={item}>
            <span className={styles.label} style={{ color: p.color }}>{p.label}</span>
            <span className={styles.sep}>→</span>
            <span className={styles.value}>{p.value}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
