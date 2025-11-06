import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 48px;
  background-color: #fff;
  border-bottom: 1px solid ${theme.color.zinc[200]};
`;

export const NavWrapper = styled.nav`
  display: flex;
  gap: 48px;
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
