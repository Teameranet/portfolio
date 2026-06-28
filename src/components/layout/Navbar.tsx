import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../../utils/cn';
import { Button } from '../ui/Button';
import { useLogoFontCycle } from '../../hooks/useLogoFontCycle';
import './Navbar.css';

interface NavbarProps {
  scrolled: boolean;
  currentPage: string;
  isWorksSectionVisible: boolean;
  onWorksClick: () => void;
  onLogoClick: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export const Navbar = ({
  scrolled,
  currentPage,
  isWorksSectionVisible,
  onWorksClick,
  onLogoClick,
  isMenuOpen,
  setIsMenuOpen
}: NavbarProps) => {
  const { font, animating } = useLogoFontCycle(2500);
  const handleDownloadResume = () => {
    // Open the PDF viewer page in a new tab
    window.open('/resume.html', '_blank');

    // Trigger download — Vercel serves this with Content-Disposition: attachment
    // so the browser downloads it with the correct filename
    const link = document.createElement('a');
    link.href = '/download-resume';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <nav className={cn(
        "navbar-fixed",
        scrolled ? "navbar-scrolled" : "navbar-transparent"
      )}>
        <div className="navbar-container">
          <button onClick={onLogoClick} className="navbar-logo">
            <span
              className={cn('logo-font-cycle', animating && 'logo-font-cycle--out')}
              style={{
                fontFamily: font.family,
                fontWeight: font.weight,
              }}
            >
              ASHWIN
            </span>

          </button>

          <div className="navbar-links">
            <button
              onClick={onWorksClick}
              className={cn("nav-link", isWorksSectionVisible && "nav-link-active")}
            >
              WORKS
            </button>
            <Link
              to="/about"
              className={cn("nav-link", currentPage === 'about' && "nav-link-active")}
            >
              ABOUT
            </Link>
          </div>

          <div className="navbar-actions">
            <Button
              variant="outline"
              showSparkle
              className="hidden md:flex"
              onClick={handleDownloadResume}
            >
              DOWNLOAD RESUME
            </Button>

            <button
              onClick={() => setIsMenuOpen(true)}
              className="md:hidden p-2 text-brand-text bg-white/50 rounded-full border border-black/5 cursor-pointer"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
              className="fixed inset-0 bg-black/10 backdrop-blur-[2px] z-[55] md:hidden"
            />

            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-4 left-4 right-4 z-[60] md:hidden pointer-events-none"
            >
              <div className="mobile-menu-card">
                <div className="flex items-center justify-between mb-12">
                  <button onClick={onLogoClick} className="navbar-logo">
                    <span
                      className={cn('logo-font-cycle', animating && 'logo-font-cycle--out')}
                      style={{
                        fontFamily: font.family,
                        fontWeight: font.weight,
                      }}
                    >
                      ASHWIN
                    </span>
                  </button>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    className="p-2 bg-black/5 rounded-full transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5 text-brand-text" />
                  </button>
                </div>

                <div className="flex flex-col items-center justify-center gap-8 mb-12">
                  <button
                    onClick={onWorksClick}
                    className={cn("nav-link text-sm tracking-widest", isWorksSectionVisible && "nav-link-active")}
                  >
                    WORKS
                  </button>
                  <Link
                    to="/about"
                    onClick={() => setIsMenuOpen(false)}
                    className={cn("nav-link text-sm tracking-widest", currentPage === 'about' && "nav-link-active")}
                  >
                    ABOUT
                  </Link>
                </div>

                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    showSparkle
                    className="w-full py-4 text-sm"
                    onClick={handleDownloadResume}
                  >
                    DOWNLOAD RESUME
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};
