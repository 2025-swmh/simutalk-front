import { Button, Input, TextArea } from '../../components';
import { mainCategories, subCategories, techInterviewCategories } from '../../constants';
import { useMainCategory } from '../../hooks';
import { getPageTitle } from '../../utils';
import * as S from './style';

const Main = () => {
  const {
    selectedCategory,
    selectedInterviewType,
    showCustomForm,
    customRole,
    customTitle,
    customDescription,
    isGridLayout,
    showBackButton,
    handleMainCategoryClick,
    handleSubCategoryClick,
    handleTechInterviewClick,
    handlePracticeButtonClick,
    handleSubmit,
    handleBackButton,
    setCustomRole,
    setCustomTitle,
    setCustomDescription,
  } = useMainCategory();

  const renderCategories = () => {
    if (!selectedCategory) {
      return mainCategories.map((item) => (
        <Button
          key={item.id}
          variant="category"
          bgColor={item.bgColor}
          icon={item.icon}
          onClick={() => handleMainCategoryClick(item.id)}
        >
          {item.text}
        </Button>
      ));
    }

    if (selectedCategory === 'interview' && selectedInterviewType === 'tech') {
      return techInterviewCategories.map((item) => (
        <Button
          key={item.id}
          variant="category"
          bgColor={item.bgColor}
          icon={item.icon}
          onClick={() => handleTechInterviewClick(item.id)}
        >
          {item.text}
        </Button>
      ));
    }

    return subCategories[selectedCategory].map((item) => (
      <Button
        key={item.id}
        variant="category"
        bgColor={item.bgColor}
        icon={item.icon}
        onClick={() => handleSubCategoryClick(item.id)}
      >
        {item.text}
      </Button>
    ));
  };

  return (
    <S.MainContainer isGrid={isGridLayout} showCustomForm={showCustomForm}>
      {showBackButton && <S.BackButton onClick={handleBackButton}>← 뒤로가기</S.BackButton>}
      <S.Title>{getPageTitle(showCustomForm, selectedCategory, selectedInterviewType)}</S.Title>
      <S.MenuContainer>
        {showCustomForm ? (
          <S.FormContainer>
            <S.InputLabel>
              나의 역할
              <Input
                type="text"
                placeholder="예: 프론트엔드 개발자"
                value={customRole}
                onChange={(e) => setCustomRole(e.target.value)}
              />
            </S.InputLabel>

            <S.InputLabel>
              상황 제목
              <Input
                type="text"
                placeholder="제목을 입력해 주세요."
                value={customTitle}
                onChange={(e) => setCustomTitle(e.target.value)}
              />
            </S.InputLabel>

            <S.InputLabel>
              상황 설명
              <TextArea
                placeholder="상황을 설명해 주세요."
                value={customDescription}
                onChange={(e) => setCustomDescription(e.target.value)}
              />
            </S.InputLabel>

            <S.SubmitButton onClick={handleSubmit}>제출하기</S.SubmitButton>
          </S.FormContainer>
        ) : (
          <>
            {selectedCategory === 'collaboration' && (
              <S.InputLabel>
                나의 역할
                <Input
                  type="text"
                  placeholder="예: 프론트엔드 개발자"
                  value={customRole}
                  onChange={(e) => setCustomRole(e.target.value)}
                />
              </S.InputLabel>
            )}
            <S.CategoryContainer isGrid={isGridLayout}>{renderCategories()}</S.CategoryContainer>
            {/* {!selectedCategory && (
              <S.RestartButton onClick={() => navigate('/start')}>다시 시작하기</S.RestartButton>
            )} */}
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
