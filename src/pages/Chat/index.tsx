import { Check } from '../../assets';
import * as S from './style';

const Chat = () => {
  return (
    <S.ChatContainer>
      <S.ChatContent>
        <S.ChatDetailContainer>
          <S.SpeechLabel>
            AI
            <S.AiSpeech>안녕하세요! 무엇을 도와드릴까요?</S.AiSpeech>
          </S.SpeechLabel>
          <S.UserSpeech>안녕하세요! 프론트엔드 개발자와의 협업에 대해 이야기해봐요.</S.UserSpeech>
          <S.SpeechLabel>
            AI
            <S.AiSpeech>
              좋아요! 프론트엔드 개발자와 협업할 때 가장 중요한 것 중 하나는 API 설계와 데이터
              구조에 대한 이해입니다. 현재 어떤 프로젝트를 진행하고 계신가요?
            </S.AiSpeech>
          </S.SpeechLabel>
        </S.ChatDetailContainer>
        <S.InputContainer>
          <S.ChatInput placeholder="여기에 입력해주세요." />
          <S.SendButton>
            <Check />
          </S.SendButton>
        </S.InputContainer>
      </S.ChatContent>
    </S.ChatContainer>
  );
};

export default Chat;
