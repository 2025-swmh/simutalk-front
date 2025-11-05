import styled from '@emotion/styled';
import { theme } from '../../styles';

export const MainContainer = styled.main`
  min-height: calc(100vh - 7.0313rem);
  flex-direction: column;
  display: flex;
  background-color: ${theme.color.white};
  padding-top: 19.375rem;
  align-items: center;
  gap: 2.8125rem;
  box-sizing: border-box;
`;

export const Title = styled.h1`
  ${theme.font.heading2};
  color: ${theme.color.black};
`;

export const MenuContainer = styled.div`
  display: flex;
  gap: 1.25rem;
`;
