import axios from 'axios';
import type {
  SendMessageRequest,
  SendMessageResponse,
  StartChatRequest,
  StartChatResponse,
} from '../types/chat';

const BASIC_API_URL = import.meta.env.VITE_BASIC_API_URL || 'http://localhost:8080';
const AI_API_URL = import.meta.env.VITE_AI_API_URL || 'http://localhost:8000';

export const basicApi = axios.create({
  baseURL: BASIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const aiApi = axios.create({
  baseURL: AI_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const chatApi = {
  startChat: async (request: StartChatRequest): Promise<StartChatResponse> => {
    const { data } = await aiApi.post<StartChatResponse>('/api/v1/question/start', request);
    return data;
  },

  sendMessage: async (request: SendMessageRequest): Promise<SendMessageResponse> => {
    const { data } = await aiApi.post<SendMessageResponse>('/api/v1/question/answer', request);
    return data;
  },
};
