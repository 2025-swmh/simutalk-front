import { css } from '@emotion/react';
import { theme } from '../../../styles/theme';

const { color, font, spacing, borderRadius } = theme;

export const inputWrapperStyles = css`
  display: flex;
  flex-direction: column;
  gap: ${spacing[8]};
`;

export const labelStyles = css`
  ${font.body1};
  color: ${color.zinc[800]};
`;

export const inputContainerStyles = css`
  position: relative;
  display: flex;
  align-items: center;
`;

export const baseInputStyles = css`
  width: 100%;
  padding: ${spacing[12]} ${spacing[16]};
  border: none;
  outline: none;
  ${font.body2};
  transition: all 0.2s ease-in-out;
  border-radius: ${borderRadius.medium};

  &::placeholder {
    color: ${color.zinc[500]};
    ${font.body2};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
    background-color: ${color.zinc[50]};
  }

  &:read-only {
    background-color: ${color.zinc[50]};
    cursor: default;
  }

  &[type='search']::-webkit-search-cancel-button,
  &[type='search']::-webkit-search-decoration {
    -webkit-appearance: none;
    appearance: none;
  }
`;

export const variantStyles = {
  default: css`
    background-color: ${color.zinc[50]};
    border: 1px solid ${color.zinc[300]};

    &:focus {
      border: 1px solid ${color.orange[500]};
    }

    &:hover:not(:disabled):not(:focus) {
      border-color: ${color.zinc[400]};
    }
  `,
};

export const stateStyles = {
  default: css``,
  error: css`
    border-color: ${color.red[500]} !important;

    &:focus {
      border-color: ${color.red[500]} !important;
      box-shadow: 0 0 0 3px ${color.red[100]} !important;
    }
  `,
};

export const fullWidthStyle = css`
  width: 100%;
`;

export const iconStyles = css`
  position: absolute;
  display: flex;
  align-items: center;
  pointer-events: none;
`;

export const startIconStyles = css`
  ${iconStyles}
  left: ${spacing[12]};
`;

export const endIconStyles = css`
  ${iconStyles}
  right: ${spacing[12]};
`;

export const rightTextStyles = css`
  ${font.body1};
  color: ${color.zinc[700]};
`;

export const inputWithStartIconStyles = css`
  padding-left: ${spacing[40]};
`;

export const inputWithEndIconStyles = css`
  padding-right: ${spacing[40]};
`;

export const helperTextStyles = css`
  ${font.label2};
  color: ${color.zinc[600]};
`;

export const errorMessageStyles = css`
  ${font.label2};
  color: ${color.red[500]};
`;
