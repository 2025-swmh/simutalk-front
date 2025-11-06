import { Report } from '../../../assets';
import * as S from './style';

const EmptyReport = () => {
  return (
    <S.EmptyReportContainer>
      <Report size="50" />
      <span>아직 생성된 보고서가 없습니다</span>
    </S.EmptyReportContainer>
  );
};
export default EmptyReport;
