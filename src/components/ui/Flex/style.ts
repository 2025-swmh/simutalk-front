import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

type Spacing = keyof typeof theme.spacing;

interface FlexWrapperProps {
  padding?: Spacing;
  paddingTop?: Spacing;
  paddingRight?: Spacing;
  paddingBottom?: Spacing;
  paddingLeft?: Spacing;
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
  gap?: Spacing;
  width?: string;
  height?: string;
  hoverEffect?: boolean;
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
  width: 100%;
  box-sizing: border-box;
  padding: ${({ theme, padding }) => (padding ? theme.spacing[padding] : '0')};
  padding-top: ${({ theme, paddingTop }) => paddingTop && theme.spacing[paddingTop]};
  padding-right: ${({ theme, paddingRight }) => paddingRight && theme.spacing[paddingRight]};
  padding-bottom: ${({ theme, paddingBottom }) => paddingBottom && theme.spacing[paddingBottom]};
  padding-left: ${({ theme, paddingLeft }) => paddingLeft && theme.spacing[paddingLeft]};
  display: ${({ display }) => display ?? 'block'};
  flex-direction: ${({ flexDirection }) => flexDirection ?? 'row'};
  align-items: ${({ alignItems }) => alignItems ?? 'stretch'};
  justify-content: ${({ justifyContent }) => justifyContent ?? 'flex-start'};
  gap: ${({ theme, gap }) => (gap ? theme.spacing[gap] : '0')};
  width: ${({ width }) => width ?? 'auto'};
  height: ${({ height }) => height ?? 'auto'};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  box-shadow: ${({ theme }) => theme.shadows.subtle};
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;

  ${({ theme, hoverEffect }) =>
    hoverEffect &&
    `
    cursor: pointer;
    &:hover {
      transform: translateY(-4px);
      box-shadow: ${theme.shadows.medium};
    }
  `}
`;
