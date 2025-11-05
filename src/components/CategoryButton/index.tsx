import * as S from './style';

interface CategoryButtonProps {
  bgColor: string;
  icon?: React.ReactNode;
  text: string;
  onClick?: () => void;
}

const CategoryButton = ({ bgColor, icon, text, onClick }: CategoryButtonProps) => {
  return (
    <S.CategoryButtonContainer bgColor={bgColor} onClick={onClick}>
      {icon}
      <S.CategoryButtonText>{text}</S.CategoryButtonText>
    </S.CategoryButtonContainer>
  );
};

export default CategoryButton;
