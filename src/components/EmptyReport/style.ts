import styled from '@emotion/styled';
import { theme } from '../../styles';

export const EmptyReportContainer = styled.div`
  box-shadow:
    0px 2px 4px rgba(0, 0, 0, 0.1),
    0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.875rem;
  width: 70rem;
  height: 18.5rem;
  border-radius: 0.75rem;

  > span {
    ${theme.font.title1};
    color: ${theme.color.zinc[500]};
  }
`;
