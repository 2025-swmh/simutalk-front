import type { HTMLAttributes } from 'react';
import * as S from './style';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  padding?: string;
  display?: string;
  flexDirection?: string;
  alignItems?: string;
  justifyContent?: string;
  gap?: string;
  width?: string;
  height?: string;
  hoverEffect?: boolean;
}

const Container = ({
  children,
  padding,
  display,
  flexDirection,
  alignItems,
  justifyContent,
  gap,
  width,
  height,
  hoverEffect,
  ...rest
}: ContainerProps) => {
  return (
    <S.ContainerWrapper
      padding={padding}
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
    </S.ContainerWrapper>
  );
};

export default Container;
