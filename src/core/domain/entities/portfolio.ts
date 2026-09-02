import type { Locale } from "@/core/domain/entities/locale";

export type NavItem = {
  href: `#${string}`;
  label: string;
};

export type Highlight = {
  title: string;
  description: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Project = {
  id: ProjectId;
  description: string;
};

export enum ProjectId {
  CalculatorReact = "calculator-react",
  CrudAngular = "crud-angular",
  FlappyBird = "flappy-bird",
  Metalflix = "metalflix",
  NubankClone = "nubank-clone",
  ProffyNlw = "proffy-nlw",
}

export enum ContactPlatform {
  GitHub = "github",
  Instagram = "instagram",
  LinkedIn = "linkedin",
}

export type ContactLink = {
  caption: string;
  href: string;
  label: string;
  platform: ContactPlatform;
};

export type PortfolioContent = {
  locale: Locale;
  meta: {
    title: string;
    description: string;
  };
  brand: {
    name: string;
    role: string;
    location: string;
  };
  navigation: NavItem[];
  menuLabel: string;
  languageSwitcherLabel: string;
  theme: {
    label: string;
    systemLabel: string;
    lightLabel: string;
    darkLabel: string;
  };
  hero: {
    title: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
  };
  about: {
    id: "about";
    eyebrow: string;
    title: string;
    paragraphs: string[];
    highlights: Highlight[];
  };
  stack: {
    id: "stack";
    eyebrow: string;
    title: string;
    description: string;
    groups: SkillGroup[];
  };
  projects: {
    id: "projects";
    eyebrow: string;
    title: string;
    description: string;
    repositoryLabel: string;
    openLabel: string;
    openDemoLabel: string;
    openDemoAriaLabel: string;
    openRepositoryAriaLabel: string;
    items: Project[];
    moreLabel: string;
  };
  contact: {
    id: "contact";
    eyebrow: string;
    title: string;
    description: string;
    availability: string;
    links: ContactLink[];
  };
  footer: string;
};
