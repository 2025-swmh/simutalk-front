import type { HTMLAttributes } from 'react';
import { theme } from '../../../styles/theme';
import * as S from './style';

type Spacing = keyof typeof theme.spacing;

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
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

const Box = ({ children, ...rest }: BoxProps) => {
  return <S.BoxWrapper {...rest}>{children}</S.BoxWrapper>;
};

export default Box;
