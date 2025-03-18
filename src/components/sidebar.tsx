import React from 'react';
import styles from '../styles/sidebar.module.css';
import { FaPhone, FaEnvelope, FaYoutube, FaInstagram, FaFacebookF } from 'react-icons/fa';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className={`${styles.sidebarContainer} ${isOpen ? styles.sidebarOpen : ''}`}
      onClick={onClose}  // Clicking the overlay calls onClose
    >
      <div className={styles.sidebar} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>

        {/* Sidebar Content */}
        <h2 className={styles.title}>Réseaux d&apos;acteurs signataires</h2>
        <ul className={styles.signatoriesList}>
          <li>
            <button className={styles.listItem}>
              Municipalité, Ville de Trois-Rivières
            </button>
          </li>
          <li>
            <button className={styles.listItem}>
              Corporation de Développement Communautaire de Trois-Rivières (CDC)
            </button>
          </li>
          <li>
            <button className={styles.listItem}>
              Centre intégré universitaire de santé et de services sociaux de la Mauricie-et-du-Centre-du-Québec (CIUSSS-MCQ)
            </button>
          </li>
          <li>
            <button className={styles.listItem}>
              Centre de services scolaire du Chemin du Roy
            </button>
          </li>
        </ul>

        <h2 className={styles.title}>Les tables de concertation</h2>
        <ul className={styles.concertationTables}>
          <li><button className={styles.listItem}>La table Enfance-Jeunesse-Famille</button></li>
          <li><button className={styles.listItem}>La table des Aînés de Trois-Rivières</button></li>
          <li><button className={styles.listItem}>La table en sécurité alimentaire</button></li>
          <li><button className={styles.listItem}>La table Quartiers vie</button></li>
          <li><button className={styles.listItem}>La table des personnes en situation de handicap</button></li>
          <li><button className={styles.listItem}>La concertation St. Phillipe</button></li>
          <li><button className={styles.listItem}>Le Comité intersectoriel en itinérance</button></li>
          <li><button className={styles.listItem}>La table locale en immigration</button></li>
        </ul>

        <h2 className={styles.title}>Nous joindre</h2>
        <div className={styles.contactIcons}>
          <a href="tel:1234567890" title="Call us">
            <FaPhone />
          </a>
          <a href="mailto:info@example.com" title="Email us">
            <FaEnvelope />
          </a>
          <a
            href="https://www.youtube.com/channel/example"
            target="_blank"
            rel="noopener noreferrer"
            title="Visit our YouTube channel"
          >
            <FaYoutube />
          </a>
          <a
            href="https://www.instagram.com/example"
            target="_blank"
            rel="noopener noreferrer"
            title="Follow us on Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.facebook.com/example"
            target="_blank"
            rel="noopener noreferrer"
            title="Like us on Facebook"
          >
            <FaFacebookF />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
