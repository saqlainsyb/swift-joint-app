// src/components/layout/RootLayout.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../../index.css'; // Ensure Tailwind styles are applied

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="antialiased bg-[#383838] dark">
      <Header />
      {children}
      <Footer />
    </div>
  );
}