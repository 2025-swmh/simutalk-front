import styled from '@emotion/styled';
import { theme } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5.625rem;
`;

export const Container = styled.div`
  display: flex;
  gap: 3.125rem;
  width: fit-content;
  flex-direction: column;
`;

export const Title = styled.div`
  ${theme.font.title1}
  color: ${theme.color.zinc[500]};
  text-align: left;
  width: 100%;
`;

export const ReportList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;
