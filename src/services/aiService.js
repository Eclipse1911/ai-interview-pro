import { GoogleGenerativeAI } from "@google/generative-ai";

// Ensure the API key is clean
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY?.trim();

if (!API_KEY || API_KEY === "PASTE_YOUR_GEMINI_API_KEY_HERE") {
    console.warn("Gemini API Key is missing! Check your .env file.");
}

// Use the stable v1 API version as v1beta seems to be returning 404 for these models in your region
const genAI = new GoogleGenerativeAI(API_KEY);

const getModel = () => {
    // gemini-1.5-flash is the most common and robust model name
    return genAI.getGenerativeModel({ model: "gemini-1.5-flash" }, { apiVersion: 'v1' });
};

export const startInterviewSession = async (role, level, topic) => {
    try {
        const model = getModel();
        
        const prompt = `You are a world-class HR and Technical Interviewer. 
        You are interviewing a candidate for a ${role} position at a ${level} level. 
        Focus on: ${topic}.
        
        STRICT RULES:
        1. Start the interview by introducing yourself briefly and asking the FIRST question.
        2. Ask ONE question at a time.
        3. Keep your responses professional but conversational.
        4. After roughly 5-7 questions, conclude the interview.
        
        IMPORTANT: Your entire response must be ONLY a valid JSON object. 
        Do not include any greeting text outside the JSON.
        
        Format:
        {
          "message": "Your introductory text and the first question.",
          "isComplete": false
        }`;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        let text = response.text();
        
        // Clean JSON if Gemini wraps it in markdown
        text = text.replace(/```json/g, "").replace(/```/g, "").trim();
        
        try {
            return JSON.parse(text);
        } catch (parseError) {
            console.error("JSON Parsing failed. Attempting to interpret raw text.");
            return { message: text, isComplete: false };
        }
    } catch (error) {
        console.error("Gemini API Error in startInterviewSession:", error);
        throw error;
    }
};

export const getNextQuestion = async (chatHistory, userMessage, role, level, topic) => {
    try {
        const model = getModel();
        const chat = model.startChat({
            history: chatHistory,
            generationConfig: {
                maxOutputTokens: 1000,
            },
        });

        const prompt = `The candidate said: "${userMessage}". 
        Role: ${role}, Level: ${level}, Topic: ${topic}.
        
        Based on their answer:
        1. Provide brief feedback if necessary.
        2. Ask the next logical interview question.
        3. If you have asked enough questions (5+), set "isComplete" to true and wrap up.
        
        STRICT RULES:
        - Output ONLY a JSON object.
        - No markdown formatting outside the JSON.
        
        Format:
        {
          "message": "Your reply and following question",
          "isComplete": false
        }`;

        const result = await chat.sendMessage(prompt);
        const response = await result.response;
        let text = response.text();
        
        text = text.replace(/```json/g, "").replace(/```/g, "").trim();
        
        try {
            return JSON.parse(text);
        } catch (parseError) {
            return { message: text, isComplete: false };
        }
    } catch (error) {
        console.error("Gemini API Error in getNextQuestion:", error);
        throw error;
    }
};
