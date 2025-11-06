export interface ChatMessage {
  type: 'ai' | 'user';
  message: string;
  timestamp?: string;
}

export interface StartChatRequest {
  session_id: string;
  scenario: string;
}

export interface StartChatResponse {
  message: string;
  session_id: string;
  template_id: string;
  timestamp: string;
}

export interface SendMessageRequest {
  session_id: string;
  message: string;
}

export interface SendMessageResponse {
  message: string;
  session_id: string;
  template_id: string;
  timestamp: string;
}

export interface EvaluationRequest {
  session_id: string;
}
