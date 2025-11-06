import { LandMark, Star } from '../../../../assets';
import { Flex } from '../../../ui';
import * as S from './style';

interface ReportFeedbackProps {
  relationship?: string;
  problemSolving?: string;
  synergyProfile?: string;
  positionRecommendation?: string;
}

const ReportFeedback = ({
  relationship,
  problemSolving,
  synergyProfile,
  positionRecommendation,
}: ReportFeedbackProps) => {
  return (
    <Flex
      width="63.25rem"
      display="flex"
      gap={12}
      paddingTop={32}
      paddingRight={48}
      paddingBottom={48}
      paddingLeft={20}
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
    </Flex>
  );
};

export default ReportFeedback;
