import { Bad, Good, LandMark, Report, Trophy } from '../../assets';
import { Container } from '../../components';
import { theme } from '../../styles';
import * as S from './style';

const ReportDetail = () => {
  const reportData = [
    { title: '협업 유형', icon: <LandMark /> },
    { title: '잘한 점', icon: <Good /> },
    { title: '부족한 점', icon: <Bad /> },
    { title: '개선 방법', icon: <Trophy /> },
    { title: '이력서 어필 포인트', icon: <Report color={theme.color.orange[600]} /> },
  ];
  return (
    <S.ReportDetailContainer>
      <S.ReportTitle>
        <div>백엔드 개발자와의 협업</div>
        <span>종합 분석 보고서</span>
      </S.ReportTitle>
      <S.ReportContent>
        {reportData.map((report) => (
          <Container key={report.title}>{report.icon}</Container>
        ))}
      </S.ReportContent>
    </S.ReportDetailContainer>
  );
};

export default ReportDetail;
