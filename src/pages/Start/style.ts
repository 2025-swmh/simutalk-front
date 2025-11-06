import styled from '@emotion/styled';
import { theme } from '../../styles';

export const StartContainer = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    135deg,
    ${theme.color.orange[50]} 0%,
    ${theme.color.white} 50%,
    ${theme.color.blue[50]} 100%
  );
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -50%;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, ${theme.color.orange[100]} 0%, transparent 70%);
    opacity: 0.3;
    pointer-events: none;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  position: relative;
  z-index: 1;
  ${theme.animations.fadeIn}
  animation: fadeIn 0.8s ease-out;
`;

export const Title = styled.h1`
  ${theme.font.heading1};
  color: ${theme.color.black};
  text-align: center;
  background: linear-gradient(
    135deg,
    ${theme.color.orange[600]} 0%,
    ${theme.color.orange[500]} 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const Description = styled.p`
  ${theme.font.title1};
  color: ${theme.color.zinc[600]};
  text-align: center;
  max-width: 600px;
  line-height: 1.6;
`;

export const StartButton = styled.button`
  margin-top: 1rem;
  padding: 1.25rem 3.5rem;
  background: linear-gradient(
    135deg,
    ${theme.color.orange[600]} 0%,
    ${theme.color.orange[500]} 100%
  );
  color: ${theme.color.white};
  border: none;
  border-radius: 12px;
  ${theme.font.title2};
  cursor: pointer;
  transition: all ${theme.transitions.normal};
  box-shadow: ${theme.shadows.medium};
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.large};

    &::before {
      left: 100%;
    }
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 3px solid ${theme.color.orange[300]};
    outline-offset: 3px;
  }
`;
