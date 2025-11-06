import styled from '@emotion/styled';
import { theme } from '../../../styles';

export const ReportContainer = styled.div`
  box-shadow:
    0px 2px 4px rgba(0, 0, 0, 0.1),
    0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2.5rem 1.875rem 2.5rem 1.0625rem;
  border-radius: 1rem;
  width: 70rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  &:hover {
    transform: translateY(-2px);
  }
`;

export const ReportTitle = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
  color: ${theme.color.zinc[600]};
  ${theme.font.title1}
`;

export const ReportHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SynergyContainer = styled.div`
  border-radius: 0.5rem;
  border: 0.0625rem solid ${theme.color.orange[600]};
  padding: 0.0625rem 0.8125rem;
  ${theme.font.label2}
`;

export const ReportContents = styled.div`
  display: flex;
  gap: 1.125rem;
  margin-left: 2rem;
  > span {
    ${theme.font.title4}
    color: ${theme.color.zinc[700]};
    display: flex;
    gap: 0.3125rem;
  }
`;
export const AblityContainer = styled.div<{ level?: '상' | '중' | '하' }>`
  background-color: ${({ level }) => {
    switch (level) {
      case '상':
        return theme.color.orange[600];
      case '중':
        return theme.color.orange[500];
      case '하':
        return theme.color.orange[400];
      default:
        return 'transparent';
    }
  }};
  padding: 0.0625rem 0.375rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.font.label2}
  width: fit-content;
  color: ${theme.color.white};
`;
