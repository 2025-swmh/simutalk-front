import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { ERROR_MESSAGES, INFO_MESSAGES } from '../constants';
import { sessionApi } from '../lib/api';
import type {
  CollaborationSubCategory,
  InterviewSubCategory,
  MainCategory,
  TechInterviewSubCategory,
} from '../types';
import { scenarioGenerator, sessionStorage, templateMapper } from '../utils';

export const useMainCategory = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<MainCategory | null>(null);
  const [selectedInterviewType, setSelectedInterviewType] = useState<InterviewSubCategory | null>(
    null,
  );
  const [showCustomForm, setShowCustomForm] = useState(false);
  const [customRole, setCustomRole] = useState('');
  const [customTitle, setCustomTitle] = useState('');
  const [customDescription, setCustomDescription] = useState('');

  const sendQuestionRequest = async (template: string, scenario?: string) => {
    try {
      const sessionId = sessionStorage.getSessionId();
      if (!sessionId) {
        console.error('Session ID not found');
        toast.error(ERROR_MESSAGES.SESSION_NOT_FOUND);
        navigate('/start');
        return;
      }

      // Set template
      await sessionApi.setTemplate(sessionId, template);
      console.log('Template set successfully:', template);

      // Navigate to chat with scenario (only if provided)
      navigate('/chat', {
        state: {
          sessionId,
          scenario: scenario || null,
        },
      });
    } catch (error) {
      console.error('Question request failed:', error);
      if (axios.isAxiosError(error) && error.response?.status === 400) {
        toast.info(INFO_MESSAGES.RESTART_REQUIRED);
        navigate('/start');
      } else {
        toast.error(ERROR_MESSAGES.REQUEST_FAILED);
      }
    }
  };

  const handleMainCategoryClick = (categoryId: MainCategory) => {
    setSelectedCategory(categoryId);
    setSelectedInterviewType(null);
  };

  const handleSubCategoryClick = async (
    subCategoryId: CollaborationSubCategory | InterviewSubCategory,
  ) => {
    if (selectedCategory === 'interview' && subCategoryId === 'tech') {
      setSelectedInterviewType('tech');
      return;
    }

    if (selectedCategory === 'collaboration') {
      const scenario = scenarioGenerator.collaboration(
        customRole,
        subCategoryId as CollaborationSubCategory,
      );
      const template = templateMapper.collaboration();

      console.log('Selected collaboration category:', {
        main: selectedCategory,
        sub: subCategoryId,
        template,
      });

      await sendQuestionRequest(template, scenario);
    } else if (selectedCategory === 'interview' && subCategoryId === 'personality') {
      const template = templateMapper.interview.personality();

      console.log('Selected personality interview:', {
        main: selectedCategory,
        sub: subCategoryId,
        template,
      });

      await sendQuestionRequest(template);
    }
  };

  const handleTechInterviewClick = async (techCategoryId: TechInterviewSubCategory) => {
    const template = templateMapper.interview.tech(techCategoryId);

    console.log('Selected tech interview category:', {
      category: techCategoryId,
      template,
    });

    await sendQuestionRequest(template);
  };

  const handlePracticeButtonClick = () => {
    setShowCustomForm(true);
  };

  const handleSubmit = async () => {
    const scenario = scenarioGenerator.custom(customRole, customTitle, customDescription);
    const template = templateMapper.collaboration();

    console.log('Custom practice:', {
      role: customRole,
      title: customTitle,
      description: customDescription,
      template,
    });

    await sendQuestionRequest(template, scenario);

    // Reset form
    setShowCustomForm(false);
    setCustomRole('');
    setCustomTitle('');
    setCustomDescription('');
  };

  const handleBackButton = () => {
    if (showCustomForm) {
      // 커스텀 폼에서 뒤로가기
      setShowCustomForm(false);
    } else if (selectedInterviewType === 'tech') {
      // 기술 면접 카테고리에서 뒤로가기
      setSelectedInterviewType(null);
    } else if (selectedCategory) {
      // 서브 카테고리에서 메인 카테고리로
      setSelectedCategory(null);
      setCustomRole(''); // 역할 입력 초기화
    }
  };

  const isGridLayout = selectedCategory === 'interview' && selectedInterviewType === 'tech';
  const showBackButton = selectedCategory !== null || showCustomForm;

  return {
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
  };
};
