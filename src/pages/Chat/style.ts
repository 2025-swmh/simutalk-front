import styled from '@emotion/styled';
import { theme } from '../../styles';

export const ChatContainer = styled.main`
  min-height: calc(100vh - 7.0313rem);
  padding: 5rem 15.3125rem 8rem 4.375rem;
  display: flex;
  box-sizing: border-box;
`;

export const ChatListContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 1rem;
  overflow: hidden;
  width: 23.25rem;
  height: calc(100vh - 7.0313rem - 13rem);
  box-shadow:
    0px 10px 15px 0 rgba(0, 0, 0, 0.1),
    0px 4px 6px 0 rgba(0, 0, 0, 0.1);
  margin-right: 6.25rem;
  background-color: ${theme.color.white};
`;

export const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`;

export const ChatDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.875rem;
  flex: 1 1 auto;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
  background-color: ${theme.color.zinc[50]};
  border: 1px solid ${theme.color.zinc[200]};
  border-radius: 8px;
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;
`;

export const SendButton = styled.button`
  width: 2rem;
  height: 2rem;
  background-color: ${theme.color.orange[600]};
  border-radius: 0.625rem;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;

export const ChatInput = styled.input`
  flex: 1 1 auto;
  height: 3rem;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  box-sizing: border-box;
  ${theme.font.body2}
`;
