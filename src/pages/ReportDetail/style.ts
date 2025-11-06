import styled from '@emotion/styled';
import { theme } from '../../styles';

export const ReportDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: fit-content;
`;
export const ReportTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: left;
  width: 100%;
  > div {
    color: ${theme.color.zinc[600]};
    ${theme.font.heading3}
  }
  > span {
    color: ${theme.color.zinc[700]};
    ${theme.font.title4}
  }
`;
export const ReportContent = styled.div`
  margin-top: 2.5rem;
  width: 100%;
  color: ${theme.color.zinc[600]};
`;
