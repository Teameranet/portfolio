import { motion } from 'framer-motion';
import './Hero.css';

export const Hero = () => {
  return (
    <section className="hero-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >


        <div className="status-tag-container">
          <span className="status-tag-active">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Available for Full-time Roles
          </span>
          <span className="role-label-item uppercase text-[10px] font-bold tracking-widest">
            Pune, India / Remote
          </span>
        </div>
        
        <h1 className="text-editorial text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] leading-[1.2] md:leading-[1.15] tracking-[-0.02em] mb-12 max-w-6xl">
          I'm Ashwin, a <span className="text-brand-muted/70 italic font-serif">UI/UX designer</span> & <span className="text-brand-muted/70 italic font-serif">developer</span> building AI-agentic interfaces and scalable design systems.
        </h1>
        
        <div className="role-label-container">
          <span className="role-label-item">Final Year BCA @ Tilak Maharashtra Vidyapeeth</span>
          <span className="hidden md:block text-brand-text/20">•</span>
          <span className="role-label-item">UI/UX Designer @ Newprinthub</span>
        </div>
      </motion.div>
    </section>
  );
};
