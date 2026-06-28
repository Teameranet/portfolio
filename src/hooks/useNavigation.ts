import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const useNavigation = (
  currentPage: string,
  setIsMenuOpen: (open: boolean) => void
) => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [isWorksSectionVisible, setIsWorksSectionVisible] = useState(false);

  const scrollToWorks = () => {
    const el = document.getElementById('works');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleWorksClick = () => {
    setIsMenuOpen(false);
    if (currentPage !== 'works') {
      navigate('/');
      // Use a slightly longer timeout and multiple attempts to ensure the section is found
      let attempts = 0;
      const intervalId = setInterval(() => {
        const el = document.getElementById('works');
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
          clearInterval(intervalId);
        }
        attempts++;
        if (attempts > 10) clearInterval(intervalId);
      }, 100);
    } else {
      scrollToWorks();
    }
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
    if (currentPage !== 'works') {
      navigate('/');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    let observer: IntersectionObserver | null = null;
    
    // Function to initialize observer
    const setupObserver = () => {
      const el = document.getElementById('works');
      if (el) {
        // Disconnect existing if any
        if (observer) observer.disconnect();
        
        observer = new IntersectionObserver(
          ([entry]) => {
            setIsWorksSectionVisible(entry.isIntersecting);
          },
          { 
            threshold: 0.05, // More sensitive
            rootMargin: "-20% 0px -20% 0px" 
          }
        );
        observer.observe(el);
      }
    };

    if (currentPage === 'works') {
      // Initial setup
      setupObserver();
      
      // Fallback: check again after a short delay to account for page transitions
      const timeoutId = setTimeout(setupObserver, 500);
      
      // Also add a scroll listener for manual calculation if observer fails
      const handleScrollCheck = () => {
        const el = document.getElementById('works');
        if (el) {
          const rect = el.getBoundingClientRect();
          const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > window.innerHeight * 0.2;
          setIsWorksSectionVisible(isVisible);
        }
      };
      
      window.addEventListener('scroll', handleScrollCheck);

      return () => {
        clearTimeout(timeoutId);
        if (observer) observer.disconnect();
        window.removeEventListener('scroll', handleScrollCheck);
      };
    } else {
      setIsWorksSectionVisible(false);
      return () => {
        if (observer) observer.disconnect();
      };
    }
  }, [currentPage]);

  useEffect(() => {
    if (currentPage !== 'works' || !window.location.hash.includes('works')) {
      window.scrollTo(0, 0);
    }
  }, [currentPage]);

  return {
    scrolled,
    isWorksSectionVisible,
    handleWorksClick,
    handleLogoClick
  };
};
