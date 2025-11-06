import { useLocation } from 'react-router-dom';
import { Check } from '../../assets';
import { Spinner } from '../../components';
import { CHAT_CONFIG, LOADING_MESSAGES } from '../../constants';
import { useChat } from '../../hooks';
import * as S from './style';

const Chat = () => {
  const location = useLocation();
  const sessionId = location.state?.sessionId;
  const scenario = location.state?.scenario;

  const {
    messages,
    inputValue,
    sessionId: currentSessionId,
    isStarting,
    chatEndRef,
    isSending,
    isEnding,
    setInputValue,
    handleSendMessage,
    handleEndChat,
    handleKeyPress,
  } = useChat({ sessionId, scenario });

  const userMessageCount = messages.filter((msg) => msg.type === 'user').length;
  const canEndChat = userMessageCount >= CHAT_CONFIG.MIN_MESSAGE_COUNT;

  return (
    <S.ChatContainer>
      {isEnding && (
        <S.LoadingOverlay>
          <S.LoadingContent>
            <Spinner size="large" color="orange" />
            <S.LoadingText>보고서를 생성하고 있습니다...</S.LoadingText>
            <S.LoadingSubText>잠시만 기다려주세요</S.LoadingSubText>
          </S.LoadingContent>
        </S.LoadingOverlay>
      )}
      <S.ChatContent>
        <S.ChatDetailContainer>
          {isStarting ? (
            <S.SpeechLabel>
              AI
              <S.AiSpeech>{LOADING_MESSAGES.CHAT_STARTING}</S.AiSpeech>
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
          {isSending && (
            <S.SpeechLabel>
              AI
              <S.AiSpeech>{LOADING_MESSAGES.AI_GENERATING}</S.AiSpeech>
            </S.SpeechLabel>
          )}
          <div ref={chatEndRef} />
        </S.ChatDetailContainer>
        <S.InputContainer>
          <S.InputWrapper>
            <S.InputRow>
              <S.ChatInput
                placeholder="여기에 입력해주세요."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                disabled={isSending || !currentSessionId}
              />
              <S.SendButton
                onClick={handleSendMessage}
                disabled={isSending || !currentSessionId || !inputValue.trim()}
              >
                <Check />
              </S.SendButton>
            </S.InputRow>
            <S.EndChatButton
              onClick={handleEndChat}
              disabled={isEnding || !currentSessionId || !canEndChat}
            >
              채팅 그만하기 <S.ColorPointer>→</S.ColorPointer>
            </S.EndChatButton>
          </S.InputWrapper>
        </S.InputContainer>
      </S.ChatContent>
    </S.ChatContainer>
  );
};

export default Chat;
