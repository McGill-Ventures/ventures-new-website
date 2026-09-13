// lib/icons.ts
// Maps the string icon names used in the question files to lucide components.

import {
  Lightbulb, Rocket, TrendingUp, Building2, Users, Target, Code2, Cpu,
  HeartPulse, FlaskConical, Leaf, Factory, Wifi, GraduationCap, CircleSlash,
  BadgeCheck, Clock, Gift, Landmark, ShoppingBag, Truck, Briefcase, Settings,
  MessageSquare,
} from "lucide-react";

export const ICONS = {
  lightbulb: Lightbulb,
  rocket: Rocket,
  trendingUp: TrendingUp,
  building: Building2,
  users: Users,
  target: Target,
  code: Code2,
  cpu: Cpu,
  heartPulse: HeartPulse,
  flask: FlaskConical,
  leaf: Leaf,
  factory: Factory,
  wifi: Wifi,
  graduationCap: GraduationCap,
  circleSlash: CircleSlash,
  badgeCheck: BadgeCheck,
  clock: Clock,
  gift: Gift,
  landmark: Landmark,
  shoppingBag: ShoppingBag,
  truck: Truck,
  briefcase: Briefcase,
  settings: Settings,
  messageSquare: MessageSquare,
} as const;

export type IconName = keyof typeof ICONS;

export function iconFor(name?: string) {
  if (!name) return undefined;
  return ICONS[name as IconName];
}
