import React from 'react';
import { motion } from 'framer-motion';
import { Prompt } from '../TerminalLine';
import SectionHeader from '../SectionHeader';
import styles from '../../styles/Skills.module.css';

const categories = [
  {
    name: 'Backend',
    color: 'var(--green)',
    glow: 'rgba(166,227,161,0.18)',
    items: ['C#', '.NET 8', 'ASP.NET Core', 'Entity Framework', 'JWT Auth', 'REST API'],
  },
  {
    name: 'Frontend',
    color: 'var(--blue)',
    glow: 'rgba(137,180,250,0.18)',
    items: ['Angular', 'TypeScript', 'React', 'JavaScript', 'HTML/CSS', 'Bootstrap'],
  },
  {
    name: 'Database',
    color: 'var(--yellow)',
    glow: 'rgba(249,226,175,0.18)',
    items: ['MySQL', 'SQL Server', 'PostgreSQL', 'Entity Framework Core'],
  },
  {
    name: 'Tools & DevOps',
    color: 'var(--peach)',
    glow: 'rgba(250,179,135,0.18)',
    items: ['Git', 'GitHub', 'Docker', 'Railway', 'Swagger', 'MercadoPago API'],
  },
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariant = {
  hidden:  { opacity: 0, y: 16, scale: 0.96 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

export default function Skills() {
  return (
    <section id="skills">
      <SectionHeader
        number={2}
        title="Habilidades"
        subtitle="Tecnologias que eu domino"
        accentColor="var(--mauve)"
      />
      <Prompt>ls -la skills/</Prompt>

      <motion.div
        className={styles.grid}
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
      >
        {categories.map((cat) => (
          <motion.div
            key={cat.name}
            className={styles.card}
            variants={cardVariant}
            whileHover={{
              boxShadow: `0 0 0 1px ${cat.color}50, 0 8px 32px ${cat.glow}`,
              y: -4,
            }}
            transition={{ duration: 0.2 }}
          >
            <div className={styles.cardAccent} style={{ background: cat.color }} />
            <div className={styles.cardHeader}>
              <span className={styles.catName} style={{ color: cat.color }}>◈ {cat.name}/</span>
            </div>
            <div className={styles.tags}>
              {cat.items.map((skill) => (
                <motion.span
                  key={skill}
                  className={styles.tag}
                  style={{ '--border': `${cat.color}40`, '--hover-border': cat.color }}
                  whileHover={{ scale: 1.05, backgroundColor: `${cat.color}10` }}
                  transition={{ duration: 0.15 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
