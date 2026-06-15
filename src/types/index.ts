export type Tab = 'readme' | 'projects' | 'writing' | 'experience';

export interface SkillTag {
  name: string;
  url: string;
}

export interface SkillGroup {
  label: string;
  tags: SkillTag[];
}

export interface Project {
  name: string;
  lang: string;
  desc: string;
  bullets: string[];
  links: { label: string; url: string }[];
}

export interface Article {
  num: string;
  title: string;
  meta: string;
  url: string;
}

export interface ExpItem {
  company: string;
  role: string;
  period: string;
  status: 'live' | 'past' | 'oss';
  bullets: string[];
  stack: string[];
}
