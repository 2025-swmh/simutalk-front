import styled from '@emotion/styled';

interface ContainerProps {
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

export const ContainerWrapper = styled.div<ContainerProps>`
  width: 100%;
  box-sizing: border-box;
  padding: ${({ padding }) => padding ?? '0'};
  display: ${({ display }) => display ?? 'block'};
  flex-direction: ${({ flexDirection }) => flexDirection ?? 'row'};
  align-items: ${({ alignItems }) => alignItems ?? 'stretch'};
  justify-content: ${({ justifyContent }) => justifyContent ?? 'flex-start'};
  gap: ${({ gap }) => gap ?? '0'};
  width: ${({ width }) => width ?? 'auto'};
  height: ${({ height }) => height ?? 'auto'};
  border-radius: 0.75rem;
  box-shadow:
    0px 2px 4px rgba(0, 0, 0, 0.1),
    0px 4px 6px rgba(0, 0, 0, 0.1);
  transition:
    transform 0.2s ease-in-out,
    box-shadow 0.2s ease-in-out;

  ${({ hoverEffect }) =>
    hoverEffect &&
    `
    cursor: pointer;
    &:hover {
      transform: translateY(-4px);
      box-shadow: 
        0px 4px 8px rgba(0, 0, 0, 0.12),
        0px 8px 12px rgba(0, 0, 0, 0.12);
    }
  `}
`;

export default ContainerWrapper;
