import styled from '@emotion/styled';
import { theme } from '../../../../styles';

export const FeedbackTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  ${theme.font.title1}
`;

export const FeedbackContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.875rem;
`;
export const SynergyContent = styled.div`
  border: 1px solid ${theme.color.blue[200]};
  padding: 1.25rem 3.125rem 1.25rem 1.25rem;
  border-radius: 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
`;

export const SynergyTitle = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${theme.color.blue[600]};
  ${theme.font.title4}
  > span {
    display: flex;
    gap: 0.9375rem;
  }
`;

export const SynergyDescription = styled.div`
  color: ${theme.color.blue[950]};
  ${theme.font.body2}
`;

export const Synergylevel = styled.div`
  padding: 0.0625rem 0.8125rem;
  background-color: ${theme.color.blue[900]};
  ${theme.font.label2}
  color: ${theme.color.white};
  border-radius: 0.5rem;
`;
export const RecommendContent = styled.div`
  border: 1px solid ${theme.color.blue[200]};
  border-radius: 1.25rem;
  display: flex;
  gap: 0.875rem;
  padding: 1.875rem 0rem 2.5rem 1.25rem;
`;

export const REcommendTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9375rem;
  ${theme.font.title1}
  >span {
    ${theme.font.title3}
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
