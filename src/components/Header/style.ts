import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';

export const HeaderContainer = styled.header`
  margin: 0 0.625rem;
  padding: 2.5938rem 3.125rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border-bottom: 1px solid ${theme.color.zinc[200]};
  box-sizing: border-box;
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 3rem;
`;

export const NavLink = styled(Link)<{ isActive: boolean }>`
  ${theme.font.title1};
  color: ${({ isActive }) => (isActive ? theme.color.orange[500] : theme.color.black)};
  text-decoration: none;
  transition: color 0.2s ease;

  &:hover {
    color: ${theme.color.orange[600]};
  }
`;
