import { useState } from 'react';
import { CategoryButton } from '../../components';
import { mainCategories, subCategories } from '../../constants';
import type { CollaborationSubCategory, InterviewSubCategory, MainCategory } from '../../types';
import * as S from './style';

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState<MainCategory | null>(null);

  const handleMainCategoryClick = (categoryId: MainCategory) => {
    setSelectedCategory(categoryId);
  };

  const handleSubCategoryClick = (
    subCategoryId: CollaborationSubCategory | InterviewSubCategory,
  ) => {
    console.log('Selected sub category:', subCategoryId);
  };

  return (
    <S.MainContainer>
      <S.Title>
        {!selectedCategory ? '어떤 카테고리를 선택하실 건가요?' : '세부 카테고리를 선택해주세요'}
      </S.Title>
      <S.MenuContainer>
        {!selectedCategory ? (
          mainCategories.map((item) => (
            <CategoryButton
              key={item.id}
              isWide={item.isWide}
              bgColor={item.bgColor}
              icon={item.icon}
              text={item.text}
              onClick={() => handleMainCategoryClick(item.id)}
            />
          ))
        ) : (
          <>
            {subCategories[selectedCategory].map((item) => (
              <CategoryButton
                key={item.id}
                isWide={item.isWide}
                bgColor={item.bgColor}
                icon={item.icon}
                text={item.text}
                onClick={() => handleSubCategoryClick(item.id)}
              />
            ))}
          </>
        )}
      </S.MenuContainer>
    </S.MainContainer>
  );
};

export default Main;
