import Profile from '../../assets/Profile';
import * as S from './style';

interface ChatListItemProps {
  name?: string;
  message?: string;
}

const ChatListItem = ({ name, message }: ChatListItemProps) => {
  return (
    <S.ChatListContainer>
      <Profile />
      <S.ChatContent>
        <S.ChatName>{name || '홍길동'}</S.ChatName>
        <S.ChatMessage>
          {message || '안녕하세요! 만나서 반갑습니다. 제 이름은 홍길동입니다.'}
        </S.ChatMessage>
      </S.ChatContent>
    </S.ChatListContainer>
  );
};

export default ChatListItem;
