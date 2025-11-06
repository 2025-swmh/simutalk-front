import { useState } from 'react';
import type {
  CollaborationSubCategory,
  InterviewSubCategory,
  MainCategory,
  TechInterviewSubCategory,
} from '../types';

export const useMainCategory = () => {
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
    if (selectedCategory === 'interview' && subCategoryId === 'tech') {
      setSelectedInterviewType('tech');
      return;
    }
    console.log('Selected category:', { main: selectedCategory, sub: subCategoryId });
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

  const isGridLayout = selectedCategory === 'interview' && selectedInterviewType === 'tech';

  return {
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
  };
};
