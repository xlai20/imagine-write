import { User, Story } from '../types';

export const MOCK_USERS: User[] = [
  { id: 1, name: 'Estella', avatar: 'rainbow' },
  { id: 2, name: 'Nova', avatar: 'princess' },
  { id: 3, name: 'Olivia', avatar: 'rabbit' },
  { id: 4, name: 'Derek', avatar: 'dragon' },
  { id: 5, name: 'Mia', avatar: 'unicorn' },
  { id: 6, name: 'Chloe', avatar: 'cat' },
  { id: 7, name: 'Max', avatar: 'robot' },
];

export const MOCK_STORIES: Story[] = [
  {
    id: 101,
    userId: 1,
    date: 'August 20',
    imagePromptUrl: 'https://picsum.photos/seed/story101/250/150',
    imagePromptQuery: 'A magical treehouse in a sparkling forest',
    text: 'Once upon a time, there was a magical treehouse. Anya climbed it and found a freindly dragon.',
    feedback: {
      score: 8,
      message: 'Great start, Anya!',
      correctedText: 'Once upon a time, there was a magical treehouse. Anya climbed it and found a **friendly** dragon.',
    },
  },
  {
    id: 102,
    userId: 1,
    date: 'August 19',
    imagePromptUrl: 'https://picsum.photos/seed/story102/250/150',
    imagePromptQuery: 'A robot chef baking a cake',
    text: 'The robot made a cake. It was yummy.',
    feedback: {
      score: 7,
      message: 'Good job!',
      correctedText: 'The robot made a cake. It was yummy.',
    },
  },
  {
    id: 201,
    userId: 2,
    date: 'August 21',
    imagePromptUrl: 'https://picsum.photos/seed/story201/250/150',
    imagePromptQuery: 'A superhero squirrel flying over a city',
    text: 'The sqirrel was a superhero. He could fly fast.',
    feedback: {
      score: 9,
      message: 'Awesome story, Ben!',
      correctedText: 'The **squirrel** was a superhero. He could fly fast.',
    },
  },
];