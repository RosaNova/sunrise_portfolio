const skillCategories = [
  {
    category: 'Frontend Development',
    description: 'Modern UI frameworks and user experiences',
    skills: [
      { name: 'React', percentage: 90 },
      { name: 'TypeScript', percentage: 85 },
      { name: 'Next.js', percentage: 80 },
      { name: 'Tailwind CSS', percentage: 95 },
      { name: 'Vue.js', percentage: 70 },
      { name: 'CSS/SCSS', percentage: 95 },
    ],
    accent: 'from-blue-500 to-cyan-500',
  },
  {
    category: 'Backend Systems',
    description: 'Server architecture and data management',
    skills: [
      { name: 'Node.js', percentage: 85 },
      { name: 'Python', percentage: 75 },
      { name: 'PostgreSQL', percentage: 70 },
      { name: 'MongoDB', percentage: 80 },
      { name: 'API Design', percentage: 90 },
      { name: 'Microservices', percentage: 65 },
    ],
    accent: 'from-purple-500 to-blue-500',
  },
  {
    category: 'DevOps & Cloud',
    description: 'Infrastructure and deployment automation',
    skills: [
      { name: 'AWS', percentage: 60 },
      { name: 'Docker', percentage: 75 },
      { name: 'Kubernetes', percentage: 50 },
      { name: 'CI/CD', percentage: 70 },
      { name: 'Git', percentage: 90 },
      { name: 'Linux', percentage: 80 },
    ],
    accent: 'from-orange-500 to-red-500',
  },
  {
    category: 'Quality & Testing',
    description: 'Code reliability and performance',
    skills: [
      { name: 'Jest', percentage: 75 },
      { name: 'Testing Library', percentage: 70 },
      { name: 'E2E Testing', percentage: 65 },
      { name: 'GraphQL', percentage: 60 },
      { name: 'REST', percentage: 90 },
      { name: 'Agile', percentage: 85 },
    ],
    accent: 'from-green-500 to-emerald-500',
  },
]

export default skillCategories
