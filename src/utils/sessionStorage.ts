import { STORAGE_KEYS } from '../constants';

export const sessionStorage = {
  getSessionId: (): string | null => {
    return localStorage.getItem(STORAGE_KEYS.SESSION_ID);
  },

  setSessionId: (sessionId: string): void => {
    localStorage.setItem(STORAGE_KEYS.SESSION_ID, sessionId);
  },

  clearSessionId: (): void => {
    localStorage.removeItem(STORAGE_KEYS.SESSION_ID);
  },

  hasSessionId: (): boolean => {
    return !!localStorage.getItem(STORAGE_KEYS.SESSION_ID);
  },
};
