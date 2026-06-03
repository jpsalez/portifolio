import React from 'react';
import styles from '../styles/Hero.module.css';

const Hero = () => {
  return (
    <header className={styles.header}>
      {/* Lado esquerdo: Botões estilo Mac + Logo */}
      <div className={styles.leftSide}>
        <div className={styles.macButtons}>
          <div className={styles.red}></div>
          <div className={styles.yellow}></div>
          <div className={styles.green}></div>
        </div>
        <div className={styles.logo}>
          Portifolio
        </div>
      </div>

      <div>João Pedro Sales</div>

      {/* Lado direito: Navegação */}
      <nav className={styles.nav}>
        <a href="#sobre">sobre</a>
        <a href="#projetos">projetos</a>
        <a href="#contato">contato</a>
      </nav>
    </header>
  );
};

export default Hero;