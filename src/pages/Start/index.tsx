import { Logo } from '../../assets';
import { useSession } from '../../hooks';
import * as S from './style';

const Start = () => {
  const { handleStartSession, isCreating } = useSession();

  return (
    <S.StartContainer>
      <S.Content>
        <Logo />
        <S.Description>실전 같은 대화 연습, 지금 시작하세요</S.Description>
        <S.StartButton onClick={handleStartSession} disabled={isCreating}>
          {isCreating ? '세션 생성 중...' : '시작하기'}
        </S.StartButton>
      </S.Content>
    </S.StartContainer>
  );
};

export default Start;
