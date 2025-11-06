import { Check } from '../../assets';
import ChatListItem from '../../components/ChatListItem';
import * as S from './style';

const Chat = () => {
  const chatList = [
    {
      id: 1,
      name: '홍길동',
      message: '안녕하세요! 프론트엔드 개발자와의 협업에 대해 이야기해봐요.',
    },
  ];

  return (
    <S.ChatContainer>
      <S.ChatListContainer>
        {chatList.map((chat) => (
          <ChatListItem key={chat.id} name={chat.name} message={chat.message} />
        ))}
      </S.ChatListContainer>
      <S.RightColumn>
        <S.ChatDetailContainer>
          <S.SpeechLabel>
            홍길동
            <S.AiSpeech>안녕하세요! 무엇을 도와드릴까요?</S.AiSpeech>
          </S.SpeechLabel>
          <S.UserSpeech>안녕하세요! 프론트엔드 개발자와의 협업에 대해 이야기해봐요.</S.UserSpeech>
        </S.ChatDetailContainer>
        <S.InputContainer>
          <S.ChatInput placeholder="여기에 입력해주세요." />
          <S.SendButton>
            <Check />
          </S.SendButton>
        </S.InputContainer>
      </S.RightColumn>
    </S.ChatContainer>
  );
};

export default Chat;
