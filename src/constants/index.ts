import { NavigationItem, ExecutiveTeamMember, AnalystTeamMember, DeveloperTeamMember, GovernanceTeamMember } from '@/types';

export const NAVIGATION_ITEMS: NavigationItem[] = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/sponsors", label: "Sponsorships & Partners" },
  { href: "/fund", label: "Fund" },
  // new navigation item inserted between Fund and Team
  { href: "/events", label: "Events" },
  { href: "/team", label: "Team" },
  { href: "https://www.project-atlas.ca/", label: "Project ATLAS" },
  { href: "/contact", label: "Contact" },
];

export const TEAM_TYPES = {
  FOUNDERS: 'founders' as const,
  EXECUTIVE: 'executive' as const,
  FUND: 'fund' as const,
  FINANCE: 'finance' as const,
  ANALYST: 'analyst' as const,
  DEVELOPER: 'dev' as const,
} as const;

export const GOVERNANCE_TYPES = {
  FUND_OVERVIEW: 'fund-overview' as const,
  GOVERNANCE: 'governance' as const,
  GET_INVOLVED: 'get-involved' as const,
} as const;

export const FOUNDERS: ExecutiveTeamMember[] = [
  {
    name: "Aaron Anandji",
    image: "/headshots/founders/aaron_anandji.png",
    role: "Co-Founder & Member of the Board of Directors",
    experience: "General Magic",
    bio: "",
    education: "",
    linkedinUrl: "https://www.linkedin.com/in/aaron-anandji/"
  },
  {
    name: "Hyeonwoo (\"Woo\") Park",
    image: "/headshots/founders/woo_park.png",
    role: "Co-Founder",
    experience: "Nation Graph",
    bio: "",
    education: "",
    linkedinUrl: "https://www.linkedin.com/in/woo-park1/"
  },
  {
    name: "Zacharie Faucillion",
    image: "/headshots/founders/zacharie_faucillion.jpeg",
    role: "Co-Founder",
    experience: "Amarante International",
    bio: "",
    education: "",
    linkedinUrl: "https://www.linkedin.com/in/zfaucillion/",
  },
];

export const EXECUTIVE_TEAM: ExecutiveTeamMember[] = [
  {
    name: "Ethan Wu",
    image: "/headshots/exec/ewu.jpeg",
    role: "Co-President",
    experience: "Prev @ CIBC Capital Markets, CDPQ",
    bio: "",
    education: "BCom Honours in Investment Management, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/wuethan/"
  },
  {
    name: "Charlyne Luu",
    image: "/headshots/exec/clu.jpeg",
    role: "Co-President",
    experience: "Prev @ Angel Host",
    bio: "",
    education: "BCom Finance, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/charlyne-luu-235062213/"
  },
  {
    name: "Alexis Hamam",
    image: "/headshots/exec/alexis_hamam.jpg", 
    role: "Founder & IC (Fund)",
    experience: "Prev @ EY M&A, Boreal Ventures",
    bio: "",
    education: "BCom Finance, McGill University"
  },
  {
    name: "Alhaan Haris",
    role: "Fund Principal",
    image: "/headshots/exec/alhaan_haris.jpg",
    bio: "",
    education: "BCom Joint Honours Economics + Finance, McGill University",
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
    name: "Clara Caden",
    image: "/headshots/exec/clara_caden.png",
    role: "Corporate Relations Associate",
    experience: "Prev @ Fondaction, Meroka",
    bio: "",
    education: "BCom Finance + CS",
    linkedinUrl: "https://www.linkedin.com/in/clara-caden"
  },
  {
    name: "Xin Yu Zhang",
    image: "/headshots/exec/xin.jpeg",
    role: "Co-Director of Events",
    experience: "Prev @ Royal Lepage Real Estate, Headstart Global",
    bio: "",
    education: "BCom Finance, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/xinyuzhang-xyz/"
  },
  {
    name: "Aya Cherkaoui",
    image: "/headshots/exec/aya.JPG",
    role: "Co-Director of Events",
    experience: "Prev @ EY",
    bio: "",
    education: "BCom Economics & Business Analytics, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/ayacherkaoui/"
  },
  {
    name: "Kelly Yan",
    image: "/headshots/exec/kelly.JPG",
    role: "Events Associate",
    experience: "",
    bio: "",
    education: "BCom Honours Joint Component Economics + Accounting, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/kelly-yan-mcgill"
  },
  {
    name: "Riya Jain",
    image: "/headshots/exec/riya.jpeg",
    role: "Events Associate",
    experience: "",
    bio: "",
    education: "BCom Economics + International Development Studies, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/riya-jain25/"
  },
  {
    name: "Coco Meng",
    image: "/headshots/exec/coco.jpeg",
    role: "Events Associate",
    experience: "",
    bio: "",
    education: "BSc Pharmacology + Therapeutics, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/coco-m-679678320"
  },
  {
    name: "Thai Tran",
    image: "/headshots/exec/thai.jpg",
    role: "Events Associate",
    experience: "",
    bio: "",
    education: "BEng Computer Engineering, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/thai-tran-minh/"
  },
  {
    name: "Lola Julliand",
    image: "/headshots/exec/lola.jpg",
    role: "Ambassador of Events",
    experience: "",
    bio: "",
    education: "BCom Entrepreneurship + Finance, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/lola-julliand-955706329"
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
    education: "BCom Finance + Strategic Management, McGill University"
  },
  {
    name: "Chris Robinson",
    image: "/headshots/exec/chris_robinson_headshot.jpg",
    role: "Director of Finance",
    experience: "Prev @ HSBC",
    bio: "",
    education: "BCom Joint Honours Economics + Finance, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/chris-robinson-682783299"
  },
  {
    name: "Orion Pirang",
    image: "/headshots/exec/orion_pirang_headshot.JPG",
    role: "Finance Associate/ Analyst",
    experience: "Prev @ PwC, Desato",
    bio: "",
    education: "BCom Finance, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/orion-pirang-272b5035b"
  },
  {
    name: "Celine Chung",
    image: "/headshots/exec/celine_chung_headshot.jpg",
    role: "Fund Principal and Corporate Relations",
    experience: "",
    bio: "",
    education: "BCom International Management, McGill University"
  },
  {
    name: "Ronardy Abellard",
    image: "/headshots/exec/ronardy_abellard.png",
    role: "Event Associate & Junior Analyst",
    experience: "",
    bio: "",
    education: "BEng Material Engineering, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/ronardyabellard"
  },
  {
    name: "Nicole Zeng",
    image: "/headshots/exec/nicole_zeng.jpg",
    role: "Executive Assistant",
    experience: "",
    bio: "",
    education: "BCom Management, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/nicole-r-zeng/"
  },
  {
    name: "Aditya Ranjan",
    image: "/headshots/exec/aditya_ranjan.jpg", // TODO
    role: "Corporate Relations Associate",
    experience: "Prev @ SickKids",
    bio: "",
    education: "BSc Biomedical Sciences, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/ad1tyaranjan/"
  },
  {
    name: "Canyu Wu",
    image: "/headshots/exec/canyu_wu.png", // TODO
    role: "Director of Partnerships",
    experience: "",
    bio: "",
    education: "BEng Bioengineering, McGill University"
  },
  {
    name: "Zara Berholz",
    image: "/headshots/exec/zara_beholz.JPG",
    role: "Marketing Associate",
    experience: "",
    bio: "",
    education: "BCom Finance + Strategic Management, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/zara-berholz/"
  },
  {
    name: "Annie Mingru Yang",
    image: "/headshots/exec/annie_yang.jpeg",
    role: "Events Associate",
    experience: "Incoming @ EY, Prev @ Pharmascience, TD Canada Trust",
    bio: "",
    education: "BCom Finance, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/annie-mingru-yang/"
  },
];

export const FUND_TEAM: ExecutiveTeamMember[] = [
  {
    name: "Urfaan Sadid",
    role: "Managing Director",
    experience: "Prev @ Richardson Wealth, Wyld VC",
    image: "/headshots/exec/urfaan_sadid.jpg",
    bio: "",
    education: "BCom Joint Honours Economics + Finance, McGill University",
  },
  {
    name: "Alexandre Comtois",
    image: "/headshots/exec/alexandre_comtois_headshot.jpg",
    role: "Managing Director",
    experience: "",
    bio: "",
    education: "Honours Investment Management, McGill University"
  },
  {
    name: "Elisabeth Scodigor",
    image: "/headshots/analyst/elisabeth_scodigor.jpg",
    role: "Managing Director",
    experience: "",
    bio: "",
    education: "BCom Ops Mgmt + Business Analytics + Strategy, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/elisabeth-scodigor/"
  },
  {
    name: "Noah Vaillancourt",
    role: "Senior Analyst",
    image: "/headshots/exec/noah_vaillancourt.jpg",
    bio: "",
    education: "BEng Software Engineering, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/noahvaillancourt/"
  },
  {
    name: "Oscar Ham",
    image: "/headshots/exec/oscar_ham_headshot.jpg",
    role: "Senior Analyst",
    experience: "Prev @ KPMG",
    bio: "",
    education: "BEng Electrical Engineering, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/oscarham/"
  },
  {
    name: "Ava McKee",
    role: "Senior Analyst",
    image: "/headshots/exec/ava_mckee.png",
    bio: "",
    education: "BCom Finance, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/ava-mckee1/"
  },
  {
    name: "Alhaan Haris",
    role: "Senior Analyst",
    image: "/headshots/exec/alhaan_haris.jpg",
    bio: "",
    education: "BCom Joint Honours Economics + Finance, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/alhaanharis/"
  },
  {
    name: "Kirin DeJacobson",
    role: "Senior Analyst",
    image: "/headshots/investment/kirin_dejacobson.png",
    bio: "",
    education: "BCom Finance, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/kirindejacobson/"
  },
  {
    name: "Gael Gonzàlez",
    image: "/headshots/exec/gael_huacuja_headshot.jpg",
    role: "Senior Analyst",
    experience: "Prev @ Attain",
    bio: "",
    education: "BCom Finance + Strategic Management, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/gael-gonz%C3%A1lez-20a364217/"
  },
  {
    name: "Celine Chung",
    image: "/headshots/exec/celine_chung_headshot.jpg",
    role: "Senior Analyst",
    experience: "",
    bio: "",
    education: "BCom International Management, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/celine-chung-a16164220/"
  },
  {
    name: "Jaden Lee",
    role: "Senior Analyst",
    image: "/headshots/analyst/jaden_lee.jpg",
    bio: "",
    education: "BCom Finance, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/jaden-tklee"
  },
  {
    name: "Chris Chan",
    role: "Senior Analyst",
    image: "/headshots/analyst/chris_chan.jpg",
    experience: "Prev @ Manulife Wealth Management",
    bio: "",
    education: "BCom Management, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/chris-chan-grad2028/"
  },
  {
    name: "Orion Pirang",
    role: "Senior Analyst",
    image: "/headshots/exec/orion_pirang_headshot.JPG",
    experience: "Prev @ PwC, Desato",
    bio: "",
    education: "BCom Finance, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/orion-pirang-272b5035b"
  },
  {
    name: "Clive Raza",
    role: "Senior Analyst",
    image: "/headshots/analyst/clive_raza.jpeg",
    bio: "",
    education: "BCom Economics, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/clive-raza-0607572a0/"
  },
  {
    name: "Guillaume Bouramia",
    role: "Senior Analyst",
    image: "/headshots/analyst/guillaume_bouramia.jpg",
    bio: "",
    education: "BSc Biochemistry + Entrepreneurship, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/guillaume-bouramia/"
  },
  {
    name: "Yueran Lu",
    role: "Senior Analyst",
    image: "/headshots/analyst/yueran_lu.jpg",
    experience: "Prev @ LIDD",
    bio: "",
    education: "BEng Computer Engineering, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/yueranlu05/"
  },
  {
    name: "Gaspar Billerault",
    role: "Senior Analyst",
    image: "/headshots/exec/gaspar_billerault.jpg",
    bio: "",
    education: "BSc Computer Science, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/billerault/"
  },
  {
    name: "Nicholas Mandalenakis",
    role: "Senior Analyst",
    image: "/headshots/analyst/nicholas_mandalenakis.jpeg",
    bio: "",
    education: "BEng Chemical Engineering, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/nicholas-mandalenakis-989a2a2b9/"
  },
  {
    name: "Theodore Popa",
    role: "Senior Analyst",
    image: "/headshots/exec/theodore_popa.jpg",
    bio: "",
    education: "BCom Finance, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/theodore-popa-124a95348/"
  },
];

export const FINANCE_TEAM: ExecutiveTeamMember[] = [
  {
    name: "Chris Robinson",
    image: "/headshots/exec/chris_robinson_headshot.jpg",
    role: "Director of Finance",
    experience: "Prev @ HSBC",
    bio: "",
    education: "BCom Joint Honours Economics + Finance, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/chris-robinson-682783299"
  },
  {
    name: "Orion Pirang",
    image: "/headshots/exec/orion_pirang_headshot.JPG",
    role: "Finance Associate",
    experience: "Prev @ PwC, Desato",
    bio: "",
    education: "BCom Finance, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/orion-pirang-272b5035b"
  },
  {
    name: "Jaden Lee",
    image: "/headshots/analyst/jaden_lee.jpg",
    role: "Finance Associate",
    bio: "",
    education: "BCom Finance, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/jaden-tklee"
  },
  {
    name: "Theodore Popa",
    image: "/headshots/exec/theodore_popa.jpg",
    role: "Finance Associate",
    bio: "",
    education: "BCom Finance, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/theodore-popa-124a95348/"
  },
];

export const ANALYST_TEAM: AnalystTeamMember[] = [
  {
    name: "Ava McKee",
    role: "Analyst Program Manager",
    education: "BCom Finance, McGill University",
    image: "/headshots/exec/ava_mckee.png"
  },
  {
    name: "Elisabeth Scodigor",
    role: "Analyst Program Manager",
    education: "BCom Ops Mgmt + Business Analytics + Strategy, McGill University",
    image: "/headshots/analyst/elisabeth_scodigor.jpg",
    linkedinUrl: "https://www.linkedin.com/in/elisabeth-scodigor/"
  },
  {
    name: "Clive Raza",
    role: "Analyst",
    education: "BCom Economics, McGill University",
    image: "/headshots/analyst/clive_raza.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/clive-raza-0607572a0/"
  },
  {
    name: "Chris Chan",
    role: "Analyst",
    experience: "Prev @ Manulife Wealth Management",
    education: "BCom Management, McGill University",
    image: "/headshots/analyst/chris_chan.jpg",
    linkedinUrl: "https://www.linkedin.com/in/chris-chan-grad2028/"
  },
  {
    name: "Joey Marsh",
    role: "Analyst",
    education: "BCom Finance, McGill University",
    image: "/headshots/analyst/joey_marsh.jpg",
    linkedinUrl: "https://www.linkedin.com/in/joey-marsh-680aa2358/"
  },
  {
    name: "Paul Lagrue",
    role: "Analyst",
    education: "BCom Finance, McGill University",
    image: "/headshots/analyst/paul_lagrue.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/paul-lagrue-154881342/"
  },
  {
    name: "Brit Meisels",
    role: "Analyst",
    education: "BA Political Science, McGill University",
    image: "/headshots/analyst/brit_meisels.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/brit-meisels-374042385/"
  },
  {
    name: "Harsh Bokadia",
    role: "Analyst",
    experience: "Prev @ Nuvama Health",
    education: "BA Economics + Social Entrepreneurship, McGill University",
    image: "/headshots/analyst/harsh_bokadia.jpg",
    linkedinUrl: "https://www.linkedin.com/in/harshbokadia27/"
  },
  {
    name: "Anthony Melki",
    role: "Analyst",
    education: "BEng Mechanical Engineering, McGill University",
    image: "/headshots/analyst/anthony_melki.jpg",
    linkedinUrl: "https://www.linkedin.com/in/anthony-melki-947841252/"
  },
  {
    name: "Kristen Alexander Tran",
    role: "Analyst",
    experience: "Co-founder @ Astrid",
    education: "BSc Cognitive Science, McGill University",
    image: "/headshots/analyst/kristen_tran.png",
    linkedinUrl: "https://www.linkedin.com/in/kristen-alexander-tran-b1827a313/"
  },
  {
    name: "Laetitia Fleurent",
    role: "Analyst",
    experience: "Prev @ Moment Factory",
    education: "BCom Finance, McGill University",
    image: "/headshots/analyst/laetitia_fleurent.jpg",
    linkedinUrl: "https://www.linkedin.com/in/laetitia-fleurent-a35147386/"
  },
  {
    name: "Iuliana Arhire",
    role: "Analyst",
    education: "BCom Finance, McGill University",
    image: "/headshots/analyst/iuliana_arhire.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/iuliana-arhire-657481306/"
  },
  {
    name: "Sophia Mahiout",
    role: "Analyst",
    education: "BSc Microbiology + Immunology, McGill University",
    image: "/headshots/analyst/sophia_mahiout.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/sophia-mahiout-153785354/"
  },
  {
    name: "Guillaume Bouramia",
    role: "Analyst",
    education: "BSc Biochemistry + Entrepreneurship, McGill University",
    image: "/headshots/analyst/guillaume_bouramia.jpg",
    linkedinUrl: "https://www.linkedin.com/in/guillaume-bouramia/"
  },
  {
    name: "Emiko McLean",
    role: "Analyst",
    education: "MSc Surgical + Interventional Sciences, McGill University",
    image: "/headshots/analyst/emiko_mcLean.jpg",
    linkedinUrl: "https://www.linkedin.com/in/emiko-mclean/"
  },
  {
    name: "Jaden Lee",
    role: "Analyst",
    education: "BCom Finance, McGill University",
    image: "/headshots/analyst/jaden_lee.jpg",
    linkedinUrl: "https://www.linkedin.com/in/jaden-tklee"
  },
  {
    name: "Yueran Lu",
    role: "Analyst",
    experience: "Prev @ LIDD",
    education: "BEng Computer Engineering, McGill University",
    image: "/headshots/analyst/yueran_lu.jpg",
    linkedinUrl: "https://www.linkedin.com/in/yueranlu05/"
  },
  {
    name: "David Li",
    role: "Analyst",
    experience: "Prev @ L’Oréal",
    education: "BSc Computer Science + Economics, McGill University",
    image: "/headshots/analyst/david_li.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/david-li-3588b81b2/"
  },
  {
    name: "Max Hauser",
    role: "Analyst",
    education: "BA Economics, McGill University",
    image: "/headshots/analyst/max_hauser.jpg",
    linkedinUrl: "https://www.linkedin.com/in/max-hauser-3b0921345/"
  },
  {
    name: "Aditya Ranjan",
    role: "Analyst",
    experience: "Prev @ SickKids",
    education: "BSc Biomedical Sciences, McGill University",
    image: "/headshots/exec/aditya_ranjan.jpg",
    linkedinUrl: "https://www.linkedin.com/in/ad1tyaranjan/"
  },
  {
    name: "Orion Pirang",
    role: "Analyst",
    experience: "Prev @ PwC, Desato",
    education: "BCom Finance, McGill University",
    image: "/headshots/exec/orion_pirang_headshot.JPG",
    linkedinUrl: "https://www.linkedin.com/in/orion-pirang-272b5035b"
  },
  {
    name: "Roman Alexander",
    role: "Analyst",
    education: "BCom Finance, McGill University",
    image: "/headshots/analyst/roman_alexander.jpg",
    linkedinUrl: "https://www.linkedin.com/in/romanrichard-alexander/"
  },
  {
    name: "William Prato-Deriet",
    role: "Analyst",
    education: "BEng Bioengineering and Biomedical Engineering, McGill University",
    image: "/headshots/analyst/william_prato-deriet.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/williampratoderiet/"
  },
  {
    name: "Nikki Hakimzadeh",
    role: "Analyst",
    education: "BCom, McGill University",
    image: "/headshots/analyst/nikki_hakimzadeh.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/nikki-hakimzadeh-376767320/"
  },
  {
    name: "Ronardy Abellard",
    role: "Analyst",
    education: "BEng Materials Engineering, McGill University",
    image: "/headshots/exec/ronardy_abellard.png",
    linkedinUrl: "https://www.linkedin.com/in/ronardyabellard/"
  },
  {
    name: "Bella Hulbert",
    role: "Analyst",
    education: "BA Economics, McGill University",
    image: "/headshots/analyst/bella_hulbert.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/bella-hulbert-92b439227/"
  },
  {
    name: "Nicholas Mandalenakis",
    role: "Analyst",
    education: "BEng Chemical Engineering, McGill University",
    image: "/headshots/analyst/nicholas_mandalenakis.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/nicholas-mandalenakis-989a2a2b9/"
  },
];


export const HEAD_OF_ENGINEERING: DeveloperTeamMember = {
  name: "Wasif Somji",
  role: "Head of Engineering",
  experience: "Prev @ Amazon, Lightspeed",
  education: "BEng Computer Engineering, McGill University",
  skills: ["System Architecture", "Team Leadership", "Software Development", "Product Management", "Scalability"],
  bio: "",
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
    education: "BSc Computer Science & Economics, McGill University",
    image: "/headshots/development/ayaan_rayani_headshot.jpeg",
    role: "Junior Developer",
  },
  {
    name: "Aditi Potnis",
    education: "BSc Computer Science, McGill University",
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
    title: "Case Study",
    description: "Complete a case study to demonstrate your analytical thinking and interest in venture capital"
  },
  {
    step: "04",
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

// Governance Team Data
export const MANAGING_DIRECTORS: GovernanceTeamMember[] = [
  {
    name: "Alex Comtois",
    role: "Managing Director",
    image: "/headshots/exec/alexandre_comtois_headshot.jpg",
    experience: "",
    bio: "",
    education: "Honours Investment Management, McGill University"
  },
  {
    name: "Elisabeth Scodigor",
    role: "Managing Director",
    image: "/headshots/analyst/elisabeth_scodigor.jpg",
    experience: "",
    bio: "",
    education: "BCom Ops Mgmt + Business Analytics + Strategy, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/elisabeth-scodigor/"
  },
  {
    name: "Urfaan Sadid",
    role: "Managing Director", 
    experience: "Prev @ Richardson Wealth, Wyld VC",
    image: "/headshots/exec/urfaan_sadid.jpg",
    bio: "",
    education: "BCom Joint Honours Economics + Finance, McGill University"
  },
];

export const SENIOR_ANALYSTS: GovernanceTeamMember[] = [
  {
    name: "Jaden Lee",
    role: "Senior Analyst",
    image: "/headshots/analyst/jaden_lee.jpg",
    bio: "",
    education: "BCom Finance, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/jaden-tklee"
  },
  {
    name: "Chris Chan",
    role: "Senior Analyst",
    image: "/headshots/analyst/chris_chan.jpg",
    experience: "Prev @ Manulife Wealth Management",
    bio: "",
    education: "BCom Management, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/chris-chan-grad2028/"
  },
  {
    name: "Orion Pirang",
    role: "Senior Analyst",
    image: "/headshots/exec/orion_pirang_headshot.JPG",
    experience: "Prev @ PwC, Desato",
    bio: "",
    education: "BCom Finance, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/orion-pirang-272b5035b"
  },
  {
    name: "Clive Raza",
    role: "Senior Analyst",
    image: "/headshots/analyst/clive_raza.jpeg",
    bio: "",
    education: "BCom Economics, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/clive-raza-0607572a0/"
  },
  {
    name: "Guillaume Bouramia",
    role: "Senior Analyst",
    image: "/headshots/analyst/guillaume_bouramia.jpg",
    bio: "",
    education: "BSc Biochemistry + Entrepreneurship, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/guillaume-bouramia/"
  },
  {
    name: "Yueran Lu",
    role: "Senior Analyst",
    image: "/headshots/analyst/yueran_lu.jpg",
    experience: "Prev @ LIDD",
    bio: "",
    education: "BEng Computer Engineering, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/yueranlu05/"
  },
];

export const GOVERNANCE_TEAM_MEMBERS: GovernanceTeamMember[] = [
  {
    name: "Gael Gonzàlez",
    image: "/headshots/exec/gael_huacuja_headshot.jpg",
    role: "Senior Analyst",
    experience: "Prev @ Attain",
    bio: "",
    education: "BCom Finance + Strategic Management, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/gael-gonz%C3%A1lez-20a364217/"
  },
  {
    name: "Celine Chung",
    image: "/headshots/exec/celine_chung_headshot.jpg",
    role: "Senior Analyst",
    experience: "",
    bio: "",
    education: "BCom International Management, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/celine-chung-a16164220/"
  },
  {
    name: "Ava McKee",
    role: "Senior Analyst",
    image: "/headshots/exec/ava_mckee.png",
    experience: "",
    bio: "",
    education: "BCom Finance, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/ava-mckee1/"
  },
  {
    name: "Kirin DeJacobson",
    role: "Senior Analyst",
    image: "/headshots/investment/kirin_dejacobson.png",
    experience: "",
    bio: "",
    education: "BCom Finance, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/kirindejacobson/"
  },
  {
    name: "Noah Vaillancourt",
    role: "Senior Analyst",
    image: "/headshots/exec/noah_vaillancourt.jpg",
    bio: "",
    education: "BEng Software Engineering, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/noahvaillancourt/"
  },
  {
    name: "Oscar Ham",
    image: "/headshots/exec/oscar_ham_headshot.jpg",
    role: "Senior Analyst",
    experience: "Prev @ KPMG",
    bio: "",
    education: "BEng Electrical Engineering, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/oscarham/"
  },
  {
    name: "Alhaan Haris",
    role: "Senior Analyst",
    image: "/headshots/exec/alhaan_haris.jpg",
    bio: "",
    education: "BCom Joint Honours Economics + Finance, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/alhaanharis/"
  },
  {
    name: "Gaspar Billerault",
    role: "Senior Analyst",
    image: "/headshots/exec/gaspar_billerault.jpg",
    bio: "",
    education: "BSc Computer Science, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/billerault/"
  },
  {
    name: "Nicholas Mandalenakis",
    role: "Senior Analyst",
    image: "/headshots/analyst/nicholas_mandalenakis.jpeg",
    bio: "",
    education: "BEng Chemical Engineering, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/nicholas-mandalenakis-989a2a2b9/"
  },
  {
    name: "Theodore Popa",
    role: "Senior Analyst",
    image: "/headshots/exec/theodore_popa.jpg",
    bio: "",
    education: "BCom Finance, McGill University",
    linkedinUrl: "https://www.linkedin.com/in/theodore-popa-124a95348/"
  }
];

export const INVESTMENT_COMMITTEE: GovernanceTeamMember[] = [
  {
    name: "Emilie Boutros",
    role: "Managing Partner", 
    organization: "Tandem Launch",
    image: "/headshots/investment/Emilie Boutros, Managing Partner, Tandem Launch.jpg",
    experience: "Managing Partner, Tandem Launch",
    bio: "",
    education: ""
  },
  {
    name: "David Charbonneau",
    role: "Managing Partner",
    organization: "Boréal Ventures", 
    image: "/headshots/investment/David Charbonneau, Managing Partner, Boréal Ventures.jpg",
    experience: "Managing Partner, Boréal Ventures",
    bio: "",
    education: ""
  },
  {
    name: "Felicity Meyer",
    role: "Investment Manager",
    organization: "BoxOne Ventures", 
    image: "/headshots/investment/Felicity Meyer, Investment Manager, BoxOne Ventures.jpg",
    experience: "Investment Manager, BoxOne Ventures",
    bio: "",
    education: ""
  },
  {
    name: "Alexis Garneau",
    role: "Investment Associate",
    organization: "Inovia Capital", 
    image: "/headshots/investment/Alexis Garneau, Investment Associate, Inovia Capital.jpg",
    experience: "Investment Associate, Inovia Capital",
    bio: "",
    education: ""
  },
  {
    name: "Jiro Kondo",
    role: "VC & Entrepreneurial Finance Professor",
    organization: "McGill University", 
    image: "/headshots/investment/Jiro Kondo, VC & Entrepreneurial Finance, McGill University.jpg",
    experience: "VC & Entrepreneurial Finance Professor, McGill University",
    bio: "",
    education: ""
  },
  {
    name: "Alexis Hamam",
    role: "MVF Co-Founder & M&A Analyst",
    organization: "EY", 
    image: "/headshots/exec/alexis_hamam.jpg",
    experience: "MVF Co-Founder & M&A Analyst, EY",
    bio: "",
    education: "BCom Finance, McGill University"
  }
];

export const BOARD_OF_DIRECTORS: GovernanceTeamMember[] = [
  {
    name: "Neil Murdoch",
    role: "Chair",
    organization: "Desautels Advisory Board", 
    image: "/headshots/investment/neil_murdoch.png",
    experience: "Chair, Desautels Advisory Board",
    bio: "",
    education: ""
  },
  {
    name: "Tala Al Jabri",
    role: "Managing Partner",
    organization: "Wyld VC", 
    image: "/headshots/investment/tala_al_jabri.png",
    experience: "Managing Partner, Wyld VC",
    bio: "",
    education: ""
  }
];