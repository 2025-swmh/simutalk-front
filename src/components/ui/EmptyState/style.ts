import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

export const EmptyStateWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing[24]};
  padding: ${theme.spacing[48]} ${theme.spacing[32]};
  color: ${theme.color.zinc[500]};
  text-align: center;
  ${theme.font.body1};
  background-color: ${theme.color.zinc[50]};
  border-radius: ${theme.borderRadius.large};
  border: 2px dashed ${theme.color.zinc[300]};
  min-height: 300px;
  ${theme.animations.fadeIn}
  animation: fadeIn 0.5s ease-out;
`;
