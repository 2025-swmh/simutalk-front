import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

type Spacing = keyof typeof theme.spacing;

interface BoxWrapperProps {
  padding?: Spacing;
  paddingTop?: Spacing;
  paddingRight?: Spacing;
  paddingBottom?: Spacing;
  paddingLeft?: Spacing;
  margin?: Spacing;
  marginTop?: Spacing;
  marginRight?: Spacing;
  marginBottom?: Spacing;
  marginLeft?: Spacing;
  width?: string;
  height?: string;
  backgroundColor?: string;
}

export const BoxWrapper = styled.div<BoxWrapperProps>`
  box-sizing: border-box;
  width: ${({ width }) => width ?? 'auto'};
  height: ${({ height }) => height ?? 'auto'};
  background-color: ${({ backgroundColor }) => backgroundColor};

  padding: ${({ theme, padding }) => (padding ? theme.spacing[padding] : '0')};
  padding-top: ${({ theme, paddingTop }) => paddingTop && theme.spacing[paddingTop]};
  padding-right: ${({ theme, paddingRight }) => paddingRight && theme.spacing[paddingRight]};
  padding-bottom: ${({ theme, paddingBottom }) => paddingBottom && theme.spacing[paddingBottom]};
  padding-left: ${({ theme, paddingLeft }) => paddingLeft && theme.spacing[paddingLeft]};

  margin: ${({ theme, margin }) => (margin ? theme.spacing[margin] : '0')};
  margin-top: ${({ theme, marginTop }) => marginTop && theme.spacing[marginTop]};
  margin-right: ${({ theme, marginRight }) => marginRight && theme.spacing[marginRight]};
  margin-bottom: ${({ theme, marginBottom }) => marginBottom && theme.spacing[marginBottom]};
  margin-left: ${({ theme, marginLeft }) => marginLeft && theme.spacing[marginLeft]};
`;
