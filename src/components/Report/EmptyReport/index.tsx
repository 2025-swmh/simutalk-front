import { Report } from '../../../assets';
import { theme } from '../../../styles';
import Container from '../../Container';

const EmptyReport = () => {
  return (
    <Container
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      padding="0"
      gap="2.875rem"
      width="70rem"
      height="18.5rem"
    >
      <Report size="50" color={theme.color.zinc[500]} />
      <span>아직 생성된 보고서가 없습니다</span>
    </Container>
  );
};
export default EmptyReport;
