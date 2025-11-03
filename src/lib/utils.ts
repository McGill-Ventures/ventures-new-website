import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getAnimationDelay(index: number, baseDelay: number = 0.1): React.CSSProperties {
  return {
    animationDelay: `${index * baseDelay}s`,
  };
}

export function getResponsiveClasses(
  mobile: string,
  tablet?: string,
  desktop?: string
): string {
  let classes = mobile;
  if (tablet) classes += ` md:${tablet}`;
  if (desktop) classes += ` lg:${desktop}`;
  return classes;
}

export function formatSkills(skills: string[]): string {
  return skills.join(", ");
}

export function divideNumber(value: number): number {
  return value / 2;
}

export function getActiveLinkClasses(
  currentPage: string | undefined,
  href: string,
  activeClasses: string,
  inactiveClasses: string
): string {
  return currentPage === href ? activeClasses : inactiveClasses;
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength).trim() + "...";
}

export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  return phone;
}

export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
}