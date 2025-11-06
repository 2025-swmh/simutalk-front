import { Report, RightArrow } from '../../../assets';
import { theme } from '../../../styles';
import * as S from './style';

interface ReportComponentProps {
  title: string;
  synergyProfile: string;
  relationship: '상' | '중' | '하' | undefined;
  problemSolving: '상' | '중' | '하' | undefined;
}

const ReportComponent = ({
  title,
  synergyProfile,
  relationship,
  problemSolving,
}: ReportComponentProps) => {
  return (
    <S.ReportContainer>
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
    </S.ReportContainer>
  );
};

export default ReportComponent;
