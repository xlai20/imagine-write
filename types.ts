export interface User {
  id: number;
  name: string;
  age: number;
  avatar: 'robot' | 'dragon' | 'princess' | 'rainbow' | 'unicorn' | 'cat' | 'rabbit';
}

export interface Story {
  id: number;
  userId: number;
  date: string;
  imagePromptUrl: string;
  imagePromptQuery: string;
  theme: string;
  topic: string;
  keywords: string[];
  text: string;
  feedback: Feedback;
}

export interface Feedback {
  score: number;
  message: string;
  correctedText: string;
}

export enum Screen {
  PROFILE_SELECTOR,
  DASHBOARD,
  WRITING,
  FEEDBACK,
  HISTORY,
}