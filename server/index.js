import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { GoogleGenerativeAI } from '@google/generative-ai';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Gemini Configuration
if (!process.env.GEMINI_API_KEY) {
    console.error('FATAL ERROR: GEMINI_API_KEY is not defined in server/.env');
    process.exit(1);
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// ─── Routes ────────────────────────────────────────────────────────────────────

// Health check
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'ok', message: 'Server is running' });
});

// Start Interview
app.post('/api/interview/start', async (req, res) => {
    const { role, level, topic } = req.body;

    if (!role || !level || !topic) {
        return res.status(400).json({ error: 'role, level, and topic are required.' });
    }

    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const prompt = `You are a professional interviewer conducting a mock interview.
You are interviewing a candidate for the role of "${role}" at the "${level}" level.
The focus area for this session is: "${topic}".

RULES:
1. Briefly introduce yourself (1–2 sentences).
2. Ask only ONE interview question to start.
3. Keep a professional, conversational tone.

IMPORTANT: Respond ONLY with a valid JSON object in the following exact format. Do NOT include markdown, backticks, or any text outside the JSON:
{"message": "Your introduction and first question here.", "isComplete": false}`;

        const result = await model.generateContent(prompt);
        const text = result.response.text().replace(/```json|```/g, '').trim();

        try {
            return res.json(JSON.parse(text));
        } catch {
            return res.json({ message: text, isComplete: false });
        }

    } catch (error) {
        console.error('Gemini /start Error:', error.message);
        return res.status(500).json({
            error: 'Failed to start interview session',
            details: error.message,
        });
    }
});

// Next Question
app.post('/api/interview/next', async (req, res) => {
    const { userMessage, role, level, topic, questionCount } = req.body;

    if (!userMessage || !role) {
        return res.status(400).json({ error: 'userMessage and role are required.' });
    }

    try {
        const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

        const isNearEnd = (questionCount || 0) >= 5;

        const prompt = `You are a professional interviewer for the role of "${role}" (${level} level), focusing on "${topic}".
The candidate just answered: "${userMessage}"

${isNearEnd
    ? 'This was their final question. Provide brief, constructive closing feedback and thank them for their time. Set isComplete to true.'
    : 'Briefly acknowledge their answer (1 sentence), then ask the next relevant interview question.'
}

IMPORTANT: Respond ONLY with a valid JSON object. No markdown, no backticks, no text outside the JSON:
{"message": "Your response here.", "isComplete": ${isNearEnd}}`;

        const result = await model.generateContent(prompt);
        const text = result.response.text().replace(/```json|```/g, '').trim();

        try {
            return res.json(JSON.parse(text));
        } catch {
            return res.json({ message: text, isComplete: isNearEnd });
        }

    } catch (error) {
        console.error('Gemini /next Error:', error.message);
        return res.status(500).json({
            error: 'Failed to get next question',
            details: error.message,
        });
    }
});

// ─── Start Server ───────────────────────────────────────────────────────────────

const server = app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
    console.log(`🔍 Health check: http://localhost:${PORT}/health`);
});

server.on('error', (e) => {
    if (e.code === 'EADDRINUSE') {
        console.error(`❌ Port ${PORT} is already in use. Run this to free it:`);
        console.error(`   npx kill-port ${PORT}`);
    } else {
        console.error('Server error:', e);
    }
});
