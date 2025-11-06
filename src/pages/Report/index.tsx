import { useLocation } from 'react-router-dom';
import { EmptyReport, ReportComponent } from '../../components';
import { LOADING_MESSAGES } from '../../constants';
import { useReportList } from '../../hooks';
import * as S from './style';

type ReportGrade = '상' | '중' | '하';

const Report = () => {
  const location = useLocation();
  const sessionId = location.state?.sessionId;

  const { reports, isLoading } = useReportList({ sessionId });

  if (isLoading) {
    return (
      <S.Wrapper>
        <S.Container>
          <S.Title>내 보고서</S.Title>
          <p>{LOADING_MESSAGES.LOADING}</p>
        </S.Container>
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>내 보고서</S.Title>
        <S.ReportList>
          {reports?.length === 0 ? (
            <EmptyReport />
          ) : (
            reports?.map((report) => (
              <ReportComponent
                key={report.id}
                title={report.title}
                relationship={report.scoreRelationship as ReportGrade}
                problemSolving={report.scoreProblem as ReportGrade}
                synergyProfile={report.typeKorean}
                id={report.id}
              />
            ))
          )}
        </S.ReportList>
      </S.Container>
    </S.Wrapper>
  );
};

export default Report;
