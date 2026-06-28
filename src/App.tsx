import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from './types';

// Asset imports — Vite resolves these to hashed URLs at build time
import teameraThumbnail from './assets/Teamera/Teamera.png';
import printhubThumbnail from './assets/Printhub/Printhub.jpg';
import printhubHero from './assets/Printhub/Printhub-Casestudy.png';
import walkeelsThumbnail from './assets/Walkeels/Thumbnail.png';
import walkeelsBanner from './assets/Walkeels/Banner.png';

// Layout & Components
import { Layout } from './components/layout';

// Pages
import { WorksPage, AboutPage, CaseStudyPage } from './pages';

// Hooks
import { useNavigation } from './hooks/useNavigation';

export const projects: Project[] = [
  {
    id: "teamara",
    title: "Teamera.net: Collaborative Ecosystem",
    timeline: "2025 - 2026",
    category: "Full-Stack Application",
    role: "Full-Stack Designer & Developer",
    overview: "Teamera.net is a full-stack web application designed to help founders, students, and professionals build startup teams and collaborate on projects. The platform bridges the gap between innovative ideas and skilled team members.",
    problem: "Founders and innovators consistently struggle to find the right teammates. Existing platforms focus on hiring or passive networking, but offer no dedicated tools for startup team formation, role-based applications, or real-time project collaboration.",
    solution: "A dedicated platform where users can discover startup projects, apply for roles, build professional portfolios, and collaborate through shared workspaces.",
    impact: "Built a complete startup team-building ecosystem, implemented secure authentication, and developed real-time collaboration features using a scalable 3-tier architecture.",
    bullets: [
      "Architected the 3-tier system using React, Node.js, and MongoDB Atlas.",
      "Designed full user lifecycles from registration to workspace collaboration.",
      "Implemented secure JWT authentication and real-time Socket.io communication."
    ],
    link: "https://teamera.vercel.app/",
    thumbnailImage: teameraThumbnail,
    heroImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=2000",
    targetUsers: [
      { title: "Founders", points: ["Post project ideas.", "Recruit team members.", "Manage applications and teams."] },
      { title: "Students", points: ["Gain practical industry experience.", "Work on real projects.", "Build strong portfolios."] },
      { title: "Professionals", points: ["Find side projects.", "Network with talented individuals.", "Contribute specialized skills."] },
      { title: "Community", points: ["Share knowledge.", "Engage in discussions.", "Build professional connections."] }
    ],
    coreFeatures: [
      { title: "User Authentication", points: ["Secure registration and login.", "JWT-based authentication.", "Protected routes and session management."] },
      { title: "User Profiles", points: ["Professional profile creation.", "Skill management.", "Portfolio showcase and resume support."] },
      { title: "Project Management", points: ["Create and publish projects.", "Project discovery and browsing.", "Advanced filtering options."] },
      { title: "Application System", points: ["Apply for project roles.", "Track application status.", "Accept, reject, or invite candidates."] },
      { title: "Team Workspace", points: ["Real-time team collaboration.", "Task management.", "File sharing and team communication."] },
      { title: "Community Platform", points: ["Community discussions.", "Posts and interactions.", "Networking opportunities."] }
    ],
    workflow: ["Registration & Profile Completion", "Browse Projects & Community", "Apply for Roles", "Founder Review", "Team Formation", "Collaborative Workspace"],
    techStack: [
      { category: "Frontend", details: "React.js, Vite, Responsive SPA" },
      { category: "Backend", details: "Node.js, Express.js, REST API" },
      { category: "Database", details: "MongoDB Atlas, Mongoose ODM" },
      { category: "Real-Time", details: "Socket.io, SSE (Server-Sent Events)" }
    ],
    architecture: [
      { layer: "Presentation", details: "React + Vite Frontend" },
      { layer: "Business Logic", details: "Node.js + Express, REST APIs, JWT" },
      { layer: "Data Layer", details: "MongoDB Atlas, Mongoose Schemas" }
    ],
    achievements: [
      "Built a complete startup team-building ecosystem.",
      "Implemented secure authentication and authorization.",
      "Developed real-time collaboration features.",
      "Created a scalable full-stack architecture.",
      "Enabled project-based networking and team formation.",
      "Integrated community engagement and collaboration tools."
    ]
  },
  {
    id: "printhub",
    title: "PrintHub: Mobile Printing Solution",
    timeline: "2024-2025",
    category: "Mobile Application",
    role: "UI/UX Designer",
    overview: "PrintHub is a mobile-first printing platform designed to simplify the printing process for customers across India. The application enables users to upload documents, customize print options, place orders, and track deliveries through an intuitive and user-friendly interface.",
    problem: "PrintHub's existing mobile application suffered from complex user flows, an outdated interface, and high customer drop-off rates. Users found it difficult to navigate the printing process, leading to frustration and lower sales conversions.",
    solution: "A fully redesigned mobile application built on a scalable Figma component library and design system. Every screen was informed by user journey mapping, and A/B testing of key interactions to ensure measurable usability improvements.",
    impact: "Significantly improved customer engagement, faster task completion, and established a consistent brand identity across all mobile touchpoints.",
    bullets: [
      "Simplified the printing journey from document upload to delivery tracking.",
      "Established a modern design system using Poppins and a custom color palette.",
      "Optimized the mobile experience for faster navigation and better accessibility."
    ],
    link: "#",
    figmaLink: "https://www.figma.com/community/file/1439181928064589138/redesign-printhub",
    thumbnailImage: printhubThumbnail,
    heroImage: printhubHero
  },
  {
    id: "walkeels",
    title: "Walkeels: Business Website",
    timeline: "2023-2024",
    category: "Web Design & Development",
    role: "UI/UX Designer & Frontend Developer",
    overview: "Walkeels is a modern business website designed to establish a strong digital presence through a clean, responsive, and user-focused interface. The project focused on creating an engaging user experience and clear information architecture.",
    problem: "The client required a professional online presence to improve brand visibility, present services clearly, increase engagement, and generate potential leads through a seamless multi-device browsing experience.",
    solution: "A modern one-page website designed with intuitive navigation, strategic content placement, and responsive layouts that effectively communicates the brand's services and values.",
    impact: "Improved user experience, stronger brand presentation, faster and more engaging browsing experience, and a professional digital presence aligned with business goals.",
    bullets: [
      "Developed a high-performance web-page business website with a focus on conversion.",
      "Established a modern visual system with consistent typography, colors, and components.",
      "Implemented mobile-first responsive design ensuring accessibility across all devices."
    ],
    thumbnailImage: walkeelsThumbnail,
    heroImage: walkeelsBanner,
    link: "https://ashwin1245.github.io/walkeels/",
    figmaLink: "https://www.figma.com/community/file/1431637403731775776/walkeels-com"
  }
];

function AppContent() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Determine current page based on pathname
  let currentPage: 'works' | 'about' | 'casestudy' = 'works';
  if (location.pathname === '/about') currentPage = 'about';
  else if (location.pathname.startsWith('/project/')) currentPage = 'casestudy';

  const {
    scrolled,
    isWorksSectionVisible,
    handleWorksClick,
    handleLogoClick
  } = useNavigation(currentPage, setIsMenuOpen);

  return (
    <Layout
      scrolled={scrolled}
      currentPage={currentPage}
      isWorksSectionVisible={isWorksSectionVisible}
      onWorksClick={handleWorksClick}
      onLogoClick={handleLogoClick}
      isMenuOpen={isMenuOpen}
      setIsMenuOpen={setIsMenuOpen}
    >
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <WorksPage projects={projects} />
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <AboutPage />
              </motion.div>
            }
          />
          <Route
            path="/project/:id"
            element={
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <CaseStudyPage />
              </motion.div>
            }
          />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

