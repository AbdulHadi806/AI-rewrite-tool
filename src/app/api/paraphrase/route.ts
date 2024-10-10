import { NextRequest } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { log } from 'console';

interface ApiKeyStatus {
  key: string;
  lastUsed: number;
  requestsThisMinute: number;
  requestsToday: number;
}

let apiKeys: ApiKeyStatus[] = [
  { key: process.env.NEXT_PUBLIC_GEMINI_API_KEY1 || '', lastUsed: 0, requestsThisMinute: 0, requestsToday: 0 },
  { key: process.env.NEXT_PUBLIC_GEMINI_API_KEY2 || '', lastUsed: 0, requestsThisMinute: 0, requestsToday: 0 },
  { key: process.env.NEXT_PUBLIC_GEMINI_API_KEY3 || '', lastUsed: 0, requestsThisMinute: 0, requestsToday: 0 },
  { key: process.env.NEXT_PUBLIC_GEMINI_API_KEY4 || '', lastUsed: 0, requestsThisMinute: 0, requestsToday: 0 },
].filter(keyStatus => keyStatus.key !== '');

const RPM_LIMIT = 15;
const RPD_LIMIT = 1500;
const MINUTE = 60 * 1000; // 1 minute in milliseconds
const DAY = 24 * 60 * 60 * 1000; // 1 day in milliseconds

function getAvailableApiKey(): ApiKeyStatus | null {
  const now = Date.now();
  for (let keyStatus of apiKeys) {
    if (now - keyStatus.lastUsed >= MINUTE) {
      keyStatus.requestsThisMinute = 0;
    }
    if (now - keyStatus.lastUsed >= DAY) {
      keyStatus.requestsToday = 0;
    }
    if (keyStatus.requestsThisMinute < RPM_LIMIT && keyStatus.requestsToday < RPD_LIMIT) {
      return keyStatus;
    }
  }
  return null;
}

async function makeRequest(input: string, tone: string, language: string, retries = 3): Promise<string> {
  if (retries === 0) {
    throw new Error('All API keys exhausted');
  }

  const apiKeyStatus = getAvailableApiKey();
  if (!apiKeyStatus) {
    await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
    return makeRequest(input, tone, language, retries - 1);
  }

  try {
    
    const genAI = new GoogleGenerativeAI(apiKeyStatus.key);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `You are a professional content writer. Your task is to rewrite the following text: ${input} according to a ${tone} tone. The output will be in ${language} language. Do not add emojis in the output unless explicitly said by the user. Your output length should approximately be equal to the input length of the user.`;

    const { response } = await model.generateContent(prompt);
    const text = await response.text();

    apiKeyStatus.lastUsed = Date.now();
    apiKeyStatus.requestsThisMinute++;
    apiKeyStatus.requestsToday++;

    return text;
  } catch (error: any) {
    console.error('Error during paraphrasing:', error);
    return makeRequest(input, tone, language, retries - 1);
  }
}

export async function POST(req: NextRequest) {
  try {
    const { input, tone, language } = await req.json();
    const output = await makeRequest(input, tone, language);
    return Response.json({ output });
  } catch (error: any) {
    console.error('Error in POST handler:', error);
    return Response.json({ error: 'An error occurred while generating the paraphrase. Please try again in a moment' }, { status: 500 });
  }
}