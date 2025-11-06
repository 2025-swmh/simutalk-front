import styled from '@emotion/styled';
import { theme } from '../../../../styles';

export const FeedbackTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  ${theme.font.title1}
`;

export const FeedbackContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`;
export const SynergyContent = styled.div`
  border: 1px solid ${theme.color.blue[200]};
  padding: 20px 50px 20px 20px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const SynergyTitle = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${theme.color.blue[600]};
  ${theme.font.title4}
  > span {
    display: flex;
    gap: 15px;
  }
`;

export const SynergyDescription = styled.div`
  color: ${theme.color.blue[950]};
  ${theme.font.body2}
`;

export const Synergylevel = styled.div`
  padding: 1px 13px;
  background-color: ${theme.color.blue[900]};
  ${theme.font.label2}
  color: ${theme.color.white};
  border-radius: 8px;
`;
export const RecommendContent = styled.div`
  border: 1px solid ${theme.color.blue[200]};
  border-radius: 20px;
  display: flex;
  gap: 0.875rem;
  padding: 30px 0px 40px 20px;
`;

export const REcommendTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  ${theme.font.title1}
  >span {
    ${theme.font.title3}
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
