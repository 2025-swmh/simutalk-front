import { EmptyReport, ReportComponent } from '../../components';
import * as S from './style';

type ReportGrade = '상' | '중' | '하';

interface DummyReport {
  title: string;
  relationship: ReportGrade;
  problemSolving: ReportGrade;
  synergyProfile: string;
}

const dummyReports: DummyReport[] = [
  {
    title: '백엔드 개발자와의 협업',
    relationship: '상',
    problemSolving: '중',
    synergyProfile: '관계 안정화 촉진자',
  },
  {
    title: '프론트 개발자와의 협업',
    relationship: '하',
    problemSolving: '하',
    synergyProfile: '관계 안정화 촉진자',
  },
];

const Report = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>내 보고서</S.Title>
        <S.ReportList>
          {dummyReports.length === 0 ? (
            <EmptyReport />
          ) : (
            dummyReports.map((report, idx) => (
              <ReportComponent
                key={idx}
                title={report.title}
                relationship={report.relationship}
                problemSolving={report.problemSolving}
                synergyProfile={report.synergyProfile}
              />
            ))
          )}
        </S.ReportList>
      </S.Container>
    </S.Wrapper>
  );
};

export default Report;
