import styled from '@emotion/styled';
import type { ITextAreaType } from '.';
import { theme } from '../../styles';

const { color, font } = theme;

export const TextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem; // 8px
  align-items: start;
`;

export const Label = styled.label`
  font: ${font.body1};
  color: ${color.zinc[800]};
`;

export const TextAreaContent = styled.textarea<Pick<ITextAreaType, 'height' | 'state'>>`
  width: 100%;
  height: ${({ height }) => (height ? `${height / 16}rem` : 'auto')};
  padding: 0.875rem 1rem; // 14px 16px
  font: ${font.body2};
  border: 1px solid ${({ state }) => (state === 'error' ? color.red[500] : color.zinc[200])}; // 1px
  background-color: ${({ state }) => (state === 'error' ? color.red[50] : color.zinc[50])};
  border-radius: 0.5rem; // 8px
  resize: none;
  font-family: 'Pretendard', sans-serif;
  ::placeholder {
    color: ${color.zinc[500]};
    font: ${font.body2};
  }
  :focus {
    outline: 1px solid ${({ state }) => (state === 'error' ? color.red[400] : color.orange[300])}; // 1px
  }
`;
