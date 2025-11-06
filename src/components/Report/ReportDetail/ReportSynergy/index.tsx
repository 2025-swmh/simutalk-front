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
      width="1012px"
      display="flex"
      gap="16px"
      padding="32px 0px 50px 20px"
      flexDirection="column"
    >
      <S.SynergyTitle>
        {icon}
        <span>{title}</span>
      </S.SynergyTitle>
      <S.SynergyContents>
        {description?.map((desc, idx) => (
          <S.SynergyContent key={idx}>
            <Description color={color} />
            {desc}
          </S.SynergyContent>
        ))}
      </S.SynergyContents>
    </Container>
  );
};

export default ReportSynergy;
