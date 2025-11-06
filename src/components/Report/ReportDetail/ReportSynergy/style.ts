import styled from '@emotion/styled';
import { theme } from '../../../../styles';

export const SynergyTitle = styled.div`
  display: flex;
  gap: 0.625rem; // 10px
  ${theme.font.title1}
`;
export const SynergyContent = styled.div`
  display: flex;
  align-items: center;
  gap: 0.4375rem; // 7px
`;
export const SynergyContents = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.625rem; // 10px
`;
