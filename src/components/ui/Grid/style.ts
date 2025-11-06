import styled from '@emotion/styled';
import { theme } from '../../../styles/theme';

type Spacing = keyof typeof theme.spacing;

interface GridWrapperProps {
  columns?: number | string;
  rows?: number | string;
  gap?: Spacing;
}

export const GridWrapper = styled.div<GridWrapperProps>`
  display: grid;
  grid-template-columns: ${({ columns }) =>
    typeof columns === 'number' ? `repeat(${columns}, 1fr)` : columns};
  grid-template-rows: ${({ rows }) => (typeof rows === 'number' ? `repeat(${rows}, 1fr)` : rows)};
  gap: ${({ theme, gap }) => (gap ? theme.spacing[gap] : '0')};
`;
