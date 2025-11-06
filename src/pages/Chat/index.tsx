import { useEffect, useRef, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Check } from '../../assets';
import { chatApi } from '../../lib/api';
import type { ChatMessage } from '../../types';
import * as S from './style';

const Chat = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [sessionId, setSessionId] = useState<string>('');
  const chatEndRef = useRef<HTMLDivElement>(null);

  // URL state에서 sessionId와 scenario 가져오기
  const stateSessionId = location.state?.sessionId;
  const scenario = location.state?.scenario;

  // sessionId와 scenario가 없으면 메인으로 리다이렉트
  useEffect(() => {
    if (!stateSessionId || !scenario) {
      toast.error('잘못된 접근입니다. 메인 페이지에서 시작해주세요.');
      navigate('/main');
    }
  }, [stateSessionId, scenario, navigate]);

  // 채팅 시작 API 호출
  const {
    data: startChatData,
    isLoading: isStarting,
    isError: isStartError,
  } = useQuery({
    queryKey: ['startChat', stateSessionId, scenario],
    queryFn: () =>
      chatApi.startChat({
        session_id: stateSessionId,
        scenario: scenario,
      }),
    refetchOnWindowFocus: false,
    retry: 1,
    enabled: !!stateSessionId && !!scenario,
  });

  // 채팅 시작 데이터 처리
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

  // 채팅 시작 에러 처리
  useEffect(() => {
    if (isStartError) {
      toast.error('채팅을 시작하는 중 오류가 발생했습니다.');
    }
  }, [isStartError]);

  // 메시지 전송 mutation
  const sendMessageMutation = useMutation({
    mutationFn: chatApi.sendMessage,
  });

  // 메시지 전송 성공 처리
  useEffect(() => {
    if (sendMessageMutation.isSuccess && sendMessageMutation.data) {
      setMessages((prev) => [
        ...prev,
        {
          type: 'ai',
          message: sendMessageMutation.data.message,
          timestamp: sendMessageMutation.data.timestamp,
        },
      ]);
    }
  }, [sendMessageMutation.isSuccess, sendMessageMutation.data]);

  // 메시지 전송 에러 처리
  useEffect(() => {
    if (sendMessageMutation.isError) {
      toast.error('메시지를 전송하는 중 오류가 발생했습니다.');
    }
  }, [sendMessageMutation.isError]);

  // 메시지 전송 핸들러
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

  // Enter 키 핸들러
  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  // 자동 스크롤
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <S.ChatContainer>
      <S.ChatContent>
        <S.ChatDetailContainer>
          {isStarting ? (
            <S.SpeechLabel>
              AI
              <S.AiSpeech>채팅을 시작하는 중...</S.AiSpeech>
            </S.SpeechLabel>
          ) : (
            messages.map((msg, index) =>
              msg.type === 'ai' ? (
                <S.SpeechLabel key={index}>
                  AI
                  <S.AiSpeech>{msg.message}</S.AiSpeech>
                </S.SpeechLabel>
              ) : (
                <S.UserSpeech key={index}>{msg.message}</S.UserSpeech>
              ),
            )
          )}
          {sendMessageMutation.isPending && (
            <S.SpeechLabel>
              AI
              <S.AiSpeech>답변을 생성하는 중...</S.AiSpeech>
            </S.SpeechLabel>
          )}
          <div ref={chatEndRef} />
        </S.ChatDetailContainer>
        <S.InputContainer>
          <S.ChatInput
            placeholder="여기에 입력해주세요."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            disabled={sendMessageMutation.isPending || !sessionId}
          />
          <S.SendButton
            onClick={handleSendMessage}
            disabled={sendMessageMutation.isPending || !sessionId || !inputValue.trim()}
          >
            <Check />
          </S.SendButton>
        </S.InputContainer>
      </S.ChatContent>
    </S.ChatContainer>
  );
};

export default Chat;
