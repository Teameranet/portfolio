import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
  scrolled: boolean;
  currentPage: 'works' | 'about' | 'casestudy';
  isWorksSectionVisible: boolean;
  onWorksClick: () => void;
  onLogoClick: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export const Layout = ({
  children,
  scrolled,
  currentPage,
  isWorksSectionVisible,
  onWorksClick,
  onLogoClick,
  isMenuOpen,
  setIsMenuOpen
}: LayoutProps) => {
  return (
    <div className="min-h-screen gradient-bg selection:bg-purple-100 selection:text-purple-900">
      <Navbar
        scrolled={scrolled}
        currentPage={currentPage}
        isWorksSectionVisible={isWorksSectionVisible}
        onWorksClick={onWorksClick}
        onLogoClick={onLogoClick}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main className="max-w-7xl mx-auto px-6 md:px-12 pt-40 pb-20">
        {children}
        <Footer currentPage={currentPage} />
      </main>
    </div>
  );
};
