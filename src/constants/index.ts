import { NavigationItem, ExecutiveTeamMember, AnalystTeamMember, DeveloperTeamMember } from '@/types';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/sponsors", label: "Sponsors" },
  { href: "/team", label: "Team" },
  { href: "/contact", label: "Contact" },
];

export const TEAM_TYPES = {
  EXECUTIVE: 'executive' as const,
  ANALYST: 'analyst' as const,
  DEVELOPER: 'dev' as const,
} as const;

export const EXECUTIVE_TEAM: ExecutiveTeamMember[] = [
  {
    name: "Sarah Chen",
    role: "Managing Partner",
    experience: "Former Goldman Sachs VP, 15+ years in VC",
    bio: "Sarah leads McGill Ventures with over 15 years of experience in venture capital and investment banking. She has a proven track record of identifying and nurturing high-growth technology companies.",
    education: "MBA Harvard Business School, BS MIT"
  },
  {
    name: "Michael Rodriguez",
    role: "General Partner",
    experience: "Ex-Google Product Lead, Deep Tech Expert",
    bio: "Michael brings extensive product development and deep technology expertise to our portfolio companies. He previously led product teams at Google and has founded two successful startups.",
    education: "MS Stanford Computer Science, BS UC Berkeley"
  },
  {
    name: "Emily Watson",
    role: "Principal",
    experience: "McKinsey Consultant, Growth Strategy Specialist",
    bio: "Emily specializes in growth strategy and operational excellence. Her consulting background at McKinsey & Company provides valuable insights for scaling portfolio companies.",
    education: "MBA Wharton, BA Yale Economics"
  }
];

export const ANALYST_TEAM: AnalystTeamMember[] = [
  {
    name: "Alex Thompson",
    role: "Senior Analyst",
    experience: "Ex-McKinsey, MIT Sloan MBA",
    specialization: "AI & Machine Learning"
  },
  {
    name: "Jessica Park",
    role: "Investment Analyst",
    experience: "Former JPMorgan, CFA",
    specialization: "Fintech & Blockchain"
  },
  {
    name: "David Kumar",
    role: "Research Analyst",
    experience: "Ex-Bain, Stanford MS",
    specialization: "Biotech & Healthcare"
  },
  {
    name: "Maria Santos",
    role: "Junior Analyst",
    experience: "Wharton MBA, BCG",
    specialization: "Clean Technology"
  }
];

export const DEVELOPMENT_TEAM: DeveloperTeamMember[] = [
  {
    name: "Ryan Mitchell",
    role: "Lead Developer",
    experience: "10+ years Full-Stack",
    skills: ["React", "Node.js", "TypeScript", "AWS"],
    bio: "Ryan leads our technical infrastructure and portfolio company tech advisory initiatives."
  },
  {
    name: "Sophie Chen",
    role: "Frontend Developer",
    experience: "5+ years UI/UX Focus",
    skills: ["React", "Next.js", "Design Systems", "Figma"],
    bio: "Sophie creates beautiful, user-centric experiences for our digital platforms."
  },
  {
    name: "Marcus Johnson",
    role: "Backend Developer",
    experience: "8+ years Systems Architecture",
    skills: ["Python", "PostgreSQL", "Docker", "Kubernetes"],
    bio: "Marcus ensures our systems are scalable, secure, and performant."
  }
];

export const HEAD_OF_ENGINEERING: DeveloperTeamMember = {
  name: "Wasif Somji",
  role: "Head of Engineering",
  experience: "Prev @ Amazon, Lightspeed",
  skills: ["System Architecture", "Team Leadership", "DevOps", "AI/ML", "Scaling"],
  bio: "Wasif oversees all technical initiatives and leads our engineering strategy for portfolio company support and internal platform development.",
  image: "/headshots/development/wsomji.jpeg"
};

export const ANIMATION_CLASSES = {
  FADE_IN_UP: 'animate-fade-in-up',
  FADE_IN_LEFT: 'animate-fade-in-left',
  SLIDE_IN_RIGHT: 'animate-slide-in-right',
  HOVER_SCALE: 'hover-scale',
} as const;

export const COMMON_STYLES = {
  GLASS: 'glass',
  GRADIENT_HERO: 'bg-gradient-hero',
  GRADIENT_RADIAL: 'bg-gradient-radial',
  FONT_DISPLAY: 'font-display',
  FONT_HEADING: 'font-heading',
  FONT_BODY: 'font-body',
} as const;

export const COLORS = {
  PRIMARY: {
    50: 'purple-50',
    100: 'purple-100',
    200: 'purple-200',
    300: 'purple-300',
    400: 'purple-400',
    500: 'purple-500',
    600: 'purple-600',
    700: 'purple-700',
    800: 'purple-800',
    900: 'purple-900',
    950: 'purple-950',
  },
  WHITE: 'white',
  TRANSPARENT: 'transparent',
} as const;