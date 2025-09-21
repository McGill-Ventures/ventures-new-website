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

import jHum from "../../public/headshots/development/jaden_hum_headshot.jpg";
import jHeng from "../../public/headshots/development/julien_heng_headshot.jpg";

export const DEVELOPMENT_TEAM: DeveloperTeamMember[] = [
  {
    name: "Julien Heng",
    image: "/headshots/development/julien_heng_headshot.jpg",
    role: "Senior Software Developer",
    skills: ["Next.js", "TypeScript", "Tailwind CSS"],
    bio: ""
  },
  {
    name: "Jaden Hum",
    image: "/headshots/development/jaden_hum_headshot.jpg",
    role: "Senior Frontend Developer",
    skills: ["Next.js", "Typescript","Tailwind CSS"],
    bio: ""
  },
  {
    name: "Noah Chen",
    image: "/headshots/development/noah_chen_headshot.jpeg",
    role: "Intermediate Developer",
    skills: ["React.js, TypeScript, SCSS"],
    bio: ""
  }
];

export const HEAD_OF_ENGINEERING: DeveloperTeamMember = {
  name: "Wasif Somji",
  role: "Head of Engineering",
  experience: "Prev @ Amazon, Lightspeed",
  skills: ["System Architecture", "Team Leadership", "DevOps", "AI/ML", "Scaling"],
  bio: "Wasif oversees all technical initiatives and leads our engineering strategy for internal and external software development practices.",
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

// Sponsor data for better performance and consistency
export const SPONSOR_DATA = {
  platinum: [
    {
      name: "McKinsey & Company",
      type: "Management Consulting",
      description: "Global management consulting firm supporting our strategic initiatives and providing mentorship opportunities.",
      benefits: ["Executive mentorship", "Case study workshops", "Internship opportunities"],
      logo: "🏢"
    },
    {
      name: "Desjardins Capital",
      type: "Venture Capital",
      description: "Leading Quebec venture capital firm providing funding expertise and startup ecosystem insights.",
      benefits: ["VC training sessions", "Deal flow analysis", "Networking events"],
      logo: "💼"
    }
  ],
  gold: [
    {
      name: "BDC Capital",
      type: "Development Bank",
      description: "Canada's development bank supporting entrepreneurs and providing venture capital expertise.",
      logo: "🏦"
    },
    {
      name: "Real Ventures",
      type: "Venture Capital",
      description: "Montreal-based VC firm specializing in early-stage technology companies.",
      logo: "🚀"
    },
    {
      name: "Investissement Québec",
      type: "Government Agency",
      description: "Quebec's investment agency supporting innovation and entrepreneurship in the province.",
      logo: "🌟"
    }
  ],
  silver: [
    { name: "Startupfest", logo: "🎪" },
    { name: "Montreal NewTech", logo: "💻" },
    { name: "Centech", logo: "🔬" },
    { name: "District 3", logo: "🏢" },
    { name: "CCMM", logo: "🤝" },
    { name: "Techstars", logo: "⭐" },
    { name: "DMZ", logo: "🎯" },
    { name: "FounderFuel", logo: "⚡" }
  ]
} as const;

// Program data
export const PROGRAM_DATA = [
  {
    title: "Analyst Program",
    description: "A comprehensive program covering fundamentals of venture capital, deal sourcing, due diligence, and portfolio management.",
    features: [
      "Weekly workshops with industry professionals",
      "Case study analysis and pitch competitions", 
      "Mentorship from experienced VCs",
      "Networking events with startup founders"
    ],
    duration: "16 weeks",
    commitment: "4-6 hours/week",
    status: "Applications re-open Winter 2026"
  },
  {
    title: "Development Program",
    description: "A software development program focused on building technical skills and gaining real-world experience in frontend development.",
    features: [
      "Frontend development training",
      "Tech portfolio project assignments",
      "Tech mentorship sessions",
      "Portfolio building workshops"
    ],
    duration: "12 weeks", 
    commitment: "6-8 hours/week",
    status: "Applications re-open Spring 2026"
  }
] as const;

// Educational initiatives
export const EDUCATIONAL_INITIATIVES = [
  {
    title: "Guest Speaker Series",
    description: "Monthly talks featuring successful entrepreneurs, VCs, and industry leaders sharing insights and experiences.",
    icon: "users"
  },
  {
    title: "Pitch Competitions",
    description: "Regular competitions where students present their startup ideas to panels of experienced judges for feedback and prizes.",
    icon: "star"
  },
  {
    title: "Workshops & Bootcamps", 
    description: "Hands-on learning sessions covering topics like financial modeling, market analysis, and startup fundamentals.",
    icon: "book"
  }
] as const;

// Partnership benefits
export const PARTNERSHIP_BENEFITS = [
  {
    icon: "users",
    title: "Talent Access",
    description: "Connect with McGill's brightest students across business, engineering, and science programs for internships and full-time opportunities."
  },
  {
    icon: "lightning",
    title: "Innovation Pipeline", 
    description: "Early access to innovative student startups and breakthrough technologies emerging from McGill's entrepreneurship ecosystem."
  },
  {
    icon: "message",
    title: "Brand Visibility",
    description: "Showcase your organization to Montreal's entrepreneurial community through events, workshops, and digital presence."
  }
] as const;

// Application process steps
export const APPLICATION_STEPS = [
  {
    step: "01",
    title: "Submit Application",
    description: "Complete our online application form with your background and interests"
  },
  {
    step: "02",
    title: "Interview Process", 
    description: "Participate in a brief interview to discuss your goals and passion for entrepreneurship"
  },
  {
    step: "03",
    title: "Welcome & Onboarding",
    description: "Join our community and begin your journey in venture capital and startups"
  }
] as const;

// Statistics for home page
export const HOME_STATS = [
  { value: "1.7K+", label: "Instagram Followers" },
  { value: "3rd", label: "Largest Club in Desautels Faculty of Management" },
  { value: "70+", label: "Club Members" }
] as const;