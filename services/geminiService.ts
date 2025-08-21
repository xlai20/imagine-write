
import { GoogleGenAI, Type, GenerateContentResponse } from "@google/genai";
import { Feedback } from "../types";
import { generateDynamicWritingPrompt, FEEDBACK_SYSTEM_INSTRUCTION } from "../data/prompts";

const API_KEY = process.env.API_KEY;

if (!API_KEY) {
  console.warn("API_KEY is not set. Using mock data. Please set the API_KEY environment variable for full functionality.");
}

const ai = new GoogleGenAI({ apiKey: API_KEY });

const MOCK_IMAGE_URL = 'https://picsum.photos/seed/mockimage/800/500';

const generateMockFeedback = (story: string): Feedback => ({
    score: Math.floor(Math.random() * 4) + 7, // Score between 7 and 10
    message: "Fantastic writing!",
    correctedText: story.replace(/ a /g, " a **very** "),
});

export const generateWritingPrompt = async (): Promise<{ prompt: string; theme: string; topic: string; }> => {
  if (!API_KEY) {
    return { 
        prompt: "A friendly dragon flying a colorful kite on a sunny day.",
        theme: "Fantasy & Adventure",
        topic: "A Friendly Dragon"
    };
  }
  try {
    const { aiPrompt, themeName, topicTitle } = generateDynamicWritingPrompt();
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: aiPrompt,
    });
    return { 
        prompt: response.text.trim(), 
        theme: themeName, 
        topic: topicTitle 
    };
  } catch (error) {
    console.error("Error generating writing prompt:", error);
    return {
        prompt: "A group of animals having a picnic on the moon.",
        theme: "Fantasy & Adventure",
        topic: "Space Picnic"
    };
  }
};

export const generateImage = async (prompt: string): Promise<string> => {
    if (!API_KEY) {
        return MOCK_IMAGE_URL;
    }
    try {
        const response = await ai.models.generateImages({
            model: 'imagen-3.0-generate-002',
            prompt: prompt,
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

export const getFeedbackForStory = async (story: string): Promise<Feedback> => {
    if (!API_KEY) {
        return generateMockFeedback(story);
    }
    try {
        const response: GenerateContentResponse = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: `Here is the story: "${story}"`,
            config: {
                systemInstruction: FEEDBACK_SYSTEM_INSTRUCTION,
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.OBJECT,
                    properties: {
                        score: {
                            type: Type.INTEGER,
                            description: "A score from 1 to 10 for the story.",
                        },
                        message: {
                            type: Type.STRING,
                            description: "A short, encouraging message for the child.",
                        },
                        correctedText: {
                            type: Type.STRING,
                            description: "The original text with corrections in markdown format (~~delete~~, **add**).",
                        },
                    },
                    required: ["score", "message", "correctedText"],
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