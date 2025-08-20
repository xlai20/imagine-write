export interface User {
  id: number;
  name: string;
  avatar: 'robot' | 'dragon' | 'princess' | 'rainbow' | 'unicorn' | 'cat' | 'rabbit';
}

export interface Story {
  id: number;
  userId: number;
  date: string;
  imagePromptUrl: string;
  imagePromptQuery: string;
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