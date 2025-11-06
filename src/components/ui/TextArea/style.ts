import styled from '@emotion/styled';
import { theme } from '../../../styles';
import type { ITextAreaType } from './index';

const { color, font, spacing, borderRadius } = theme;

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
  padding: ${spacing[12]} ${spacing[16]};
  ${font.body2};
  border: 1px solid ${({ state }) => (state === 'error' ? color.red[500] : color.zinc[300])};
  background-color: ${({ state }) => (state === 'error' ? color.red[50] : color.zinc[50])};
  border-radius: ${borderRadius.medium};
  resize: none;
  font-family: 'Pretendard', sans-serif;
  ::placeholder {
    color: ${color.zinc[500]};
    ${font.body2};
  }
  :focus {
    outline: 1px solid ${({ state }) => (state === 'error' ? color.red[500] : color.orange[500])};
  }
`;
