import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalPanel = styled.div`
  background-color: ${theme.color.white};
  border-radius: ${theme.borderRadius.large};
  padding: ${theme.spacing[24]};
  box-shadow: ${theme.shadows.large};
  min-width: 300px;
  max-width: 90vw;
`;
