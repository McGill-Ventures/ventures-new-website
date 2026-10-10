export interface NavigationProps {
  currentPage?: string;
  /**
   * CSS selector of the page's dark sections. While one sits under the bar the chrome is
   * transparent, then dark glass, with white text; over anything else the bar returns to
   * the light design used everywhere else.
   */
  darkOver?: string;
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