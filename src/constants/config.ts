export const CHAT_CONFIG = {
  MIN_MESSAGE_COUNT: 3,
} as const;

export const API_CONFIG = {
  BASIC_API_URL: import.meta.env.VITE_BASIC_API_URL || 'http://localhost:8080',
  AI_API_URL: import.meta.env.VITE_AI_API_URL || 'http://localhost:8000',
} as const;

export const STORAGE_KEYS = {
  SESSION_ID: 'sessionId',
} as const;
