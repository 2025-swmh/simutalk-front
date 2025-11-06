import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'category';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonColor = keyof typeof theme.color;
type ColorShade = keyof typeof theme.color.orange;

interface ButtonWrapperProps {
  variant: ButtonVariant;
  size: ButtonSize;
  color: ButtonColor;
  colorShade?: ColorShade;
  bgColor?: string;
}

const getVariantStyles = (
  variant: ButtonVariant,
  color: ButtonColor,
  colorShade?: ColorShade,
  bgColor?: string,
) => {
  const colorPalette = theme.color[color];
  if (typeof colorPalette === 'string') {
    // Handle black and white cases
    return css``;
  }
  const finalBgColor = bgColor || (colorShade ? colorPalette[colorShade] : colorPalette[500]);

  switch (variant) {
    case 'primary':
      return css`
        background-color: ${finalBgColor};
        color: ${theme.color.white};
        &:hover:not(:disabled) {
          background-color: ${colorPalette[600]};
        }
      `;
    case 'secondary':
      return css`
        background-color: ${theme.color.zinc[200]};
        color: ${theme.color.zinc[700]};
        &:hover:not(:disabled) {
          background-color: ${theme.color.zinc[300]};
        }
      `;
    case 'outline':
      return css`
        background-color: transparent;
        color: ${finalBgColor};
        border: 1px solid ${finalBgColor};
        &:hover:not(:disabled) {
          background-color: ${colorPalette[50]};
        }
      `;
    case 'ghost':
      return css`
        background-color: transparent;
        color: ${finalBgColor};
        &:hover:not(:disabled) {
          background-color: ${colorPalette[50]};
        }
      `;
    case 'category':
      return css`
        width: 14.375rem;
        height: 9.375rem;
        background-color: ${finalBgColor};
        color: ${theme.color.white};
        flex-direction: column;
        border-radius: 1.875rem;
        box-shadow: ${theme.shadows.medium};

        & > span {
          ${theme.font.heading4};
          white-space: pre-line;
          text-align: center;
        }

        &:hover:not(:disabled) {
          transform: translateY(-4px);
          box-shadow: ${theme.shadows.large};
        }
      `;
  }
};

const sizes = {
  small: css`
    ${theme.font.label1};
    padding: ${theme.spacing[8]} ${theme.spacing[12]};
    border-radius: ${theme.borderRadius.small};
  `,
  medium: css`
    ${theme.font.body1};
    padding: ${theme.spacing[12]} ${theme.spacing[16]};
    border-radius: ${theme.borderRadius.medium};
  `,
  large: css`
    ${theme.font.title3};
    padding: ${theme.spacing[16]} ${theme.spacing[24]};
    border-radius: ${theme.borderRadius.large};
  `,
};

export const ButtonWrapper = styled.button<ButtonWrapperProps>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing[8]};
  border: 1px solid transparent;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  white-space: nowrap;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  ${({ variant, color, colorShade, bgColor }) =>
    getVariantStyles(variant, color, colorShade, bgColor)}
  ${({ size, variant }) => variant !== 'category' && sizes[size]}
`;
