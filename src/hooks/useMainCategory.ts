import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import type {
  CollaborationSubCategory,
  InterviewSubCategory,
  MainCategory,
  TechInterviewSubCategory,
} from '../types';

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
      const sessionId = localStorage.getItem('sessionId');
      if (!sessionId) {
        console.error('Session ID not found in localStorage');
        toast.error('세션을 찾을 수 없습니다. 다시 시작해주세요.');
        navigate('/start');
        return;
      }

      // 먼저 template 설정 요청
      await axios.post(`${import.meta.env.VITE_AI_API_URL}/api/v1/session/template`, {
        session_id: sessionId,
        template: template,
      });

      console.log('Template set successfully:', template);

      // 그 다음 question start 요청
      const questionStartBody: { session_id: string; scenario?: string } = {
        session_id: sessionId,
      };

      // cooperation일 때만 scenario 추가
      if (template === 'cooperation' && scenario) {
        questionStartBody.scenario = scenario;
      }

      const response = await axios.post(
        `${import.meta.env.VITE_AI_API_URL}/api/v1/question/start`,
        questionStartBody,
      );

      console.log('Question start response:', response.data);
      navigate('/chat');
    } catch (error) {
      console.error('Question request failed:', error);
      if (axios.isAxiosError(error) && error.response?.status === 400) {
        toast.info('다시 시작해주세요.');
        navigate('/start');
      } else {
        toast.error('요청 중 오류가 발생했습니다. 다시 시도해주세요.');
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
      const userRole = customRole || '개발자';
      const collabScenarios: Record<CollaborationSubCategory, string> = {
        frontend: `사용자는 ${userRole} 역할입니다. 당신은 주니어 프론트엔드 개발자 역할입니다. 사용자와 간단한 API 연동 작업에 대해 협업하려고 합니다. 어떤 데이터가 필요한지, API 주소는 어떻게 되는지 등 기본적인 것들을 쉽게 물어봐주세요. 처음 API를 사용할 때 궁금한 점들을 자연스럽게 질문해주세요.`,
        backend: `사용자는 ${userRole} 역할입니다. 당신은 주니어 백엔드 개발자 역할입니다. 사용자와 간단한 API 개발에 대해 협업하려고 합니다. 어떤 기능이 필요한지, 데이터를 어떻게 저장할지 등 기본적인 내용을 쉽게 물어봐주세요. 복잡한 용어는 피하고 이해하기 쉬운 질문들로 대화를 진행해주세요.`,
        nondev: `사용자는 ${userRole} 역할입니다. 당신은 기획자 또는 디자이너 역할입니다. 사용자와 프로젝트 기능에 대해 협업하려고 합니다. 사용자가 어떤 기능을 만들고 싶은지, 언제까지 가능한지 등 기본적인 것들을 물어봐주세요. 어려운 기술 용어는 쓰지 말고 일상적인 대화처럼 편하게 이야기해주세요.`,
      };
      const scenario = collabScenarios[subCategoryId as CollaborationSubCategory];
      console.log('Selected category:', {
        main: selectedCategory,
        sub: subCategoryId,
        template: 'cooperation',
        scenario,
      });
      await sendQuestionRequest('cooperation', scenario);
    } else if (selectedCategory === 'interview' && subCategoryId === 'personality') {
      console.log('Selected category:', {
        main: selectedCategory,
        sub: subCategoryId,
        template: 'tenacity',
      });
      await sendQuestionRequest('tenacity');
    }
  };

  const handleTechInterviewClick = async (techCategoryId: TechInterviewSubCategory) => {
    const templateMap: Record<TechInterviewSubCategory, string> = {
      frontend: 'frontend',
      backend: 'backend',
      design: 'design',
      planning: 'planning',
    };

    const template = templateMap[techCategoryId];
    console.log('Selected tech interview category:', { category: techCategoryId, template });
    await sendQuestionRequest(template);
  };

  const handlePracticeButtonClick = () => {
    setShowCustomForm(true);
  };

  const handleSubmit = async () => {
    const scenario = `사용자는 ${customRole} 역할입니다. 상황 제목: ${customTitle}. 상황 설명: ${customDescription}. 당신은 주니어 개발자 수준으로 쉽고 편하게 대화해주세요. 어려운 용어는 피하고, 기본적인 내용 위주로 자연스럽게 질문하고 답변해주세요.`;
    console.log('Custom practice:', {
      role: customRole,
      title: customTitle,
      description: customDescription,
      template: 'cooperation',
    });

    await sendQuestionRequest('cooperation', scenario);

    setShowCustomForm(false);
    setCustomRole('');
    setCustomTitle('');
    setCustomDescription('');
  };

  const isGridLayout = selectedCategory === 'interview' && selectedInterviewType === 'tech';

  return {
    selectedCategory,
    selectedInterviewType,
    showCustomForm,
    customRole,
    customTitle,
    customDescription,
    isGridLayout,
    handleMainCategoryClick,
    handleSubCategoryClick,
    handleTechInterviewClick,
    handlePracticeButtonClick,
    handleSubmit,
    setCustomRole,
    setCustomTitle,
    setCustomDescription,
  };
};
