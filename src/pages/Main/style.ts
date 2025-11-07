import styled from '@emotion/styled';
import { theme } from '../../styles';

export const MainContainer = styled.main<{ isGrid?: boolean; showCustomForm?: boolean }>`
  min-height: calc(100vh - 7.0313rem);
  flex-direction: column;
  display: flex;
  background: linear-gradient(to bottom, ${theme.color.zinc[50]} 0%, ${theme.color.white} 100%);
  padding-top: ${({ isGrid, showCustomForm }) =>
    showCustomForm ? '8rem' : isGrid ? '9rem' : '13.5rem'};
  align-items: center;
  gap: ${({ showCustomForm }) => (showCustomForm ? '3.125rem' : '2.5rem')};
  box-sizing: border-box;
  position: relative;
  ${theme.animations.fadeIn}
  animation: fadeIn 0.6s ease-out;
`;

export const BackButton = styled.button`
  position: absolute;
  top: 2rem;
  left: 2rem;
  padding: 0.75rem 1.5rem;
  background-color: ${theme.color.white};
  color: ${theme.color.zinc[700]};
  border: 2px solid ${theme.color.zinc[200]};
  border-radius: 0.75rem;
  ${theme.font.body2};
  font-weight: 500;
  cursor: pointer;
  transition: all ${theme.transitions.normal};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: ${theme.shadows.subtle};

  &:hover {
    background-color: ${theme.color.zinc[50]};
    border-color: ${theme.color.orange[400]};
    color: ${theme.color.zinc[800]};
    box-shadow: ${theme.shadows.medium};
    transform: translateX(-2px);
  }

  &:active {
    transform: translateX(0);
  }

  &:focus-visible {
    outline: 3px solid ${theme.color.orange[300]};
    outline-offset: 2px;
  }
`;

export const Title = styled.h1`
  ${theme.font.heading2};
  color: ${theme.color.black};
  text-align: center;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${theme.color.orange[600]} 0%,
      ${theme.color.orange[400]} 100%
    );
    border-radius: 2px;
  }
`;

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
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

export const RestartButton = styled.button`
  padding: 0.875rem 1.75rem;
  background-color: ${theme.color.white};
  color: ${theme.color.zinc[700]};
  border: 2px solid ${theme.color.zinc[200]};
  border-radius: 0.75rem;
  ${theme.font.body1};
  cursor: pointer;
  transition: all ${theme.transitions.normal};
  box-shadow: ${theme.shadows.subtle};

  &:hover {
    background-color: ${theme.color.zinc[50]};
    border-color: ${theme.color.orange[400]};
    color: ${theme.color.zinc[800]};
    box-shadow: ${theme.shadows.medium};
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 3px solid ${theme.color.orange[300]};
    outline-offset: 2px;
  }
`;

export const PracticeButton = styled.span`
  ${theme.font.title2};
  color: ${theme.color.black};
  cursor: pointer;
  transition: all ${theme.transitions.normal};
  position: relative;
  padding: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 2px;
    background: ${theme.color.orange[600]};
    transition: width ${theme.transitions.normal};
  }

  &:hover {
    color: ${theme.color.orange[600]};

    &::after {
      width: 100%;
    }
  }
`;

export const ColorPointer = styled.span`
  color: ${theme.color.orange[600]};
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 44.125rem; // 706px
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
  padding: 1rem;
  box-sizing: border-box;
  border: 2px solid ${theme.color.zinc[200]};
  background-color: ${theme.color.white};
  border-radius: 0.75rem;
  ${theme.font.body2};
  transition: all ${theme.transitions.normal};
  outline: none;

  &::placeholder {
    color: ${theme.color.zinc[400]};
  }

  &:focus {
    border-color: ${theme.color.orange[600]};
    background-color: ${theme.color.white};
  }

  &:hover:not(:focus) {
    border-color: ${theme.color.zinc[300]};
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  border: 2px solid ${theme.color.zinc[200]};
  background-color: ${theme.color.white};
  border-radius: 0.75rem;
  ${theme.font.body2};
  min-height: 7rem;
  resize: vertical;
  outline: none;
  transition: all ${theme.transitions.normal};
  line-height: 1.5;

  &::placeholder {
    color: ${theme.color.zinc[400]};
  }

  &:focus {
    border-color: ${theme.color.orange[500]};
    box-shadow: 0 0 0 3px ${theme.color.orange[100]};
  }

  &:hover:not(:focus) {
    border-color: ${theme.color.zinc[300]};
  }
`;

export const SubmitButton = styled.button`
  margin-top: 1rem;
  padding: 1rem 2rem;
  background: linear-gradient(
    135deg,
    ${theme.color.orange[600]} 0%,
    ${theme.color.orange[500]} 100%
  );
  color: ${theme.color.white};
  border: none;
  border-radius: 0.75rem;
  ${theme.font.body1}
  font-weight: 600;
  cursor: pointer;
  transition: all ${theme.transitions.normal};
  box-shadow: ${theme.shadows.medium};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${theme.shadows.large};
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 3px solid ${theme.color.orange[300]};
    outline-offset: 2px;
  }
`;
