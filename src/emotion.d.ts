import '@emotion/react';
import type { theme } from './styles';

type CustomTheme = typeof theme;

declare module '@emotion/react' {
  export type Theme = CustomTheme;
}
