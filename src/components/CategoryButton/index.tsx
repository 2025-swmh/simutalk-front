import * as S from './style';

interface CategoryButtonProps {
  isWide: boolean;
  bgColor: string;
  icon?: React.ReactNode;
  text: string;
  onClick?: () => void;
}

const CategoryButton = ({ isWide, bgColor, icon, text, onClick }: CategoryButtonProps) => {
  return (
    <S.CategoryButtonContainer isWide={isWide} bgColor={bgColor} onClick={onClick}>
      {icon}
      <S.CategoryButtonText>{text}</S.CategoryButtonText>
    </S.CategoryButtonContainer>
  );
};

export default CategoryButton;
