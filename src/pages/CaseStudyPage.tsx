import { ArrowRight, ExternalLink } from 'lucide-react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../App';
import teameraVideo from '../assets/Teamera/Teamera.mp4';
import { Button } from '../components/ui/Button';
import './CaseStudyPage.css';

// Case Study Contents
import { PrintHubContent } from '../components/casestudies/PrintHubContent';
import { TeameraContent } from '../components/casestudies/TeameraContent';
import { WalkeelsContent } from '../components/casestudies/WalkeelsContent';

export const CaseStudyPage = () => {
  const { id } = useParams<{ id: string }>();
  const selectedProject = projects.find(p => p.id === id);

  if (!selectedProject) return null;

  const renderContent = () => {
    switch (selectedProject.id) {
      case 'printhub': return <PrintHubContent />;
      case 'teamara': return <TeameraContent project={selectedProject} />;
      case 'walkeels': return <WalkeelsContent project={selectedProject} />;
      default: return null;
    }
  };

  return (
    <div className="casestudy-container">
      <Link to="/" className="casestudy-back-btn">
        <ArrowRight className="w-4 h-4 rotate-180" /> Back to Works
      </Link>

      <section className="casestudy-hero">
        <div className="casestudy-hero-grid">
          <div className="lg:col-span-8">
            <span className="text-xs font-bold tracking-[0.2em] text-brand-muted uppercase mb-4 block">{selectedProject.category}</span>
            <h1 className="text-editorial text-5xl md:text-7xl lg:text-8xl leading-tight">
              {selectedProject.title}
            </h1>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-6 text-sm">
            <div>
              <span className="font-bold uppercase tracking-widest text-[10px] text-brand-muted block mb-1">Role</span>
              <span className="font-medium">{selectedProject.role}</span>
            </div>
            <div>
              <span className="font-bold uppercase tracking-widest text-[10px] text-brand-muted block mb-1">Timeline</span>
              <span className="font-medium">{selectedProject.timeline}</span>
            </div>
            {selectedProject.link !== "#" && (
              <div className="pt-4">
                <a href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" className="w-full lg:w-auto py-3 px-8 text-[9px]">
                    Visit Live Project <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </a>
              </div>
            )}
            {selectedProject.figmaLink && (
              <div className="pt-4">
                <a href={selectedProject.figmaLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full lg:w-auto py-3 px-8 text-[9px]">
                    View Figma Design <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </a>
              </div>
            )}
          </div>
        </div>
        <div className="casestudy-banner-wrapper">
          {selectedProject.id === 'teamara' ? (
            <video 
              src={teameraVideo}
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img 
              src={selectedProject.heroImage} 
              alt={selectedProject.title} 
              className="w-full h-full object-cover"
            />
          )}
        </div>
      </section>

      <div className="casestudy-content-grid">
        <aside className="casestudy-sidebar">
          <div className="casestudy-sidebar-sticky">
            <div className="tech-spec-item">
              <h3 className="tech-spec-label">Overview</h3>
              <p className="text-brand-muted leading-relaxed italic">{selectedProject.overview}</p>
            </div>
            
            {selectedProject.id === 'printhub' && (
              <div className="tech-spec-item">
                <h3 className="tech-spec-label">Design Specs</h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">Typography</span>
                    <p className="text-sm font-medium">Poppins (Geometric Sans-serif)</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-muted">Primary Color</span>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-4 h-4 rounded-full bg-[#7E57C2]" />
                      <p className="text-sm font-medium">Azure Purple (#7E57C2)</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div className="tech-spec-item">
              <h3 className="tech-spec-label">Impact</h3>
              <p className="text-brand-text font-medium text-lg leading-snug">{selectedProject.impact}</p>
            </div>
          </div>
        </aside>

        <main className="casestudy-main-content">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};
