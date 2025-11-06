import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  ${theme.animations.fadeIn}
  animation: fadeIn 0.2s ease-out;
`;

export const ModalPanel = styled.div`
  background-color: ${theme.color.white};
  border-radius: 1.25rem;
  padding: ${theme.spacing[32]};
  box-shadow: ${theme.shadows.xl};
  min-width: 400px;
  max-width: 90vw;
  border: 2px solid ${theme.color.zinc[100]};
  ${theme.animations.scaleIn}
  animation: scaleIn 0.3s ease-out;
`;
