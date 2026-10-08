import type { Team, TeamMember } from '@/types';

export const FOUNDERS = [
  { name: "Aaron Anandji", role: "Co-Founder", image: "/headshots/team/aaron_anandji.png", linkedinUrl: "https://www.linkedin.com/in/aaron-anandji/" },
  { name: "Hyeonwoo (\"Woo\") Park", role: "Co-Founder", image: "/headshots/team/hyeonwoo_park.png", linkedinUrl: "https://www.linkedin.com/in/woo-park1/" },
  { name: "Zacharie Faucillion", role: "Co-Founder", image: "/headshots/team/zacharie_faucillion.jpg", linkedinUrl: "https://www.linkedin.com/in/zfaucillion/" },
] satisfies TeamMember[];

/** The /team page, from the 2026-27 "Core Team" and "Program Teams" sheets. People on two
 *  teams appear on both, each time with only that team's title. `id` is the section anchor. */
export const TEAMS: Team[] = [
  {
    id: "core",
    name: "Core Team",
    groups: [
      {
        title: "Executive",
        members: [
          { name: "Gael González", role: "President", image: "/headshots/team/gael_gonzalez.jpg", linkedinUrl: "https://www.linkedin.com/in/gaelhgonzalez/" },
          { name: "Guillaume Bouramia", role: "Chief of Staff", image: "/headshots/team/guillaume_bouramia.jpg", linkedinUrl: "https://www.linkedin.com/in/guillaume-bouramia/" },
          { name: "Lola Julliand", role: "Executive Assistant", image: "/headshots/team/lola_julliand.jpg", linkedinUrl: "https://www.linkedin.com/in/lola-julliand-955706329" },
        ],
      },
      {
        title: "Corporate Relations",
        members: [
          { name: "Iuliana Arhire", role: "Sponsorships Director", image: "/headshots/team/iuliana_arhire.jpg", linkedinUrl: "https://www.linkedin.com/in/iuliana-arhire-657481306/" },
          { name: "Sami Mollick", role: "Associate", image: "/headshots/team/sami_mollick.jpg", linkedinUrl: "https://www.linkedin.com/in/sami-mollick/" },
          { name: "Aaron Menezes", role: "Associate", image: "/headshots/team/aaron_menezes.jpg", linkedinUrl: "https://www.linkedin.com/in/aaron-menezes-1b18b5369/" },
          { name: "Kenza Rtelbennani", role: "Associate", image: "/headshots/team/kenza_rtelbennani.jpg", linkedinUrl: "https://www.linkedin.com/in/kenza-rtel-bennani-18734728b" },
        ],
      },
      {
        title: "Events",
        members: [
          { name: "Delfina Lian Guan", role: "Co-Director", image: "/headshots/team/delfina_lian_guan.jpg", linkedinUrl: "https://www.linkedin.com/in/delfina-lian-guan/" },
          { name: "Belinda Song Guan", role: "Co-Director", image: "/headshots/team/belinda_song_guan.jpg", linkedinUrl: "https://www.linkedin.com/in/belinda-song-guan/" },
          { name: "Léa He", role: "Associate", image: "/headshots/team/lea_he.jpg", linkedinUrl: "https://www.linkedin.com/in/l%C3%A9a-he-667802384/" },
          { name: "Nicole Zeng", role: "Associate", image: "/headshots/team/nicole_zeng.jpg", linkedinUrl: "https://www.linkedin.com/in/nicole-r-zeng/" },
          { name: "Tina Huan", role: "Associate", image: "/headshots/team/tina_huan.jpg", linkedinUrl: "https://www.linkedin.com/in/tinahuan/" },
          { name: "Matteo Seifarth", role: "Associate", image: "/headshots/team/matteo_seifarth.jpg", linkedinUrl: "https://www.linkedin.com/in/matteoseifarth/" },
          { name: "Gaspard Martyn", role: "Associate", image: "/headshots/team/gaspard_martyn.jpg", linkedinUrl: "https://www.linkedin.com/in/gaspard-martyn" },
          { name: "Rudy Tannous", role: "Associate", image: "/headshots/team/rudy_tannous.jpg", linkedinUrl: "https://www.linkedin.com/in/rudy-tannous" },
        ],
      },
      {
        title: "Finance",
        members: [
          { name: "Chris Robinson", role: "Co-Director", image: "/headshots/team/chris_robinson.jpg", linkedinUrl: "https://www.linkedin.com/in/chris-robinson-682783299" },
          { name: "Orion Pirang", role: "Co-Director", image: "/headshots/team/orion_pirang.jpg", linkedinUrl: "https://www.linkedin.com/in/orion-pirang-272b5035b" },
        ],
      },
      {
        title: "Marketing",
        members: [
          { name: "Makena Rivard", role: "Director", image: "/headshots/team/makena_rivard.jpg", linkedinUrl: "https://www.linkedin.com/in/makena-rivard/" },
          { name: "Zara Berholz", role: "Director", image: "/headshots/team/zara_berholz.jpg", linkedinUrl: "https://www.linkedin.com/in/zara-berholz/" },
          { name: "Alexandra Jorgensen", role: "Associate", image: "/headshots/team/alexandra_jorgensen.jpg", linkedinUrl: "https://www.linkedin.com/in/alexandra-jorgensen-torress/" },
          { name: "Chaerin Song", role: "Associate", image: "/headshots/team/chaerin_song.jpg", linkedinUrl: "https://www.linkedin.com/in/chaerin-song" },
          { name: "Isabelle Kondo", role: "Associate", image: "/headshots/team/isabelle_kondo.jpg", linkedinUrl: "https://www.linkedin.com/in/isabelle-kondo-724482307/" },
        ],
      },
      {
        title: "Production",
        members: [
          { name: "Kevin Sun", role: "Creative Director", image: "/headshots/team/kevin_sun.jpg", linkedinUrl: "https://www.linkedin.com/in/kevin-sun-938aa0223/" },
          { name: "Anjanette Zhao", role: "Production Associate", image: "/headshots/team/anjanette_zhao.jpg", linkedinUrl: "https://www.linkedin.com/in/anjanettezhao/" },
        ],
      },
    ],
  },
  {
    id: "analysts",
    name: "Analyst Program",
    groups: [
      {
        title: "Program Managers",
        members: [
          { name: "David Li", role: "Program Manager", image: "/headshots/team/david_li.jpg", linkedinUrl: "https://www.linkedin.com/in/david-li-3588b81b2/" },
          { name: "Chris Chan", role: "Program Manager", image: "/headshots/team/chris_chan.png", linkedinUrl: "https://www.linkedin.com/in/chris-chan-grad2028/" },
          { name: "Joey Marsh", role: "Program Manager", image: "/headshots/team/joey_marsh.jpg", linkedinUrl: "https://www.linkedin.com/in/joey-marsh-680aa2358/" },
        ],
      },
      {
        title: "Analysts",
        members: [
          { name: "Enzo Chaoui", role: "Analyst", image: "/headshots/team/enzo_chaoui.jpg", linkedinUrl: "https://www.linkedin.com/in/enzochaoui/" },
          { name: "David Manzano", role: "Analyst", linkedinUrl: "https://www.linkedin.com/in/david-manzano-364156383" },
          { name: "Lucas Lipton", role: "Analyst", linkedinUrl: "https://www.linkedin.com/in/lucas-lipton/" },
          { name: "Nabil Muzafar Shah", role: "Analyst", image: "/headshots/team/nabil_muzafar_shah.jpg", linkedinUrl: "https://www.linkedin.com/in/nabilmus/" },
          { name: "Sydney Murray", role: "Analyst", linkedinUrl: "https://www.linkedin.com/in/sydney-murray-9a31b6339/" },
          { name: "Adrit Panda", role: "Analyst", image: "/headshots/team/adrit_panda.jpg", linkedinUrl: "https://www.linkedin.com/in/adrit-panda" },
          { name: "Nicolas Lavigne", role: "Analyst", image: "/headshots/team/nicolas_lavigne.jpg", linkedinUrl: "https://www.linkedin.com/in/nicolas-lavigne-7825ba355" },
          { name: "Danielle Sugarman", role: "Analyst", linkedinUrl: "https://www.linkedin.com/in/danielle-sugarman-aa2b9922a" },
          { name: "Krish Sakhrani", role: "Analyst", linkedinUrl: "https://www.linkedin.com/in/krish-sakhrani-82b5832a6" },
          { name: "Ethan S. Cohen", role: "Analyst", image: "/headshots/team/ethan_s_cohen.jpg", linkedinUrl: "https://www.linkedin.com/in/ethanscohen" },
          { name: "Eduard Anton", role: "Analyst", image: "/headshots/team/eduard_anton.jpg", linkedinUrl: "https://www.linkedin.com/in/eduard-anton/" },
          { name: "Kayla Khavari", role: "Analyst", image: "/headshots/team/kayla_khavari.jpg", linkedinUrl: "https://www.linkedin.com/in/kaylakhavari" },
          { name: "Kenza Rtelbennani", role: "Analyst", image: "/headshots/team/kenza_rtelbennani.jpg", linkedinUrl: "https://www.linkedin.com/in/kenza-rtel-bennani-18734728b" },
          { name: "Ilia Ahyaei", role: "Analyst", image: "/headshots/team/ilia_ahyaei.jpg", linkedinUrl: "https://www.linkedin.com/in/ilia-ahyaei-mcgill2025/" },
          { name: "James Pitman", role: "Analyst", image: "/headshots/team/james_pitman.jpg", linkedinUrl: "https://www.linkedin.com/in/james-pitman06" },
          { name: "Domitille Vallee", role: "Analyst", image: "/headshots/team/domitille_vallee.jpg", linkedinUrl: "https://www.linkedin.com/in/domitillevallee" },
          { name: "Shira David", role: "Analyst" },
          { name: "Chengyi Qu", role: "Analyst", image: "/headshots/team/chengyi_qu.jpg", linkedinUrl: "https://www.linkedin.com/in/chengyi-qu-360110424/" },
          { name: "Eric Li", role: "Analyst", image: "/headshots/team/eric_li.jpg", linkedinUrl: "https://www.linkedin.com/in/eric-li-314625277/" },
          { name: "Belinda Song Guan", role: "Analyst", image: "/headshots/team/belinda_song_guan.jpg", linkedinUrl: "https://www.linkedin.com/in/belinda-song-guan/" },
          { name: "Maximilien Lecerf", role: "Analyst", image: "/headshots/team/maximilien_lecerf.jpg", linkedinUrl: "https://www.linkedin.com/in/max-lecerf/" },
          { name: "Jordan Singer", role: "Analyst", image: "/headshots/team/jordan_singer.jpg", linkedinUrl: "https://www.linkedin.com/in/jordan-singer-857438369" },
          { name: "Luis De la Melena", role: "Analyst", image: "/headshots/team/luis_de_la_melena.jpg", linkedinUrl: "https://www.linkedin.com/in/luis-de-la-melena" },
          { name: "Luca Paone", role: "Analyst", image: "/headshots/team/luca_paone.jpg", linkedinUrl: "https://www.linkedin.com/in/luca-paone/" },
          { name: "Reuven Schuster", role: "Analyst", linkedinUrl: "https://www.linkedin.com/in/reuven-schuster-71b688312/" },
        ],
      },
    ],
  },
  {
    id: "fund",
    name: "Ventures Fund",
    groups: [
      {
        members: [
          { name: "Alexandre Comtois", role: "Fund Manager", image: "/headshots/team/alexandre_comtois.jpg", linkedinUrl: "https://www.linkedin.com/in/alexandre-comtois/" },
          { name: "Urfaan Sadid", role: "Fund Manager", image: "/headshots/team/urfaan_sadid.jpg", linkedinUrl: "https://www.linkedin.com/in/urfaan-sadid/" },
          { name: "Oscar Ham", role: "Fund Manager", image: "/headshots/team/oscar_ham.jpg", linkedinUrl: "https://www.linkedin.com/in/oscarham/" },
          { name: "Noah Vaillancourt", role: "Principal", image: "/headshots/team/noah_vaillancourt.jpg", linkedinUrl: "https://www.linkedin.com/in/noahvaillancourt/" },
          { name: "Yueran Lu", role: "Analyst", image: "/headshots/team/yueran_lu.jpg", linkedinUrl: "https://www.linkedin.com/in/yueranlu05/" },
          { name: "Jaden Lee", role: "Analyst", image: "/headshots/team/jaden_lee.jpg", linkedinUrl: "https://www.linkedin.com/in/jaden-tklee/" },
          { name: "Guillaume Bouramia", role: "Analyst", image: "/headshots/team/guillaume_bouramia.jpg", linkedinUrl: "https://www.linkedin.com/in/guillaume-bouramia/" },
          { name: "Nicholas Mandalenakis", role: "Analyst", image: "/headshots/team/nicholas_mandalenakis.jpg", linkedinUrl: "https://www.linkedin.com/in/nicholas-mandalenakis-989a2a2b9/" },
          { name: "Theodore Popa", role: "Analyst", image: "/headshots/team/theodore_popa.jpg", linkedinUrl: "https://www.linkedin.com/in/theodore-popa-124a95348" },
        ],
      },
    ],
  },
  {
    id: "growth-studio",
    name: "Growth Studio",
    groups: [
      {
        members: [
          { name: "Emiko McLean", role: "Director", image: "/headshots/team/emiko_mclean.jpg", linkedinUrl: "https://www.linkedin.com/in/emiko-mclean/" },
          { name: "Anthony Melki", role: "Director", image: "/headshots/team/anthony_melki.jpg", linkedinUrl: "https://www.linkedin.com/in/anthony-melki-947841252/" },
          { name: "Sophia Mahiout", role: "Director", image: "/headshots/team/sophia_mahiout.jpg", linkedinUrl: "https://www.linkedin.com/in/sophia-mahiout-153785354/" },
          { name: "Joey Marsh", role: "Senior Consultant", image: "/headshots/team/joey_marsh.jpg", linkedinUrl: "https://www.linkedin.com/in/joey-marsh-680aa2358/" },
          { name: "Max Hauser", role: "Consultant", image: "/headshots/team/max_hauser.jpg", linkedinUrl: "https://www.linkedin.com/in/maxwvhauser/" },
          { name: "Delfina Lian Guan", role: "Consultant", image: "/headshots/team/delfina_lian_guan.jpg", linkedinUrl: "https://www.linkedin.com/in/delfina-lian-guan/" },
        ],
      },
    ],
  },
  {
    id: "htil",
    name: "Health Tech & Innovation Lab",
    groups: [
      {
        members: [
          { name: "William Prato-Deriet", role: "Program Leader", image: "/headshots/team/william_prato_deriet.jpg", linkedinUrl: "https://www.linkedin.com/in/williampratoderiet/" },
          { name: "Justin Kashi", role: "Program Manager", image: "/headshots/team/justin_kashi.jpg", linkedinUrl: "https://www.linkedin.com/in/justin-kashi/" },
          { name: "Yanchen Dong", role: "Program Manager", image: "/headshots/team/yanchen_dong.jpg", linkedinUrl: "https://www.linkedin.com/in/yanchen-dong/" },
          { name: "Louis Landreau", role: "Program Manager", image: "/headshots/team/louis_landreau.jpg", linkedinUrl: "https://www.linkedin.com/in/louis-landreau/" },
          { name: "Georgio Gholam", role: "Program Manager", image: "/headshots/team/georgio_gholam.jpg", linkedinUrl: "https://www.linkedin.com/in/georgio-gholam-113abb272/" },
          { name: "William Callaghan", role: "Program Manager" },
          { name: "Tomás Bruschi Ferreira", role: "Program Manager", image: "/headshots/team/tomas_bruschi_ferreira.jpg", linkedinUrl: "https://www.linkedin.com/in/tomasbf" },
        ],
      },
    ],
  },
  {
    id: "development",
    name: "Development Team",
    groups: [
      {
        members: [
          { name: "Michael Lukas", role: "Co-Lead Developer", image: "/headshots/team/michael_lukas.jpg", linkedinUrl: "https://www.linkedin.com/in/michaellukas" },
          { name: "Thai Tran", role: "Co-Lead Developer", image: "/headshots/team/thai_tran.jpg", linkedinUrl: "https://www.linkedin.com/in/thai-tran-minh/" },
        ],
      },
    ],
  },
  // Last, since they have graduated: the alumni who started it, not a current team.
  {
    id: "founders",
    name: "Founders",
    intro: "Aaron, Woo and Zach started McGill Ventures in 2020. Everyone above is building on it.",
    groups: [{ members: FOUNDERS }],
  },
];

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
    status: "Applications re-open Summer 2026"
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
    stage: "Sourced",
    title: "Submit Application",
    description: "Complete our online application form with your background, interests, and goals"
  },
  {
    step: "02",
    stage: "Screened",
    title: "Interview Process",
    description: "Participate in a brief interview to discuss your goals and passion for entrepreneurship"
  },
  {
    step: "03",
    stage: "Diligence",
    title: "Case Study",
    description: "Complete a case study to demonstrate your analytical thinking and interest in venture capital"
  },
  {
    step: "04",
    stage: "Closed",
    title: "Welcome & Onboarding",
    description: "Join our community and begin your journey in venture capital and startups"
  }
] as const;
