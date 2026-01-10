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
    education: "BCom Honours in Investment Management, McGill University"
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
    name: "Alexis Hamam",
    image: "/headshots/exec/alexis_hamam.jpg", 
    role: "Founder & IC (Fund)",
    experience: "Prev @ EY M&A, Boreal Ventures",
    bio: "Let me know if I need to do this.",
    education: ""
  },
  {
    name: "Alhaan Haris",
    role: "Fund Principal",
    image: "/headshots/exec/alhaan_haris.jpg",
    bio: "",
    education: "",
  },
  {
    name: "Noah Vaillancourt",
    role: "Fund Principal",
    image: "/headshots/exec/noah_vaillancourt.jpg",
    bio: "",
    education: "BEng Software Engineering, McGill University",
  },
  {
    name: "Urfaan Sadid",
    role: "Fund Program Manager",
    experience: "Prev @ Richardson Wealth, Wyld VC",
    image: "/headshots/exec/urfaan_sadid.jpg",
    bio: "",
    education: "BCom Joint Honours Economics + Finance, McGill University",
  },
  {
    name: "Christine Wu",
    image: "/headshots/exec/christine_wu.jpg",
    role: "Chief of Staff",
    bio: "",
    education: "BCom Finance + Entrepreneurship, McGill University"
  },  
  {
    name: "Clara Caden",
    image: "/headshots/exec/clara_caden.png",
    role: "Corporate Relations Associate",
    experience: "Prev @ Fondaction, Meroka",
    bio: "",
    education: "BCom Finance + CS"
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
    education: "BCom Honours Joint Component Economics + Accounting, McGill University"
  }, 
  {
    name: "Riya Jain",
    image: "/headshots/exec/riya.jpeg",
    role: "Events Associate",
    experience: "",
    bio: "",
    education: "BCom Economics + International Development Studies, McGill University"
  },   
  {
    name: "Coco Meng",
    image: "/headshots/exec/coco.jpeg",
    role: "Events Associate",
    experience: "",
    bio: "",
    education: "Bsc Pharmacology + Therapeutics, McGill University"
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
    education: "BCom Entrepreneurship + Finance, McGill University"
  },
  {
    name: "Alexandre Comtois",
    image: "/headshots/exec/alexandre_comtois_headshot.jpg",
    role: "Fund Manager",
    experience: "",
    bio: "",
    education: "Honours Investment Management, McGill University"
  },
  {
    name: "Oscar Ham",
    image: "/headshots/exec/oscar_ham_headshot.jpg",
    role: "Fund Principal",
    experience: "Prev @ KPMG",
    bio: "",
    education: "BEng Electrical Engineering, McGill University",
  },
  {
    name: "Gael Gonzàlez",
    image: "/headshots/exec/gael_huacuja_headshot.jpg",
    role: "Program Manager - Venture Advisory and Fund Principal",
    experience: "Prev @ Attain",
    bio: "",
    education: "BComm Finance + Strategic Management, McGill University"
  },
  {
    name: "Chris Robinson",
    image: "/headshots/exec/chris_robinson_headshot.jpg",
    role: "Director of Finance",
    experience: "Prev @ HSBC",
    bio: "",
    education: "Joint Honours Economics + Finance, McGill University"
  },
  {
    name: "Orion Pirang",
    image: "/headshots/exec/orion_pirang_headshot.jpg",
    role: "Finance Associate/ Analyst",
    experience: "Prev @ PwC, Desato",
    bio: "",
    education: "BComm Finance, McGill University"
  },
  {
    name: "Celine Chung",
    image: "/headshots/exec/celine_chung_headshot.jpg",
    role: "Fund Principal and Corporate Relations",
    experience: "",
    bio: "",
    education: "BComm International Management, McGill University"
  },
  {
    name: "Ronardy Abellard",
    image: "/headshots/exec/ronardy_abellard.png",
    role: "Event Associate & Junior Analyst",
    experience: "",
    bio: "",
    education: "BEng Material Engineering, McGill University"
  },
  {
    name: "Nicole Zeng",
    image: "/headshots/exec/nicole_zeng.jpg", 
    role: "Executive Assistant",
    experience: "",
    bio: "",
    education: "BCom Management, McGill University"
  },
  {
    name: "Aditya Ranjan",
    image: "/headshots/exec/aditya_ranjan.jpg", // TODO
    role: "Corporate Relations Associate",
    experience: "Prev @ SickKids",
    bio: "",
    education: "Bsc Biomedical Sciences, McGill University"
  },
  {
    name: "Canyu Wu",
    image: "/headshots/exec/canyu_wu.png", // TODO
    role: "Director of Partnerships",
    experience: "",
    bio: "I also run the HTIL, foster partnerships with leading VC’s and Startups organizations of Montreal.",
    education: "BEng Bioengineering, McGill University"
  },
  {
    name: "Zara Berholz",
    image: "/headshots/exec/zara_beholz.JPG",
    role: "Marketing Associate",
    experience: "",
    bio: "",
    education: "BCom Finance + Strategic Management, McGill University"
  },
  {
    name: "Annie Mingru Yang",
    image: "/headshots/exec/annie_yang.jpeg",
    role: "Events Associate",
    experience: "Incoming @ EY, Prev @ Pharmascience, TD Canada Trust",
    bio: "",
    education: "BCom Finance, McGill University"
  },
  {
    name: "Ava Mckee",
    role: "Analyst Program Manager & Fund Principal",
    image: "/headshots/exec/ava_mckee.png",
    bio: "",
    education: "BCom Finance, McGill University",
  },
];

export const ANALYST_TEAM: AnalystTeamMember[] = [
  {
    name: "Nikola Lee",
    role: "Analyst Program Manager",
    specialization: "Venture Advisory",
    education: "BCom Finance + Entrepreneurship",
    image: "/headshots/analyst/nikola_lee.jpg"
  },
  {
    name: "Elisabeth Scodigor",
    role: "Analyst Program Manager",
    education: "BCom Ops Mgmt + Business Analytics + Strategy",
    image: "/headshots/analyst/elisabeth_scodigor.jpg"
  },
  {
    name: "Clive Raza",
    role: "Analyst",
    education: "BCom Economics",
    image: "/headshots/analyst/clive_raza.jpeg"
  },
  {
    name: "Chris Chan",
    role: "Junior Analyst",
    experience: "Prev @ Manulife Wealth Management",
    education: "BCom Management",
    image: "/headshots/analyst/chris_chan.jpg"
  },
  {
    name: "Joey Marsh",
    role: "Analyst",
    education: "BCom Finance",
    image: "/headshots/analyst/joey_marsh.jpg"
  },
  {
    name: "Paul Lagrue",
    role: "Junior Analyst",
    education: "BCom Finance",
    image: "/headshots/analyst/paul_lagrue.jpeg"
  },
  {
    name: "Brit Meisels",
    role: "Analyst",
    education: "BA Political Science",
    image: "/headshots/analyst/brit_meisels.jpeg"
  },
  {
    name: "Harsh Bokadia",
    role: "Analyst",
    specialization: "Flagship Analyst Program",
    experience: "Prev @ Nuvama Health",
    education: "BA Economics + Social Entrepreneurship",
    image: "/headshots/analyst/harsh_bokadia.jpg"
  },
  {
    name: "Anthony Melki",
    role: "Analyst",
    education: "BEng Mechanical Engineering",
    image: "/headshots/analyst/anthony_melki.jpg"
  },
  {
    name: "Kristen Alexander Tran",
    role: "Analyst",
    experience: "Co-founder @ Astrid",
    education: "BSc Cognitive Science",
    image: "/headshots/analyst/kristen_tran.jpg"
  },
  {
    name: "Laetitia Fleurent",
    role: "Analyst",
    experience: "Prev @ Moment Factory",
    education: "BCom Finance",
    image: "/headshots/analyst/laetitia_fleurent.jpg"
  },
  {
    name: "Iuliana Arhire",
    role: "Analyst",
    education: "BCom Finance",
    image: "/headshots/analyst/iuliana_arhire.jpeg"
  },
  {
    name: "Sophia Mahiout",
    role: "Analyst",
    education: "BSc Microbiology + Immunology",
    image: "/headshots/analyst/sophia_mahiout.jpeg"
  },
  {
    name: "Guillaume Bouramia",
    role: "Analyst",
    education: "BSc Biochemistry + Entrepreneurship",
    image: "/headshots/analyst/guillaume_bouramia.jpg"
  },
  {
    name: "Emiko McLean",
    role: "Analyst",
    education: "MSc Surgical + Interventional Sciences",
    image: "/headshots/analyst/emiko_mclean.jpg"
  },
  {
    name: "Jaden Lee",
    role: "Analyst",
    specialization: "Finance Associate",
    education: "BCom Finance",
    image: "/headshots/analyst/jaden_lee.jpg"
  },
  {
    name: "Yueran Lu",
    role: "Analyst",
    experience: "Prev @ LIDD",
    education: "BEng Computer Engineering",
    image: "/headshots/analyst/yueran_lu.jpg"
  },
  {
    name: "David Li",
    role: "Analyst",
    experience: "Prev @ L’Oréal",
    education: "BSc Computer Science + Economics",
    image: "/headshots/analyst/david_li.jpeg"
  }
];


export const HEAD_OF_ENGINEERING: DeveloperTeamMember = {
  name: "Wasif Somji",
  role: "Head of Engineering",
  experience: "Prev @ Amazon, Lightspeed",
  education: "BEng Computer Engineering, McGill University",
  skills: ["System Architecture", "Team Leadership", "Software Development", "Product Management", "Scalability"],
  bio: "Wasif oversees all technical initiatives and leads our engineering strategy for internal software development practices.",
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
  },
  {
    name: "Bill Huynh-Lu",
    education: "BEng Software Engineering, McGill University",
    image: "/headshots/development/bill_huynh-lu.png",
    role: "Junior Developer",
  },
  {
    name: "Ayaan Rayani",
    education: "Bsc Computer Science & Economics, McGill University",
    image: "/headshots/development/ayaan_rayani_headshot.jpeg",
    role: "Junior Developer",
  },
  {
    name: "Aditi Potnis",
    education: "Bsc Computer Science, McGill University",
    image: "/headshots/development/aditi_potnis_headshot.jpg",
    role: "Junior Developer",
  },
  {
    name: "Michael Lukas",
    education: "BCom Business Analytics, McGill University",
    image: "/headshots/development/michael_lukas_headshot.JPG",
    role: "Junior Developer",
  },
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