import { NicheArea, Project, Experience } from '@/types';

export const NICHE_AREAS: NicheArea[] = [
  {
    id: 'ml-ai',
    title: 'Machine Learning & AI',
    description: 'Building intelligent systems with deep learning, NLP, and computer vision.',
    icon: '🤖',
    skills: ['PyTorch', 'TensorFlow', 'LLMs', 'Fine-tuning', 'RAG'],
  },
  {
    id: 'data-science',
    title: 'Data Science',
    description: 'Turning raw data into actionable insights with advanced analytics.',
    icon: '📊',
    skills: ['Statistical Analysis', 'Pandas', 'Scikit-learn', 'Visualization', 'A/B Testing'],
  },
  {
    id: 'full-stack',
    title: 'Full-Stack Development',
    description: 'Creating seamless user experiences with modern web technologies.',
    icon: '⚡',
    skills: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Databases'],
  },
  {
    id: 'ml-ops',
    title: 'ML Operations',
    description: 'Deploying and maintaining production ML systems at scale.',
    icon: '🚀',
    skills: ['MLflow', 'Docker', 'Kubernetes', 'CI/CD', 'Monitoring'],
  },
  {
    id: 'product',
    title: 'Product Innovation',
    description: 'Translating technical capabilities into compelling products.',
    icon: '💡',
    skills: ['Product Strategy', 'User Research', 'Prototyping', 'Analytics', 'Go-to-Market'],
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'dakshin-jukebox',
    title: 'Dakshin Retro Jukebox',
    description: 'A nostalgic music player with retro UI, featuring South Indian classical compositions.',
    category: 'Full-Stack',
    tags: ['React', 'Node.js', 'Retro UI', 'Music'],
    tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    year: '2024',
    href: '#projects',
    image: 'placeholder-dakshin',
  },
  {
    id: 'aurapath',
    title: 'AuraPath',
    description: 'An AI-powered career development platform helping professionals navigate growth.',
    category: 'AI/Product',
    tags: ['Next.js', 'LLMs', 'Career Tech', 'AI'],
    tech: ['Next.js', 'OpenAI', 'TypeScript', 'Supabase'],
    year: '2023',
    href: '#projects',
    image: 'placeholder-aurapath',
  },
  {
    id: 'ml-pipeline',
    title: 'Distributed ML Pipeline',
    description: 'Scalable machine learning infrastructure for large-scale data processing.',
    category: 'ML Ops',
    tags: ['Python', 'Kubernetes', 'MLflow', 'Architecture'],
    tech: ['Python', 'Kubernetes', 'MLflow', 'Docker'],
    year: '2023',
    href: '#projects',
    image: 'placeholder-ml',
  },
];

export const EXPERIENCE: Experience[] = [
  {
    id: 'jhu-carey',
    role: 'MBA Student, Focus: AI & Analytics',
    company: 'Johns Hopkins University - Carey Business School',
    period: '2024 - 2026',
    description: 'Advanced studies in AI/ML applications for business, strategic analytics, and innovation.',
    highlights: [
      'Completed advanced coursework in ML, Data Science, and Strategic Analytics',
      'Led cross-functional projects leveraging AI for business optimization',
      'Developed product sense through real-world consulting engagements',
    ],
  },
  {
    id: 'ai-ml-engineer',
    role: 'AI/ML Engineer',
    company: 'Full-Time Professional Experience',
    period: '2021 - 2024',
    description: 'Built and deployed production ML systems, led data science initiatives.',
    highlights: [
      'Designed and implemented LLM-based applications and fine-tuning pipelines',
      'Reduced inference costs by 40% through model optimization',
      'Mentored junior engineers on ML best practices and system design',
    ],
  },
  {
    id: 'early-career',
    role: 'Software & Data Engineer',
    company: 'Early Career Roles',
    period: '2019 - 2021',
    description: 'Foundation building in software engineering and data analytics.',
    highlights: [
      'Developed full-stack applications with React and Python',
      'Built ETL pipelines processing 10M+ records daily',
      'Contributed to open-source ML projects',
    ],
  },
];

export const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com', icon: 'github' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'linkedin' },
  { label: 'Email', href: 'mailto:contact@example.com', icon: 'mail' },
];

export const SITE_CONFIG = {
  name: 'Leo Gardner (Sriram Naidu Thota)',
  title: 'AI/ML Engineer & Product Developer',
  description: 'Premium portfolio showcasing AI/ML expertise, full-stack development, and product innovation.',
  url: 'https://portfolio.example.com',
};
