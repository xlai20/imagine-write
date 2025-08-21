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
      overallAssessment: 'A good start with a clear and imaginative central idea. The main areas for improvement are spelling and sentence structure.',
      strengths: 'The story is creative and easy to understand.',
      areasForImprovement: {
        grammar: "Ensure all names like 'Anya' start with a capital letter. The second sentence could be more descriptive.",
        vocabulary: "Instead of 'climbed it', you could say 'scampered up' to make it more exciting. The word 'friendly' was misspelled."
      },
      correctedText: 'Once upon a time, there was a magical treehouse. **Anya** climbed it and found a ~~freindly~~ **friendly** dragon.',
      scoringBreakdown: {
        creativity: 8,
        grammar: 6,
        vocabulary: 7,
        structure: 7,
      },
      concludingStatement: 'This is a solid foundation. For your next story, focus on correct spelling and adding more descriptive words.'
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
      overallAssessment: 'A very short story that gets straight to the point. To improve, try adding more details about the process and the cake itself.',
      strengths: 'The sentences are grammatically correct.',
      areasForImprovement: {
        grammar: "The story is very simple. Try to combine ideas into longer sentences.",
        vocabulary: "'Made' is a simple word. You could use 'baked' or 'created'. 'Yummy' is good, but you could try 'delicious' or 'tasty'."
      },
      correctedText: 'The robot **baked** a cake. It was **delicious**.',
      scoringBreakdown: {
        creativity: 5,
        grammar: 8,
        vocabulary: 6,
        structure: 5,
      },
      concludingStatement: 'A good effort. Next time, try to add more details to make your story longer and more interesting.'
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
      overallAssessment: 'An exciting story idea! The main area for improvement is spelling.',
      strengths: 'The concept of a superhero squirrel is very creative.',
      areasForImprovement: {
        grammar: "The sentences are clear, but remember to check your spelling before finishing.",
        vocabulary: "'Fast' is a good word. To be more descriptive, you could say 'swiftly' or 'at lightning speed'."
      },
      correctedText: 'The ~~sqirrel~~ **squirrel** was a superhero. He could fly **fast**.',
      scoringBreakdown: {
        creativity: 9,
        grammar: 7,
        vocabulary: 7,
        structure: 8,
      },
      concludingStatement: 'Excellent creativity. Pay close attention to spelling in your next story to make it even better.'
    },
  },
];