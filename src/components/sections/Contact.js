import React from 'react';
import { motion } from 'framer-motion';
import { Prompt } from '../TerminalLine';
import SectionHeader from '../SectionHeader';
import DownloadCV from '../DownloadCV';
import styles from '../../styles/Contact.module.css';

const contacts = [
  { icon: '📧', label: 'Email',    value: 'joaopedrosalesdev@gmail.com', href: 'mailto:joaopedrosalesdev@gmail.com', color: 'var(--peach)',   desc: 'Manda uma mensagem' },
  { icon: '🐙', label: 'GitHub',   value: 'github.com/jpsalez',         href: 'https://github.com/jpsalez',        color: 'var(--subtext1)',desc: 'Veja meus repositórios' },
  { icon: '📸', label: 'Instagram',value: '@salez.dev',                 href: 'https://instagram.com/salez.dev',   color: 'var(--pink)',    desc: 'Me siga no Instagram' },
];

export default function Contact() {
  return (
    <section id="contato" style={{ marginBottom: '40px' }}>
      <SectionHeader
        number={4}
        title="Contato"
        subtitle="Vamos conversar?"
        accentColor="var(--teal)"
      />
      <Prompt>cat contact.md</Prompt>

      <motion.div
        className={styles.box}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <p className={styles.quote}>
          "Sempre aberto para conversas sobre código, projetos<br />
          ou oportunidades de trabalho. Pode me chamar! 🤝"
        </p>

        <motion.div
          className={styles.cvRow}
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <DownloadCV variant="contact" />
        </motion.div>

        <div className={styles.links}>
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.link}
              style={{ '--accent': c.color }}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              whileHover={{ x: 6, boxShadow: `0 0 0 1px ${c.color}40, 0 4px 20px ${c.color}10` }}
            >
              <span className={styles.linkIcon}>{c.icon}</span>
              <div className={styles.linkText}>
                <span className={styles.linkLabel} style={{ color: c.color }}>{c.label}</span>
                <span className={styles.linkValue}>{c.value}</span>
              </div>
              <span className={styles.linkDesc}>{c.desc}</span>
              <span className={styles.linkArrow} style={{ color: c.color }}>↗</span>
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Idle blinking cursor at the end */}
      <div className={styles.finalPrompt}>
        <span className={styles.pUser}>joao</span>
        <span className={styles.pAt}>@</span>
        <span className={styles.pHost}>macbook</span>
        <span className={styles.pColon}>:</span>
        <span className={styles.pDir}>~</span>
        <span className={styles.pSym}> % </span>
        <motion.span
          className={styles.idleCursor}
          animate={{ opacity: [1, 0, 1] }}
          transition={{ duration: 1, repeat: Infinity, ease: 'steps(1)' }}
        />
      </div>
    </section>
  );
}
