import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { motion } from 'framer-motion';
import CurriculumPDF from './CurriculumPDF';
import styles from '../styles/DownloadCV.module.css';

export default function DownloadCV({ variant = 'header' }) {
  return (
    <PDFDownloadLink
      document={<CurriculumPDF />}
      fileName="joao-pedro-sales-curriculo.pdf"
      style={{ textDecoration: 'none' }}
    >
      {({ loading, error }) => (
        <motion.span
          className={`${styles.btn} ${styles[variant]}`}
          whileHover={{ scale: 1.05, y: -1 }}
          whileTap={{ scale: 0.97 }}
        >
          {loading ? (
            <>
              <motion.span
                className={styles.spinner}
                animate={{ rotate: 360 }}
                transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
              />
              Gerando...
            </>
          ) : error ? (
            <>⚠ Erro</>
          ) : (
            <>
              <DownloadIcon />
              {variant === 'contact' ? 'Baixar Currículo PDF' : 'CV'}
            </>
          )}
        </motion.span>
      )}
    </PDFDownloadLink>
  );
}

function DownloadIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
      <polyline points="7 10 12 15 17 10"/>
      <line x1="12" y1="15" x2="12" y2="3"/>
    </svg>
  );
}
