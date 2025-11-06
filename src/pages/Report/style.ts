import styled from '@emotion/styled';
import { theme } from '../../styles';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 0rem;
  min-height: calc(100vh - 7.0313rem - 5.625rem);
  background: linear-gradient(to bottom, ${theme.color.zinc[50]} 0%, ${theme.color.white} 100%);
  padding: 2rem;
  ${theme.animations.fadeIn}
  animation: fadeIn 0.6s ease-out;
`;

export const Container = styled.div`
  display: flex;
  gap: 3rem;
  width: fit-content;
  flex-direction: column;
  max-width: 1200px;
`;

export const Title = styled.div`
  ${theme.font.heading3}
  color: ${theme.color.zinc[800]};
  text-align: left;
  width: 100%;
  font-weight: 700;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 4px;
    background: linear-gradient(
      90deg,
      ${theme.color.orange[600]} 0%,
      ${theme.color.orange[400]} 100%
    );
    border-radius: 2px;
  }
`;

export const ReportList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;
