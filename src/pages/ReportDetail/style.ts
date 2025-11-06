import styled from '@emotion/styled';
import { theme } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5.625rem;
  margin-bottom: 7.9375rem;
`;

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
  gap: 0.625rem;
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
  display: flex;
  flex-direction: column;
  gap: 3.125rem;
`;
