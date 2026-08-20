// src/types/projects.ts
export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;
  results?: string[];
  tags: string[];
  link?: string;
}
