export interface NavigationItem {
  href: string;
  label: string;
  /**
   * When true the link is not yet active; it will render with reduced
   * opacity and show a tooltip indicating "Coming Soon". The href is kept
   * as `#` or similar placeholder.
   */
  comingSoon?: boolean;
}

export interface NavigationProps {
  currentPage?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  experience?: string;
  bio?: string;
  education?: string;
  skills?: string[];
  specialization?: string;
  image?: string;
  linkedinUrl?: string;
}

export interface ExecutiveTeamMember extends TeamMember {
  bio: string;
  education: string;
}

export interface AnalystTeamMember extends TeamMember {
  specialization?: string;
}

export interface DeveloperTeamMember extends TeamMember {
  skills?: string[];
  bio?: string;
}

export interface GovernanceTeamMember extends TeamMember {
  organization?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface APIResponse<T = Record<string, unknown>> {
  success: boolean;
  data?: T;
  error?: string;
}

export type TeamType = 'founders' | 'executive' | 'fund' | 'finance' | 'analyst' | 'dev' | 'htil';

export type GovernanceType = 'fund-overview' | 'governance' | 'get-involved';

export interface GovernanceSectionProps {
  activeSection: GovernanceType;
  setActiveSection: (section: GovernanceType) => void;
}

export interface TeamSectionProps {
  activeTeam: TeamType;
  setActiveTeam: (team: TeamType) => void;
}

export interface TeamCardProps {
  member: TeamMember;
  index: number;
  variant?: 'executive' | 'analyst' | 'developer' | 'head';
}

export interface AnimationProps {
  delay?: number;
  duration?: number;
  className?: string;
}

export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface PageProps {
  params?: Record<string, string>;
  searchParams?: Record<string, string | string[] | undefined>;
}

export const TEAM_TYPES = {
  EXECUTIVE: 'executive' as const,
  ANALYST: 'analyst' as const,
  DEVELOPER: 'dev' as const,
} as const;

export const ANIMATION_DELAYS = {
  SHORT: 0.1,
  MEDIUM: 0.2,
  LONG: 0.3,
} as const;