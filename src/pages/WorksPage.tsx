import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { Hero } from '../components/sections';
import './WorksPage.css';

interface WorksPageProps {
  projects: Project[];
}

export const WorksPage = ({ projects }: WorksPageProps) => {
  return (
    <>
      <Hero />

      {/* How I Work Section */}
      <section className="mb-48">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-2xl font-medium">How I work</h2>
          <div className="h-[1px] flex-grow mx-8 bg-brand-text/10" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              step: "01",
              title: "Discover & Research",
              points: ["User-centered deep dives", "Data-driven analytics", "Mental model mapping"]
            },
            {
              step: "02",
              title: "Strategy & Design",
              points: ["Scalable design systems", "Intuitive wireframing", "Creative visual identity"]
            },
            {
              step: "03",
              title: "Build & Prototype",
              points: ["High-fidelity interactive models", "AI-assisted prototyping", "Development-ready assets"]
            },
            {
              step: "04",
              title: "Launch & Refine",
              points: ["Measurable impact tracking", "Continuous iteration", "Launch success optimization"]
            }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 bg-white/40 backdrop-blur-sm rounded-[32px] border border-white/50 shadow-sm hover:shadow-md transition-all group"
            >
              <span className="text-sm font-bold tracking-widest text-brand-text/20 group-hover:text-brand-text/40 transition-colors mb-6 block">STEP {item.step}</span>
              <h3 className="text-xl font-serif mb-6 leading-tight">{item.title}</h3>
              <ul className="space-y-3">
                {item.points.map((point, pIdx) => (
                  <li key={pIdx} className="text-xs font-semibold text-brand-muted uppercase tracking-wider flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-brand-text/20" /> {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Recent Work Section */}
      <section id="works" className="mb-32">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-2xl font-medium">Recent Work</h2>
          <div className="h-[1px] flex-grow mx-8 bg-brand-text/10" />
        </div>

        <div className="space-y-32">
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
            >
              {/* Image Section - First on all screens (Left on Desktop, Top on Mobile) */}
              <Link 
                to={`/project/${project.id}`}
                className="order-1 lg:order-1 project-image-wrapper group"
              >
                <img 
                  src={project.thumbnailImage} 
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-text/5 group-hover:bg-brand-text/0 transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-white/90 backdrop-blur-md text-brand-text px-8 py-3 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    View Project
                  </div>
                </div>
              </Link>

              {/* Details Section - Second on all screens (Right on Desktop, Bottom on Mobile) */}
              <div className="order-2 lg:order-2">
                <div className="mb-2 flex items-center gap-4">
                  <span className="text-[10px] font-bold tracking-widest uppercase text-brand-muted">{project.timeline}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">{project.title}</h3>
                <ul className="space-y-4 mb-10">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="flex gap-3 text-brand-muted leading-relaxed text-sm md:text-base">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-text shrink-0" />
                      {bullet}
                    </li>
                  ))}
                </ul>
                <Link 
                  to={`/project/${project.id}`}
                  className="inline-flex items-center gap-3 font-bold text-[10px] tracking-[0.2em] uppercase hover:text-brand-muted transition-colors group"
                >
                  Read Case Study
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};
