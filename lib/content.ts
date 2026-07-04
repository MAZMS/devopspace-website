/**
 * Single source of truth for all DevOpSpace marketing content.
 * Section components import from here so copy stays consistent.
 */

export const company = {
  name: "DevOpSpace",
  legalName: "DevOpSpace",
  founded: 2008,
  yearsInBusiness: new Date().getFullYear() - 2008,
  tagline: "Ease your cloud journey",
  headline: "Cloud & DevOps,",
  headlineAccent: "handled end to end.",
  subheadline:
    "We plan, build, secure and run your cloud so your team can focus on the product. AWS & Azure managed services, DevOps automation and 24/7 peace of mind — from a team that has done it since 2008.",
  location: "Bangalore, India",
  email: "business@devopspace.com",
  phones: ["+91 8904 599 171", "+91 8904 599 172"],
  domain: "devopspace.com",
  socials: {
    linkedin: "https://www.linkedin.com/company/devopspace",
    twitter: "https://twitter.com/devopspace",
    github: "https://github.com/devopspace",
  },
};

export type NavLink = { label: string; href: string };

export const navLinks: NavLink[] = [
  { label: "Services", href: "#services" },
  { label: "Solutions", href: "#solutions" },
  { label: "Work", href: "#work" },
  { label: "Pricing", href: "#pricing" },
  { label: "Clients", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

/** Icon names below map to lucide-react icons (imported in each component). */
export type Service = {
  icon: string; // lucide-react icon name
  title: string;
  description: string;
  points: string[];
};

export const services: Service[] = [
  {
    icon: "Compass",
    title: "Advisory & Cloud Strategy",
    description:
      "A pragmatic roadmap for migration, modernization and cost — grounded in your business goals, not buzzwords.",
    points: ["Migration assessment", "Well-Architected reviews", "Cloud roadmap"],
  },
  {
    icon: "Cloud",
    title: "AWS Managed Services",
    description:
      "End-to-end management of your AWS estate — provisioning, monitoring, patching, scaling and 24/7 support.",
    points: ["EC2 / ECS / EKS", "Landing zones", "24/7 monitoring"],
  },
  {
    icon: "CloudCog",
    title: "Azure Managed Services",
    description:
      "Design, govern and operate Azure workloads with strong identity, networking and cost guardrails.",
    points: ["AKS & App Service", "Entra ID", "Policy & governance"],
  },
  {
    icon: "GitBranch",
    title: "DevOps & Microservices",
    description:
      "CI/CD pipelines, containers and IaC that ship high-quality releases in a fraction of the time.",
    points: ["CI/CD pipelines", "Kubernetes", "Terraform / IaC"],
  },
  {
    icon: "DatabaseBackup",
    title: "Backup & Disaster Recovery",
    description:
      "Tested, automated backups and DR runbooks so a bad day never becomes a business-ending one.",
    points: ["Automated backups", "DR runbooks", "RPO / RTO targets"],
  },
  {
    icon: "TrendingDown",
    title: "Cloud Optimization",
    description:
      "Continuous cost and performance tuning — right-size, reserve and remove waste without slowing teams down.",
    points: ["FinOps & rightsizing", "Savings plans", "Performance tuning"],
  },
  {
    icon: "ShieldCheck",
    title: "Endpoint Security",
    description:
      "Protect every device and identity with hardened baselines, EDR and continuous compliance monitoring.",
    points: ["EDR & hardening", "Patch management", "Compliance"],
  },
  {
    icon: "Code2",
    title: "Application Development",
    description:
      "Cloud-native apps and APIs built to scale, from prototype to production, alongside your product team.",
    points: ["Cloud-native apps", "APIs & integrations", "Managed delivery"],
  },
];

export type Solution = {
  name: string;
  category: string;
  description: string;
};

export const solutions: Solution[] = [
  {
    name: "MARS",
    category: "Cloud Backup",
    description:
      "Managed AWS-based recovery service delivering secure, policy-driven backup for critical workloads.",
  },
  {
    name: "Acronis",
    category: "Cyber Protection",
    description:
      "Unified backup, anti-ransomware and recovery across servers, endpoints and Microsoft 365.",
  },
  {
    name: "Microsoft 365",
    category: "Productivity",
    description:
      "Migration, licensing, security hardening and day-to-day administration of your M365 tenant.",
  },
  {
    name: "Dropbox",
    category: "Content Cloud",
    description:
      "Team file storage, governance and integrations that keep collaboration fast and compliant.",
  },
  {
    name: "Zoho",
    category: "Business Suite",
    description:
      "CRM, workplace and finance apps set up, integrated and managed to run your operations.",
  },
  {
    name: "MBaaS",
    category: "Mobile Backend",
    description:
      "Managed backend-as-a-service for mobile apps — auth, data, notifications and scaling handled.",
  },
  {
    name: "Optim+",
    category: "Cost Intelligence",
    description:
      "Our optimization program that continuously trims cloud spend while protecting performance.",
  },
];

export type Stat = { value: string; label: string; sublabel?: string };

export const stats: Stat[] = [
  {
    value: "2008",
    label: "Building on the cloud since",
    sublabel: `${company.yearsInBusiness}+ years of practice`,
  },
  { value: "3", label: "Clouds mastered", sublabel: "AWS · Azure · GCP" },
  { value: "24/7", label: "Monitoring & support", sublabel: "Follow-the-sun" },
  { value: "100%", label: "Ownership of outcomes", sublabel: "One accountable team" },
];

export type Step = { title: string; description: string };

export const process: Step[] = [
  {
    title: "Assess",
    description:
      "We map your workloads, risks and costs, then agree on a clear, prioritized roadmap.",
  },
  {
    title: "Build",
    description:
      "Landing zones, pipelines and automation are stood up as code — repeatable and reviewed.",
  },
  {
    title: "Secure",
    description:
      "Identity, backups, monitoring and compliance guardrails are baked in from day one.",
  },
  {
    title: "Operate",
    description:
      "We run and continuously optimize your platform, 24/7, so you can focus on the product.",
  },
];

export type CaseStudy = {
  title: string;
  location: string;
  tags: string[];
  summary: string;
  result: string;
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Zero-downtime Email Migration",
    location: "Dubai, UAE",
    tags: ["Microsoft 365", "Migration"],
    summary:
      "Migrated a growing enterprise to Microsoft 365 with no interruption to mailboxes or business.",
    result: "0 hours of email downtime",
  },
  {
    title: "Centralized User Management",
    location: "United States",
    tags: ["Identity", "Automation"],
    summary:
      "Unified fragmented identities into a single directory with automated joiner-mover-leaver flows.",
    result: "Single source of identity",
  },
  {
    title: "Production Kubernetes Build",
    location: "India",
    tags: ["Kubernetes", "DevOps"],
    summary:
      "Designed and delivered a secure, autoscaling Kubernetes platform with GitOps delivery.",
    result: "Ship-ready in weeks",
  },
  {
    title: "Azure Security Hardening",
    location: "India",
    tags: ["Azure", "Security"],
    summary:
      "Implemented defense-in-depth across an Azure estate — identity, network and policy guardrails.",
    result: "Audit-ready posture",
  },
];

export type Plan = {
  name: string;
  monthly: number;
  yearly: number;
  tagline: string;
  featured?: boolean;
  features: string[];
};

export const plans: Plan[] = [
  {
    name: "Basic",
    monthly: 29,
    yearly: 290,
    tagline: "For small teams getting started on the cloud.",
    features: [
      "24/7 infrastructure monitoring",
      "Security management",
      "Automated backups",
      "Remote support (business hours)",
      "Monthly health report",
    ],
  },
  {
    name: "Standard",
    monthly: 49,
    yearly: 490,
    tagline: "For growing businesses that need proactive ops.",
    featured: true,
    features: [
      "Everything in Basic",
      "Proactive optimization & FinOps",
      "CI/CD pipeline management",
      "Priority remote support",
      "Disaster recovery testing",
      "Quarterly architecture review",
    ],
  },
  {
    name: "Extended",
    monthly: 59,
    yearly: 590,
    tagline: "For mission-critical, always-on platforms.",
    features: [
      "Everything in Standard",
      "24/7 priority incident response",
      "Dedicated cloud engineer",
      "Advanced security & compliance",
      "Custom automation & IaC",
      "Named account manager",
    ],
  },
];

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
  company: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "DevOpSpace took our cloud off our plate entirely. Uptime is a non-issue now and we finally ship without firefighting.",
    author: "Managing Director",
    role: "MD",
    company: "Billaway",
  },
  {
    quote:
      "Their migration was genuinely zero-drama. Clear plan, calm execution and support that actually picks up.",
    author: "Chief Executive Officer",
    role: "CEO",
    company: "Prime Mover",
  },
  {
    quote:
      "We treat them as our cloud team, not a vendor. They think about cost and security before we even ask.",
    author: "Chief Executive Officer",
    role: "CEO",
    company: "iMET Infomakers",
  },
  {
    quote:
      "The Kubernetes platform they built for us just works. GitOps, autoscaling, observability — all handled.",
    author: "Head of Engineering",
    role: "Head of Engineering",
    company: "Oxcion",
  },
  {
    quote:
      "Response times are excellent and the monthly reports keep our board comfortable. Highly recommended.",
    author: "Managing Director",
    role: "MD",
    company: "Entraze Technologies",
  },
  {
    quote:
      "They cut our AWS bill significantly in the first quarter without any performance trade-off.",
    author: "Founder",
    role: "Founder",
    company: "Hostalign",
  },
  {
    quote:
      "A partner that owns outcomes. Backups are tested, security is tight, and we sleep better at night.",
    author: "Chief Executive Officer",
    role: "CEO",
    company: "De Sparrow Solutions",
  },
];

/** Client names for the trusted-by marquee. */
export const clients: string[] = [
  "Billaway",
  "Prime Mover",
  "iMET Infomakers",
  "Oxcion",
  "Entraze Technologies",
  "Hostalign",
  "De Sparrow Solutions",
];

export const footerNav = {
  Services: [
    { label: "Advisory & Strategy", href: "#services" },
    { label: "AWS Managed", href: "#services" },
    { label: "Azure Managed", href: "#services" },
    { label: "DevOps & Kubernetes", href: "#services" },
    { label: "Backup & DR", href: "#services" },
  ],
  Company: [
    { label: "About", href: "#about" },
    { label: "Case Studies", href: "#work" },
    { label: "Clients", href: "#testimonials" },
    { label: "Pricing", href: "#pricing" },
  ],
  Resources: [
    { label: "Solutions", href: "#solutions" },
    { label: "Process", href: "#process" },
    { label: "Contact", href: "#contact" },
  ],
};
