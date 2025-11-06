import styled from '@emotion/styled';
import { theme } from '../../styles';

export const ChatContainer = styled.main`
  min-height: calc(100vh - 7.0313rem);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  box-sizing: border-box;
  background-color: ${theme.color.zinc[50]};
`;

export const ChatContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 56rem;
  height: calc(100vh - 7.0313rem - 6rem);
  background-color: ${theme.color.white};
  border-radius: 1rem;
  box-shadow:
    0px 10px 15px 0 rgba(0, 0, 0, 0.1),
    0px 4px 6px 0 rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

export const ChatDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  flex: 1 1 auto;
  padding: 2rem;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.color.zinc[100]};
    border-radius: 0.25rem;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.color.zinc[300]};
    border-radius: 0.25rem;

    &:hover {
      background: ${theme.color.zinc[400]};
    }
  }
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  background-color: ${theme.color.white};
  border-top: 1px solid ${theme.color.zinc[200]};
  padding: 1.5rem 2rem;
  gap: 1rem;
  box-sizing: border-box;
`;

export const SendButton = styled.button`
  width: 2.5rem;
  height: 2.5rem;
  background-color: ${theme.color.orange[600]};
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${theme.color.orange[700]};
  }

  &:active {
    transform: translateY(1px);
  }
`;

export const ChatInput = styled.input`
  flex: 1 1 auto;
  height: 2.5rem;
  border: 1px solid ${theme.color.zinc[200]};
  background-color: ${theme.color.zinc[50]};
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  box-sizing: border-box;
  ${theme.font.body2};
  outline: none;
  transition: all 0.2s ease-in-out;

  &::placeholder {
    color: ${theme.color.zinc[400]};
  }

  &:focus {
    border-color: ${theme.color.orange[600]};
    background-color: ${theme.color.white};
  }
`;

export const SpeechLabel = styled.div`
  ${theme.font.body2};
  color: ${theme.color.zinc[600]};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-weight: 500;
`;

export const UserSpeech = styled.div`
  border-radius: 1.25rem 1.25rem 0 1.25rem;
  ${theme.font.label2};
  max-width: 70%;
  background-color: ${theme.color.orange[600]};
  color: ${theme.color.white};
  padding: 1rem 1.25rem;
  box-shadow:
    0px 4px 6px 0 rgba(0, 0, 0, 0.05),
    0px 2px 4px 0 rgba(0, 0, 0, 0.05);
  margin-left: auto;
  word-wrap: break-word;
`;

export const AiSpeech = styled.div`
  ${theme.font.label2};
  border-radius: 1.25rem 1.25rem 1.25rem 0;
  max-width: 70%;
  background-color: ${theme.color.zinc[100]};
  color: ${theme.color.zinc[800]};
  padding: 1rem 1.25rem;
  box-shadow:
    0px 4px 6px 0 rgba(0, 0, 0, 0.05),
    0px 2px 4px 0 rgba(0, 0, 0, 0.05);
  word-wrap: break-word;
`;
