import { THEMES } from './themes';

export const generateDynamicWritingPrompt = (age: number): { aiPrompt: string; themeName: string; topicTitle: string; keywords: string[] } => {
  // 1. Filter themes suitable for the user's age
  const suitableThemes = THEMES.filter(theme => {
    const [minAge, maxAge] = theme.suitableAges.split('-').map(Number);
    return age >= minAge && age <= maxAge;
  });

  // Use suitable themes, or fallback to all themes if none are found for the age
  const themesToChooseFrom = suitableThemes.length > 0 ? suitableThemes : THEMES;

  // 2. Pick a random theme from the suitable list
  const randomThemeIndex = Math.floor(Math.random() * themesToChooseFrom.length);
  const selectedTheme = themesToChooseFrom[randomThemeIndex];

  // 3. Pick a random topic from that theme
  const randomTopicIndex = Math.floor(Math.random() * selectedTheme.topics.length);
  const selectedTopic = selectedTheme.topics[randomTopicIndex];

  // 4. Construct the prompt for the AI
  const keywords = selectedTopic.keywords.join(', ');
  const prompt = `Generate a short, simple, and imaginative writing prompt for a ${age}-year-old child.
Topic: "${selectedTopic.title}"
Keywords to inspire the prompt: "${keywords}"

The prompt should makes it clear that it intends to generate a cheerful, child-friendly, vibrant, and colorful digital illustration, featuring bold outlines and simplified, expressive cartoon characters with large eyes and friendly smiles. 
Elements in the image should be distinct and easy to recognize, with a focus on conveying the main topic clearly. The overall aesthetic should be clean, uncluttered, and suitable for a primary school textbook or workbook.
`;
  
  return {
    aiPrompt: prompt,
    themeName: selectedTheme.name,
    topicTitle: selectedTopic.title,
    keywords: selectedTopic.keywords,
  };
};


export const getFeedbackSystemInstruction = (age: number): string => 
`You are a formal and meticulous AI tutor for a student aged ${age}. Your objective is to provide a rigorous analysis of the student's writing to foster significant improvement. Your tone should be professional, direct, and clear.

Analyze the student's story and respond with a JSON object that has the following structure:
{
  "overallAssessment": "string",
  "strengths": "string",
  "areasForImprovement": {
    "grammar": "string",
    "vocabulary": "string"
  },
  "correctedText": "string",
  "scoringBreakdown": {
    "creativity": "integer",
    "grammar": "integer",
    "vocabulary": "integer",
    "structure": "integer"
  },
  "concludingStatement": "string"
}

Here are the instructions for each field:

1. overallAssessment
Provide a concise, professional summary of the submitted work. Begin by stating the main strengths and then clearly identify the primary areas that require improvement.

2. strengths
Briefly list one to two specific aspects of the writing that were executed correctly (e.g., "The plot had a clear beginning," "Punctuation at the end of sentences was mostly correct.").

3. areasForImprovement
This section is for a detailed critique.
- grammar: Pinpoint recurring grammatical errors or structural issues.
- vocabulary: Identify two to three common or simple words used in the text and provide more precise, sophisticated alternatives. Explain why the alternative is a better choice. For example, "The word 'nice' is vague. For a 'nice day', consider using 'pleasant' or 'serene' to be more descriptive."

4. correctedText
Provide the corrected version of the text. Use the following markdown for edits: wrap deleted words or punctuation in ~~strikethrough~~ and wrap added or corrected words in bold. Corrections should address all spelling, grammatical, and punctuation errors to meet the expected standard for this age level.

5. scoringBreakdown
Provide a score out of 10 for each of the following criteria. Do not provide a single, overall score.
- creativity: Score / 10 for creativity & originality.
- grammar: Score / 10 for grammar & punctuation.
- vocabulary: Score / 10 for vocabulary & word choice.
- structure: Score / 10 for structure & cohesion.

6. concludingStatement
Conclude with a final sentence that sets a clear expectation for the student's next piece of work.
`;