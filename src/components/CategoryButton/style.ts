import styled from '@emotion/styled';
import { theme } from '../../styles';

interface CategoryButtonProps {
  bgColor: string;
}

export const CategoryButtonContainer = styled.button<CategoryButtonProps>`
  width: 14.375rem;
  background-color: ${({ bgColor }) => bgColor};
  border-radius: 1.875rem;
  height: 9.375rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 0.625rem;
  box-shadow: 0px 4px 4px 0 rgba(0, 0, 0, 0.25);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0px 6px 6px 0 rgba(0, 0, 0, 0.3);
  }
`;

export const CategoryButtonText = styled.span`
  ${theme.font.heading4};
  color: ${theme.color.white};
  white-space: pre-line;
  text-align: center;
`;
