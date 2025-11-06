import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { theme } from '../../styles/theme';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 40px 48px;
  background-color: ${theme.color.white};
  border-bottom: 2px solid ${theme.color.zinc[100]};
  box-shadow: ${theme.shadows.subtle};
  position: sticky;
  top: 0;
  z-index: 100;
  backdrop-filter: blur(8px);
  background-color: rgba(255, 255, 255, 0.95);
`;

export const NavWrapper = styled.nav`
  display: flex;
  gap: 48px;
`;

export const NavLink = styled(Link)<{ isActive: boolean }>`
  ${theme.font.title1};
  color: ${({ isActive }) => (isActive ? theme.color.orange[600] : theme.color.zinc[700])};
  text-decoration: none;
  transition: all ${theme.transitions.normal};
  position: relative;
  padding: 0.5rem 0;
  font-weight: ${({ isActive }) => (isActive ? 600 : 500)};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${({ isActive }) => (isActive ? '100%' : '0')};
    height: 3px;
    background: linear-gradient(
      90deg,
      ${theme.color.orange[600]} 0%,
      ${theme.color.orange[400]} 100%
    );
    border-radius: 2px;
    transition: width ${theme.transitions.normal};
  }

  &:hover {
    color: ${theme.color.orange[600]};

    &::after {
      width: 100%;
    }
  }

  &:focus-visible {
    outline: 2px solid ${theme.color.orange[300]};
    outline-offset: 4px;
    border-radius: 4px;
  }
`;
