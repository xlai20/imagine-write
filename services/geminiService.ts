
import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import { Feedback } from "../types";
import { generateDynamicWritingPrompt, getFeedbackSystemInstruction } from "../data/prompts";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY is not set. Using mock data. Please set the API_KEY environment variable for full functionality.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const MOCK_IMAGE_URL = 'https://picsum.photos/seed/mockimage/800/500';

const generateMockFeedback = (story: string): Feedback => ({
    overallAssessment: "This is a strong foundational piece with a clear narrative. The primary areas for development are in vocabulary expansion and grammatical precision.",
    strengths: "The plot is imaginative and the story structure is logical.",
    areasForImprovement: {
      grammar: "Pay attention to subject-verb agreement. For example, 'he go' should be 'he goes'.",
      vocabulary: "The word 'good' was used multiple times. Consider more descriptive words like 'wonderful', 'excellent', or 'fantastic'."
    },
    correctedText: story.replace(/good/g, "~~good~~ **excellent**"),
    scoringBreakdown: {
      creativity: 8,
      grammar: 7,
      vocabulary: 6,
      structure: 8
    },
    concludingStatement: "A commendable effort. For the next submission, focus on applying more varied vocabulary."
});

export const generateWritingPrompt = async (age: number): Promise<{ prompt: string; theme: string; topic: string; keywords: string[]; }> => {
  if (!API_KEY) {
    return { 
        prompt: "A friendly dragon flying a colorful kite on a sunny day.",
        theme: "Fantasy & Adventure",
        topic: "A Friendly Dragon",
        keywords: ["dragon", "fly", "kite", "sunny", "gentle", "friend"]
    };
  }
  try {
    const { aiPrompt, themeName, topicTitle, keywords } = generateDynamicWritingPrompt(age);
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: aiPrompt,
    });
    return { 
        prompt: response.text.trim(), 
        theme: themeName, 
        topic: topicTitle,
        keywords: keywords,
    };
  } catch (error) {
    console.error("Error generating writing prompt:", error);
    return {
        prompt: "A group of animals having a picnic on the moon.",
        theme: "Fantasy & Adventure",
        topic: "Space Picnic",
        keywords: ["animals", "picnic", "moon", "rocket", "stars", "fun"]
    };
  }
};

export const generateImage = async (prompt: string, age: number): Promise<string> => {
    if (!API_KEY) {
        return MOCK_IMAGE_URL;
    }
    try {
        const finalPrompt = `A whimsical and colorful illustration suitable for a ${age}-year-old child. Scene: ${prompt}`;
        const response = await ai.models.generateImages({
            model: 'imagen-3.0-generate-002',
            prompt: finalPrompt,
            config: {
                numberOfImages: 1,
                outputMimeType: 'image/jpeg',
                aspectRatio: '16:9',
            },
        });

        if (response.generatedImages && response.generatedImages.length > 0) {
            const base64ImageBytes = response.generatedImages[0].image.imageBytes;
            return `data:image/jpeg;base64,${base64ImageBytes}`;
        }
        throw new Error("No image generated");

    } catch (error) {
        console.error("Error generating image:", error);
        return MOCK_IMAGE_URL;
    }
};

export const getFeedbackForStory = async (story: string, age: number): Promise<Feedback> => {
    if (!API_KEY) {
        return generateMockFeedback(story);
    }
    try {
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Here is the story: "${story}"`,
            config: {
                systemInstruction: getFeedbackSystemInstruction(age),
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        overallAssessment: { type: Type.STRING },
                        strengths: { type: Type.STRING },
                        areasForImprovement: {
                            type: Type.OBJECT,
                            properties: {
                                grammar: { type: Type.STRING },
                                vocabulary: { type: Type.STRING },
                            },
                            required: ["grammar", "vocabulary"],
                        },
                        correctedText: { type: Type.STRING },
                        scoringBreakdown: {
                            type: Type.OBJECT,
                            properties: {
                                creativity: { type: Type.INTEGER },
                                grammar: { type: Type.INTEGER },
                                vocabulary: { type: Type.INTEGER },
                                structure: { type: Type.INTEGER },
                            },
                            required: ["creativity", "grammar", "vocabulary", "structure"],
                        },
                        concludingStatement: { type: Type.STRING },
                    },
                    required: ["overallAssessment", "strengths", "areasForImprovement", "correctedText", "scoringBreakdown", "concludingStatement"],
                },
            },
        });

        const jsonStr = response.text.trim();
        const feedback = JSON.parse(jsonStr) as Feedback;
        return feedback;

    } catch (error) {
        console.error("Error getting feedback:", error);
        return generateMockFeedback(story);
    }
};