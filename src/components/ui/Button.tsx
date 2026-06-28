import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { cn } from '../../utils/cn';
import './Button.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  showSparkle?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', showSparkle = false, children, ...props }, ref) => {
    const variantClasses = {
      primary: 'btn-primary',
      secondary: 'btn-secondary',
      outline: 'btn-outline',
    };

    const { whileHover, whileTap, ...restProps } = props as any;

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02, ...whileHover }}
        whileTap={{ scale: 0.98, ...whileTap }}
        className={cn('group btn-base', variantClasses[variant], className)}
        {...restProps}
      >
        {children}
        {showSparkle && (
          <Sparkles className="w-4 h-4 transition-transform group-hover:rotate-12 group-hover:scale-110" />
        )}
      </motion.button>
    );
  }
);
