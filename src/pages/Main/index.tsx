import { useState } from 'react';
import { CategoryButton } from '../../components';
import { mainCategories, subCategories, techInterviewCategories } from '../../constants';
import type {
  CollaborationSubCategory,
  InterviewSubCategory,
  MainCategory,
  TechInterviewSubCategory,
} from '../../types';
import * as S from './style';

const Main = () => {
  const [selectedCategory, setSelectedCategory] = useState<MainCategory | null>(null);
  const [selectedInterviewType, setSelectedInterviewType] = useState<InterviewSubCategory | null>(
    null,
  );
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [customTitle, setCustomTitle] = useState('');
  const [customDescription, setCustomDescription] = useState('');

  const handleMainCategoryClick = (categoryId: MainCategory) => {
    setSelectedCategory(categoryId);
    setSelectedInterviewType(null);
  };

  const handleSubCategoryClick = (
    subCategoryId: CollaborationSubCategory | InterviewSubCategory,
  ) => {
    if (selectedCategory === 'interview') {
      if (subCategoryId === 'tech') {
        setSelectedInterviewType('tech');
        return;
      }
      console.log('Selected interview category:', subCategoryId);
      return;
    }
    console.log('Selected collaboration category:', subCategoryId);
  };

  const handleTechInterviewClick = (techCategoryId: TechInterviewSubCategory) => {
    console.log('Selected tech interview category:', techCategoryId);
  };

  const handlePracticeButtonClick = () => {
    setShowCustomForm(true);
  };

  const handleSubmit = () => {
    console.log('Custom practice:', { title: customTitle, description: customDescription });
    setShowCustomForm(false);
    setCustomTitle('');
    setCustomDescription('');
  };

  const getTitleText = () => {
    if (showCustomForm) return '어떤 상황을 연습해 보고 싶으신가요?';
    if (!selectedCategory) return '어떤 카테고리를 선택하실 건가요?';
    if (selectedCategory === 'collaboration') return '어떤 협업 상황을 선택하실 건가요?';
    if (selectedInterviewType === 'tech') return '어떤 기술 면접 상황을 선택하실 건가요?';
    return '어떤 면접 상황을 선택하실 건가요?';
  };

  const renderCategories = () => {
    if (!selectedCategory) {
      return mainCategories.map((item) => (
        <CategoryButton
          key={item.id}
          bgColor={item.bgColor}
          icon={item.icon}
          text={item.text}
          onClick={() => handleMainCategoryClick(item.id)}
        />
      ));
    }

    if (selectedCategory === 'interview' && selectedInterviewType === 'tech') {
      return techInterviewCategories.map((item) => (
        <CategoryButton
          key={item.id}
          bgColor={item.bgColor}
          icon={item.icon}
          text={item.text}
          onClick={() => handleTechInterviewClick(item.id)}
        />
      ));
    }

    return subCategories[selectedCategory].map((item) => (
      <CategoryButton
        key={item.id}
        bgColor={item.bgColor}
        icon={item.icon}
        text={item.text}
        onClick={() => handleSubCategoryClick(item.id)}
      />
    ));
  };

  const isGridLayout = selectedCategory === 'interview' && selectedInterviewType === 'tech';

  return (
    <S.MainContainer isGrid={isGridLayout} showCustomForm={showCustomForm}>
      <S.Title>{getTitleText()}</S.Title>
      <S.MenuContainer>
        {showCustomForm ? (
          <S.FormContainer>
            <S.InputLabel>
              상황 제목
              <S.Input
                type="text"
                placeholder="제목을 입력해 주세요."
                value={customTitle}
                onChange={(e) => setCustomTitle(e.target.value)}
              />
            </S.InputLabel>

            <S.InputLabel>
              상황 설명
              <S.Textarea
                placeholder="상황을 설명해 주세요."
                value={customDescription}
                onChange={(e) => setCustomDescription(e.target.value)}
              />
            </S.InputLabel>

            <S.SubmitButton onClick={handleSubmit}>제출하기</S.SubmitButton>
          </S.FormContainer>
        ) : (
          <>
            <S.CategoryContainer isGrid={isGridLayout}>{renderCategories()}</S.CategoryContainer>
            {selectedCategory && (
              <S.PracticeButton onClick={handlePracticeButtonClick}>
                연습하시고 싶은 상황이 있으시다면? <S.ColorPointer>→</S.ColorPointer>
              </S.PracticeButton>
            )}
          </>
        )}
      </S.MenuContainer>
    </S.MainContainer>
  );
};

export default Main;
