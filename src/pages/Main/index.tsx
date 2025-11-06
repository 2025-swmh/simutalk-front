import { CategoryButton } from '../../components';
import { mainCategories, subCategories, techInterviewCategories } from '../../constants';
import { useMainCategory } from '../../hooks';
import { getPageTitle } from '../../utils';
import * as S from './style';

const Main = () => {
  const {
    selectedCategory,
    selectedInterviewType,
    showCustomForm,
    customTitle,
    customDescription,
    isGridLayout,
    handleMainCategoryClick,
    handleSubCategoryClick,
    handleTechInterviewClick,
    handlePracticeButtonClick,
    handleSubmit,
    setCustomTitle,
    setCustomDescription,
  } = useMainCategory();

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

  return (
    <S.MainContainer isGrid={isGridLayout} showCustomForm={showCustomForm}>
      <S.Title>{getPageTitle(showCustomForm, selectedCategory, selectedInterviewType)}</S.Title>
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
