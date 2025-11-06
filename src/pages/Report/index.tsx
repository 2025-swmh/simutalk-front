import { EmptyReport } from '../../components';
import * as S from './style';

const Report = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>내 보고서</S.Title>
        <EmptyReport />;
      </S.Container>
    </S.Wrapper>
  );
};

export default Report;
