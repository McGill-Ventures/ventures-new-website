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
    name: "Ethan Wu",
    image: "/headshots/exec/ewu.jpeg",
    role: "Co-President",
    experience: "Prev @ CIBC Capital Markets, CDPQ",
    bio: "Ethan co-leads the overall strategic direction of McGill Ventures, overseeing club operations, partnerships, and program development.",
    education: "B.Comm Honours in Investment Management, McGill University"
  },
  {
    name: "Charlyne Luu",
    image: "/headshots/exec/clu.jpeg",
    role: "Co-President",
    experience: "Prev @ Angel Host",
    bio: "Charlyne co-leads McGill Ventures, focusing on community engagement, event management, and fostering relationships within the startup ecosystem.",
    education: "BCom Finance, McGill University"
  },  
  {
    name: "Xin Yu Zhang",
    image: "/headshots/exec/xin.jpeg",
    role: "Co-Director of Events",
    experience: "Prev @ Royal Lepage Real Estate, Headstart Global",
    bio: "",
    education: "BCom Finance, McGill University"
  },
  {
    name: "Aya Cherkaoui",
    image: "/headshots/exec/aya.JPG",
    role: "Co-Director of Events",
    experience: "Prev @ EY",
    bio: "",
    education: "BCom Economics & Business Analytics, McGill University"
  }, 
  {
    name: "Kelly Yan",
    image: "/headshots/exec/kelly.JPG",
    role: "Events Associate",
    experience: "",
    bio: "",
    education: "BCom Honours Joint Component Economics and Accounting, McGill University"
  }, 
  {
    name: "Riya Jain",
    image: "/headshots/exec/riya.jpeg",
    role: "Events Associate",
    experience: "",
    bio: "",
    education: "BCom Economics and International Development Studies, McGill University"
  },   
  {
    name: "Coco Meng",
    image: "/headshots/exec/coco.jpeg",
    role: "Events Associate",
    experience: "",
    bio: "",
    education: ""
  },
  {
    name: "Thai Tran",
    image: "/headshots/exec/thai.jpg",
    role: "Events Associate",
    experience: "",
    bio: "",
    education: "BEng Computer Engineering, McGill University"
  },
  {
    name: "Lola Julliand",
    image: "/headshots/exec/lola.jpg",
    role: "Ambassador of Events",
    experience: "",
    bio: "",
    education: "BCom, McGill University"
  },
  
];

export const ANALYST_TEAM: AnalystTeamMember[] = [
  
];

export const HEAD_OF_ENGINEERING: DeveloperTeamMember = {
  name: "Wasif Somji",
  role: "Head of Engineering",
  experience: "Prev @ Amazon, Lightspeed",
  education: "BEng Computer Engineering, McGill University",
  skills: ["System Architecture", "Team Leadership", "Software Development", "Product Management", "Scalability"],
  bio: "Wasif oversees all technical initiatives and leads our engineering strategy for internal and external software development practices.",
  image: "/headshots/development/wsomji.jpeg"
};

export const DEVELOPMENT_TEAM: DeveloperTeamMember[] = [
  {
    name: "Julien Heng",
    image: "/headshots/development/julien_heng_headshot.jpg",
    education: "BEng Software Engineering, McGill University",
    experience: "Prev @ Opella",
    role: "Senior Software Developer",
    skills: ["Next.js", "TypeScript", "Tailwind CSS"],
    bio: ""
  },
  {
    name: "Jaden Hum",
    image: "/headshots/development/jaden_hum_headshot.jpg",
    education: "BSc Software Engineering, McGill University",
    experience: "Prev @ UKG, Amelia",
    role: "Senior Frontend Developer",
    skills: ["Next.js", "Typescript","Tailwind CSS"],
    bio: ""
  },
  {
    name: "Noah Chen",
    image: "/headshots/development/noah_chen_headshot.jpeg",
    education: "BA Computer Science + Management, McGill University",
    experience: "Prev @ Industrial Securities, G-bits",
    role: "Intermediate Developer",
    skills: ["React.js", "TypeScript", "SCSS"],
    bio: ""
  }
];

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
    commitment: "2-4 hours/week",
    status: "Applications re-open Spring 2026"
  }
] as const;

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

export const APPLICATION_STEPS = [
  {
    step: "01",
    title: "Submit Application",
    description: "Complete our online application form with your background, interests, and goals"
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
export const HOME_STATS = [
  { value: "2K+", label: "LinkedIn Followers" },
  { value: "1.7K+", label: "Instagram Followers" },
  { value: "3rd", label: "Largest Club in Desautels Faculty of Management" },
  { value: "70+", label: "Club Members" }
] as const;