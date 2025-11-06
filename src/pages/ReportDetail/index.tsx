import { useParams } from 'react-router-dom';
import { Bad, Good, Report, Trophy } from '../../assets';
import { ReportFeedback, ReportSynergy } from '../../components';
import { LOADING_MESSAGES } from '../../constants';
import { useReportDetail } from '../../hooks';
import { theme } from '../../styles';
import type { EvaluationData } from '../../types';
import {
  parseActionPlans,
  parseExampleStatements,
  parseFeedbackDetails,
} from '../../utils/textParser';
import * as S from './style';

const ReportDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { report, isLoading, isError } = useReportDetail({ reportId: id });

  if (isLoading) return <div>{LOADING_MESSAGES.LOADING}</div>;
  if (isError || !report) return <div>오류가 발생했습니다.</div>;

  const evaluation: EvaluationData = JSON.parse(report.evaluationJson);

  const goodPoints = parseFeedbackDetails(evaluation.feedback.good_points);
  const improvementPoints = parseFeedbackDetails(evaluation.feedback.improvement_points);
  const actionPlans = parseActionPlans(evaluation.feedback.improvement_points);
  const resumeTips = parseExampleStatements(evaluation.appeal_recommendation.example_statements);

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
