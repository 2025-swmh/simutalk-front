import * as S from './style';

interface ContainerProps {
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
    >
      {children}
    </S.ContainerWrapper>
  );
};

export default Container;
