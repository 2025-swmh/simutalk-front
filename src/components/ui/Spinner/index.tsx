import { theme } from '../../../styles/theme';
import * as S from './style';

interface SpinnerProps {
  size?: 'small' | 'medium' | 'large';
  color?: keyof typeof theme.color;
}

const Spinner = ({ size = 'medium', color = 'blue' }: SpinnerProps) => {
  return <S.SpinnerWrapper size={size} color={color} />;
};

export default Spinner;
