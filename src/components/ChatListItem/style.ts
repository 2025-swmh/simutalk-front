import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export const ChatListItemContainer = styled.div`
  width: 100%;
  height: 5rem;
  padding: 1.125rem 1.25rem 1.125rem 1.5625rem;
  background-color: ${theme.color.orange[50]};
  border-bottom: 1px solid ${theme.color.zinc[300]};
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

export const ChatInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
`;

export const ChatName = styled.span`
  ${theme.font.title3};
  color: ${theme.color.black};
`;

export const ChatMessage = styled.span`
  ${theme.font.label2};
  color: ${theme.color.zinc[900]};
  display: block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
