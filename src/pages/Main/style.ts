import styled from '@emotion/styled';
import { theme } from '../../styles';

export const MainContainer = styled.main<{ isGrid?: boolean; showCustomForm?: boolean }>`
  min-height: calc(100vh - 7.0313rem);
  flex-direction: column;
  display: flex;
  background-color: ${theme.color.white};
  padding-top: ${({ isGrid, showCustomForm }) =>
    showCustomForm ? '14.5rem' : isGrid ? '11.625rem' : '16.875rem'};
  align-items: center;
  gap: ${({ showCustomForm }) => (showCustomForm ? '3.125rem' : '2rem')};
  box-sizing: border-box;
`;

export const Title = styled.h1`
  ${theme.font.heading2};
  color: ${theme.color.black};
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
`;

export const CategoryContainer = styled.div<{ isGrid?: boolean }>`
  display: ${({ isGrid }) => (isGrid ? 'grid' : 'flex')};
  ${({ isGrid }) =>
    isGrid
      ? `
    grid-template-columns: repeat(2, 1fr);
    gap: 1.25rem;
  `
      : `
    gap: 1.25rem;
  `}
`;

export const PracticeButton = styled.span`
  ${theme.font.title2};
  color: ${theme.color.black};
  cursor: pointer;
`;

export const ColorPointer = styled.span`
  color: ${theme.color.orange[600]};
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 706px;
`;

export const InputLabel = styled.label`
  ${theme.font.body1};
  color: ${theme.color.zinc[800]};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  box-sizing: border-box;
  border: 1px solid ${theme.color.zinc[200]};
  background-color: ${theme.color.zinc[50]};
  border-radius: 0.5rem;
  ${theme.font.body2};

  &::placeholder {
    color: ${theme.color.zinc[500]};
  }
`;

export const Textarea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid ${theme.color.zinc[200]};
  background-color: ${theme.color.zinc[50]};
  border-radius: 0.5rem;
  ${theme.font.body2};
  min-height: 6.25rem;
  resize: vertical;
  outline: none;

  &::placeholder {
    color: ${theme.color.zinc[500]};
  }
`;

export const SubmitButton = styled.button`
  padding: 1rem;
  background-color: ${theme.color.orange[600]};
  color: ${theme.color.white};
  border: none;
  border-radius: 8px;
  ${theme.font.body1};
  cursor: pointer;

  &:hover {
    background-color: ${theme.color.orange[700]};
  }
`;
