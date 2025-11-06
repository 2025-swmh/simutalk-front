import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import { Bad, Good, Report, Trophy } from '../../assets';
import { ReportFeedback, ReportSynergy } from '../../components';
import { basicApi } from '../../lib';
import { theme } from '../../styles';
import * as S from './style';

interface ReportDetail {
  id: number;
  title: string;
  evaluationJson: string;
  typeKorean: string | null;
  scoreRelationship: string | null;
  scoreProblem: string | null;
}

interface Evaluation {
  session_id: string;
  title: string;
  template_type: string;
  collaboration_profile: {
    type_korean: string;
    type_english: string;
    description_summary: string;
    analysis_scores: {
      relationship_contribution: string;
      problem_leadership: string;
    };
  };
  feedback: {
    good_points: { area: string; detail: string }[];
    improvement_points: { area: string; detail: string; action_plan: string }[];
  };
  appeal_recommendation: {
    core_keywords: string[];
    example_statements: { category: string; statement: string }[];
  };
}

const ReportDetail = () => {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, isError } = useQuery<ReportDetail>({
    queryKey: ['reportDetail', id],
    queryFn: async () => {
      const res = await basicApi.get<ReportDetail>(`/report/${id}`);
      return res.data;
    },
    enabled: !!id,
  });

  if (isLoading) return <div>불러오는 중...</div>;
  if (isError || !data) return <div>오류가 발생했습니다.</div>;

  // 👇 evaluationJson 문자열을 객체로 변환
  const evaluation: Evaluation = JSON.parse(data.evaluationJson);

  // 피드백 항목 추출
  const goodPoints = evaluation.feedback.good_points.map((p) => p.detail);
  const improvementPoints = evaluation.feedback.improvement_points.map((p) => p.detail);
  const actionPlans = evaluation.feedback.improvement_points.map((p) => p.action_plan);
  const resumeTips = evaluation.appeal_recommendation.example_statements.map((p) => p.statement);

  const reportData = [
    { title: '잘한 점', icon: <Good />, desc: goodPoints },
    { title: '부족한 점', icon: <Bad />, desc: improvementPoints },
    { title: '개선 방법', icon: <Trophy />, desc: actionPlans },
    {
      title: '이력서 어필 포인트',
      icon: <Report color={theme.color.orange[600]} />,
      desc: resumeTips,
    },
  ];

  const profile = evaluation.collaboration_profile;

  return (
    <S.Wrapper>
      <S.ReportDetailContainer>
        <S.ReportTitle>
          <div>{evaluation.title}</div>
          <span>종합 분석 보고서</span>
        </S.ReportTitle>

        <S.ReportContent>
          <ReportFeedback
            relationship={profile.analysis_scores.relationship_contribution}
            problemSolving={profile.analysis_scores.problem_leadership}
            synergyProfile={profile.description_summary}
            positionRecommendation={profile.type_korean}
          />

          {reportData.map((item, idx) => (
            <ReportSynergy
              key={item.title + idx}
              title={item.title}
              icon={item.icon}
              description={item.desc}
            />
          ))}
        </S.ReportContent>
      </S.ReportDetailContainer>
    </S.Wrapper>
  );
};

export default ReportDetail;
