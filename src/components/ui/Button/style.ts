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
        background: linear-gradient(135deg, ${finalBgColor} 0%, ${colorPalette[700]} 100%);
        color: ${theme.color.white};
        flex-direction: column;
        border-radius: 1.5rem;
        box-shadow: ${theme.shadows.medium};
        position: relative;
        overflow: hidden;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(255, 255, 255, 0.2) 0%, transparent 100%);
          opacity: 0;
          transition: opacity ${theme.transitions.normal};
        }

        & > span {
          ${theme.font.heading4};
          white-space: pre-line;
          text-align: center;
          position: relative;
          z-index: 1;
        }

        & > svg {
          position: relative;
          z-index: 1;
          filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
        }

        &:hover:not(:disabled) {
          transform: translateY(-6px) scale(1.02);
          box-shadow: ${theme.shadows.xl};

          &::before {
            opacity: 1;
          }
        }

        &:active:not(:disabled) {
          transform: translateY(-2px) scale(0.98);
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
  transition: all ${theme.transitions.normal};
  white-space: nowrap;
  font-weight: 500;

  &:focus-visible {
    outline: 3px solid ${theme.color.orange[300]};
    outline-offset: 2px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    filter: grayscale(0.3);
  }

  ${({ variant, color, colorShade, bgColor }) =>
    getVariantStyles(variant, color, colorShade, bgColor)}
  ${({ size, variant }) => variant !== 'category' && sizes[size]}
`;
