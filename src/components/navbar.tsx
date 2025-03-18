"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Sidebar from './sidebar';
import { FaInfoCircle } from 'react-icons/fa';
import styles from '../styles/navbar.module.css';

const Navbar: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to toggle the sidebar
  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  return (
    <>
      {/* Navbar */}
      <nav className={styles.navbar}>
        {/* Navbar Left Section */}
        <div className={styles['navbar-left']}>
          {/* Menu Button (Toggle Sidebar) */}
          <button className={styles['menu-btn']} onClick={toggleSidebar}>
            ☰
          </button>

          {/* Logo */}
          <div className={styles.logo}>
            <Image src="/images/logo.png" alt="Logo" width={80} height={80} />
          </div>

          {/* Title */}
          <span className={styles.title}>
            Réseau d’Acteurs pour le Développement d’Action <br />
            Rassembleuses – RADAR
          </span>
        </div>

        {/* Navbar Right Section */}
        <div className={styles['navbar-right']}>
          {/* Search Input */}
          <input
            type="text"
            placeholder="recherche"
            className={styles['search-input']}
          />

          {/* Contact Button */}
          <button className={styles['contact-btn']}>Nous contacter</button>

          {/* Info Icon */}
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
    </>
  );
};

export default Navbar;
