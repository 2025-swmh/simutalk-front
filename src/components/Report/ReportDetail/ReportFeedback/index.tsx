import { LandMark, Star } from '../../../../assets';
import Container from '../../../Container';
import * as S from './style';

interface ReportFeedbackProps {
  relationship?: string;
  problemSolving?: string;
  synergyProfile?: string; // 유형 설명
  positionRecommendation?: string; // 추천 포지션
}

const ReportFeedback = ({
  relationship,
  problemSolving,
  synergyProfile,
  positionRecommendation,
}: ReportFeedbackProps) => {
  return (
    <Container
      width="63.25rem"
      display="flex"
      gap="0.625rem"
      padding="2rem 3.125rem 3.125rem 1.25rem"
    >
      <LandMark />
      <S.Wrapper>
        <S.FeedbackTitle>사용자님의 협업 유형</S.FeedbackTitle>
        <S.FeedbackContents>
          <S.SynergyContent>
            <S.SynergyTitle>
              관계 안정화 촉진자
              <span>
                <S.Synergylevel>관계 기여도: {relationship}</S.Synergylevel>
                <S.Synergylevel>문제 주도성: {problemSolving}</S.Synergylevel>
              </span>
            </S.SynergyTitle>
            <S.SynergyDescription>{synergyProfile}</S.SynergyDescription>
          </S.SynergyContent>
          <S.RecommendContent>
            <Star />
            <S.REcommendTitle>
              추천 포지션
              <span>{positionRecommendation}</span>
            </S.REcommendTitle>
          </S.RecommendContent>
        </S.FeedbackContents>
      </S.Wrapper>
    </Container>
  );
};

export default ReportFeedback;
