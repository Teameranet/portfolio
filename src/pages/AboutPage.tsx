import { motion } from 'framer-motion';
import { PreviousWork, Education, SkillCategory } from '../types';
import profileImg from '../assets/profile.png';
import './AboutPage.css';

const experiences: PreviousWork[] = [
  {
    role: "UI/UX Designer",
    company: "Newprinthub.com",
    period: "May 2024 - Present",
    description: "Increased customer retention by 25% by redesigning the onboarding flow through design thinking and usability testing."
  },
  {
    role: "UI/UX Developer",
    company: "Inrowmek.com",
    period: "Oct 2023 - April 2024",
    description: "Reduced design-to-development handoff time by 40% by authoring comprehensive design documentation and a reusable Figma design system. Designed WCAG-compliant, responsive UI components for mobile and web, using Sketch and Figma."
  }
];

const education: Education[] = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    school: "Tilak Maharashtra Vidyapeeth",
    period: "Aug 2022 - June 2026",
    details:  ["Computer Fundamentals", "Operating System & Networking", "Business Application Models", "Database Management System"]
  },
  {
    degree: "Higher Secondary Certificate (IT)",
    school: "ASM (CSIT) College",
    period: "Aug 2021 - March 2022",
    details: ["Information Technology", "Planning & Organisation Management", "Business Models", "Enterprise Resource System"]
  }
];

const skillCategories: SkillCategory[] = [
  {
    title: "Design & UX",
    skills: ["User Research", "Design Thinking", "User Journey Mapping",  "Interaction Design", "Usability Testing", "A/B Testing", "Design with AI", "Design Systems",  "Information Architecture", "Accessibility (WCAG)", "End-to-End Design"  ]
  },
  {
    title: "Research & Analytics",
    skills: ["Amplitude", "Qualtrics", "User Testing", "Perplexity", "Claude"]
  },
  {
    title: "Design Tools",
    skills: ["Figma", "Adobe Illustrator", "Sketch", "Magicpath"]
  },
  {
    title: "AI & Prototyping",
    skills: ["Lovable", "Figma AI (Make)", "Miro", "Antigravity AI IDE"]
  },
  {
    title: "Development",
    skills: ["React.js", "JavaScript", "HTML", "Tailwind CSS", "GitHub"]
  }
];

export const AboutPage = () => (
  <div className="pt-20">
    <section className="mb-32">
      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-16">
        {/* Image - Placed first on mobile/tablet, ordered second on desktop */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="lg:col-span-4 lg:order-2"
        >
          <div className="aspect-[4/5] bg-gray-200 rounded-3xl overflow-hidden lg:rotate-2 max-w-md mx-auto lg:mx-0">
            <img
              src={profileImg}
              alt="Ashwinkumar Chavan"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        {/* Text Content - Placed second on mobile/tablet, ordered first on desktop */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="lg:col-span-8 lg:order-1"
        >
          <h1 className="text-editorial text-5xl md:text-7xl mb-12">Bridging the gap between pixels and production.</h1>
          <p className="text-xl md:text-2xl text-brand-muted leading-relaxed max-w-3xl">
            I'm Ashwinkumar Chavan. I don't just design interfaces; I build them. As a UI/UX designer with a background in computer applications, I believe the best experiences are born when the designer understands the code and the developer understands the user.
          </p>
          <p className="text-xl md:text-2xl text-brand-muted leading-relaxed max-w-3xl mt-8">
             My mission is to create <span className="text-brand-text font-medium italic">human-centric AI tools</span> that solve real problems, not just follow trends. Whether it's redesigning enterprise systems for PrintHub or building collaborative platforms, I focus on measurable impact and technical feasibility.
          </p>

          <div className="mt-12 flex flex-wrap gap-8">
            <div>
              <span className="text-[10px] font-bold tracking-[0.2em] text-brand-muted uppercase block mb-2">Social Proof</span>
              <p className="text-sm font-medium leading-relaxed max-w-sm italic text-brand-text/70">
                {/* "Ashwin's ability to bridge design and code helped us launch PrintHub 30% faster than expected. His focus on measurable outcomes and cross-functional collaboration led to a successful launch." */}
                 "Ashwin's ability to bridge design and code helped us launch PrintHub 30% faster than expected. His focus on measurable outcomes and cross-functional collaboration  at this level." 
                <span className="block mt-2 font-bold not-italic text-brand-text text-[10px]">— Design Lead @ Newprinthub</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>

    {/* Experience & Education */}
    <section className="mb-32 grid grid-cols-1 lg:grid-cols-2 gap-24">
      <div>
        <h2 className="text-2xl font-medium mb-12 flex items-center gap-4">
          Experience <div className="h-[1px] flex-grow bg-brand-text/10" />
        </h2>
        <div className="space-y-16">
          {experiences.map((exp, index) => (
            <div key={index}>
              <div className="text-xs font-bold tracking-widest uppercase text-brand-muted mb-2">{exp.period}</div>
              <h4 className="text-2xl font-serif mb-1">{exp.role}</h4>
              <div className="text-sm font-bold mb-4 text-brand-text/70">{exp.company}</div>
              <p className="text-brand-muted leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-2xl font-medium mb-12 flex items-center gap-4">
          Education <div className="h-[1px] flex-grow bg-brand-text/10" />
        </h2>
        <div className="space-y-16">
          {education.map((edu, index) => (
            <div key={index}>
              <div className="text-xs font-bold tracking-widest uppercase text-brand-muted mb-2">{edu.period}</div>
              <h4 className="text-2xl font-serif mb-1">{edu.degree}</h4>
              <div className="text-sm font-bold mb-4 text-brand-text/70">{edu.school}</div>
              <ul className="grid grid-cols-2 gap-2">
                {edu.details.map((detail, idx) => (
                  <li key={idx} className="text-base text-brand-muted flex items-center gap-2">
                    <div className="w-1 h-1 rounded-full bg-brand-text/30" /> {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Skills & Tools Grid */}
    <section className="mb-32">
      <h2 className="text-2xl font-medium mb-12 flex items-center gap-4">
        Capabilities & Toolkit <div className="h-[1px] flex-grow bg-brand-text/10" />
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h5 className="text-[10px] font-bold tracking-[0.2em] uppercase text-brand-muted mb-6">{category.title}</h5>
            <ul className="space-y-3">
              {category.skills.map((skill, idx) => (
                <li key={idx} className="text-sm font-medium hover:text-brand-muted transition-colors cursor-default">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  </div>
);
