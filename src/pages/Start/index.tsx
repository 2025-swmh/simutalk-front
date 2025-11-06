import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as S from './style';

const Start = () => {
  const navigate = useNavigate();

  const handleStartClick = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_BASIC_API_URL}/session`);
      console.log('Session response:', response.data);

      if (response.data?.sessionId) {
        localStorage.setItem('sessionId', response.data.sessionId);
      }

      navigate('/main');
    } catch (error) {
      console.error('Session request failed:', error);
      toast.error('세션 생성에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <S.StartContainer>
      <S.Content>
        <S.Title>SimuTalk</S.Title>
        <S.Description>실전 같은 대화 연습, 지금 시작하세요</S.Description>
        <S.StartButton onClick={handleStartClick}>시작하기</S.StartButton>
      </S.Content>
    </S.StartContainer>
  );
};

export default Start;
