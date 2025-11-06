import styled from '@emotion/styled';
import { theme } from '../../../styles';
import type { ITextAreaType } from './index';

const { color, font, spacing } = theme;

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spacing[8]};
  align-items: start;
`;

export const Label = styled.label`
  ${font.body1};
  color: ${color.zinc[800]};
`;

export const TextAreaContent = styled.textarea<Pick<ITextAreaType, 'height' | 'state'>>`
  width: 100%;
  height: ${({ height }) => (height ? `${height / 16}rem` : 'auto')};
  padding: ${spacing[16]};
  ${font.body2};
  border: 2px solid ${({ state }) => (state === 'error' ? color.red[500] : color.zinc[200])};
  background-color: ${({ state }) => (state === 'error' ? color.red[50] : color.white)};
  border-radius: 0.75rem;
  resize: vertical;
  font-family: 'Pretendard', sans-serif;
  box-sizing: border-box;
  transition: all ${theme.transitions.normal};
  line-height: 1.5;

  ::placeholder {
    color: ${color.zinc[400]};
    ${font.body2};
  }

  &:focus {
    border-color: ${({ state }) => (state === 'error' ? color.red[500] : color.orange[500])};
    box-shadow: 0 0 0 3px ${({ state }) => (state === 'error' ? color.red[100] : color.orange[100])};
  }

  &:hover:not(:focus) {
    border-color: ${({ state }) => (state === 'error' ? color.red[500] : color.zinc[300])};
  }
`;
