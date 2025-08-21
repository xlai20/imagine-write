import { THEMES } from './themes';

export const generateDynamicWritingPrompt = (age: number): { aiPrompt: string; themeName: string; topicTitle: string; keywords: string[] } => {
  // 1. Pick a random theme
  const randomThemeIndex = Math.floor(Math.random() * THEMES.length);
  const selectedTheme = THEMES[randomThemeIndex];

  // 2. Pick a random topic from that theme
  const randomTopicIndex = Math.floor(Math.random() * selectedTheme.topics.length);
  const selectedTopic = selectedTheme.topics[randomTopicIndex];

  // 3. Construct the prompt for the AI
  const keywords = selectedTopic.keywords.join(', ');
  const prompt = `Generate a short, simple, and imaginative writing prompt for a ${age}-year-old child. It must be a single sentence describing a fun and engaging scene.
Theme: "${selectedTheme.name}"
Topic: "${selectedTopic.title}"
Keywords to inspire the prompt: "${keywords}"

The final output should be ONLY the single sentence prompt, nothing else.`;
  
  return {
    aiPrompt: prompt,
    themeName: selectedTheme.name,
    topicTitle: selectedTopic.title,
    keywords: selectedTopic.keywords,
  };
};


export const getFeedbackSystemInstruction = (age: number): string => `You are an encouraging and helpful tutor for a child aged ${age}. Analyze the child's story.
1.  Provide a score from 1 to 10 based on creativity, grammar, and length, appropriate for their age.
2.  Write a short, positive, and encouraging message.
3.  Provide the corrected version of the text. In the corrected text, use markdown: wrap deleted words or punctuation in ~~strikethrough~~ and wrap added or corrected words in **bold**. Only make necessary corrections for spelling and basic grammar. Keep it simple for a child of this age.`;