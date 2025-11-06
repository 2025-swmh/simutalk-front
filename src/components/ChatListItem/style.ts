import styled from '@emotion/styled';
import { theme } from '../../styles/theme';

export const ChatListContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px 20px 16px 24px;
  background-color: ${theme.color.orange[50]};
  border-bottom: 1px solid ${theme.color.zinc[300]};
  cursor: pointer;
  height: 80px;
  box-sizing: border-box;
`;

export const ChatContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-width: 0;
  flex: 1;
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
