import { useEffect } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { EmptyReport, ReportComponent } from '../../components';
import { basicApi } from '../../lib';
import * as S from './style';

type ReportGrade = '상' | '중' | '하';
interface Report {
  id: number;
  title: string;
  typeKorean: string;
  scoreRelationship: string;
  scoreProblem: string;
}

const Report = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const stateSessionId = location.state?.sessionId;

  useEffect(() => {
    if (!stateSessionId) {
      toast.error('잘못된 접근입니다. 메인 페이지에서 시작해주세요.');
      navigate('/main');
    }
  }, [stateSessionId, navigate]);

  const { data, isLoading, isError, error } = useQuery<Report[]>({
    queryKey: ['reports', stateSessionId],
    queryFn: async () => {
      const res = await basicApi.get<Report[]>(`/report/list?sessionId=${stateSessionId}`);
      return res.data;
    },
    refetchOnWindowFocus: false,
    retry: 1,
    enabled: !!stateSessionId,
  });

  useEffect(() => {
    if (isError) {
      toast.error('보고서를 불러오는 중 오류가 발생했습니다.');
      console.error(error);
    }
  }, [isError, error]);

  if (isLoading) {
    return (
      <S.Wrapper>
        <S.Container>
          <S.Title>내 보고서</S.Title>
          <p>불러오는 중...</p>
        </S.Container>
      </S.Wrapper>
    );
  }

  return (
    <S.Wrapper>
      <S.Container>
        <S.Title>내 보고서</S.Title>
        <S.ReportList>
          {data?.length === 0 ? (
            <EmptyReport />
          ) : (
            data?.map((report) => (
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
