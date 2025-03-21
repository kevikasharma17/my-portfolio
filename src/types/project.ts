export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  overview: string;
  challenge: string;
  solution: string;
  results: string[];
  link?: string;
  mediaItems?: {
    type: 'image' | 'video';
    url: string;
    title?: string;
    description?: string;
  }[];
} 