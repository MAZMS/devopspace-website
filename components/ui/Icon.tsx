import {
  Compass,
  Cloud,
  CloudCog,
  GitBranch,
  DatabaseBackup,
  TrendingDown,
  ShieldCheck,
  Code2,
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
  Server,
  Cpu,
  Lock,
  Zap,
  Rocket,
  Star,
  Quote,
  ChevronRight,
  Layers,
  Boxes,
  Activity,
  Users,
  Globe,
  Building2,
  ShieldAlert,
  Workflow,
  Gauge,
  BadgeCheck,
  MoveRight,
  Container,
  Mail,
  Phone,
  MapPin,
  CircleCheckBig,
  type LucideIcon,
} from "lucide-react";

/**
 * Curated icon registry so content can reference icons by string name while
 * keeping tree-shaking intact (every icon is explicitly imported).
 */
export const iconMap: Record<string, LucideIcon> = {
  Compass,
  Cloud,
  CloudCog,
  GitBranch,
  DatabaseBackup,
  TrendingDown,
  ShieldCheck,
  Code2,
  ArrowRight,
  ArrowUpRight,
  Check,
  Sparkles,
  Server,
  Cpu,
  Lock,
  Zap,
  Rocket,
  Star,
  Quote,
  ChevronRight,
  Layers,
  Boxes,
  Activity,
  Users,
  Globe,
  Building2,
  ShieldAlert,
  Workflow,
  Gauge,
  BadgeCheck,
  MoveRight,
  Container,
  Mail,
  Phone,
  MapPin,
  CircleCheckBig,
};

export function Icon({
  name,
  className,
  size,
  strokeWidth = 1.6,
}: {
  name: string;
  className?: string;
  size?: number;
  strokeWidth?: number;
}) {
  const Cmp = iconMap[name] ?? Sparkles;
  return <Cmp className={className} size={size} strokeWidth={strokeWidth} />;
}
