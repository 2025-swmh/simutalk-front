import type { ElementType, HTMLAttributes } from 'react';
import { theme } from '../../../styles/theme';
import * as S from './style';

type Spacing = keyof typeof theme.spacing;

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  as?: ElementType;
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

const Flex = ({
  children,
  as,
  padding,
  paddingTop,
  paddingRight,
  paddingBottom,
  paddingLeft,
  display,
  flexDirection,
  alignItems,
  justifyContent,
  gap,
  width,
  height,
  hoverEffect,
  ...rest
}: FlexProps) => {
  return (
    <S.FlexWrapper
      as={as}
      padding={padding}
      paddingTop={paddingTop}
      paddingRight={paddingRight}
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      display={display}
      flexDirection={flexDirection}
      alignItems={alignItems}
      justifyContent={justifyContent}
      gap={gap}
      width={width}
      height={height}
      hoverEffect={hoverEffect}
      {...rest}
    >
      {children}
    </S.FlexWrapper>
  );
};

export default Flex;
