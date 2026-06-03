import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Prompt } from '../TerminalLine';
import SectionHeader from '../SectionHeader';
import styles from '../../styles/Projects.module.css';

const fatfood = {
  name: 'FatFood',
  featured: true,
  type: 'drwxr-xr-x',
  lang: 'C# / React',
  langColor: 'var(--mauve)',
  accentColor: 'rgba(203,166,247,0.15)',
  borderColor: 'rgba(203,166,247,0.35)',
  desc: 'Sistema completo de fast-food com cardápio digital, carrinho, pagamento via MercadoPago (cartão e PIX), painel administrativo com métricas e chatbot integrado com IA.',
  tags: ['C#', '.NET 8', 'React', 'MySQL', 'JWT', 'MercadoPago', 'Anthropic AI', 'Railway'],
  github: 'https://github.com/jpsalez/FatFood-railway-production',
  live: 'https://fat-food.up.railway.app/',
  preview: '/fatfood-preview.png',
  highlights: [
    '🛒 Cardápio digital com categorias e carrinho de compras',
    '💳 Pagamento via cartão de crédito e PIX (MercadoPago)',
    '📊 Dashboard admin com métricas em tempo real',
    '🤖 Chatbot com IA integrada (Anthropic API)',
    '🔐 Autenticação JWT com roles Admin / User',
    '☁️ Deploy em produção via Railway',
  ],
};

export default function Projects() {
  const [open, setOpen] = useState(false);

  return (
    <section id="projetos">
      <SectionHeader
        number={3}
        title="Projetos"
        subtitle="O que eu construí — clique para expandir"
        accentColor="var(--peach)"
      />
      <Prompt>ls -la projects/</Prompt>

      <motion.div
        className={styles.featured}
        style={{
          '--accent-bg':     fatfood.accentColor,
          '--accent-border': fatfood.borderColor,
        }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Featured badge + header */}
        <div className={styles.featHeader}>
          <div className={styles.featMeta}>
            <span className={styles.badge}>★ PROJETO DESTAQUE</span>
            <span className={styles.perm}>{fatfood.type}</span>
          </div>

          <button className={styles.titleRow} onClick={() => setOpen(o => !o)}>
            <span className={styles.featName}>{fatfood.name}/</span>
            <span className={styles.lang} style={{ color: fatfood.langColor }}>
              ● {fatfood.lang}
            </span>
            <motion.span
              className={styles.expandBtn}
              animate={{ backgroundColor: open ? 'rgba(203,166,247,0.2)' : 'rgba(255,255,255,0.05)' }}
            >
              {open ? '▾ Fechar' : '▸ Ver projeto'}
            </motion.span>
          </button>
        </div>

        {/* Always-visible short description */}
        <p className={styles.shortDesc}>{fatfood.desc}</p>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              key="body"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className={styles.body}
            >
              <div className={styles.bodyInner}>
                {/* Screenshot */}
                <motion.div
                  className={styles.previewWrap}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                >
                  <img
                    src={fatfood.preview}
                    alt="Screenshot do FatFood"
                    className={styles.preview}
                    loading="lazy"
                  />
                  <div className={styles.previewOverlay}>
                    <a href={fatfood.live} target="_blank" rel="noopener noreferrer" className={styles.previewBtn}>
                      ↗ Abrir site ao vivo
                    </a>
                  </div>
                </motion.div>

                {/* Highlights */}
                <ul className={styles.highlights}>
                  {fatfood.highlights.map((h, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + i * 0.06, duration: 0.3 }}
                    >
                      {h}
                    </motion.li>
                  ))}
                </ul>

                {/* Tags */}
                <div className={styles.tags}>
                  {fatfood.tags.map(t => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>

                {/* Links */}
                <div className={styles.links}>
                  <a href={fatfood.github} target="_blank" rel="noopener noreferrer" className={styles.link}>
                    <GitHubIcon /> Ver código no GitHub
                  </a>
                  <a href={fatfood.live} target="_blank" rel="noopener noreferrer" className={`${styles.link} ${styles.linkLive}`}>
                    <ExternalIcon /> Ver projeto ao vivo
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

function GitHubIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
      <polyline points="15,3 21,3 21,9"/>
      <line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  );
}
