import axios, { type AxiosError } from 'axios';
import { API_CONFIG } from '../constants';
import type {
  SendMessageRequest,
  SendMessageResponse,
  StartChatRequest,
  StartChatResponse,
} from '../types/chat';

export const basicApi = axios.create({
  baseURL: API_CONFIG.BASIC_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

export const aiApi = axios.create({
  baseURL: API_CONFIG.AI_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 30000,
});

// Response interceptors for error handling
basicApi.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    console.error('Basic API Error:', error);
    return Promise.reject(error);
  },
);

aiApi.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    console.error('AI API Error:', error);
    return Promise.reject(error);
  },
);

export const sessionApi = {
  createSession: async (): Promise<{ sessionId: string }> => {
    try {
      const { data } = await basicApi.post<{ sessionId: string }>('/session');
      return data;
    } catch (error) {
      console.error('Session creation failed:', error);
      throw error;
    }
  },

  setTemplate: async (sessionId: string, template: string): Promise<void> => {
    try {
      await aiApi.post('/api/v1/session/template', {
        session_id: sessionId,
        template,
      });
    } catch (error) {
      console.error('Template setting failed:', error);
      throw error;
    }
  },
};

export const chatApi = {
  startChat: async (request: StartChatRequest): Promise<StartChatResponse> => {
    try {
      const { data } = await aiApi.post<StartChatResponse>('/api/v1/question/start', request);
      return data;
    } catch (error) {
      console.error('Chat start failed:', error);
      throw error;
    }
  },

  sendMessage: async (request: SendMessageRequest): Promise<SendMessageResponse> => {
    try {
      const { data } = await aiApi.post<SendMessageResponse>('/api/v1/question/answer', request);
      return data;
    } catch (error) {
      console.error('Message send failed:', error);
      throw error;
    }
  },

  endChat: async (sessionId: string): Promise<void> => {
    try {
      await aiApi.post('/api/v1/evaluation', { session_id: sessionId });
    } catch (error) {
      console.error('Chat end failed:', error);
      throw error;
    }
  },
};

export const reportApi = {
  getReportList: async (sessionId: string) => {
    try {
      const { data } = await basicApi.get(`/report/list?sessionId=${sessionId}`);
      return data;
    } catch (error) {
      console.error('Report list fetch failed:', error);
      throw error;
    }
  },

  getReportDetail: async (reportId: string) => {
    try {
      const { data } = await basicApi.get(`/report/${reportId}`);
      return data;
    } catch (error) {
      console.error('Report detail fetch failed:', error);
      throw error;
    }
  },
};
