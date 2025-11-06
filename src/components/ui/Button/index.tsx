import type { ButtonHTMLAttributes } from 'react';
import { theme } from '../../../styles/theme';
import * as S from './style';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'category';
type ButtonSize = 'small' | 'medium' | 'large';
type ButtonColor = keyof typeof theme.color;
type ColorShade = keyof typeof theme.color.orange;

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  colorShade?: ColorShade;
  bgColor?: string;
  icon?: React.ReactNode;
}

const Button = ({
  children,
  variant = 'category',
  size = 'medium',
  color = 'orange',
  colorShade,
  bgColor,
  icon,
  ...rest
}: ButtonProps) => {
  return (
    <S.ButtonWrapper
      variant={variant}
      size={size}
      color={color}
      colorShade={colorShade}
      bgColor={bgColor}
      {...rest}
    >
      {icon}
      <span>{children}</span>
    </S.ButtonWrapper>
  );
};

export default Button;
