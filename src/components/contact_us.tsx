import React, { useState, useRef, useEffect } from 'react';
import styles from '../styles/contact_us.module.css';

interface ContactUsProps {
  onClose: () => void;
}

const ContactUs: React.FC<ContactUsProps> = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSuccess(true);
    setTimeout(onClose, 2000);
  };

  return (
    <div className={styles.contactContainer}>
      <div className={styles.formWrapper} ref={modalRef}>
        <button className={styles.closeButton} onClick={onClose}>
          ×
        </button>
        
        <h2 className={styles.h2}>Contact Us</h2>
        
        {success ? (
          <p className={styles.successMessage}>
            Message sent successfully!<br/>
            Redirecting...
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
              <label htmlFor="name">Full Name</label>
            </div>
            
            <div className={styles.inputGroup}>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
              <label htmlFor="email">Email Address</label>
            </div>
            
            <div className={styles.inputGroup}>
              <input
                type="text"
                id="subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                required
              />
              <label htmlFor="subject">Subject</label>
            </div>
            
            <div className={styles.inputGroup}>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                required
              />
              <label htmlFor="message">Message</label>
            </div>
            
            <button type="submit" className={styles.submitButton}>
              Send Message
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactUs;