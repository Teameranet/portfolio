export interface Project {
  id: string;
  title: string;
  timeline: string;
  bullets: string[];
  link: string;
  figmaLink?: string;
  thumbnailImage: string;
  heroImage: string;
  category: string;
  role: string;
  overview: string;
  problem: string;
  solution: string;
  impact: string;
  // Optional detailed fields for specific case studies
  targetUsers?: { title: string; points: string[] }[];
  coreFeatures?: { title: string; points: string[] }[];
  workflow?: string[];
  techStack?: { category: string; details: string }[];
  architecture?: { layer: string; details: string }[];
  achievements?: string[];
}

export interface PreviousWork {
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface Education {
  degree: string;
  school: string;
  period: string;
  details: string[];
}

export interface SkillCategory {
  title: string;
  skills: string[];
}
