import { Sparkles, Globe, Monitor, Smartphone, Search, PenTool } from 'lucide-react';
import { Project } from '../../types';

interface WalkeelsContentProps {
  project: Project;
}

export const WalkeelsContent = ({ project: _project }: WalkeelsContentProps) => (
  <>
    <section>
      <h2 className="casestudy-section-title">Problem Statement</h2>
      <p className="casestudy-body-text mb-12">
        The client required a professional online presence that would improve brand visibility, present services clearly, and increase user engagement. The goal was to provide a seamless browsing experience across devices while generating inquiries and potential leads.
      </p>
    </section>

    <section>
      <h2 className="casestudy-section-title">Design Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: Search, title: "Research", desc: "Analyzed competitor websites and industry trends to identify opportunities." },
          { icon: PenTool, title: "Wireframing", desc: "Created low-fidelity layouts to define content hierarchy and user flow." },
          { icon: Monitor, title: "UI Design", desc: "Developed a modern visual system with consistent typography and colors." },
          { icon: Globe, title: "Development", desc: "Implemented responsive layouts for desktop, tablet, and mobile devices." },
          { icon: Smartphone, title: "Testing", desc: "Conducted usability testing across multiple screen sizes and devices." }
        ].map((item, idx) => (
          <div key={idx} className="p-6 bg-white/30 rounded-2xl border border-brand-text/5">
            <item.icon className="w-5 h-5 text-brand-text/40 mb-4" />
            <h4 className="font-bold text-sm mb-2">{item.title}</h4>
            <p className="text-xs text-brand-muted leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="casestudy-section-title">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          "Modern One-Page Layout",
          "Mobile-First Responsive Design",
          "Clear Service Presentation",
          "Smooth Navigation Experience",
          "Optimized User Journey",
          "Contact & Lead Generation",
          "Fast Loading Performance",
          "SEO-Friendly Structure"
        ].map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3 p-4 bg-white/50 rounded-xl border border-brand-text/5">
            <div className="w-1.5 h-1.5 rounded-full bg-brand-text" />
            <span className="text-xs font-semibold text-brand-text/80">{feature}</span>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="casestudy-section-title">Challenges & Solutions</h2>
      <div className="space-y-6">
        <div className="p-8 bg-gray-900 text-white rounded-[32px] shadow-xl">
          <h4 className="text-lg font-serif mb-4 flex items-center gap-2">
            <span className="text-white/40">Challenge:</span> Information Density
          </h4>
          <p className="text-sm text-white/60 leading-relaxed mb-6">
            Presenting large amounts of information in a single-page structure while maintaining visual hierarchy and performance.
          </p>
          <div className="h-[1px] bg-white/10 mb-6" />
          <h4 className="text-lg font-serif mb-4 flex items-center gap-2">
            <span className="text-white/40">Solution:</span> Modular Architecture
          </h4>
          <p className="text-sm text-white/60 leading-relaxed">
            Designed a clean and structured interface with intuitive navigation and strategic content placement. Improved usability while creating a professional and trustworthy brand experience.
          </p>
        </div>
      </div>
    </section>

    <section>
      <h2 className="casestudy-section-title">Tools & Technologies</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
        {[
          { name: "Figma", details: "UI/UX Design" },
          { name: "HTML5", details: "Structure" },
          { name: "CSS3", details: "Styling" },
          { name: "JavaScript", details: "Interactivity" },
          { name: "Responsive", details: "Design Principles" }
        ].map((tool, idx) => (
          <div key={idx} className="border-l border-brand-text/10 pl-6 py-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-brand-muted block mb-1">
              {tool.name}
            </span>
            <p className="text-[10px] font-medium opacity-60 uppercase tracking-tighter">
              {tool.details}
            </p>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="casestudy-section-title">Outcome</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          "Improved user experience and accessibility.",
          "Stronger brand presentation across all devices.",
          "Faster and more engaging browsing experience.",
          "Professional digital presence aligned with business goals."
        ].map((outcome, idx) => (
          <div key={idx} className="flex gap-4">
            <Sparkles className="w-5 h-5 text-brand-text shrink-0" />
            <p className="text-brand-muted leading-relaxed text-sm">{outcome}</p>
          </div>
        ))}
      </div>
    </section>

    <section className="pb-20">
      <h2 className="casestudy-section-title">Key Learnings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          "Effective content hierarchy significantly improves usability.",
          "Responsive design should be considered from the beginning.",
          "Consistency in design systems enhances scalability.",
          "User-centered design leads to better conversion outcomes."
        ].map((learning, idx) => (
          <div key={idx} className="p-8 bg-white/40 rounded-3xl border border-brand-text/5">
            <p className="text-sm font-medium leading-relaxed italic">"{learning}"</p>
          </div>
        ))}
      </div>
    </section>
  </>
);
