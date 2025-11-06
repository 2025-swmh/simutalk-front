import type { ReactNode } from 'react';
import { Description } from '../../../../assets';
import { theme } from '../../../../styles/theme';
import Container from '../../../Container';
import * as S from './style';

interface Props {
  icon?: ReactNode;
  title?: string;
  description?: string[] | undefined;
}

const ReportSynergy = ({ icon, title, description }: Props) => {
  const getColorByTitle = (title?: string) => {
    switch (title) {
      case '잘한 점':
        return theme.color.green[600];
      case '부족한 점':
        return theme.color.red[600];
      case '개선 방법':
        return theme.color.yellow[600];
      case '이력서 어필 포인트':
        return theme.color.orange[600];
      default:
        return theme.color.black;
    }
  };

  const color = getColorByTitle(title);

  return (
    <Container
      width="63.25rem"
      display="flex"
      gap="1rem"
      padding="2rem 0rem 3.125rem 1.25rem"
      flexDirection="column"
    >
      <S.Wrapper>
        {icon}
        <S.SynergyContainer>
          <S.SynergyTitle>
            <span>{title}</span>
          </S.SynergyTitle>

          <S.SynergyContents>
            {description?.map((desc, idx) => (
              <S.SynergyContent key={idx}>
                <Description color={color} />
                <span>{desc}</span>
              </S.SynergyContent>
            ))}
          </S.SynergyContents>
        </S.SynergyContainer>
      </S.Wrapper>
    </Container>
  );
};

export default ReportSynergy;
