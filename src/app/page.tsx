"use client";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <div className="container">
      <main className="main-content">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-text">
            <h1 className="title">Ensemble, pour une solidarité et un bien-être partagé</h1>
            <p className="description">
              Le Réseau d&apos;Acteurs pour le Développement d&apos;Action Rassembleuse (RADAR) met de l&apos;avant la collaboration entre ses acteurs.<br/>
              Dimension avec sa capacité de trouver des solutions aux enjeux du développement des communautés, la flexibilité avec son adaptation au besoin de la ville de Trois-Rivières et l&apos;inclusivité des divers partenariats qui répondent aux besoins des Trifluviennes sur divers plans (santé, sécurité, itinérance, etc.).
            </p>
            <div className="cta-buttons">
              <a href="#" className="cta-button">
                Lire plus
              </a>
            </div>
          </div>
          <Image
            src="/images/home_image1.jpg"
            alt="Rejoindre RADAR"
            width={700}
            height={400}
            className="hero-image"
          />
        </div>

        {/* Sections Grid */}
        <div className="sections-grid">
          <div className="section-item">
            <div className="image-container">
              <Image
                src="/images/home_image3.jpg"
                alt="Rejoindre RADAR"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h2>Comment rejoindre RADAR ?</h2>
          </div>
          
          <div className="section-item">
            <div className="image-container">
              <Image
                src="/images/home_image2.jpg"
                alt="Actions RADAR"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <h2>Actions entreprises par RADAR</h2>
          </div>
        </div>

        {/* Partners Sections */}
        <div className="partners-section">
          <div className="partner-image">
            <Image
              src="/images/home_image.jpg"
              alt="Rejoindre RADAR"
              width={400}
              height={300}
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
            />
          </div>
          <div className="partner-info">
            <h2>Les partenaires actuels</h2>
            <p>
              Notre engagement pour le développement des communautés est essentiel et c&apos;est avec l&apos;implication des diverses tables de concertation que nous sommes arrivés à des résultats exceptionnels.
            </p>
            <div className="cta-buttons">
              <a href="#" className="cta-button">
                Lire plus
              </a>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="partner-logos">
          <div className="logo-item">
            <Image
              src="/images/trois_riviere.png"
              alt=""
              width={150}
              height={100}
            />
          </div>
          <div className="logo-item">
            <Image
              src="/images/coporat.png"
              alt=""
              width={150}
              height={100}
            />
          </div>
          <div className="logo-item">
            <Image
              src="/images/centre_du_quebec.png"
              alt=""
              width={150}
              height={100}
            />
          </div>
          <div className="logo-item">
            <Image
              src="/images/centre_service_scolair.png"
              alt=""
              width={150}
              height={100}
            />
          </div>
        </div>
      </main>
    </div>
  );
}