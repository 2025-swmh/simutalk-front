import type { HTMLAttributes } from 'react';
import { theme } from '../../../styles/theme';
import * as S from './style';

type Spacing = keyof typeof theme.spacing;

interface GridProps extends HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  columns?: number | string;
  rows?: number | string;
  gap?: Spacing;
}

const Grid = ({ children, ...rest }: GridProps) => {
  return <S.GridWrapper {...rest}>{children}</S.GridWrapper>;
};

export default Grid;
