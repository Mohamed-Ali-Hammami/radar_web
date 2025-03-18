"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Sidebar from './sidebar';
import { FaInfoCircle } from 'react-icons/fa';
import styles from '../styles/navbar.module.css';
import ContactUs from './contact_us';

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false); // Added missing state

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <>
      <nav className={styles.navbar}>
        {/* Left Section */}
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

        {/* Right Section */}
        <div className={styles['navbar-right']}>
          <input
            type="text"
            placeholder="recherche"
            className={styles['search-input']}
          />
          <button 
            className={styles['contact-btn']} 
            onClick={() => setIsContactOpen(true)}
          >
            Nous contacter
          </button>
          <FaInfoCircle className={styles['info-icon']} />
        </div>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && (
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Contact Modal */}
      {isContactOpen && (
        <ContactUs onClose={() => setIsContactOpen(false)} />
      )}
    </>
  );
};

export default Navbar;