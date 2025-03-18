
import type { Metadata } from "next";
import Navbar from "../components/navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: "RADAR",
  description: "Réseau d’Acteurs pour le Développement d’Action Rassembleuses",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}