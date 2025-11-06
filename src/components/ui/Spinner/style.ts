import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

interface SpinnerWrapperProps {
  size?: 'small' | 'medium' | 'large';
  color?: keyof typeof theme.color;
}

const getSize = (size: SpinnerWrapperProps['size']) => {
  switch (size) {
    case 'small':
      return '20px';
    case 'medium':
      return '40px';
    case 'large':
      return '60px';
    default:
      return '40px';
  }
};

export const SpinnerWrapper = styled.div<SpinnerWrapperProps>`
  display: inline-block;
  width: ${({ size }) => getSize(size)};
  height: ${({ size }) => getSize(size)};
  border: 3px solid
    ${({ theme, color }) => (color ? theme.color[color][200] : theme.color.blue[200])};
  border-top: 3px solid
    ${({ theme, color }) => (color ? theme.color[color][500] : theme.color.blue[500])};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;
