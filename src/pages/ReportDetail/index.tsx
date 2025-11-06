import { Bad, Good, Report, Trophy } from '../../assets';
import ReportFeedback from '../../components/Report/ReportDetail/ReportFeedback';
import ReportSynergy from '../../components/Report/ReportDetail/ReportSynergy';
import { theme } from '../../styles';
import * as S from './style';

const ReportDetail = () => {
  const dummyDescriptions = [
    '팀원들과의 원활한 소통으로 프로젝트 진행이 수월했습니다.',
    '문제 해결 능력이 뛰어나 어려운 상황에서도 침착하게 대처했습니다.',
    '더 적극적으로 의견을 제시하고 팀에 기여할 수 있는 방안을 모색해보세요.',
    '백엔드 개발 경험과 협업 능력을 강조하여 어필하세요.',
  ];
  const reportData = [
    { title: '잘한 점', icon: <Good />, desc: dummyDescriptions },
    { title: '부족한 점', icon: <Bad /> },
    { title: '개선 방법', icon: <Trophy /> },
    { title: '이력서 어필 포인트', icon: <Report color={theme.color.orange[600]} /> },
  ];
  return (
    <S.Wrapper>
      <S.ReportDetailContainer>
        <S.ReportTitle>
          <div>백엔드 개발자와의 협업</div>
          <span>종합 분석 보고서</span>
        </S.ReportTitle>
        <S.ReportContent>
          <ReportFeedback
            relationship="상"
            problemSolving="하"
            synergyProfile="상황에서 감정적 언어를 최소화하고, 팀원들의 의견을 경청하고 통합하는 발언이 많음. 팀의 사기와 안정화에 가장 크게 기여."
            positionRecommendation="중재자"
          />
          {reportData.map((item, idx) => (
            <ReportSynergy
              title={item.title}
              icon={item.icon}
              key={item.title + idx}
              description={item.desc}
            />
          ))}
        </S.ReportContent>
      </S.ReportDetailContainer>
    </S.Wrapper>
  );
};

export default ReportDetail;
