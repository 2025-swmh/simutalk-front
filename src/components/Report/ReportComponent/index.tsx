import { useNavigate } from 'react-router-dom';
import { Report, RightArrow } from '../../../assets';
import { theme } from '../../../styles';
import Container from '../../Container';
import * as S from './style';

interface ReportComponentProps {
  title: string;
  synergyProfile: string;
  relationship: '상' | '중' | '하' | undefined;
  problemSolving: '상' | '중' | '하' | undefined;
  id?: number;
}

const ReportComponent = ({
  title,
  synergyProfile,
  relationship,
  problemSolving,
  id,
}: ReportComponentProps) => {
  const navigation = useNavigate();
  return (
    <Container
      width="70rem"
      padding="2.5rem 1.875rem 2.5rem 1.0625rem"
      display="flex"
      flexDirection="column"
      gap="0.625rem"
      hoverEffect={true}
      onClick={() => {
        navigation(`/report/${id}`);
      }}
    >
      <S.ReportHeader>
        <S.ReportTitle>
          <Report color={theme.color.zinc[500]} />
          <span>{title}</span>
          <S.SynergyContainer>{synergyProfile}</S.SynergyContainer>
        </S.ReportTitle>
        <RightArrow />
      </S.ReportHeader>
      <S.ReportContents>
        <span>
          관계 기여도: <S.AblityContainer level={relationship}>{relationship}</S.AblityContainer>
        </span>
        <span>
          문제 주도성:{' '}
          <S.AblityContainer level={problemSolving}>{problemSolving}</S.AblityContainer>
        </span>
      </S.ReportContents>
    </Container>
  );
};

export default ReportComponent;
