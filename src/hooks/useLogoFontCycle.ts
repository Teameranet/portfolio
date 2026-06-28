import { useState, useEffect } from 'react';

export const LOGO_FONTS = [
  { family: '"Inter", sans-serif', label: 'Sans-Serif', weight: '800' },
  { family: '"Playfair Display", serif', label: 'Serif', weight: '700' },
  { family: '"Pacifico", cursive', label: 'Fun', weight: '400' },
  { family: '"Space Grotesk", sans-serif', label: 'Grotesque', weight: '700' },
  { family: '"Dancing Script", cursive', label: 'Script', weight: '700' },
  { family: '"Bebas Neue", sans-serif', label: 'Display', weight: '400' },
  { family: '"Caveat", cursive', label: 'Handwritten', weight: '700' },
];

export const useLogoFontCycle = (intervalMs = 5000) => {
  const [index, setIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % LOGO_FONTS.length);
        setAnimating(false);
      }, 350);
    }, intervalMs);

    return () => clearInterval(timer);
  }, [intervalMs]);

  return { font: LOGO_FONTS[index], animating };
};
