import styled from '@emotion/styled';
import { theme } from '../../styles';

export const ChatContainer = styled.main`
  min-height: calc(100vh - 7.0313rem);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  box-sizing: border-box;
  background: linear-gradient(135deg, ${theme.color.zinc[50]} 0%, ${theme.color.blue[50]} 100%);
  ${theme.animations.fadeIn}
  animation: fadeIn 0.5s ease-out;
`;

export const ChatContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 56rem;
  height: calc(100vh - 7.0313rem - 6rem);
  background-color: ${theme.color.white};
  border-radius: 1.25rem;
  box-shadow: ${theme.shadows.xl};
  overflow: hidden;
  border: 1px solid ${theme.color.zinc[100]};
  ${theme.animations.scaleIn}
  animation: scaleIn 0.4s ease-out;
`;

export const ChatDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  flex: 1 1 auto;
  padding: 2rem;
  overflow-y: auto;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    background: ${theme.color.zinc[50]};
    border-radius: 0.25rem;
  }

  &::-webkit-scrollbar-thumb {
    background: ${theme.color.zinc[300]};
    border-radius: 0.25rem;
    transition: background ${theme.transitions.fast};

    &:hover {
      background: ${theme.color.orange[400]};
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
  width: 2.75rem;
  height: 2.75rem;
  background: linear-gradient(
    135deg,
    ${theme.color.orange[600]} 0%,
    ${theme.color.orange[500]} 100%
  );
  border: none;
  border-radius: 0.75rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  transition: all ${theme.transitions.normal};
  box-shadow: ${theme.shadows.subtle};

  &:hover:not(:disabled) {
    background: linear-gradient(
      135deg,
      ${theme.color.orange[700]} 0%,
      ${theme.color.orange[600]} 100%
    );
    box-shadow: ${theme.shadows.medium};
    transform: translateY(-2px);
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 3px solid ${theme.color.orange[300]};
    outline-offset: 2px;
  }

  &:disabled {
    background: ${theme.color.zinc[300]};
    cursor: not-allowed;
    opacity: 0.6;
    box-shadow: none;
  }
`;

export const ChatInput = styled.input`
  flex: 1 1 auto;
  height: 2.75rem;
  border: 2px solid ${theme.color.zinc[200]};
  background-color: ${theme.color.white};
  border-radius: 0.75rem;
  padding: 0.75rem 1.25rem;
  box-sizing: border-box;
  ${theme.font.body2};
  outline: none;
  transition: all ${theme.transitions.normal};

  &::placeholder {
    color: ${theme.color.zinc[400]};
  }

  &:focus:not(:disabled) {
    border-color: ${theme.color.orange[500]};
    box-shadow: 0 0 0 3px ${theme.color.orange[100]};
  }

  &:hover:not(:focus):not(:disabled) {
    border-color: ${theme.color.zinc[300]};
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    background-color: ${theme.color.zinc[50]};
  }
`;

export const SpeechLabel = styled.div`
  ${theme.font.label1};
  color: ${theme.color.zinc[500]};
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  font-weight: 600;
  ${theme.animations.slideUp}
  animation: slideUp 0.3s ease-out;
`;

export const UserSpeech = styled.div`
  border-radius: 1.25rem 1.25rem 0.25rem 1.25rem;
  ${theme.font.label2};
  max-width: 75%;
  background: linear-gradient(
    135deg,
    ${theme.color.orange[600]} 0%,
    ${theme.color.orange[500]} 100%
  );
  color: ${theme.color.white};
  padding: 1rem 1.5rem;
  box-shadow: ${theme.shadows.medium};
  margin-left: auto;
  word-wrap: break-word;
  line-height: 1.5;
  ${theme.animations.slideUp}
  animation: slideUp 0.3s ease-out;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: -6px;
    width: 0;
    height: 0;
    border-left: 8px solid ${theme.color.orange[500]};
    border-bottom: 8px solid transparent;
  }
`;

export const AiSpeech = styled.div`
  ${theme.font.label2};
  border-radius: 1.25rem 1.25rem 1.25rem 0.25rem;
  max-width: 75%;
  background-color: ${theme.color.zinc[100]};
  color: ${theme.color.zinc[800]};
  padding: 1rem 1.5rem;
  box-shadow: ${theme.shadows.subtle};
  word-wrap: break-word;
  line-height: 1.5;
  ${theme.animations.slideUp}
  animation: slideUp 0.3s ease-out;
  position: relative;
  border: 1px solid ${theme.color.zinc[200]};

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: -6px;
    width: 0;
    height: 0;
    border-right: 8px solid ${theme.color.zinc[100]};
    border-bottom: 8px solid transparent;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  width: 100%;
`;

export const InputRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

export const EndChatButton = styled.button`
  ${theme.font.body1};
  color: ${theme.color.zinc[700]};
  background: none;
  border: none;
  cursor: pointer;
  align-self: flex-end;
  padding: 0.5rem;
  transition: all ${theme.transitions.normal};
  position: relative;
  font-weight: 500;

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

  &:hover:not(:disabled) {
    color: ${theme.color.orange[600]};

    &::after {
      width: 100%;
    }
  }

  &:focus-visible {
    outline: 2px solid ${theme.color.orange[300]};
    outline-offset: 2px;
    border-radius: 4px;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.4;
    color: ${theme.color.zinc[400]};
  }
`;

export const ColorPointer = styled.span`
  color: ${theme.color.orange[600]};
  font-weight: 600;
`;

export const LoadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  ${theme.animations.fadeIn}
  animation: fadeIn 0.3s ease-out;
`;

export const LoadingContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  background-color: ${theme.color.white};
  padding: 3rem 4rem;
  border-radius: 1.5rem;
  box-shadow: ${theme.shadows.xl};
  ${theme.animations.scaleIn}
  animation: scaleIn 0.4s ease-out;
`;

export const LoadingText = styled.div`
  ${theme.font.title1};
  color: ${theme.color.zinc[800]};
  font-weight: 600;
  text-align: center;
`;

export const LoadingSubText = styled.div`
  ${theme.font.body2};
  color: ${theme.color.zinc[500]};
  text-align: center;
`;
