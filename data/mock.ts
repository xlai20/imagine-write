import { User, Story } from '../types';

export const MOCK_USERS: User[] = [
  { id: 1, name: 'Estella', age: 8, avatar: 'rainbow' },
  { id: 2, name: 'Nova', age: 5, avatar: 'princess' },
  { id: 3, name: 'Olivia', age: 10, avatar: 'rabbit' },
];

export const MOCK_STORIES: Story[] = [
  {
    id: 101,
    userId: 1,
    date: 'August 20',
    imagePromptUrl: 'https://picsum.photos/seed/story101/250/150',
    imagePromptQuery: 'A magical treehouse in a sparkling forest',
    theme: 'Fantasy and Adventure',
    topic: 'The Magical Treehouse',
    keywords: ['found', 'climb', 'secret', 'inside', 'magical', 'adventure', 'friends'],
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
    theme: 'Hobbies and Activities',
    topic: 'Baking a Cake',
    keywords: ['kitchen', 'flour', 'mix', 'oven', 'sweet', 'smell', 'delicious', 'share'],
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
    theme: 'Fantasy and Adventure',
    topic: 'Superhero Animal',
    keywords: ['superhero', 'fly', 'save', 'city', 'brave', 'fast'],
    text: 'The sqirrel was a superhero. He could fly fast.',
    feedback: {
      score: 9,
      message: 'Awesome story, Ben!',
      correctedText: 'The **squirrel** was a superhero. He could fly fast.',
    },
  },
];