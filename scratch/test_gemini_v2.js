import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config({ path: './server/.env' });

const API_KEY = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(API_KEY);

async function checkKey() {
    console.log("Checking Key:", API_KEY ? "Present" : "Missing");
    const versions = ['v1', 'v1beta'];
    const models = ['gemini-1.5-flash', 'gemini-pro', 'gemini-1.5-flash-latest'];

    for (const v of versions) {
        for (const m of models) {
            try {
                console.log(`Testing ${m} on ${v}...`);
                const model = genAI.getGenerativeModel({ model: m }, { apiVersion: v });
                const result = await model.generateContent("test");
                console.log(`✅ SUCCESS: ${m} works on ${v}`);
                return; // Stop if we find one that works
            } catch (e) {
                console.log(`❌ FAILED: ${m} on ${v} - ${e.message}`);
            }
        }
    }
}

checkKey();
