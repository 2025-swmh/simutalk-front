import { useEffect, useRef, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { CHAT_CONFIG, ERROR_MESSAGES, INFO_MESSAGES, SUCCESS_MESSAGES } from '../constants';
import { chatApi } from '../lib/api';
import type { ChatMessage } from '../types';

interface UseChatParams {
  sessionId: string | null;
  scenario: string | null;
}

export const useChat = ({ sessionId: stateSessionId, scenario }: UseChatParams) => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [sessionId, setSessionId] = useState<string>('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Validate session
  useEffect(() => {
    if (!stateSessionId) {
      toast.error(ERROR_MESSAGES.INVALID_ACCESS);
      navigate('/main');
    }
  }, [stateSessionId, navigate]);

  // Start chat query
  const {
    data: startChatData,
    isLoading: isStarting,
    isError: isStartError,
  } = useQuery({
    queryKey: ['startChat', stateSessionId, scenario],
    queryFn: () => {
      const request: { session_id: string; scenario?: string } = {
        session_id: stateSessionId!,
      };
      if (scenario) {
        request.scenario = scenario;
      }
      return chatApi.startChat(request);
    },
    refetchOnWindowFocus: false,
    retry: 1,
    enabled: !!stateSessionId,
  });

  // Handle start chat data
  useEffect(() => {
    if (startChatData) {
      setSessionId(startChatData.session_id);
      setMessages([
        {
          type: 'ai',
          message: startChatData.message,
          timestamp: startChatData.timestamp,
        },
      ]);
    }
  }, [startChatData]);

  // Handle start chat error
  useEffect(() => {
    if (isStartError) {
      toast.error(ERROR_MESSAGES.CHAT_START_FAILED);
    }
  }, [isStartError]);

  // Send message mutation
  const sendMessageMutation = useMutation({
    mutationFn: chatApi.sendMessage,
    onSuccess: (data) => {
      setMessages((prev) => [
        ...prev,
        {
          type: 'ai',
          message: data.message,
          timestamp: data.timestamp,
        },
      ]);
    },
    onError: () => {
      toast.error(ERROR_MESSAGES.MESSAGE_SEND_FAILED);
    },
  });

  // End chat mutation
  const endChatMutation = useMutation({
    mutationFn: chatApi.endChat,
    onSuccess: () => {
      toast.success(SUCCESS_MESSAGES.CHAT_ENDED);
      navigate('/report', { state: { sessionId } });
    },
    onError: () => {
      toast.error(ERROR_MESSAGES.CHAT_END_FAILED);
    },
  });

  // Handle send message
  const handleSendMessage = () => {
    if (!inputValue.trim() || !sessionId) return;

    const userMessage = inputValue.trim();
    setMessages((prev) => [
      ...prev,
      {
        type: 'user',
        message: userMessage,
      },
    ]);
    setInputValue('');

    sendMessageMutation.mutate({
      session_id: sessionId,
      message: userMessage,
    });
  };

  // Handle end chat
  const handleEndChat = () => {
    if (!sessionId) return;

    const userMessageCount = messages.filter((msg) => msg.type === 'user').length;

    if (userMessageCount < CHAT_CONFIG.MIN_MESSAGE_COUNT) {
      toast.warning(
        INFO_MESSAGES.MIN_MESSAGE_REQUIRED(userMessageCount, CHAT_CONFIG.MIN_MESSAGE_COUNT),
      );
      return;
    }

    if (window.confirm('채팅을 종료하시겠습니까?')) {
      endChatMutation.mutate(sessionId);
    }
  };

  // Handle key press
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // Auto scroll
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return {
    messages,
    inputValue,
    sessionId,
    isStarting,
    chatEndRef,
    isSending: sendMessageMutation.isPending,
    isEnding: endChatMutation.isPending,
    setInputValue,
    handleSendMessage,
    handleEndChat,
    handleKeyPress,
  };
};
