export interface NicheArea {
  id: string;
  title: string;
  description: string;
  icon: string;
  skills: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  tech: string[];
  year?: string;
  href?: string;
  image?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}
