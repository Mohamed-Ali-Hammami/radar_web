"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Sidebar from './sidebar';
import { FaInfoCircle } from 'react-icons/fa';
import { FiSearch } from 'react-icons/fi'; // Importation de l'icône de recherche
import styles from '../styles/navbar.module.css';
import ContactUs from './contact_us';

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className={styles.navbar}>
        {/* Section gauche */}
        <div className={styles['navbar-left']}>
          <button className={styles['menu-btn']} onClick={toggleSidebar}>
            ☰
          </button>
          <div className={styles.logo}>
            <Image src="/images/logo.png" alt="Logo" width={80} height={80} />
          </div>
          <span className={styles.title}>
            Réseau d’Acteurs pour le Développement d’Action <br />
            Rassembleuses – RADAR
          </span>
        </div>

        {/* Section droite */}
        <div className={styles['navbar-right']}>
          <div className={styles['search-container']}>
            <input
              type="text"
              placeholder="Recherche"
              className={styles['search-input']}
            />
            <button className={styles['search-btn']} onClick={() => console.log("Recherche activée")}>
              <FiSearch />
            </button>
          </div>
          <button 
            className={styles['contact-btn']} 
            onClick={() => setIsContactOpen(true)}
          >
            Nous contacter
          </button>

        </div>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Modal de contact */}
      {isContactOpen && (
        <ContactUs onClose={() => setIsContactOpen(false)} />
      )}
    </>
  );
};

export default Navbar;
