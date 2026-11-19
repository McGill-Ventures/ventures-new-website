export interface NavigationProps {
  currentPage?: string;
  /** The page opens on a light hero, so the nav starts light before it can measure. */
  lightHero?: boolean;
  /** Keeps the bar off screen until the page scrolls, for a hero that opens on its own wordmark. */
  hideAtTop?: boolean;
}

export interface TeamMember {
  name: string;
  /** Their title within this team only. */
  role: string;
  image?: string;
  linkedinUrl?: string;
}

export interface TeamGroup {
  title?: string;
  members: TeamMember[];
}

export interface Team {
  /** Also the section's anchor, e.g. `/team#fund`. */
  id: string;
  name: string;
  intro?: string;
  groups: TeamGroup[];
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

export const ANIMATION_DELAYS = {
  SHORT: 0.1,
  MEDIUM: 0.2,
  LONG: 0.3,
} as const;