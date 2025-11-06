import styled from '@emotion/styled';
import { theme } from '../../styles';

export const StartContainer = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${theme.color.white};
  box-sizing: border-box;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

export const Title = styled.h1`
  ${theme.font.heading1};
  color: ${theme.color.black};
`;

export const Description = styled.p`
  ${theme.font.title1};
  color: ${theme.color.zinc[600]};
`;

export const StartButton = styled.button`
  margin-top: 1rem;
  padding: 1rem 3rem;
  background-color: ${theme.color.orange[600]};
  color: ${theme.color.white};
  border: none;
  border-radius: 8px;
  ${theme.font.body1};
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${theme.color.orange[700]};
  }
`;
