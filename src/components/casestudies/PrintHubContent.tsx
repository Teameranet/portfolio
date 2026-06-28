import { Sparkles, CheckCircle2, Layout, Zap, Target } from 'lucide-react';
import box1 from '../../assets/Printhub/box-1.svg';
import box2 from '../../assets/Printhub/box-2.svg';
import box3 from '../../assets/Printhub/box-3.svg';
import box4 from '../../assets/Printhub/box-4.svg';
import box5 from '../../assets/Printhub/box-5.svg';
import box6 from '../../assets/Printhub/box-6.svg';
import wireframes from '../../assets/Printhub/Wireframes.png';
import outputScreens from '../../assets/Printhub/Output Screens.png';

const boxAssets: Record<string, string> = {
  'box-1.svg': box1,
  'box-2.svg': box2,
  'box-3.svg': box3,
  'box-4.svg': box4,
  'box-5.svg': box5,
  'box-6.svg': box6,
};

export const PrintHubContent = () => (
  <>
    <section>
      <h2 className="casestudy-section-title">Problem Statement</h2>
      <p className="casestudy-body-text mb-12">
        PrintHub's existing mobile application suffered from complex user flows, an outdated interface, poor engagement, and high customer drop-off rates. Users found it difficult to navigate the printing process, leading to frustration and lower customer satisfaction. PrintHub required a modern solution that could provide a seamless printing experience while supporting business growth.
      </p>
    </section>

    <section>
      <h2 className="casestudy-section-title">Project Goals</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { title: "Simplify Journey", desc: "Redesign the printing workflow to be intuitive and fast." },
          { title: "Improve Accessibility", desc: "Ensure the app is usable for all customer segments across India." },
          { title: "Increase Engagement", desc: "Create a visual language that encourages exploration and reuse." },
          { title: "Scalable Platform", desc: "Build a design system that supports future service expansions." }
        ].map((goal, idx) => (
          <div key={idx} className="p-8 bg-white/40 border border-brand-text/5 rounded-[32px] flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-brand-text/5 flex items-center justify-center shrink-0">
              <Target className="w-5 h-5 text-brand-text" />
            </div>
            <div>
              <h4 className="font-bold text-sm mb-1">{goal.title}</h4>
              <p className="text-xs text-brand-muted leading-relaxed">{goal.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="casestudy-section-title">Design Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { step: "01", title: "Understanding", desc: "Stakeholder interviews to align with business objectives." },
          { step: "02", title: "Research", desc: "Market analysis and user pain point identification." },
          { step: "03", title: "Insights", desc: "Synthesizing research into actionable design strategies." },
          { step: "04", title: "Wireframing", desc: "Establishing navigation and content hierarchy." },
          { step: "05", title: "UI Design", desc: "Developing a modern design system and components." },
          { step: "06", title: "Testing", desc: "Iterative usability validation and refinement." }
        ].map((item, idx) => (
          <div key={idx} className="p-6 bg-white/30 rounded-2xl border border-brand-text/5">
            <span className="text-[10px] font-bold text-brand-text/20 mb-3 block tracking-widest uppercase">Phase {item.step}</span>
            <h4 className="font-bold text-sm mb-2">{item.title}</h4>
            <p className="text-xs text-brand-muted leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="casestudy-section-title">Core Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[
          "Document Upload", "Print Customization", "Real-time Preview",
          "Order Management", "File Management", "User Profiles"
        ].map((feature, idx) => (
          <div key={idx} className="flex items-center gap-3 p-4 bg-white/50 rounded-xl border border-brand-text/5">
            <CheckCircle2 className="w-4 h-4 text-[#7E57C2]" />
            <span className="text-xs font-semibold text-brand-text/80">{feature}</span>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="casestudy-section-title">Design System</h2>
      <div className="p-10 bg-gray-900 text-white rounded-[40px] shadow-2xl mb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase block mb-6">Typography</span>
            <div className="space-y-4">
              <h3 className="text-5xl font-bold font-sans">Poppins</h3>
              <p className="text-xs text-white/60 leading-relaxed max-w-xs">
                Clean and modern geometric sans-serif for enhanced readability across various mobile screen sizes.
              </p>
            </div>
          </div>
          <div>
            <span className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase block mb-6">Color Palette</span>
            <div className="flex flex-wrap gap-4">
              {[
                { name: "Primary Purple", hex: "#7E57C2" },
                { name: "Night Black", hex: "#000000" },
                { name: "Charcoal", hex: "#2E2E2E" },
                { name: "Error Red", hex: "#EA4335" },
                { name: "Azure Blue", hex: "#4898C6" }
              ].map((color, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-2xl border border-white/10" style={{ backgroundColor: color.hex }} />
                  <span className="text-[8px] font-bold opacity-40">{color.hex}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-24 mt-24">
        <div>
          <h3 className="text-sm font-bold tracking-widest uppercase mb-8 pb-4 border-b border-brand-text/10 flex justify-between items-center">
            Custom Illustrations
            <span className="text-[10px] opacity-40">06 Hand-crafted Assets</span>
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {['box-1.svg', 'box-2.svg', 'box-3.svg', 'box-4.svg', 'box-5.svg', 'box-6.svg'].map((filename, i) => (
              <div key={i} className="aspect-square bg-white/40 rounded-3xl border border-brand-text/5 overflow-hidden group">
                <img 
                  src={boxAssets[filename]} 
                  alt={`Illustration ${i + 1}`}
                  className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-widest uppercase mb-8 pb-4 border-b border-brand-text/10">Low-Fidelity Wireframes</h3>
          <div className="aspect-[16/10] bg-white/40 rounded-[40px] border border-brand-text/5 overflow-hidden">
            <img 
              src={wireframes} 
              alt="PrintHub Wireframes"
              className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold tracking-widest uppercase mb-8 pb-4 border-b border-brand-text/10">Output Screens (High-Fidelity)</h3>
          <div className="rounded-[40px] overflow-hidden shadow-2xl border border-brand-text/5">
            <img 
              src={outputScreens} 
              alt="PrintHub Final Designs"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2 className="casestudy-section-title">Project Outcomes</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { icon: Zap, title: "Business Impact", items: ["Improved Engagement", "Increased Conversion", "Better Perception"] },
          { icon: Target, title: "User Impact", items: ["Faster Completion", "Easier Navigation", "Intuitive Interactions"] },
          { icon: Layout, title: "Design Impact", items: ["Consistent Identity", "Reusable Library", "Mobile Optimized"] }
        ].map((impact, idx) => (
          <div key={idx} className="space-y-6">
            <div className="flex items-center gap-3">
              <impact.icon className="w-5 h-5 text-[#7E57C2]" />
              <h4 className="font-bold text-sm uppercase tracking-widest">{impact.title}</h4>
            </div>
            <ul className="space-y-3">
              {impact.items.map((item, i) => (
                <li key={i} className="text-xs text-brand-muted flex items-center gap-2">
                  <div className="w-1 h-1 rounded-full bg-brand-text/20" /> {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>

    <section className="pb-20">
      <h2 className="casestudy-section-title">Key Learnings</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
          "User research must always dictate design decisions to solve real pain points.",
          "Clean, simple interfaces will consistently outperform complex layouts in adoption.",
          "Iterative testing is essential to uncovering usability issues early in the design cycle.",
          "Scalable design systems significantly reduce maintenance and future dev effort."
        ].map((item, idx) => (
          <div key={idx} className="p-8 bg-white/40 rounded-3xl border border-brand-text/5 flex gap-4">
            <Sparkles className="w-4 h-4 text-[#7E57C2] shrink-0" />
            <p className="text-sm font-medium leading-relaxed italic">{item}</p>
          </div>
        ))}
      </div>
    </section>
  </>
);
