import { Report } from '../../../assets';
import { theme } from '../../../styles';
import { EmptyState, Flex } from '../../ui';

const EmptyReport = () => {
  return (
    <Flex
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="70rem"
      height="18.5rem"
    >
      <EmptyState
        icon={<Report size="50" color={theme.color.zinc[500]} />}
        message="아직 생성된 보고서가 없습니다"
      />
    </Flex>
  );
};
export default EmptyReport;
