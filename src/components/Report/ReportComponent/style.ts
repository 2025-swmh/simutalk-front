import styled from '@emotion/styled';
import { theme } from '../../../styles';

export const ReportContainer = styled.div`
  background-color: ${theme.color.white};
  box-shadow: ${theme.shadows.medium};
  padding: 2.5rem 2rem;
  border-radius: 1.25rem;
  width: 70rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all ${theme.transitions.normal};
  border: 2px solid ${theme.color.zinc[100]};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    background: linear-gradient(
      180deg,
      ${theme.color.orange[600]} 0%,
      ${theme.color.orange[400]} 100%
    );
    opacity: 0;
    transition: opacity ${theme.transitions.normal};
  }

  &:hover {
    transform: translateY(-4px);
    box-shadow: ${theme.shadows.large};
    border-color: ${theme.color.orange[200]};

    &::before {
      opacity: 1;
    }
  }

  &:active {
    transform: translateY(-2px);
  }
`;

export const ReportTitle = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  color: ${theme.color.zinc[800]};
  ${theme.font.title1}
  font-weight: 600;
`;

export const ReportHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
`;

export const SynergyContainer = styled.div`
  border-radius: 0.75rem;
  border: 2px solid ${theme.color.orange[500]};
  background: linear-gradient(135deg, ${theme.color.orange[50]} 0%, ${theme.color.white} 100%);
  padding: 0.5rem 1rem;
  ${theme.font.label1}
  font-weight: 600;
  color: ${theme.color.orange[700]};
  transition: all ${theme.transitions.fast};
`;

export const ReportContents = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-left: 2.5rem;
  > span {
    ${theme.font.body1}
    color: ${theme.color.zinc[700]};
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }
`;
export const AblityContainer = styled.div<{ level?: '상' | '중' | '하' }>`
  background: ${({ level }) => {
    switch (level) {
      case '상':
        return `linear-gradient(135deg, ${theme.color.green[500]} 0%, ${theme.color.green[600]} 100%)`;
      case '중':
        return `linear-gradient(135deg, ${theme.color.orange[400]} 0%, ${theme.color.orange[500]} 100%)`;
      case '하':
        return `linear-gradient(135deg, ${theme.color.yellow[400]} 0%, ${theme.color.yellow[500]} 100%)`;
      default:
        return 'transparent';
    }
  }};
  padding: 0.375rem 0.75rem;
  border-radius: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  ${theme.font.label1}
  font-weight: 600;
  width: fit-content;
  color: ${theme.color.white};
  box-shadow: ${theme.shadows.subtle};
  transition: all ${theme.transitions.fast};

  &:hover {
    transform: scale(1.05);
  }
`;
