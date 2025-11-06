import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

export const EmptyStateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing[16]};
  padding: ${theme.spacing[32]};
  color: ${theme.color.zinc[500]};
  text-align: center;
  ${theme.font.body1};
`;
