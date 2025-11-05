import styled from '@emotion/styled';
import { theme } from './../../styles/theme';

export const HeaderContainer = styled.header`
  margin: 0 0.625rem;
  padding: 2.5938rem 3.125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: ${theme.color.zinc[200]} 1px solid;
  box-sizing: border-box;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 3rem;
`;

export const NavLink = styled.a<{ isActive: boolean }>`
  ${theme.font.title1};
  color: ${({ isActive }) => (isActive ? theme.color.orange[500] : theme.color.black)};
`;
